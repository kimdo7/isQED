/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { BsDropdownConfig } from './dropdown.config';
import { BsDropdownContainerComponent } from './dropdown-container.component';
import { BsDropdownState } from './dropdown.state';
import { isBs3 } from '../utils/ng2-bootstrap-config';
export class BsDropdownDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _cis
     * @param {?} _config
     * @param {?} _state
     */
    constructor(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
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
    /**
     * Indicates that dropdown will be closed on item or document click,
     * and after pressing ESC
     * @param {?} value
     * @return {?}
     */
    set autoClose(value) {
        if (typeof value === 'boolean') {
            this._state.autoClose = value;
        }
    }
    /**
     * @return {?}
     */
    get autoClose() {
        return this._state.autoClose;
    }
    /**
     * Disables dropdown toggle and hides dropdown menu if opened
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._isDisabled = value;
        this._state.isDisabledChange.emit(value);
        if (value) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    get isDisabled() { return this._isDisabled; }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        if (this._showInline) {
            return this._isInlineOpen;
        }
        return this._dropdown.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
            () => this.show())
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => this.toggle(value))));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe((/**
         * @param {?} element
         * @return {?}
         */
        (element) => {
            if (element === true) {
                this.hide();
            }
        })));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then((/**
             * @param {?} dropdownMenu
             * @return {?}
             */
            (dropdownMenu) => {
                this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            }));
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        // const parent = this._elementRef.nativeElement.classList;
        /** @type {?} */
        const container = this._elementRef.nativeElement.lastElementChild;
        setTimeout((/**
         * @return {?}
         */
        () => { container.classList.add('fadeInDropdown'); }), 200);
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
        (dropdownMenu) => {
            // check direction in which dropdown should be opened
            /** @type {?} */
            const _dropup = this.dropup === true ||
                (typeof this.dropup !== 'undefined' && this.dropup !== false);
            this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            const _placement = this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            this._state.isOpenChange.emit(true);
        }));
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (!this.isOpen) {
            return;
        }
        /** @type {?} */
        const parent = this._elementRef.nativeElement.classList;
        /** @type {?} */
        const container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this._showInline) {
                    this._isInlineOpen = false;
                    this.onHidden.emit(true);
                    this.hidden.emit(true);
                }
                else {
                    this._dropdown.hide();
                }
                this._state.isOpenChange.emit(false);
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
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    toggle(value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions and destroy dropdown
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    }
}
BsDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState]
            },] }
];
/** @nocollapse */
BsDropdownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: ComponentLoaderFactory },
    { type: BsDropdownConfig },
    { type: BsDropdownState }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvZHJvcGRvd24vZHJvcGRvd24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFBbUIsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQzlHLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBT3RELE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7OztJQW9HOUIsWUFBb0IsV0FBdUIsRUFDakMsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLElBQTRCLEVBQzVCLE9BQXlCLEVBQ3pCLE1BQXVCO1FBTGIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLFNBQUksR0FBSixJQUFJLENBQXdCO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQWlCOztRQWRqQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQU10QixtQkFBYyxHQUFtQixFQUFFLENBQUM7UUFDcEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVFoQixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FB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Ozs7SUFFTiwwQ0FBK0I7Ozs7O0lBQ3pDLHdDQUE0Qjs7Ozs7SUFDNUIsZ0RBQTJDOzs7OztJQUMzQyxtQ0FBb0M7Ozs7O0lBQ3BDLHNDQUFpQzs7Ozs7SUFDakMscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFbWJlZGRlZFZpZXdSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29uZmlnIH0gZnJvbSAnLi9kcm9wZG93bi5jb25maWcnO1xuaW1wb3J0IHsgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2Ryb3Bkb3duLnN0YXRlJztcbmltcG9ydCB7IEJzQ29tcG9uZW50UmVmIH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9icy1jb21wb25lbnQtcmVmLmNsYXNzJztcbmltcG9ydCB7IEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJy4uL3V0aWxzL25nMi1ib290c3RyYXAtY29uZmlnJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkRyb3Bkb3duXSxbZHJvcGRvd25dJyxcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bicsXG4gIHByb3ZpZGVyczogW0JzRHJvcGRvd25TdGF0ZV1cbn0pXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgcG9wb3Zlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSB0cmlnZ2Vyczogc3RyaW5nO1xuICAvKipcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcblxuICAvKipcbiAgICogVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgdGhlIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWQgdXB3YXJkc1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kcm9wdXAnKVxuICBASW5wdXQoKSBkcm9wdXA6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IGRyb3Bkb3duIHdpbGwgYmUgY2xvc2VkIG9uIGl0ZW0gb3IgZG9jdW1lbnQgY2xpY2ssXG4gICAqIGFuZCBhZnRlciBwcmVzc2luZyBFU0NcbiAgICovXG4gIEBJbnB1dCgpIHNldCBhdXRvQ2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhdXRvQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmF1dG9DbG9zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBkcm9wZG93biB0b2dnbGUgYW5kIGhpZGVzIGRyb3Bkb3duIG1lbnUgaWYgb3BlbmVkXG4gICAqL1xuICBASW5wdXQoKSBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc0Rpc2FibGVkOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm9wZW4nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxuICBASW5wdXQoKSBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNJbmxpbmVPcGVuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd24uaXNTaG93bjtcbiAgfVxuXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBpc09wZW4gY2hhbmdlXG4gICAqL1xuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBzaG93blxuICAgKi9cbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgc2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwb3BvdmVyIGlzIGhpZGRlblxuICAgKi9cbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIGhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuICAvLyB0b2RvOiBtb3ZlIHRvIGNvbXBvbmVudCBsb2FkZXJcbiAgX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xuICBfc2hvd0lubGluZTogYm9vbGVhbjtcbiAgX2lubGluZWRNZW51OiBFbWJlZGRlZFZpZXdSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+O1xuXG4gIF9pc0Rpc2FibGVkOiBib29sZWFuO1xuICBfZHJvcGRvd246IENvbXBvbmVudExvYWRlcjxCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIF9pc0luaXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX2NpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRHJvcGRvd25Db25maWcsXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSkge1xuICAgIC8vIGNyZWF0ZSBkcm9wZG93biBjb21wb25lbnQgbG9hZGVyXG4gICAgdGhpcy5fZHJvcGRvd24gPSB0aGlzLl9jaXNcbiAgICAgIC5jcmVhdGVMb2FkZXI8QnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudD4odGhpcy5fZWxlbWVudFJlZiwgdGhpcy5fdmlld0NvbnRhaW5lclJlZiwgdGhpcy5fcmVuZGVyZXIpXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IEJzRHJvcGRvd25TdGF0ZSwgdXNlVmFsdWU6IHRoaXMuX3N0YXRlIH0pO1xuXG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fZHJvcGRvd24ub25TaG93bjtcbiAgICB0aGlzLnNob3duID0gdGhpcy5fZHJvcGRvd24uc2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX2Ryb3Bkb3duLm9uSGlkZGVuO1xuICAgIHRoaXMuaGlkZGVuID0gdGhpcy5fZHJvcGRvd24uaGlkZGVuO1xuICAgIHRoaXMuaXNPcGVuQ2hhbmdlID0gdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgZHJvcGRvd24gc3RhdGUgZnJvbSBjb25maWdcbiAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgPSB0aGlzLl9jb25maWcuYXV0b0Nsb3NlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gZml4OiBzZWVtcyB0aGVyZSBhcmUgYW4gaXNzdWUgd2l0aCBgcm91dGVyTGlua0FjdGl2ZWBcbiAgICAvLyB3aGljaCByZXN1bHQgaW4gZHVwbGljYXRlZCBjYWxsIG5nT25Jbml0IHdpdGhvdXQgY2FsbCB0byBuZ09uRGVzdHJveVxuICAgIC8vIHJlYWQgbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbG9yLXNvZnR3YXJlL25neC1ib290c3RyYXAvaXNzdWVzLzE4ODVcbiAgICBpZiAodGhpcy5faXNJbml0ZWQpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5faXNJbml0ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2hvd0lubGluZSA9ICF0aGlzLmNvbnRhaW5lcjtcblxuICAgIC8vIGF0dGFjaCBET00gbGlzdGVuZXJzXG4gICAgdGhpcy5fZHJvcGRvd24ubGlzdGVuKHtcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcblxuICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IG9uIHRvZ2dsZSBlbGVtZW50IGNsaWNrXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuX3N0YXRlXG4gICAgICAudG9nZ2xlQ2xpY2suc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4gdGhpcy50b2dnbGUodmFsdWUpKSk7XG5cbiAgICAvLyBoaWRlIGRyb3Bkb3duIGlmIHNldCBkaXNhYmxlZCB3aGlsZSBvcGVuZWRcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2godGhpcy5fc3RhdGVcbiAgICAgIC5pc0Rpc2FibGVkQ2hhbmdlXG4gICAgICAuc3Vic2NyaWJlKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgKSk7XG5cbiAgICAvLyBhdHRhY2ggZHJvcGRvd24gbWVudSBpbnNpZGUgb2YgZHJvcGRvd25cbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xuICAgICAgdGhpcy5fc3RhdGUuZHJvcGRvd25NZW51XG4gICAgICAgIC50aGVuKChkcm9wZG93bk1lbnU6IEJzQ29tcG9uZW50UmVmPEJzRHJvcGRvd25NZW51RGlyZWN0aXZlPikgPT4ge1xuICAgICAgICAgIHRoaXMuX2lubGluZWRNZW51ID0gZHJvcGRvd25NZW51LnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KGRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIG1hdGVyaWFsIGFuZCBkcm9wdXAgZHJvcGRvd24gYW5pbWF0aW9uXG4gICAgLy8gY29uc3QgcGFyZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZUluRHJvcGRvd24nKTsgfSwgMjAwKTtcblxuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5vblNob3duLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLnNob3duLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGUuZHJvcGRvd25NZW51XG4gICAgICAudGhlbigoZHJvcGRvd25NZW51KSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGRpcmVjdGlvbiBpbiB3aGljaCBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkXG4gICAgICAgIGNvbnN0IF9kcm9wdXAgPSB0aGlzLmRyb3B1cCA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICh0eXBlb2YgdGhpcy5kcm9wdXAgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZHJvcHVwICE9PSBmYWxzZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlLmRpcmVjdGlvbiA9IF9kcm9wdXAgPyAndXAnIDogJ2Rvd24nO1xuICAgICAgICBjb25zdCBfcGxhY2VtZW50ID0gdGhpcy5wbGFjZW1lbnQgfHxcbiAgICAgICAgICAoX2Ryb3B1cCA/ICd0b3AgbGVmdCcgOiAnYm90dG9tIGxlZnQnKTtcblxuICAgICAgICAvLyBzaG93IGRyb3Bkb3duXG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duXG4gICAgICAgICAgLmF0dGFjaChCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgICAucG9zaXRpb24oeyBhdHRhY2htZW50OiBfcGxhY2VtZW50IH0pXG4gICAgICAgICAgLnNob3coe1xuICAgICAgICAgICAgY29udGVudDogZHJvcGRvd25NZW51LnRlbXBsYXRlUmVmLFxuICAgICAgICAgICAgcGxhY2VtZW50OiBfcGxhY2VtZW50XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG5cbiAgICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdDtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcblxuXG4gICAgaWYgKChwYXJlbnQudmFsdWUgPT09ICdkcm9wZG93biBvcGVuIHNob3cnKSB8fCAocGFyZW50LnZhbHVlID09PSAnYnRuLWdyb3VwIGRyb3B1cCBvcGVuIHNob3cnKSkge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJbkRyb3Bkb3duJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XG4gICAgICAgICAgdGhpcy5faXNJbmxpbmVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRydWUpO1xuICAgICAgICAgIHRoaXMuaGlkZGVuLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuXG4gICAgICB9LCA1NjApO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcbiAgICAgICAgdGhpcy5faXNJbmxpbmVPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0cnVlKTtcbiAgICAgICAgdGhpcy5oaWRkZW4uZW1pdCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuXG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHRvZ2dsZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgZGVzdHJveSBkcm9wZG93blxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLl9kcm9wZG93bi5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==