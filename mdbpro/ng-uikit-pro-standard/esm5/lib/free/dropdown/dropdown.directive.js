/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { BsDropdownConfig } from './dropdown.config';
import { BsDropdownContainerComponent } from './dropdown-container.component';
import { BsDropdownState } from './dropdown.state';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.shown = this._dropdown.shown;
        this.onHidden = this._dropdown.onHidden;
        this.hidden = this._dropdown.hidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); })
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.toggle(value); })));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element === true) {
                _this.hide();
            }
        })));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then((/**
             * @param {?} dropdownMenu
             * @return {?}
             */
            function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            }));
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        // const parent = this._elementRef.nativeElement.classList;
        /** @type {?} */
        var container = this._elementRef.nativeElement.lastElementChild;
        setTimeout((/**
         * @return {?}
         */
        function () { container.classList.add('fadeInDropdown'); }), 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this.shown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then((/**
         * @param {?} dropdownMenu
         * @return {?}
         */
        function (dropdownMenu) {
            // check direction in which dropdown should be opened
            /** @type {?} */
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        }));
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        /** @type {?} */
        var parent = this._elementRef.nativeElement.classList;
        /** @type {?} */
        var container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                    _this.hidden.emit(true);
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }), 560);
        }
        else {
            if (this._showInline) {
                this._isInlineOpen = false;
                this.onHidden.emit(true);
                this.hidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            // clean up subscriptions and destroy dropdown
            for (var _b = tslib_1.__values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [BsDropdownState]
                },] }
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory },
        { type: BsDropdownConfig },
        { type: BsDropdownState }
    ]; };
    BsDropdownDirective.propDecorators = {
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        dropup: [{ type: HostBinding, args: ['class.dropup',] }, { type: Input }],
        autoClose: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isOpen: [{ type: HostBinding, args: ['class.open',] }, { type: HostBinding, args: ['class.show',] }, { type: Input }],
        isOpenChange: [{ type: Output }],
        onShown: [{ type: Output }],
        shown: [{ type: Output }],
        onHidden: [{ type: Output }],
        hidden: [{ type: Output }]
    };
    return BsDropdownDirective;
}());
export { BsDropdownDirective };
if (false) {
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    BsDropdownDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    BsDropdownDirective.prototype.triggers;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    BsDropdownDirective.prototype.container;
    /**
     * This attribute indicates that the dropdown should be opened upwards
     * @type {?}
     */
    BsDropdownDirective.prototype.dropup;
    /**
     * Emits an event when isOpen change
     * @type {?}
     */
    BsDropdownDirective.prototype.isOpenChange;
    /**
     * Emits an event when the popover is shown
     * @type {?}
     */
    BsDropdownDirective.prototype.onShown;
    /** @type {?} */
    BsDropdownDirective.prototype.shown;
    /**
     * Emits an event when the popover is hidden
     * @type {?}
     */
    BsDropdownDirective.prototype.onHidden;
    /** @type {?} */
    BsDropdownDirective.prototype.hidden;
    /** @type {?} */
    BsDropdownDirective.prototype._isInlineOpen;
    /** @type {?} */
    BsDropdownDirective.prototype._showInline;
    /** @type {?} */
    BsDropdownDirective.prototype._inlinedMenu;
    /** @type {?} */
    BsDropdownDirective.prototype._isDisabled;
    /** @type {?} */
    BsDropdownDirective.prototype._dropdown;
    /** @type {?} */
    BsDropdownDirective.prototype._subscriptions;
    /** @type {?} */
    BsDropdownDirective.prototype._isInited;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._cis;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDropdownDirective.prototype._state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvZHJvcGRvd24vZHJvcGRvd24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxVQUFVLEVBQW1CLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUM5RyxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV0RDtJQXlHRSw2QkFBb0IsV0FBdUIsRUFDakMsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLElBQTRCLEVBQzVCLE9BQXlCLEVBQ3pCLE1BQXVCO1FBTGIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLFNBQUksR0FBSixJQUFJLENBQXdCO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWlCOztRQWRqQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQU10QixtQkFBYyxHQUFtQixFQUFFLENBQUM7UUFDcEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVFoQixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTthQUN2QixZ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QUszQix1Q0FBMEI7Ozs7OztJQUsxQix3Q0FBMkI7Ozs7O0lBSzNCLHFDQUN5Qjs7Ozs7SUFvRHpCLDJDQUEwQzs7Ozs7SUFLMUMsc0NBQXFDOztJQUNyQyxvQ0FBbUM7Ozs7O0lBS25DLHVDQUFzQzs7SUFDdEMscUNBQW9DOztJQU1wQyw0Q0FBc0I7O0lBQ3RCLDBDQUFxQjs7SUFDckIsMkNBQXVEOztJQUV2RCwwQ0FBcUI7O0lBQ3JCLHdDQUF5RDs7SUFDekQsNkNBQW9DOztJQUNwQyx3Q0FBa0I7Ozs7O0lBRU4sMENBQStCOzs7OztJQUN6Qyx3Q0FBNEI7Ozs7O0lBQzVCLGdEQUEyQzs7Ozs7SUFDM0MsbUNBQW9DOzs7OztJQUNwQyxzQ0FBaUM7Ozs7O0lBQ2pDLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnknO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vZHJvcGRvd24uY29uZmlnJztcbmltcG9ydCB7IEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9kcm9wZG93bi5zdGF0ZSc7XG5pbXBvcnQgeyBCc0NvbXBvbmVudFJlZiB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvYnMtY29tcG9uZW50LXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICcuLi91dGlscy9uZzItYm9vdHN0cmFwLWNvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJEcm9wZG93bl0sW2Ryb3Bkb3duXScsXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24nLFxuICBwcm92aWRlcnM6IFtCc0Ryb3Bkb3duU3RhdGVdXG59KVxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIHBvcG92ZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkIHVwd2FyZHNcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZHJvcHVwJylcbiAgQElucHV0KCkgZHJvcHVwOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCBkcm9wZG93biB3aWxsIGJlIGNsb3NlZCBvbiBpdGVtIG9yIGRvY3VtZW50IGNsaWNrLFxuICAgKiBhbmQgYWZ0ZXIgcHJlc3NpbmcgRVNDXG4gICAqL1xuICBASW5wdXQoKSBzZXQgYXV0b0Nsb3NlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgYXV0b0Nsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2U7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgZHJvcGRvd24gdG9nZ2xlIGFuZCBoaWRlcyBkcm9wZG93biBtZW51IGlmIG9wZW5lZFxuICAgKi9cbiAgQElucHV0KCkgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0Rpc2FibGVkID0gdmFsdWU7XG4gICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5vcGVuJylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93JylcbiAgQElucHV0KCkgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzSW5saW5lT3BlbjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duLmlzU2hvd247XG4gIH1cblxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gaXNPcGVuIGNoYW5nZVxuICAgKi9cbiAgQE91dHB1dCgpIGlzT3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgc2hvd25cbiAgICovXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIHNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBoaWRkZW5cbiAgICovXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBoaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzQnMzKCk7XG4gIH1cbiAgLy8gdG9kbzogbW92ZSB0byBjb21wb25lbnQgbG9hZGVyXG4gIF9pc0lubGluZU9wZW4gPSBmYWxzZTtcbiAgX3Nob3dJbmxpbmU6IGJvb2xlYW47XG4gIF9pbmxpbmVkTWVudTogRW1iZWRkZWRWaWV3UmVmPEJzRHJvcGRvd25NZW51RGlyZWN0aXZlPjtcblxuICBfaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgX2Ryb3Bkb3duOiBDb21wb25lbnRMb2FkZXI8QnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudD47XG4gIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBfaXNJbml0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF9jaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0Ryb3Bkb3duQ29uZmlnLFxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUpIHtcbiAgICAvLyBjcmVhdGUgZHJvcGRvd24gY29tcG9uZW50IGxvYWRlclxuICAgIHRoaXMuX2Ryb3Bkb3duID0gdGhpcy5fY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+KHRoaXMuX2VsZW1lbnRSZWYsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYsIHRoaXMuX3JlbmRlcmVyKVxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBCc0Ryb3Bkb3duU3RhdGUsIHVzZVZhbHVlOiB0aGlzLl9zdGF0ZSB9KTtcblxuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2Ryb3Bkb3duLm9uU2hvd247XG4gICAgdGhpcy5zaG93biA9IHRoaXMuX2Ryb3Bkb3duLnNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kcm9wZG93bi5vbkhpZGRlbjtcbiAgICB0aGlzLmhpZGRlbiA9IHRoaXMuX2Ryb3Bkb3duLmhpZGRlbjtcbiAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZTtcblxuICAgIC8vIHNldCBpbml0aWFsIGRyb3Bkb3duIHN0YXRlIGZyb20gY29uZmlnXG4gICAgdGhpcy5fc3RhdGUuYXV0b0Nsb3NlID0gdGhpcy5fY29uZmlnLmF1dG9DbG9zZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGZpeDogc2VlbXMgdGhlcmUgYXJlIGFuIGlzc3VlIHdpdGggYHJvdXRlckxpbmtBY3RpdmVgXG4gICAgLy8gd2hpY2ggcmVzdWx0IGluIGR1cGxpY2F0ZWQgY2FsbCBuZ09uSW5pdCB3aXRob3V0IGNhbGwgdG8gbmdPbkRlc3Ryb3lcbiAgICAvLyByZWFkIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS92YWxvci1zb2Z0d2FyZS9uZ3gtYm9vdHN0cmFwL2lzc3Vlcy8xODg1XG4gICAgaWYgKHRoaXMuX2lzSW5pdGVkKSB7IHJldHVybjsgfVxuICAgIHRoaXMuX2lzSW5pdGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuX3Nob3dJbmxpbmUgPSAhdGhpcy5jb250YWluZXI7XG5cbiAgICAvLyBhdHRhY2ggRE9NIGxpc3RlbmVyc1xuICAgIHRoaXMuX2Ryb3Bkb3duLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGUgdmlzaWJpbGl0eSBvbiB0b2dnbGUgZWxlbWVudCBjbGlja1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaCh0aGlzLl9zdGF0ZVxuICAgICAgLnRvZ2dsZUNsaWNrLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHRoaXMudG9nZ2xlKHZhbHVlKSkpO1xuXG4gICAgLy8gaGlkZSBkcm9wZG93biBpZiBzZXQgZGlzYWJsZWQgd2hpbGUgb3BlbmVkXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuX3N0YXRlXG4gICAgICAuaXNEaXNhYmxlZENoYW5nZVxuICAgICAgLnN1YnNjcmliZSgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICkpO1xuXG4gICAgLy8gYXR0YWNoIGRyb3Bkb3duIG1lbnUgaW5zaWRlIG9mIGRyb3Bkb3duXG4gICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmRyb3Bkb3duTWVudVxuICAgICAgICAudGhlbigoZHJvcGRvd25NZW51OiBCc0NvbXBvbmVudFJlZjxCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZT4pID0+IHtcbiAgICAgICAgICB0aGlzLl9pbmxpbmVkTWVudSA9IGRyb3Bkb3duTWVudS52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhkcm9wZG93bk1lbnUudGVtcGxhdGVSZWYpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBtYXRlcmlhbCBhbmQgZHJvcHVwIGRyb3Bkb3duIGFuaW1hdGlvblxuICAgIC8vIGNvbnN0IHBhcmVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkRyb3Bkb3duJyk7IH0sIDIwMCk7XG5cbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgdGhpcy5faXNJbmxpbmVPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMub25TaG93bi5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5zaG93bi5lbWl0KHRydWUpO1xuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlLmRyb3Bkb3duTWVudVxuICAgICAgLnRoZW4oKGRyb3Bkb3duTWVudSkgPT4ge1xuICAgICAgICAvLyBjaGVjayBkaXJlY3Rpb24gaW4gd2hpY2ggZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZFxuICAgICAgICBjb25zdCBfZHJvcHVwID0gdGhpcy5kcm9wdXAgPT09IHRydWUgfHxcbiAgICAgICAgICAodHlwZW9mIHRoaXMuZHJvcHVwICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmRyb3B1cCAhPT0gZmFsc2UpO1xuICAgICAgICB0aGlzLl9zdGF0ZS5kaXJlY3Rpb24gPSBfZHJvcHVwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgICAgY29uc3QgX3BsYWNlbWVudCA9IHRoaXMucGxhY2VtZW50IHx8XG4gICAgICAgICAgKF9kcm9wdXAgPyAndG9wIGxlZnQnIDogJ2JvdHRvbSBsZWZ0Jyk7XG5cbiAgICAgICAgLy8gc2hvdyBkcm9wZG93blxuICAgICAgICB0aGlzLl9kcm9wZG93blxuICAgICAgICAgIC5hdHRhY2goQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudClcbiAgICAgICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAgICAgLnBvc2l0aW9uKHsgYXR0YWNobWVudDogX3BsYWNlbWVudCB9KVxuICAgICAgICAgIC5zaG93KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZixcbiAgICAgICAgICAgIHBsYWNlbWVudDogX3BsYWNlbWVudFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuXG4gICAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cblxuICAgIGlmICgocGFyZW50LnZhbHVlID09PSAnZHJvcGRvd24gb3BlbiBzaG93JykgfHwgKHBhcmVudC52YWx1ZSA9PT0gJ2J0bi1ncm91cCBkcm9wdXAgb3BlbiBzaG93JykpIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW5Ecm9wZG93bicpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgICAgIHRoaXMuX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0cnVlKTtcbiAgICAgICAgICB0aGlzLmhpZGRlbi5lbWl0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2Ryb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcblxuICAgICAgfSwgNTYwKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICAgIHRoaXMuX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uSGlkZGVuLmVtaXQodHJ1ZSk7XG4gICAgICAgIHRoaXMuaGlkZGVuLmVtaXQodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcblxuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICB0b2dnbGUodmFsdWU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNob3coKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIGRlc3Ryb3kgZHJvcGRvd25cbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fZHJvcGRvd24uZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=