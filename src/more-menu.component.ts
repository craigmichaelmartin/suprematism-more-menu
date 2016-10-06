import { AfterContentInit, Component, ContentChildren, EventEmitter,
         HostListener, Input, OnDestroy, Output, QueryList } from '@angular/core';
import { MoreMenuItemComponent } from './more-menu-item.component';
import { AlignType } from './align.type';
import { Item } from './item';
import { Subscription }   from 'rxjs/Subscription';
import { merge } from 'rxjs/Observable/merge';

@Component({
  selector: 'supre-more-menu',
  template: require('./more-menu.component.html'),
  styles: [require('./more-menu.component.css')]
})
export class MoreMenuComponent implements OnDestroy, AfterContentInit {

  // Inputs / Outputs

  @Input('supreAlign')
  public align: AlignType = 'right';

  @Input('supreVivid')
  public vivid: boolean = true;

  @Input('supreVisible')
  public visible: boolean = true;

  @Output()
  public itemSelected = new EventEmitter();


  // Properties

  @ContentChildren(MoreMenuItemComponent)
  menuItems: QueryList<MoreMenuItemComponent>;

  private isIn: boolean = false;
  private subscription: Subscription;


  // Lifecyle Callbacks

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
    this.isIn = true;
  }

  hideMenu(): void {
    this.isIn = false;
  }


  // Protected Methods

  protected itemUpdated(item: Item): void {
    this.itemSelected.emit(item);
    this.hideMenu();
  }

}
