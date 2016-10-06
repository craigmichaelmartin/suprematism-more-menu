import { Component, HostListener } from '@angular/core';

declare var require: any;

export class ItemSelectable {
  itemId: string;
  onItemSelected(item) {
    this.itemId = item.id;
  }
}

const baseMenuItems = `
  <supre-more-menu-item supreItemId="1">First menu item</supre-more-menu-item>
  <supre-more-menu-item supreItemId="2">Second menu item which just seems to keep going and going</supre-more-menu-item>
  <supre-more-menu-item supreItemId="3">Third</supre-more-menu-item>
`;
const baseSelected = `<span *ngIf="itemId != null">[Selected item was {{itemId}}]</span>`;

@Component({
  selector: 'supre-example-no-directives',
  template: `
    A component instance with no directives
    <supre-more-menu (itemSelected)="onItemSelected($event)" class="js-defaultMenu">
      ${baseMenuItems}
      <supre-more-menu-item supreItemId="4">Fourth</supre-more-menu-item>
      <supre-more-menu-item supreItemId="5">Fifth</supre-more-menu-item>
      <supre-more-menu-item supreItemId="6">Sixth</supre-more-menu-item>
      <supre-more-menu-item supreItemId="7">Seventh</supre-more-menu-item>
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleNoDirectives extends ItemSelectable {};

@Component({
  selector: 'supre-example-right-aligned',
  template: `
    A right aligned more menu icon
    <supre-more-menu (itemSelected)="onItemSelected($event)" supreAlign="right" class="js-rightMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleRightAligned extends ItemSelectable {};

@Component({
  selector: 'supre-example-middle-aligned',
  template: `
    A middle aligned more menu icon
    <supre-more-menu (itemSelected)="onItemSelected($event)" supreAlign="middle" class="js-middleMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleMiddleAligned extends ItemSelectable {};

@Component({
  selector: 'supre-example-left-aligned',
  template: `
    A left aligned more menu icon
    <supre-more-menu (itemSelected)="onItemSelected($event)" supreAlign="left" class="js-leftMenu">
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
        [supreVivid]="supreVivid"
        class="js-dynamicallyVividMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleDynamicallyVivid extends ItemSelectable {
  supreVivid;
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.supreVivid = true; }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.supreVivid = false; }
}

@Component({
  selector: 'supre-example-dynamically-vivid-middle-aligned',
  template: `
    A dynamic vivid (based on text hover), specifically middle aligned more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        supreAlign="middle"
        [supreVivid]="supreVivid"
        class="js-dynamicallyVividMiddleMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleDynamicallyVividMiddleAligned extends ItemSelectable {
  supreVivid;
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.supreVivid = true; }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.supreVivid = false; }
}

@Component({
  selector: 'supre-example-not-vivid-left-aligned',
  template: `
    A not vivid, specifically left aligned more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        supreAlign="left"
        [supreVivid]="false"
        class="js-notVividLeftMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleNotVividLeftAligned extends ItemSelectable {}

@Component({
  selector: 'supre-example-not-vivid',
  template: `
    A not vivid more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreVivid]="false"
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
    A vivid more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreVivid]="true"
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
    A visible more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreVisible]="true"
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
    A not visible more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        [supreVisible]="false"
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
        [supreVisible]="supreVisible"
        class="js-dynamicallyVisibleMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleDynamicallyVisible extends ItemSelectable {
  supreVisible;
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.supreVisible = true; }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.supreVisible = false; }
}

@Component({
  selector: 'supre-example-dynamically-visible-left-aligned',
  template: `
    A dynamic visible (based on text hover), specifically left aligned, not vivid, more menu icon
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        supreAlign="left"
        [supreVivid]="false"
        [supreVisible]="supreVisible"
        class="js-dynamicallyVisibleLeftMenu">
      ${baseMenuItems}
    </supre-more-menu>
    ${baseSelected}
  `
})
export class ExampleDynamicallyVisibleLeftAligned extends ItemSelectable {
  supreVisible;
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.supreVisible = true; }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.supreVisible = false; }
}

@Component({
  selector: 'supre-example-for-data-grid',
  template: `
    <span>An example row showing the states of the more menu.</span>
    <supre-more-menu
        (itemSelected)="onItemSelected($event)"
        supreAlign="right"
        [supreVivid]="false"
        [supreVisible]="supreVisible"
        class="js-dynamicallyVisibleLeftMenu">
      ${baseMenuItems}
    </supre-more-menu>
  `
})
export class ExampleForDataGridUseCase extends ItemSelectable {
  supreVisible;
  @HostListener('focusin') @HostListener('mouseenter') activateOnHover() { this.supreVisible = true; }
  @HostListener('focusout') @HostListener('mouseleave') deactivateOnHover() { this.supreVisible = false; }
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
