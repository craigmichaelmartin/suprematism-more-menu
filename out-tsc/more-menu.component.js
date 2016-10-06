"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var more_menu_item_component_1 = require('./more-menu-item.component');
var merge_1 = require('rxjs/Observable/merge');
var MoreMenuComponent = (function () {
    function MoreMenuComponent() {
        // Inputs / Outputs
        this.align = 'right';
        this.vivid = true;
        this.visible = true;
        this.itemSelected = new core_1.EventEmitter();
        this.isIn = false;
    }
    // Lifecyle Callbacks
    MoreMenuComponent.prototype.ngAfterContentInit = function () {
        var getItemSelected$ = function (item) { return item.click$; };
        var menuItemsArray = this.menuItems.map(getItemSelected$);
        var selectedMenuItem$ = merge_1.merge.apply(void 0, menuItemsArray);
        this.subscription = selectedMenuItem$.subscribe(this.itemUpdated.bind(this));
    };
    MoreMenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    // Event listeners
    MoreMenuComponent.prototype.showMenuOnHover = function () {
        this.showMenu();
    };
    MoreMenuComponent.prototype.hideOnHover = function () {
        this.hideMenu();
    };
    // Public Methods
    MoreMenuComponent.prototype.showMenu = function () {
        this.isIn = true;
    };
    MoreMenuComponent.prototype.hideMenu = function () {
        this.isIn = false;
    };
    // Protected Methods
    MoreMenuComponent.prototype.itemUpdated = function (item) {
        this.itemSelected.emit(item);
        this.hideMenu();
    };
    __decorate([
        core_1.Input('supreAlign'), 
        __metadata('design:type', String)
    ], MoreMenuComponent.prototype, "align", void 0);
    __decorate([
        core_1.Input('supreVivid'), 
        __metadata('design:type', Boolean)
    ], MoreMenuComponent.prototype, "vivid", void 0);
    __decorate([
        core_1.Input('supreVisible'), 
        __metadata('design:type', Boolean)
    ], MoreMenuComponent.prototype, "visible", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MoreMenuComponent.prototype, "itemSelected", void 0);
    __decorate([
        core_1.ContentChildren(more_menu_item_component_1.MoreMenuItemComponent), 
        __metadata('design:type', core_1.QueryList)
    ], MoreMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        core_1.HostListener('focusin'),
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MoreMenuComponent.prototype, "showMenuOnHover", null);
    __decorate([
        core_1.HostListener('focusout'),
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MoreMenuComponent.prototype, "hideOnHover", null);
    MoreMenuComponent = __decorate([
        core_1.Component({
            selector: 'supre-more-menu',
            template: require('./more-menu.component.html'),
            styles: [require('./more-menu.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], MoreMenuComponent);
    return MoreMenuComponent;
}());
exports.MoreMenuComponent = MoreMenuComponent;
//# sourceMappingURL=/Users/craigmartin/projects/suprematism-more-menu/src/more-menu.component.js.map