/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip.component';
import { TooltipConfig } from './tooltip.service';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { OnChange } from '../utils/decorators';
import { isPlatformBrowser } from '@angular/common';
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config, platformId) {
        this._elementRef = _elementRef;
        this.platformId = platformId;
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new EventEmitter();
        this.delay = 0;
        this.fadeDuration = 150;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser((this.platformId));
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.shown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
        this.hidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        function () {
            return this._tooltip.isShown;
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
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onblur = /**
     * @return {?}
     */
    function () {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); })
        });
        this.tooltipChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes['mdbTooltip'].isFirstChange()) {
            this.tooltipChange.emit(this.mdbTooltip);
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.changePositionIfNotFit = /**
     * @return {?}
     */
    function () {
        if (this.placement === 'top' && this._elementRef.nativeElement.offsetTop < (parseInt(this.customHeight, 10) + 16)) {
            this.placement = 'bottom';
        }
        if (this.placement === 'bottom' && ((/** @type {?} */ (this.getBottomOffset()))) < (parseInt(this.customHeight, 10) + 32)) {
            this.placement = 'top';
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.getBottomOffset = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var bottom = this._elementRef.nativeElement.getBoundingClientRect().bottom;
            return windowHeight - bottom;
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @param {?=} event
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        if (!this.customHeight) {
            /** @type {?} */
            var elPosition = event ? event.target.getBoundingClientRect() : this._elementRef.nativeElement.getBoundingClientRect();
            if (this.placement === 'top' && elPosition.top < 40) {
                this.placement = 'bottom';
            }
            if (this.placement === 'bottom' && (/** @type {?} */ (this.getBottomOffset())) < 60) {
                this.placement = 'top';
            }
        }
        else if (this.customHeight) {
            this.changePositionIfNotFit();
        }
        /** @type {?} */
        var showTooltip = (/**
         * @return {?}
         */
        function () { return _this._tooltip
            .attach(TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); });
        if (this.delay) {
            this._delayTimeoutId = setTimeout((/**
             * @return {?}
             */
            function () {
                showTooltip();
            }), this.delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._tooltip.hide();
        }), this.fadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTooltip]',
                    exportAs: 'mdb-tooltip'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ComponentLoaderFactory },
        { type: TooltipConfig },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    TooltipDirective.propDecorators = {
        mdbTooltip: [{ type: Input }],
        tooltipChange: [{ type: Output }],
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        isOpen: [{ type: Input }],
        isDisabled: [{ type: Input }],
        onShown: [{ type: Output }],
        shown: [{ type: Output }],
        onHidden: [{ type: Output }],
        hidden: [{ type: Output }],
        delay: [{ type: Input }],
        customHeight: [{ type: Input }],
        fadeDuration: [{ type: Input }],
        onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onblur: [{ type: HostListener, args: ['window:click',] }]
    };
    tslib_1.__decorate([
        OnChange(),
        tslib_1.__metadata("design:type", Object)
    ], TooltipDirective.prototype, "mdbTooltip", void 0);
    return TooltipDirective;
}());
export { TooltipDirective };
if (false) {
    /**
     * Content to be displayed as tooltip.
     * @type {?}
     */
    TooltipDirective.prototype.mdbTooltip;
    /**
     * Fired when tooltip content changes
     * @type {?}
     */
    TooltipDirective.prototype.tooltipChange;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    TooltipDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    TooltipDirective.prototype.triggers;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    TooltipDirective.prototype.container;
    /**
     * Allows to disable tooltip
     * @type {?}
     */
    TooltipDirective.prototype.isDisabled;
    /**
     * Emits an event when the tooltip is shown
     * @type {?}
     */
    TooltipDirective.prototype.onShown;
    /** @type {?} */
    TooltipDirective.prototype.shown;
    /**
     * Emits an event when the tooltip is hidden
     * @type {?}
     */
    TooltipDirective.prototype.onHidden;
    /** @type {?} */
    TooltipDirective.prototype.hidden;
    /** @type {?} */
    TooltipDirective.prototype.delay;
    /** @type {?} */
    TooltipDirective.prototype.customHeight;
    /** @type {?} */
    TooltipDirective.prototype.fadeDuration;
    /**
     * @type {?}
     * @protected
     */
    TooltipDirective.prototype._delayTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype.isBrowser;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._tooltip;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUFFLFlBQVksRUFDMUIsTUFBTSxFQUNOLEtBQUssRUFJTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFHVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBRTFGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRDtJQW9FRSwwQkFDRSxpQkFBbUMsRUFDbkMsU0FBb0IsRUFDWixXQUF1QixFQUMvQixHQUEyQixFQUMzQixNQUFxQixFQUNRLFVBQWtCO1FBSHZDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBR0YsZUFBVSxHQUFWLFVBQVUsQ0FBUTs7OztRQS9EaEMsa0JBQWEsR0FBNEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWlEN0UsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUVWLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBR25DLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFXckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRzthQUNoQixZQUFZLENBQTRCLElB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QzFCLHdDQUFxQzs7SUFDckMsd0NBQW1DOzs7OztJQUVuQywyQ0FBK0I7O0lBQy9CLHFDQUF1Qjs7Ozs7SUFDdkIsb0NBQTZEOzs7OztJQUszRCx1Q0FBK0I7Ozs7O0lBRy9CLHNDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rvb2x0aXBDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb29sdGlwQ29uZmlnfSBmcm9tICcuL3Rvb2x0aXAuc2VydmljZSc7XG5pbXBvcnQge0NvbXBvbmVudExvYWRlckZhY3Rvcnl9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5mYWN0b3J5JztcbmltcG9ydCB7Q29tcG9uZW50TG9hZGVyfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHtPbkNoYW5nZX0gZnJvbSAnLi4vdXRpbHMvZGVjb3JhdG9ycyc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVG9vbHRpcF0nLFxuICBleHBvcnRBczogJ21kYi10b29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyB0b29sdGlwLlxuICAgKi9cbiAgQE9uQ2hhbmdlKClcbiAgQElucHV0KCkgcHVibGljIG1kYlRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiBGaXJlZCB3aGVuIHRvb2x0aXAgY29udGVudCBjaGFuZ2VzICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgdG9vbHRpcENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSB0b29sdGlwLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdG9vbHRpcCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0b29sdGlwIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXAuaXNTaG93bjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBkaXNhYmxlIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIHNob3duXG4gICAqL1xuICBAT3V0cHV0KCkgcHVibGljIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgcHVibGljIHNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuXG4gICAqL1xuICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIHB1YmxpYyBoaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21IZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGZhZGVEdXJhdGlvbiA9IDE1MDtcblxuICBwcm90ZWN0ZWQgX2RlbGF5VGltZW91dElkOiBhbnk7XG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIHByaXZhdGUgX3Rvb2x0aXA6IENvbXBvbmVudExvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgY29uZmlnOiBUb29sdGlwQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG5cbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKCh0aGlzLnBsYXRmb3JtSWQpKTtcbiAgICB0aGlzLl90b29sdGlwID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+KHRoaXMuX2VsZW1lbnRSZWYsIF92aWV3Q29udGFpbmVyUmVmLCBfcmVuZGVyZXIpXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogVG9vbHRpcENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZ30pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcbiAgICB0aGlzLnNob3duID0gdGhpcy5fdG9vbHRpcC5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl90b29sdGlwLm9uSGlkZGVuO1xuICAgIHRoaXMuaGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25jbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlcnMudG9TdHJpbmcoKS5pbmNsdWRlcygnZm9jdXMnKSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snKSBvbmJsdXIoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlcnMudG9TdHJpbmcoKS5pbmNsdWRlcygnZm9jdXMnKSAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAubGlzdGVuKHtcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcbiAgICB0aGlzLnRvb2x0aXBDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlc1snbWRiVG9vbHRpcCddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy50b29sdGlwQ2hhbmdlLmVtaXQodGhpcy5tZGJUb29sdGlwKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VQb3NpdGlvbklmTm90Rml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCA8IChwYXJzZUludCh0aGlzLmN1c3RvbUhlaWdodCwgMTApICsgMTYpKSB7XG4gICAgICB0aGlzLnBsYWNlbWVudCA9ICdib3R0b20nO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgKHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55KSA8IChwYXJzZUludCh0aGlzLmN1c3RvbUhlaWdodCwgMTApICsgMzIpKSB7XG4gICAgICB0aGlzLnBsYWNlbWVudCA9ICd0b3AnO1xuICAgIH1cbiAgfVxuXG4gIGdldEJvdHRvbU9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICByZXR1cm4gd2luZG93SGVpZ2h0IC0gYm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHB1YmxpYyBzaG93KGV2ZW50PzogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuaXNEaXNhYmxlZCB8fCB0aGlzLl9kZWxheVRpbWVvdXRJZCB8fCAhdGhpcy5tZGJUb29sdGlwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmN1c3RvbUhlaWdodCkge1xuICAgICAgY29uc3QgZWxQb3NpdGlvbiA9IGV2ZW50ID8gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSAndG9wJyAmJiBlbFBvc2l0aW9uLnRvcCA8IDQwKSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gJ2JvdHRvbSc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPCA2MCkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9ICd0b3AnO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXN0b21IZWlnaHQpIHtcbiAgICAgIHRoaXMuY2hhbmdlUG9zaXRpb25JZk5vdEZpdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dUb29sdGlwID0gKCkgPT4gdGhpcy5fdG9vbHRpcFxuICAgICAgLmF0dGFjaChUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAuc2hvdyh7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMubWRiVG9vbHRpcCxcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudFxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5kZWxheSkge1xuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93VG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXAuaXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rvb2x0aXAuaW5zdGFuY2UuY2xhc3NNYXAuaW4gPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgIH0sIHRoaXMuZmFkZUR1cmF0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=