import { Component, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'supre-more-menu-item',
  template: require('./more-menu-item.component.html'),
  styles: [require('./more-menu-item.component.scss')] // when developing use .scss
})
export class MoreMenuItemComponent {

  // Inputs / Outputs

  @Input('supreItemId')
  public id: string;


  // Properties

  protected clickSource = new Subject();
  click$ = this.clickSource.asObservable() as Observable<string>;


  // Event listeners

  @HostListener('click')
  public triggerOnClick(): void {
    this.clickSource.next({id: this.id});
  }

}
