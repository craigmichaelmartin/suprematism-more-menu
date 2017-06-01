import { AfterContentInit, Component, ContentChildren, EventEmitter,
         HostListener, Input, OnDestroy, OnInit, Output, QueryList
  } from '@angular/core';
import { MoreMenuItemComponent } from './more-menu-item.component';
import { Item } from './item';
import { AlignType } from './align.type';
import { MoreMenuOptionsInterface } from './more-menu-options.interface';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { merge } from 'rxjs/observable/merge';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { StateInterface } from './state.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

const argsToObj = function(align, vivid, visible, isIn) {
  return {align, vivid, visible, isIn};
};

@Component({
  selector: 'supre-more-menu',
  templateUrl: './more-menu.component.html',
  styleUrls: ['./more-menu.component.scss']
})
export class MoreMenuComponent implements OnDestroy, AfterContentInit, OnInit {

  // Static Member Variables
  static defaultVividValue = true;
  static defaultAlignValue: AlignType = 'right';
  static defaultVisibleValue = true;
  static defaultIsInValue = false;

  // Properties

  private _state: StateInterface = MoreMenuComponent.createNewState({});

  get state() {
    return this._state;
  }
  label: string;
  clickOpen: boolean;
  hoverOpen: boolean;
  fillHeight: boolean;
  isIn: boolean;
  disableHoverAfterClickTimeout: number;
  disableClickAfterHoverTimeout: number;
  isHovered = false;
  delayClose = 0;

  // Used for subscribe for the template
  private options$: Observable<MoreMenuOptionsInterface>;

  @ContentChildren(MoreMenuItemComponent)
  menuItems: QueryList<MoreMenuItemComponent>;

  private isInSubject: Subject<boolean> = new Subject();

  private isIn$: Observable<boolean> = this.isInSubject.startWith(false);

  private subscription: Subscription;
  private isInSubscription: Subscription;



  // Inputs / Outputs

  @Output()
  public itemSelected = new EventEmitter();

  @Input('supreState')
  set state(obj: any) {
    this._state = MoreMenuComponent.createNewState(obj);
  }


  // Public Static Methods

  static createNewState({
    align = this.defaultAlignValue, alignSubject = new Subject(), align$,
    vivid = this.defaultVividValue, vividSubject = new Subject(), vivid$,
    visible = this.defaultVisibleValue, visibleSubject = new Subject(), visible$,
    label,
    clickOpen = false,
    hoverOpen = true,
    disableHoverAfterClickTimeout = 1000,
    disableClickAfterHoverTimeout = 1000,
    fillHeight = false,
    delayClose = 0
  }: any): StateInterface {
    return {
      alignSubject, align$: align$ || alignSubject.startWith(align),
      vividSubject, vivid$: vivid$ || vividSubject.startWith(vivid),
      visibleSubject, visible$: visible$ || visibleSubject.startWith(visible),
      visibleOriginal: visible && !visible$, // hack: see note in itemUpdated fn
      vividOriginal: vivid && !vivid$, // hack: see note in itemUpdated fn
      label,
      clickOpen,
      hoverOpen,
      disableHoverAfterClickTimeout,
      disableClickAfterHoverTimeout,
      fillHeight,
      delayClose
    };
  }


  // Lifecyle Callbacks

  ngOnInit() {
    const { align$, vivid$, visible$, label, clickOpen, hoverOpen,
      disableHoverAfterClickTimeout, disableClickAfterHoverTimeout, fillHeight,
      delayClose } = this.state;
    this.label = label;
    this.clickOpen = clickOpen;
    this.hoverOpen = hoverOpen;
    this.disableHoverAfterClickTimeout = disableHoverAfterClickTimeout;
    this.disableClickAfterHoverTimeout = disableClickAfterHoverTimeout;
    this.fillHeight = fillHeight;
    this.delayClose = delayClose;
    this.options$ = combineLatest(align$, vivid$, visible$, this.isIn$, argsToObj);
  }

  ngAfterContentInit(): void {
    const getItemSelected$ = (item: MoreMenuItemComponent) => item.click$;
    const menuItemsArray = this.menuItems.map(getItemSelected$);
    const selectedMenuItem$ = merge(...menuItemsArray);
    this.subscription = selectedMenuItem$.subscribe(this.itemUpdated.bind(this));
    this.isInSubscription = this.isIn$.subscribe(isIn => this.isIn = isIn);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.isInSubscription.unsubscribe();
  }


  // Event listeners

  @HostListener('focusin')
  @HostListener('mouseenter')
  public showMenuOnHover(): void {
    this.isHovered = true;
    this.clickOpen = false;
    setTimeout(() => {
      this.clickOpen = true;
    }, this.disableClickAfterHoverTimeout);
    if (this.hoverOpen) {
      this.showMenu();
    }
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  public hideOnHover(): void {
    this.isHovered = false;
    if (this.hoverOpen) {
      this.hideMenu();
    }
  }

  @HostListener('click')
  public showMenuOnClick(): void {
    if (this.clickOpen) {
      if (this.isIn) {
        this.hoverOpen = false;
        this.hideMenu(true);
        setTimeout(() => {
          this.hoverOpen = true;
        }, this.disableHoverAfterClickTimeout);
      } else {
        this.showMenu();
      }
    }
  }


  // Public Methods

  showMenu(): void {
    this.isInSubject.next(true);
  }

  hideMenu(force = false): void {
    if (!this.isHovered || force) {
      if (this.clickOpen && this.isHovered) {
        this.isInSubject.next(false);
      } else {
        setTimeout(() => {
          if (!this.isHovered || force) {
            this.isInSubject.next(false);
          }
        }, this.delayClose);
      }
    }
  }


  // Protected Methods

  protected itemUpdated(item: Item): void {
    this.itemSelected.emit(item);
    this.hideMenu();
    // Ugh, hacks; stored original values to account for mouse out
    // event not firing when more menu is dynamically closed
    this.state.visibleSubject.next(this.state.visibleOriginal);
    this.state.vividSubject.next(this.state.vividOriginal);
  }

}
