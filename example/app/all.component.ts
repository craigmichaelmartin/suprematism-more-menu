import { Component, HostListener } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MoreMenuOptionsInterface } from '../../src/more-menu-options.interface';
import { Observable } from 'rxjs/Observable';

declare var require: any;

export class ItemSelectable {
  item;
  onItemSelected(item) {
    this.item = item;
  }
}

const baseMenuItems = `
  <supre-more-menu-item [supreItem]="{id: '1'}">First menu item</supre-more-menu-item>
  <supre-more-menu-item [supreItem]="{id: '2'}">Second menu item which just seems to keep going and going</supre-more-menu-item>
  <supre-more-menu-item [supreItem]="{id: '3'}">Third</supre-more-menu-item>
`;
const baseSelected = `<span *ngIf="item != null">[Selected item was {{item.id}}]</span>`;

@Component({
  selector: 'supre-example-no-options',
  template: `
    A component instance with no options
    <supre-more-menu (itemSelected)="onItemSelected($event)" class="js-defaultMenu">
      ${baseMenuItems}
      <supre-more-menu-item [supreItem]="{id: '4'}">Fourth</supre-more-menu-item>
      <supre-more-menu-item [supreItem]="{id: '5'}">Fifth</supre-more-menu-item>
      <supre-more-menu-item [supreItem]="{id: '6'}">Sixth</supre-more-menu-item>
      <supre-more-menu-item [supreItem]="{id: '7'}">Seventh</supre-more-menu-item>
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleNoOptions extends ItemSelectable {};

@Component({
  selector: 'supre-example-right-aligned',
  template: `
    A statically right aligned more menu icon
    <supre-more-menu (itemSelected)="onItemSelected($event)" [supreState]="{align: 'right'}" class="js-rightMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleRightAligned extends ItemSelectable {};

@Component({
  selector: 'supre-example-middle-aligned',
  template: `
    A statically middle aligned more menu icon
    <supre-more-menu (itemSelected)="onItemSelected($event)" [supreState]="{align: 'middle'}" class="js-middleMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleMiddleAligned extends ItemSelectable {};

@Component({
  selector: 'supre-example-left-aligned',
  template: `
    A statically left aligned more menu icon
    <supre-more-menu (itemSelected)="onItemSelected($event)" [supreState]="{align: 'left'}" class="js-leftMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleLeftAligned extends ItemSelectable {};

@Component({
  selector: 'supre-example-dynamically-vivid',
  template: `
    A dynamic vivid (based on text hover), more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{vivid: false, vividSubject: vividSubject}"
        class="js-dynamicallyVividMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleDynamicallyVivid extends ItemSelectable {
  vividSubject = new Subject();
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.vividSubject.next(true); }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.vividSubject.next(false); }
}

@Component({
  selector: 'supre-example-dynamically-vivid-middle-aligned',
  template: `
    A dynamic vivid (based on text hover), specifically middle aligned more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{align: 'middle', vivid: false, vividSubject: vividSubject}"
        class="js-dynamicallyVividMiddleMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleDynamicallyVividMiddleAligned extends ItemSelectable {
  vividSubject = new Subject();
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.vividSubject.next(true); }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.vividSubject.next(false); }
}

@Component({
  selector: 'supre-example-not-vivid-left-aligned',
  template: `
    A statically not vivid, left aligned more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{align: 'left', vivid: false}"
        class="js-notVividLeftMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleNotVividLeftAligned extends ItemSelectable {}

@Component({
  selector: 'supre-example-click-open',
  template: `
    Click open = true
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{clickOpen: true}"
        class="js-clickOpen">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleClickOpen extends ItemSelectable {}

@Component({
  selector: 'supre-example-click-open-fill-height',
  template: `
    Click open = true and fillHeight = true
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{clickOpen: true, fillHeight: true}"
        class="js-clickOpenFillHeight">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleClickOpenFillHeight extends ItemSelectable {}

@Component({
  selector: 'supre-example-not-vivid',
  template: `
    A statically not vivid more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{vivid: false}"
        class="js-notVividMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleNotVivid extends ItemSelectable {}

@Component({
  selector: 'supre-example-vivid',
  template: `
    A statically vivid more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{vivid: true}"
        class="js-vividMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleVivid extends ItemSelectable {}

@Component({
  selector: 'supre-example-visible',
  template: `
    A statically visible more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{visible: true}"
        class="js-visibleMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleVisible extends ItemSelectable {}

@Component({
  selector: 'supre-example-not-visible',
  template: `
    A statically not visible more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{visible: false}"
        class="js-notVisibleMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleNotVisible extends ItemSelectable {}

@Component({
  selector: 'supre-example-dynamically-visible',
  template: `
    A dynamically (based on text hover) visible, more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{visible: false, visibleSubject: visibleSubject}"
        class="js-dynamicallyVisibleMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleDynamicallyVisible extends ItemSelectable {
  visibleSubject = new Subject();
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.visibleSubject.next(true); }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.visibleSubject.next(false); }
}

@Component({
  selector: 'supre-example-dynamically-visible-left-aligned',
  template: `
    A dynamic visible (based on text hover), specifically left aligned, not vivid, more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{align: 'left', vivid: false, visible: false, visibleSubject: visibleSubject}"
        class="js-dynamicallyVisibleLeftMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleDynamicallyVisibleLeftAligned extends ItemSelectable {
  visibleSubject = new Subject();
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.visibleSubject.next(true); }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.visibleSubject.next(false); }
}

@Component({
  selector: 'supre-example-for-data-grid',
  template: `
    <span>An example row showing the states of the more menu.</span>
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreState]="{align: 'right', vivid: false, visible: false, visibleSubject: visibleSubject}"
        class="js-dynamicallyVisibleLeftMenu">
      ${baseMenuItems}
    </supre-more-menu>
  `
})
export class ExampleForDataGridUseCase extends ItemSelectable {
  visibleSubject = new Subject();
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.visibleSubject.next(true); }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.visibleSubject.next(false); }
}

@Component({
  template: `
    <h2>More Menu Example for Data Grid Use Case</h2>
    <supre-example-for-data-grid></supre-example-for-data-grid>
    <br><br><br>
    <hr>
    <a routerLink="/all">See all combinations for configuration options</a>
  `
})
export class PertinentExampleComponent {}

@Component({
  template: require('./all.component.html')
})
export class AllExamplesComponent {}
