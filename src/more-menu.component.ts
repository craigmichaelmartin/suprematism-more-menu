import { AfterContentInit, Component, ContentChildren, EventEmitter,
         HostListener, Input, OnDestroy, OnInit, Output, QueryList
  } from '@angular/core';
import { MoreMenuItemComponent } from './more-menu-item.component';
import { Item } from './item';
import { AlignType } from './align.type';
import { MoreMenuOptionsInterface } from './more-menu-options.interface';
import { Subscription }   from 'rxjs/Subscription';
import { Subject }   from 'rxjs/Subject';
import { merge } from 'rxjs/Observable/merge';
import { Observable }   from 'rxjs/Observable';
import { combineLatest } from 'rxjs/Observable/combineLatest';
import { StateInterface } from './state.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

const argsToObj = function(align, vivid, visible, isIn) {
  return {align, vivid, visible, isIn};
};

@Component({
  selector: 'supre-more-menu',
  template: require('./more-menu.component.html'),
  styles: [require('./more-menu.component.css')]
})
export class MoreMenuComponent implements OnDestroy, AfterContentInit, OnInit {

  // Static Member Variables
  static defaultVividValue: boolean = true;
  static defaultAlignValue: AlignType = 'right';
  static defaultVisibleValue: boolean = true;
  static defaultIsInValue: boolean = false;

  // Properties

  private _state: StateInterface = MoreMenuComponent.createNewState({});

  get state() {
    return this._state;
  }

  // Used for subscribe for the template
  private options$: Observable<MoreMenuOptionsInterface>;

  @ContentChildren(MoreMenuItemComponent)
  menuItems: QueryList<MoreMenuItemComponent>;

  private isInSubject: Subject<boolean> = new Subject();

  private isIn$: Observable<boolean> = this.isInSubject.startWith(false);

  private subscription: Subscription;


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
    visible = this.defaultVisibleValue, visibleSubject = new Subject(), visible$
  }: any): StateInterface {
    return {
      alignSubject, align$: align$ || alignSubject.startWith(align),
      vividSubject, vivid$: vivid$ || vividSubject.startWith(vivid),
      visibleSubject, visible$: visible$ || visibleSubject.startWith(visible),
      visibleOriginal: visible && !visible$, // hack: see note in itemUpdated fn
      vividOriginal: vivid && !vivid$ // hack: see note in itemUpdated fn
    };
  }


  // Lifecyle Callbacks

  ngOnInit() {
    const { align$, vivid$, visible$ } = this.state;
    this.options$ = combineLatest(align$, vivid$, visible$, this.isIn$, argsToObj);
  }

  ngAfterContentInit(): void {
    const getItemSelected$ = (item: MoreMenuItemComponent) => item.click$;
    const menuItemsArray = this.menuItems.map(getItemSelected$);
    const selectedMenuItem$ = merge(...menuItemsArray);
    this.subscription = selectedMenuItem$.subscribe(this.itemUpdated.bind(this));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  // Event listeners

  @HostListener('focusin')
  @HostListener('mouseenter')
  public showMenuOnHover(): void {
    this.showMenu();
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  public hideOnHover(): void {
    this.hideMenu();
  }


  // Public Methods

  showMenu(): void {
    this.isInSubject.next(true);
  }

  hideMenu(): void {
    this.isInSubject.next(false);
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

  protected provideDefaultOptions(options): MoreMenuOptionsInterface {
    return {
      isIn: options.isIn != null ?
        options.isIn : MoreMenuComponent.defaultIsInValue,
      align: options.align != null ?
        options.align : MoreMenuComponent.defaultAlignValue,
      vivid: options.vivid != null ?
        options.vivid : MoreMenuComponent.defaultVividValue,
      visible: options.visible != null ?
        options.visible : MoreMenuComponent.defaultVisibleValue
    };
  }

}