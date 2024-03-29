/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { document } from './../utils/facade/browser';
var MdbIconComponent = /** @class */ (function () {
    function MdbIconComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.fab = false;
        this.far = false;
        this.fal = false;
        this.fas = true;
        this.sizeClass = '';
    }
    /**
     * @return {?}
     */
    MdbIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.size) {
            this.sizeClass = "fa-" + this.size;
        }
        if (this._el.nativeElement.parentElement.classList.contains('md-form')) {
            this._renderer.addClass(this._el.nativeElement, 'prefix');
        }
        /** @type {?} */
        var classList = this._el.nativeElement.classList;
        this.fab = classList.contains('fab');
        this.far = classList.contains('far');
        this.fas = classList.contains('fas');
        this.fal = classList.contains('fal');
        /** @type {?} */
        var formWrapper = this._getClosestEl(this._el.nativeElement, '.md-form') ||
            this._getClosestEl(this._el.nativeElement, '.md-outline');
        if (formWrapper) {
            formWrapper.childNodes.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                if (el.tagName == 'INPUT') {
                    _this._renderer.listen(el, 'focus', (/**
                     * @return {?}
                     */
                    function () {
                        _this._renderer.addClass(_this._el.nativeElement, 'active');
                    }));
                    _this._renderer.listen(el, 'blur', (/**
                     * @return {?}
                     */
                    function () {
                        _this._renderer.removeClass(_this._el.nativeElement, 'active');
                    }));
                }
            }));
        }
    };
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    MdbIconComponent.prototype._getClosestEl = /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches && el.matches(selector)) {
                return el;
            }
        }
        return null;
    };
    MdbIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-icon',
                    template: "<i [ngClass]=\"{'fas': fas, 'far': far, 'fab': fab, 'fal': fal}\" class=\"fa-{{icon}} {{class}} {{classInside}} {{sizeClass}}\"></i>\n"
                }] }
    ];
    /** @nocollapse */
    MdbIconComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbIconComponent.propDecorators = {
        icon: [{ type: Input }],
        size: [{ type: Input }],
        class: [{ type: Input }],
        classInside: [{ type: Input }]
    };
    return MdbIconComponent;
}());
export { MdbIconComponent };
if (false) {
    /** @type {?} */
    MdbIconComponent.prototype.icon;
    /** @type {?} */
    MdbIconComponent.prototype.size;
    /** @type {?} */
    MdbIconComponent.prototype.class;
    /** @type {?} */
    MdbIconComponent.prototype.classInside;
    /** @type {?} */
    MdbIconComponent.prototype.fab;
    /** @type {?} */
    MdbIconComponent.prototype.far;
    /** @type {?} */
    MdbIconComponent.prototype.fal;
    /** @type {?} */
    MdbIconComponent.prototype.fas;
    /** @type {?} */
    MdbIconComponent.prototype.sizeClass;
    /**
     * @type {?}
     * @private
     */
    MdbIconComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbIconComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pY29ucy9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckQ7SUFrQkUsMEJBQW9CLEdBQWUsRUFBVSxTQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVBqRSxRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixRQUFHLEdBQUcsSUFBSSxDQUFDO1FBRVgsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUdmLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkFpQ0M7UUFoQ0MsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFNLElBQUksQ0FBQyxJQUFNLENBQUM7U0FDcEM7UUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNEOztZQUVLLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBQ2xELElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFHL0IsV0FBVyxHQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO1lBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDO1FBRTNELElBQUksV0FBVyxFQUFFO1lBQ2YsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxFQUFPO2dCQUNyQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxFQUFFO29CQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTzs7O29CQUFFO3dCQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDNUQsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU07OztvQkFBRTt3QkFDaEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQy9ELENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUE7U0FDSDtJQUVILENBQUM7Ozs7Ozs7SUFFTyx3Q0FBYTs7Ozs7O0lBQXJCLFVBQXNCLEVBQU8sRUFBRSxRQUFnQjtRQUM3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ2hELElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2dCQS9ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGtKQUFvQztpQkFDckM7Ozs7Z0JBTnlCLFVBQVU7Z0JBQVUsU0FBUzs7O3VCQVNwRCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQXdEUix1QkFBQztDQUFBLEFBakVELElBaUVDO1NBN0RZLGdCQUFnQjs7O0lBRTNCLGdDQUFzQjs7SUFDdEIsZ0NBQXNCOztJQUN0QixpQ0FBdUI7O0lBQ3ZCLHVDQUE2Qjs7SUFFN0IsK0JBQVk7O0lBQ1osK0JBQVk7O0lBQ1osK0JBQVk7O0lBQ1osK0JBQVc7O0lBRVgscUNBQWU7Ozs7O0lBRUgsK0JBQXVCOzs7OztJQUFFLHFDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tICcuLy4uL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWRiSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzSW5zaWRlOiBzdHJpbmc7XG5cbiAgZmFiID0gZmFsc2U7XG4gIGZhciA9IGZhbHNlO1xuICBmYWwgPSBmYWxzZTtcbiAgZmFzID0gdHJ1ZTtcblxuICBzaXplQ2xhc3MgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5zaXplQ2xhc3MgPSBgZmEtJHt0aGlzLnNpemV9YDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWQtZm9ybScpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAncHJlZml4Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgdGhpcy5mYWIgPSBjbGFzc0xpc3QuY29udGFpbnMoJ2ZhYicpO1xuICAgIHRoaXMuZmFyID0gY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXInKTtcbiAgICB0aGlzLmZhcyA9IGNsYXNzTGlzdC5jb250YWlucygnZmFzJyk7XG4gICAgdGhpcy5mYWwgPSBjbGFzc0xpc3QuY29udGFpbnMoJ2ZhbCcpO1xuXG5cbiAgICBjb25zdCBmb3JtV3JhcHBlciA9XG4gICAgICB0aGlzLl9nZXRDbG9zZXN0RWwodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJy5tZC1mb3JtJykgfHxcbiAgICAgIHRoaXMuX2dldENsb3Nlc3RFbCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnLm1kLW91dGxpbmUnKTtcblxuICAgIGlmIChmb3JtV3JhcHBlcikge1xuICAgICAgZm9ybVdyYXBwZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09ICdJTlBVVCcpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oZWwsICdmb2N1cycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oZWwsICdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2xvc2VzdEVsKGVsOiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICBmb3IgKDsgZWwgJiYgZWwgIT09IGRvY3VtZW50OyBlbCA9IGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChlbC5tYXRjaGVzICYmIGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuIl19