/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Input, Component, HostBinding } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from '../utils/ng2-bootstrap-config';
export class PopoverContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    }
}
PopoverContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
 <h3 class="popover-header" *ngIf="title">{{title}}</h3>
 <div class="popover-body">
 <ng-content></ng-content>
 </div>`
            }] }
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
PopoverContainerComponent.propDecorators = {
    placement: [{ type: Input }],
    title: [{ type: Input }],
    show: [{ type: HostBinding, args: ['class.show',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    class: [{ type: HostBinding, args: ['class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvcG9wb3Zlci9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBV3RELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFnQnRDLFlBQW1CLE1BQXFCO1FBWGIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNoQixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBVzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFORixJQUFXLEtBQUs7UUFDZixPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzs7OztJQU1GLFFBQVE7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLG9DQUFvQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUgsQ0FBQzs7O1lBL0JELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7O1FBSUg7YUFDUDs7OztZQVhRLGFBQWE7Ozt3QkFjckIsS0FBSztvQkFDSixLQUFLO21CQUVOLFdBQVcsU0FBQyxZQUFZO21CQUN2QixXQUFXLFNBQUMsV0FBVztvQkFFeEIsV0FBVyxTQUFDLE9BQU87Ozs7SUFOcEIsOENBQWtDOztJQUNqQywwQ0FBOEI7O0lBRS9CLHlDQUEyQzs7SUFDMUMseUNBQTJDOztJQUU1QywwQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICcuLi91dGlscy9uZzItYm9vdHN0cmFwLWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuIHNlbGVjdG9yOiAnbWRiLXBvcG92ZXItY29udGFpbmVyJyxcbiBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiB0ZW1wbGF0ZTogYFxuIDxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCIgKm5nSWY9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvaDM+XG4gPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPlxuIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5ASW5wdXQoKSBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XG4gQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cbkBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpIHNob3cgPSAnIWlzQnMzJztcbiBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAndG9vbHRpcCc7XG4vLyAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzO1xuQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzOiBhbnk7XG5cblxuXG5wdWJsaWMgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuIHJldHVybiBpc0JzMygpO1xuIH1cblxucHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogUG9wb3ZlckNvbmZpZykge1xuIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiB9XG5cbm5nT25Jbml0KCkge1xuIHRoaXMuY2xhc3MgPSAncG9wb3Zlci1mYWRlSW4gcG9wb3ZlciBpbiBwb3BvdmVyLScgKyB0aGlzLnBsYWNlbWVudCArICcgJyArIHRoaXMucGxhY2VtZW50ICsgJyBicy1wb3BvdmVyLScgKyB0aGlzLnBsYWNlbWVudDtcbiB9XG59XG4iXX0=