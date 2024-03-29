/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
var MdbTableScrollDirective = /** @class */ (function () {
    function MdbTableScrollDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.scrollY = false;
        this.maxHeight = null;
        this.scrollX = false;
        this.maxWidth = null;
    }
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithVerticalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-y', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithHorizontalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithHorizontalAndVerticalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @return {?}
     */
    MdbTableScrollDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this.el.nativeElement.parentNode;
        /** @type {?} */
        var tableWrapper = this.renderer.createElement('div');
        if (this.scrollY && this.scrollX && this.maxHeight && this.maxWidth) {
            this.wrapTableWithHorizontalAndVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollY && this.maxHeight) {
            this.wrapTableWithVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollX && this.maxWidth) {
            this.wrapTableWithHorizontalScrollingWrapper(tableWrapper);
        }
        this.renderer.insertBefore(parent, tableWrapper, this.el.nativeElement);
        this.renderer.removeChild(parent, this.el.nativeElement);
        this.renderer.appendChild(tableWrapper, this.el.nativeElement);
    };
    MdbTableScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableScroll]'
                },] }
    ];
    /** @nocollapse */
    MdbTableScrollDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    MdbTableScrollDirective.propDecorators = {
        scrollY: [{ type: Input }],
        maxHeight: [{ type: Input }],
        scrollX: [{ type: Input }],
        maxWidth: [{ type: Input }]
    };
    return MdbTableScrollDirective;
}());
export { MdbTableScrollDirective };
if (false) {
    /** @type {?} */
    MdbTableScrollDirective.prototype.scrollY;
    /** @type {?} */
    MdbTableScrollDirective.prototype.maxHeight;
    /** @type {?} */
    MdbTableScrollDirective.prototype.scrollX;
    /** @type {?} */
    MdbTableScrollDirective.prototype.maxWidth;
    /**
     * @type {?}
     * @private
     */
    MdbTableScrollDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbTableScrollDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNjcm9sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90YWJsZXMvZGlyZWN0aXZlcy9tZGItdGFibGUtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRjtJQVVFLGlDQUFvQixRQUFtQixFQUFVLEVBQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFOdEQsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixjQUFTLEdBQVEsSUFBSSxDQUFDO1FBRXRCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFRLElBQUksQ0FBQztJQUVxQyxDQUFDOzs7OztJQUVwRSx1RUFBcUM7Ozs7SUFBckMsVUFBc0MsWUFBd0I7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELHlFQUF1Qzs7OztJQUF2QyxVQUF3QyxZQUF3QjtRQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsb0ZBQWtEOzs7O0lBQWxELFVBQW1ELFlBQXdCO1FBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7O1lBQ1EsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVU7O1lBQ3pDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFdkQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25FLElBQUksQ0FBQyxrREFBa0QsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxRDtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRSxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQUorQixTQUFTO2dCQUFyQixVQUFVOzs7MEJBTTNCLEtBQUs7NEJBQ0wsS0FBSzswQkFFTCxLQUFLOzJCQUNMLEtBQUs7O0lBMkNSLDhCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FoRFksdUJBQXVCOzs7SUFDbEMsMENBQWtDOztJQUNsQyw0Q0FBK0I7O0lBRS9CLDBDQUF5Qjs7SUFDekIsMkNBQThCOzs7OztJQUVsQiwyQ0FBMkI7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRhYmxlU2Nyb2xsXSdcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTY3JvbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzY3JvbGxZOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1heEhlaWdodDogYW55ID0gbnVsbDtcblxuICBASW5wdXQoKSBzY3JvbGxYID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1heFdpZHRoOiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgd3JhcFRhYmxlV2l0aFZlcnRpY2FsU2Nyb2xsaW5nV3JhcHBlcih0YWJsZVdyYXBwZXI6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhYmxlV3JhcHBlciwgJ21heC1oZWlnaHQnLCB0aGlzLm1heEhlaWdodCArICdweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFibGVXcmFwcGVyLCAnb3ZlcmZsb3cteScsICdhdXRvJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0YWJsZVdyYXBwZXIsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cblxuICB3cmFwVGFibGVXaXRoSG9yaXpvbnRhbFNjcm9sbGluZ1dyYXBwZXIodGFibGVXcmFwcGVyOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0YWJsZVdyYXBwZXIsICdtYXgtd2lkdGgnLCB0aGlzLm1heFdpZHRoICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0YWJsZVdyYXBwZXIsICdvdmVyZmxvdy14JywgJ2F1dG8nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhYmxlV3JhcHBlciwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxuXG4gIHdyYXBUYWJsZVdpdGhIb3Jpem9udGFsQW5kVmVydGljYWxTY3JvbGxpbmdXcmFwcGVyKHRhYmxlV3JhcHBlcjogRWxlbWVudFJlZikge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFibGVXcmFwcGVyLCAnbWF4LWhlaWdodCcsIHRoaXMubWF4SGVpZ2h0ICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0YWJsZVdyYXBwZXIsICdtYXgtd2lkdGgnLCB0aGlzLm1heFdpZHRoICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0YWJsZVdyYXBwZXIsICdvdmVyZmxvdy14JywgJ2F1dG8nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhYmxlV3JhcHBlciwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHRhYmxlV3JhcHBlciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxZICYmIHRoaXMuc2Nyb2xsWCAmJiB0aGlzLm1heEhlaWdodCAmJiB0aGlzLm1heFdpZHRoKSB7XG4gICAgICB0aGlzLndyYXBUYWJsZVdpdGhIb3Jpem9udGFsQW5kVmVydGljYWxTY3JvbGxpbmdXcmFwcGVyKHRhYmxlV3JhcHBlcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsWSAmJiB0aGlzLm1heEhlaWdodCkge1xuICAgICAgdGhpcy53cmFwVGFibGVXaXRoVmVydGljYWxTY3JvbGxpbmdXcmFwcGVyKHRhYmxlV3JhcHBlcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsWCAmJiB0aGlzLm1heFdpZHRoKSB7XG4gICAgICB0aGlzLndyYXBUYWJsZVdpdGhIb3Jpem9udGFsU2Nyb2xsaW5nV3JhcHBlcih0YWJsZVdyYXBwZXIpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHBhcmVudCwgdGFibGVXcmFwcGVyLCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQocGFyZW50LCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGFibGVXcmFwcGVyLCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXX0=