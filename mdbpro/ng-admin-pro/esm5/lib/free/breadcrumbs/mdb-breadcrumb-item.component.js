/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Input } from '@angular/core';
var MdbBreadcrumbItemComponent = /** @class */ (function () {
    function MdbBreadcrumbItemComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    MdbBreadcrumbItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, 'breadcrumb-item');
    };
    MdbBreadcrumbItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-breadcrumb-item',
                    template: "<li class=\"list-inline-item breadcrumb-item font-weight-{{fontWeight}}\">\n  <ng-content></ng-content>\n</li>\n"
                }] }
    ];
    /** @nocollapse */
    MdbBreadcrumbItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbBreadcrumbItemComponent.propDecorators = {
        fontWeight: [{ type: Input }]
    };
    return MdbBreadcrumbItemComponent;
}());
export { MdbBreadcrumbItemComponent };
if (false) {
    /** @type {?} */
    MdbBreadcrumbItemComponent.prototype.fontWeight;
    /**
     * @type {?}
     * @private
     */
    MdbBreadcrumbItemComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbBreadcrumbItemComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9icmVhZGNydW1icy9tZGItYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRjtJQU9JLG9DQUFvQixHQUFlLEVBQVUsU0FBb0I7UUFBN0MsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBSSxDQUFDOzs7O0lBRXRFLDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7Z0JBWEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDRIQUFtRDtpQkFDdEQ7Ozs7Z0JBTG1CLFVBQVU7Z0JBQUUsU0FBUzs7OzZCQU9wQyxLQUFLOztJQU9WLGlDQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksMEJBQTBCOzs7SUFDbkMsZ0RBQTRCOzs7OztJQUVoQix5Q0FBdUI7Ozs7O0lBQUUsK0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtZGItYnJlYWRjcnVtYi1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWRiLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWRiQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGZvbnRXZWlnaHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2JyZWFkY3J1bWItaXRlbScpO1xuICAgIH1cbn1cbiJdfQ==