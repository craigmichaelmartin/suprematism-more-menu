import { CommonModule } from '@angular/common';
import { MoreMenuComponent } from './more-menu.component';
import { MoreMenuItemComponent } from './more-menu-item.component';
import { NgModule } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export * from './more-menu.component';
export * from './more-menu-item.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MoreMenuComponent,
        MoreMenuItemComponent
    ],
    exports: [
        MoreMenuComponent,
        MoreMenuItemComponent
    ],
    entryComponents: [
        MoreMenuComponent,
        MoreMenuItemComponent
    ]
})
export class MoreMenuModule {

}
