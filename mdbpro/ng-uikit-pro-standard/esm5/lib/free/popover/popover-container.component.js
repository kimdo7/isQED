/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Input, Component, HostBinding } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    };
    PopoverContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-popover-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n <h3 class=\"popover-header\" *ngIf=\"title\">{{title}}</h3>\n <div class=\"popover-body\">\n <ng-content></ng-content>\n </div>"
                }] }
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig }
    ]; };
    PopoverContainerComponent.propDecorators = {
        placement: [{ type: Input }],
        title: [{ type: Input }],
        show: [{ type: HostBinding, args: ['class.show',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }],
        class: [{ type: HostBinding, args: ['class',] }]
    };
    return PopoverContainerComponent;
}());
export { PopoverContainerComponent };
if (false) {
    /** @type {?} */
    PopoverContainerComponent.prototype.placement;
    /** @type {?} */
    PopoverContainerComponent.prototype.title;
    /** @type {?} */
    PopoverContainerComponent.prototype.show;
    /** @type {?} */
    PopoverContainerComponent.prototype.role;
    /** @type {?} */
    PopoverContainerComponent.prototype.class;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvcG9wb3Zlci9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXREO0lBeUJBLG1DQUFtQixNQUFxQjtRQVhiLFNBQUksR0FBRyxRQUFRLENBQUM7UUFDaEIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQVczQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBTkYsc0JBQVcsNENBQUs7Ozs7UUFBaEI7WUFDQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7Ozs7SUFNRiw0Q0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLG9DQUFvQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUgsQ0FBQzs7Z0JBL0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLG9JQUlIO2lCQUNQOzs7O2dCQVhRLGFBQWE7Ozs0QkFjckIsS0FBSzt3QkFDSixLQUFLO3VCQUVOLFdBQVcsU0FBQyxZQUFZO3VCQUN2QixXQUFXLFNBQUMsV0FBVzt3QkFFeEIsV0FBVyxTQUFDLE9BQU87O0lBZXBCLGdDQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0F2QlkseUJBQXlCOzs7SUFFdEMsOENBQWtDOztJQUNqQywwQ0FBOEI7O0lBRS9CLHlDQUEyQzs7SUFDMUMseUNBQTJDOztJQUU1QywwQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICcuLi91dGlscy9uZzItYm9vdHN0cmFwLWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuIHNlbGVjdG9yOiAnbWRiLXBvcG92ZXItY29udGFpbmVyJyxcbiBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiB0ZW1wbGF0ZTogYFxuIDxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCIgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvaDM+XG4gPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPlxuIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5ASW5wdXQoKSBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XG4gQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cbkBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpIHNob3cgPSAnIWlzQnMzJztcbiBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAndG9vbHRpcCc7XG4vLyAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzO1xuQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzOiBhbnk7XG5cblxuXG5wdWJsaWMgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuIHJldHVybiBpc0JzMygpO1xuIH1cblxucHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogUG9wb3ZlckNvbmZpZykge1xuIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiB9XG5cbm5nT25Jbml0KCkge1xuIHRoaXMuY2xhc3MgPSAncG9wb3Zlci1mYWRlSW4gcG9wb3ZlciBpbiBwb3BvdmVyLScgKyB0aGlzLnBsYWNlbWVudCArICcgJyArIHRoaXMucGxhY2VtZW50ICsgJyBicy1wb3BvdmVyLScgKyB0aGlzLnBsYWNlbWVudDtcbiB9XG59XG4iXX0=