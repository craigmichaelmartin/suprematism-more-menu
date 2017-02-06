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
var Subject_1 = require('rxjs/Subject');
var item_1 = require('./item');
var MoreMenuItemComponent = (function () {
    function MoreMenuItemComponent() {
        // Properties
        this.clickSource = new Subject_1.Subject();
        this.click$ = this.clickSource.asObservable();
    }
    // Event listeners
    MoreMenuItemComponent.prototype.triggerOnClick = function () {
        this.clickSource.next(this.item);
    };
    __decorate([
        core_1.Input('supreItem'), 
        __metadata('design:type', item_1.Item)
    ], MoreMenuItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MoreMenuItemComponent.prototype, "triggerOnClick", null);
    MoreMenuItemComponent = __decorate([
        core_1.Component({
            selector: 'supre-more-menu-item',
            template: require('./more-menu-item.component.html'),
            styles: [require('./more-menu-item.component.css')]
        }), 
        __metadata('design:paramtypes', [])
    ], MoreMenuItemComponent);
    return MoreMenuItemComponent;
}());
exports.MoreMenuItemComponent = MoreMenuItemComponent;
//# sourceMappingURL=/Users/falosakers/Documents/Projects/suprematism-more-menu/src/more-menu-item.component.js.map