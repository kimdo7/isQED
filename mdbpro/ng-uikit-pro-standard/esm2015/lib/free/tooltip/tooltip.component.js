/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, HostBinding, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
import { isBs3 } from '../utils/ng2-bootstrap-config';
export class TooltipContainerComponent {
    /**
     * @param {?} config
     * @param {?} r
     */
    constructor(config, r) {
        this.r = r;
        this.show = !this.isBs3;
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
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const arrowClassList = this.tooltipArrow.nativeElement.classList;
            /** @type {?} */
            const tooltipHeight = this.tooltipInner.nativeElement.clientHeight;
            if (arrowClassList.contains('top')) {
                this.r.setStyle(this.tooltipArrow.nativeElement, 'top', tooltipHeight + 6 + 'px');
            }
            else if (arrowClassList.contains('left')) {
                this.r.setStyle(this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
            else if (arrowClassList.contains('right')) {
                this.r.setStyle(this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
        }), 0);
    }
}
TooltipContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                },
                template: `
  <div #tooltipArrow class="tooltip-arrow" [ngClass]="{'left': placement == 'left', 'right': placement == 'right', 'top': placement == 'top'}"></div>
  <div #tooltipInner class="tooltip-inner"><ng-content></ng-content></div>
  `
            }] }
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig },
    { type: Renderer2 }
];
TooltipContainerComponent.propDecorators = {
    tooltipInner: [{ type: ViewChild, args: ['tooltipInner',] }],
    tooltipArrow: [{ type: ViewChild, args: ['tooltipArrow',] }],
    show: [{ type: HostBinding, args: ['class.show',] }]
};
if (false) {
    /** @type {?} */
    TooltipContainerComponent.prototype.classMap;
    /** @type {?} */
    TooltipContainerComponent.prototype.placement;
    /** @type {?} */
    TooltipContainerComponent.prototype.popupClass;
    /** @type {?} */
    TooltipContainerComponent.prototype.animation;
    /** @type {?} */
    TooltipContainerComponent.prototype.tooltipInner;
    /** @type {?} */
    TooltipContainerComponent.prototype.tooltipArrow;
    /** @type {?} */
    TooltipContainerComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    TooltipContainerComponent.prototype.r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWN0RCxNQUFNLE9BQU8seUJBQXlCOzs7OztJQWFwQyxZQUFtQixNQUFxQixFQUFVLENBQVk7UUFBWixNQUFDLEdBQUQsQ0FBQyxDQUFXO1FBTm5DLFNBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFPNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQU5ELElBQVcsS0FBSztRQUNkLE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQU1NLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QztRQUNELFVBQVU7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ1IsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVM7O2tCQUMxRCxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUNsRSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ25GO2lCQUFNLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3RGO2lCQUFNLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3RGO1FBQ0gsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBRVIsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsa0RBQWtEO2lCQUM5RDtnQkFDRCxRQUFRLEVBQUU7OztHQUdUO2FBQ0Y7Ozs7WUFkUSxhQUFhO1lBRDBFLFNBQVM7OzsyQkFxQnRHLFNBQVMsU0FBQyxjQUFjOzJCQUN4QixTQUFTLFNBQUMsY0FBYzttQkFDeEIsV0FBVyxTQUFDLFlBQVk7Ozs7SUFOekIsNkNBQXFCOztJQUNyQiw4Q0FBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsOENBQTBCOztJQUMxQixpREFBb0Q7O0lBQ3BELGlEQUFvRDs7SUFDcEQseUNBQThDOzs7OztJQU1KLHNDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnLi4vdXRpbHMvbmcyLWJvb3RzdHJhcC1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItdG9vbHRpcC1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdcInRvb2x0aXAtZmFkZUluIHRvb2x0aXAgaW4gdG9vbHRpcC1cIiArIHBsYWNlbWVudCdcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAjdG9vbHRpcEFycm93IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiIFtuZ0NsYXNzXT1cInsnbGVmdCc6IHBsYWNlbWVudCA9PSAnbGVmdCcsICdyaWdodCc6IHBsYWNlbWVudCA9PSAncmlnaHQnLCAndG9wJzogcGxhY2VtZW50ID09ICd0b3AnfVwiPjwvZGl2PlxuICA8ZGl2ICN0b29sdGlwSW5uZXIgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGNsYXNzTWFwOiBhbnk7XG4gIHB1YmxpYyBwbGFjZW1lbnQ6IHN0cmluZztcbiAgcHVibGljIHBvcHVwQ2xhc3M6IHN0cmluZztcbiAgcHVibGljIGFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcElubmVyJykgdG9vbHRpcElubmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0b29sdGlwQXJyb3cnKSB0b29sdGlwQXJyb3c6IEVsZW1lbnRSZWY7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpIHNob3cgPSAhdGhpcy5pc0JzMztcblxuICBwdWJsaWMgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogVG9vbHRpcENvbmZpZywgcHJpdmF0ZSByOiBSZW5kZXJlcjIpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7IGluOiBmYWxzZSwgZmFkZTogZmFsc2UgfTtcbiAgICB0aGlzLmNsYXNzTWFwW3RoaXMucGxhY2VtZW50XSA9IHRydWU7XG4gICAgdGhpcy5jbGFzc01hcFsndG9vbHRpcC0nICsgdGhpcy5wbGFjZW1lbnRdID0gdHJ1ZTtcblxuICAgIHRoaXMuY2xhc3NNYXAuaW4gPSB0cnVlO1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5jbGFzc01hcC5mYWRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3B1cENsYXNzKSB7XG4gICAgICB0aGlzLmNsYXNzTWFwW3RoaXMucG9wdXBDbGFzc10gPSB0cnVlO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGFycm93Q2xhc3NMaXN0ID0gdGhpcy50b29sdGlwQXJyb3cubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICBjb25zdCB0b29sdGlwSGVpZ2h0ID0gdGhpcy50b29sdGlwSW5uZXIubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICBpZiAoYXJyb3dDbGFzc0xpc3QuY29udGFpbnMoJ3RvcCcpKSB7XG4gICAgICAgIHRoaXMuci5zZXRTdHlsZSh0aGlzLnRvb2x0aXBBcnJvdy5uYXRpdmVFbGVtZW50LCAndG9wJywgdG9vbHRpcEhlaWdodCArIDYgKyAncHgnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXJyb3dDbGFzc0xpc3QuY29udGFpbnMoJ2xlZnQnKSkge1xuICAgICAgICB0aGlzLnIuc2V0U3R5bGUodGhpcy50b29sdGlwQXJyb3cubmF0aXZlRWxlbWVudCwgJ3RvcCcsICAodG9vbHRpcEhlaWdodCAvIDIpICsgJ3B4Jyk7XG4gICAgICB9IGVsc2UgaWYgKGFycm93Q2xhc3NMaXN0LmNvbnRhaW5zKCdyaWdodCcpKSB7XG4gICAgICAgIHRoaXMuci5zZXRTdHlsZSh0aGlzLnRvb2x0aXBBcnJvdy5uYXRpdmVFbGVtZW50LCAndG9wJywgICh0b29sdGlwSGVpZ2h0IC8gMikgKyAncHgnKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcblxuICB9XG59XG4iXX0=