import { Component, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';

@Component({
  selector: 'supre-more-menu-item',
  templateUrl: './more-menu-item.component.html',
  styleUrls: ['./more-menu-item.component.scss']
})
export class MoreMenuItemComponent {

  // Inputs / Outputs

  // tslint:disable-next-line:no-input-rename
  @Input('supreItem') public item: Item;


  // Properties

  protected clickSource = new Subject();
  click$ = this.clickSource.asObservable() as Observable<string>;


  // Event listeners

  @HostListener('click')
  public triggerOnClick(): void {
    this.clickSource.next(this.item);
  }

}
