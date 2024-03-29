/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';
var MDBBadgeComponent = /** @class */ (function () {
    function MDBBadgeComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    MDBBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            /** @type {?} */
            var customClassArr = this.color.split(' ');
            customClassArr.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                _this._renderer.addClass(_this._el.nativeElement, el);
            }));
        }
    };
    MDBBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-badge',
                    template: "<span class=\"{{class}} {{classInside}}\">\n  <ng-content></ng-content>\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    MDBBadgeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MDBBadgeComponent.propDecorators = {
        default: [{ type: Input }, { type: HostBinding, args: ['class.badge-default',] }],
        primary: [{ type: Input }, { type: HostBinding, args: ['class.badge-primary',] }],
        success: [{ type: Input }, { type: HostBinding, args: ['class.badge-success',] }],
        info: [{ type: Input }, { type: HostBinding, args: ['class.badge-info',] }],
        warning: [{ type: Input }, { type: HostBinding, args: ['class.badge-warning',] }],
        danger: [{ type: Input }, { type: HostBinding, args: ['class.badge-danger',] }],
        pill: [{ type: Input }, { type: HostBinding, args: ['class.badge-pill',] }],
        classInside: [{ type: Input }],
        color: [{ type: Input }],
        class: [{ type: Input }]
    };
    return MDBBadgeComponent;
}());
export { MDBBadgeComponent };
if (false) {
    /** @type {?} */
    MDBBadgeComponent.prototype.default;
    /** @type {?} */
    MDBBadgeComponent.prototype.primary;
    /** @type {?} */
    MDBBadgeComponent.prototype.success;
    /** @type {?} */
    MDBBadgeComponent.prototype.info;
    /** @type {?} */
    MDBBadgeComponent.prototype.warning;
    /** @type {?} */
    MDBBadgeComponent.prototype.danger;
    /** @type {?} */
    MDBBadgeComponent.prototype.pill;
    /** @type {?} */
    MDBBadgeComponent.prototype.classInside;
    /** @type {?} */
    MDBBadgeComponent.prototype.color;
    /** @type {?} */
    MDBBadgeComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    MDBBadgeComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MDBBadgeComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2JhZGdlL21kYi1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNGO0lBbUJFLDJCQUFvQixHQUFlLEVBQVUsU0FBb0I7UUFBN0MsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDakUsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztnQkFDUixjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBRTVDLGNBQWMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxFQUFVO2dCQUNoQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsOEZBQXlDO2lCQUMxQzs7OztnQkFMMEIsVUFBVTtnQkFBRSxTQUFTOzs7MEJBTzdDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCOzBCQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLHFCQUFxQjswQkFDMUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxxQkFBcUI7dUJBQzFDLEtBQUssWUFBSSxXQUFXLFNBQUMsa0JBQWtCOzBCQUN2QyxLQUFLLFlBQUksV0FBVyxTQUFDLHFCQUFxQjt5QkFDMUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxvQkFBb0I7dUJBQ3pDLEtBQUssWUFBSSxXQUFXLFNBQUMsa0JBQWtCOzhCQUV2QyxLQUFLO3dCQUdMLEtBQUs7d0JBQ0wsS0FBSzs7SUFpQlIsd0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTlCWSxpQkFBaUI7OztJQUM1QixvQ0FBOEQ7O0lBQzlELG9DQUE4RDs7SUFDOUQsb0NBQThEOztJQUM5RCxpQ0FBd0Q7O0lBQ3hELG9DQUE4RDs7SUFDOUQsbUNBQTREOztJQUM1RCxpQ0FBd0Q7O0lBRXhELHdDQUE2Qjs7SUFHN0Isa0NBQXVCOztJQUN2QixrQ0FBdUI7Ozs7O0lBRVgsZ0NBQXVCOzs7OztJQUFFLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIEhvc3RCaW5kaW5nfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kYi1iYWRnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTURCQmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWRlZmF1bHQnKSBkZWZhdWx0OiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXByaW1hcnknKSBwcmltYXJ5OiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXN1Y2Nlc3MnKSBzdWNjZXNzOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWluZm8nKSBpbmZvOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXdhcm5pbmcnKSB3YXJuaW5nOiBib29sZWFuO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWRhbmdlcicpIGRhbmdlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1waWxsJykgcGlsbDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjbGFzc0luc2lkZTogc3RyaW5nO1xuXG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2JhZGdlJyk7XG4gICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUNsYXNzQXJyID0gdGhpcy5jb2xvci5zcGxpdCgnICcpO1xuXG4gICAgICBjdXN0b21DbGFzc0Fyci5mb3JFYWNoKChlbDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==