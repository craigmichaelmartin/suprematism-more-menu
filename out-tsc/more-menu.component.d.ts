import { AfterContentInit, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { MoreMenuItemComponent } from './more-menu-item.component';
import { AlignType } from './align.type';
import { Item } from './item';
export declare class MoreMenuComponent implements OnDestroy, AfterContentInit {
    align: AlignType;
    vivid: boolean;
    visible: boolean;
    itemSelected: EventEmitter<{}>;
    menuItems: QueryList<MoreMenuItemComponent>;
    private isIn;
    private subscription;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    showMenuOnHover(): void;
    hideOnHover(): void;
    showMenu(): void;
    hideMenu(): void;
    protected itemUpdated(item: Item): void;
}
