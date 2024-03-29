/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';
export class MDBBadgeComponent {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            /** @type {?} */
            const customClassArr = this.color.split(' ');
            customClassArr.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                this._renderer.addClass(this._el.nativeElement, el);
            }));
        }
    }
}
MDBBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-badge',
                template: "<span class=\"{{class}} {{classInside}}\">\n  <ng-content></ng-content>\n</span>\n"
            }] }
];
/** @nocollapse */
MDBBadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2JhZGdlL21kYi1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTTNGLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBZTVCLFlBQW9CLEdBQWUsRUFBVSxTQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUNqRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7a0JBQ1IsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUU1QyxjQUFjLENBQUMsT0FBTzs7OztZQUFDLENBQUMsRUFBVSxFQUFFLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFFSCxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw4RkFBeUM7YUFDMUM7Ozs7WUFMMEIsVUFBVTtZQUFFLFNBQVM7OztzQkFPN0MsS0FBSyxZQUFJLFdBQVcsU0FBQyxxQkFBcUI7c0JBQzFDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCO3NCQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLHFCQUFxQjttQkFDMUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxrQkFBa0I7c0JBQ3ZDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCO3FCQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLG9CQUFvQjttQkFDekMsS0FBSyxZQUFJLFdBQVcsU0FBQyxrQkFBa0I7MEJBRXZDLEtBQUs7b0JBR0wsS0FBSztvQkFDTCxLQUFLOzs7O0lBWk4sb0NBQThEOztJQUM5RCxvQ0FBOEQ7O0lBQzlELG9DQUE4RDs7SUFDOUQsaUNBQXdEOztJQUN4RCxvQ0FBOEQ7O0lBQzlELG1DQUE0RDs7SUFDNUQsaUNBQXdEOztJQUV4RCx3Q0FBNkI7O0lBRzdCLGtDQUF1Qjs7SUFDdkIsa0NBQXVCOzs7OztJQUVYLGdDQUF1Qjs7Ozs7SUFBRSxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1iYWRnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZGItYmFkZ2UuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1EQkJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1kZWZhdWx0JykgZGVmYXVsdDogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1wcmltYXJ5JykgcHJpbWFyeTogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1zdWNjZXNzJykgc3VjY2VzczogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1pbmZvJykgaW5mbzogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS13YXJuaW5nJykgd2FybmluZzogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1kYW5nZXInKSBkYW5nZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtcGlsbCcpIHBpbGw6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY2xhc3NJbnNpZGU6IHN0cmluZztcblxuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdiYWRnZScpO1xuICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICBjb25zdCBjdXN0b21DbGFzc0FyciA9IHRoaXMuY29sb3Iuc3BsaXQoJyAnKTtcblxuICAgICAgY3VzdG9tQ2xhc3NBcnIuZm9yRWFjaCgoZWw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=