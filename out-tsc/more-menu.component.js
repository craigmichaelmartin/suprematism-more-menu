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
var Subject_1 = require('rxjs/Subject');
var merge_1 = require('rxjs/Observable/merge');
var combineLatest_1 = require('rxjs/Observable/combineLatest');
require('rxjs/add/operator/map');
require('rxjs/add/operator/startWith');
var argsToObj = function (align, vivid, visible, isIn) {
    return { align: align, vivid: vivid, visible: visible, isIn: isIn };
};
var MoreMenuComponent = (function () {
    function MoreMenuComponent() {
        // Properties
        this._state = MoreMenuComponent.createNewState({});
        // Used for subscribe for the template
        this.options = this.provideDefaultOptions({});
        this.isInSubject = new Subject_1.Subject();
        this.isIn$ = this.isInSubject.startWith(false);
        // Inputs / Outputs
        this.itemSelected = new core_1.EventEmitter();
    }
    Object.defineProperty(MoreMenuComponent.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (obj) {
            this._state = MoreMenuComponent.createNewState(obj);
        },
        enumerable: true,
        configurable: true
    });
    // Public Static Methods
    MoreMenuComponent.createNewState = function (_a) {
        var _b = _a.align, align = _b === void 0 ? this.defaultAlignValue : _b, _c = _a.alignSubject, alignSubject = _c === void 0 ? new Subject_1.Subject() : _c, align$ = _a.align$, _d = _a.vivid, vivid = _d === void 0 ? this.defaultVividValue : _d, _e = _a.vividSubject, vividSubject = _e === void 0 ? new Subject_1.Subject() : _e, vivid$ = _a.vivid$, _f = _a.visible, visible = _f === void 0 ? this.defaultVisibleValue : _f, _g = _a.visibleSubject, visibleSubject = _g === void 0 ? new Subject_1.Subject() : _g, visible$ = _a.visible$;
        return {
            alignSubject: alignSubject, align$: align$ || alignSubject.startWith(align),
            vividSubject: vividSubject, vivid$: vivid$ || vividSubject.startWith(vivid),
            visibleSubject: visibleSubject, visible$: visible$ || visibleSubject.startWith(visible),
            visibleOriginal: visible && !visible$,
            vividOriginal: vivid && !vivid$ // hack: see note in itemUpdated fn
        };
    };
    // Lifecyle Callbacks
    MoreMenuComponent.prototype.ngOnInit = function () {
        var _a = this.state, align$ = _a.align$, vivid$ = _a.vivid$, visible$ = _a.visible$;
        var combine$ = combineLatest_1.combineLatest(align$, vivid$, visible$, this.isIn$, argsToObj);
        this.optionsSubscription = combine$
            .map(this.provideDefaultOptions.bind(this))
            .subscribe(this.updateOptions.bind(this));
    };
    MoreMenuComponent.prototype.ngAfterContentInit = function () {
        var getItemSelected$ = function (item) { return item.click$; };
        var menuItemsArray = this.menuItems.map(getItemSelected$);
        var selectedMenuItem$ = merge_1.merge.apply(void 0, menuItemsArray);
        this.subscription = selectedMenuItem$.subscribe(this.itemUpdated.bind(this));
    };
    MoreMenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.optionsSubscription.unsubscribe();
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
        this.isInSubject.next(true);
    };
    MoreMenuComponent.prototype.hideMenu = function () {
        this.isInSubject.next(false);
    };
    // Protected Methods
    MoreMenuComponent.prototype.itemUpdated = function (item) {
        this.itemSelected.emit(item);
        this.hideMenu();
        // Ugh, hacks; stored original values to account for mouse out
        // event not firing when more menu is dynamically closed
        this.state.visibleSubject.next(this.state.visibleOriginal);
        this.state.vividSubject.next(this.state.vividOriginal);
    };
    MoreMenuComponent.prototype.provideDefaultOptions = function (options) {
        return {
            isIn: options.isIn != null ?
                options.isIn : MoreMenuComponent.defaultIsInValue,
            align: options.align != null ?
                options.align : MoreMenuComponent.defaultAlignValue,
            vivid: options.vivid != null ?
                options.vivid : MoreMenuComponent.defaultVividValue,
            visible: options.visible != null ?
                options.visible : MoreMenuComponent.defaultVisibleValue
        };
    };
    MoreMenuComponent.prototype.updateOptions = function (options) {
        this.options = options;
    };
    // Static Member Variables
    MoreMenuComponent.defaultVividValue = true;
    MoreMenuComponent.defaultAlignValue = 'right';
    MoreMenuComponent.defaultVisibleValue = true;
    MoreMenuComponent.defaultIsInValue = false;
    __decorate([
        core_1.Input('supreState'), 
        __metadata('design:type', Object)
    ], MoreMenuComponent.prototype, "state", null);
    __decorate([
        core_1.ContentChildren(more_menu_item_component_1.MoreMenuItemComponent), 
        __metadata('design:type', core_1.QueryList)
    ], MoreMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MoreMenuComponent.prototype, "itemSelected", void 0);
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