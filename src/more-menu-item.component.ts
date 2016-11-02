import { Component, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';

@Component({
  selector: 'supre-more-menu-item',
  template: require('./more-menu-item.component.html'),
  styles: [require('./more-menu-item.component.css')]
})
export class MoreMenuItemComponent {

  // Inputs / Outputs

  @Input('supreItem')
  public item: Item;


  // Properties

  protected clickSource = new Subject();
  click$ = this.clickSource.asObservable() as Observable<string>;


  // Event listeners

  @HostListener('click')
  public triggerOnClick(): void {
    this.clickSource.next(this.item);
  }

}
