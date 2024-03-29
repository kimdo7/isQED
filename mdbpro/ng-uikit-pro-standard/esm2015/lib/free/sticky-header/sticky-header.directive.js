/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { fromEvent } from "rxjs";
import { window } from '../utils/facade/browser';
import { distinctUntilChanged, filter, map, pairwise, share, skip, throttleTime } from "rxjs/operators";
/** @enum {string} */
const Direction = {
    Up: 'Up',
    Down: 'Down',
};
;
export class StickyHeaderDirective {
    /**
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.animationDuration = 200;
        this.transitionEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map((/**
         * @return {?}
         */
        () => window.pageYOffset)), pairwise(), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([y1, y2]) => (y2 < y1 ? Direction.Up : Direction.Down))), distinctUntilChanged(), share());
        this.scrollUp$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        direction => direction === Direction.Up)));
        this.scrollDown$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        direction => direction === Direction.Down)));
        this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
        this._renderer.setStyle(this._el.nativeElement, 'top', '0');
        this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.scrollUp$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            () => {
                this._renderer.setStyle(this._el.nativeElement, 'transition', `all ${this.animationDuration}ms ease-in`);
                this._renderer.setStyle(this._el.nativeElement, 'transform', 'translateY(0%)');
                this.transitionEnd.emit({ state: 'Visible' });
            }));
            this.scrollDown$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            () => {
                this._renderer.setStyle(this._el.nativeElement, 'transition', `all ${this.animationDuration}ms ease-in`);
                this._renderer.setStyle(this._el.nativeElement, 'transform', 'translateY(-100%)');
                this.transitionEnd.emit({ state: 'Hidden' });
            }));
        }), 0);
    }
}
StickyHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbStickyHeader]',
                exportAs: 'mdbStickyHeader'
            },] }
];
/** @nocollapse */
StickyHeaderDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
StickyHeaderDirective.propDecorators = {
    animationDuration: [{ type: Input }],
    transitionEnd: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StickyHeaderDirective.prototype.animationDuration;
    /** @type {?} */
    StickyHeaderDirective.prototype.transitionEnd;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollDown$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollUp$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9zdGlja3ktaGVhZGVyL3N0aWNreS1oZWFkZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7SUFHcEcsSUFBSyxJQUFJO0lBQ1QsTUFBTyxNQUFNOztBQUNkLENBQUM7QUFNRixNQUFNLE9BQU8scUJBQXFCOzs7OztJQU9oQyxZQUNVLFNBQW9CLEVBQ3BCLEdBQWU7UUFEZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFSaEIsc0JBQWlCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLGtCQUFhLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFDO0lBUWpHLENBQUM7Ozs7SUFFRCxlQUFlOztjQUNQLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDOUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUNoQixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFDLEVBQzdCLFFBQVEsRUFBRSxFQUNWLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUN2RSxvQkFBb0IsRUFBRSxFQUN0QixLQUFLLEVBQUUsQ0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FDM0IsTUFBTTs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxFQUFFLEVBQUMsQ0FDaEQsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FDN0IsTUFBTTs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUMsQ0FDbEQsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWpFLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixZQUFZLENBQUMsQ0FBQztnQkFDekcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsWUFBWSxDQUFDLENBQUM7Z0JBQ3pHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNsRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBYjBFLFNBQVM7WUFBbEQsVUFBVTs7O2dDQWV6QyxLQUFLOzRCQUNMLE1BQU07Ozs7SUFEUCxrREFBeUM7O0lBQ3pDLDhDQUFpRzs7Ozs7SUFFakcsNENBQXdCOzs7OztJQUN4QiwwQ0FBc0I7Ozs7O0lBR3BCLDBDQUE0Qjs7Ozs7SUFDNUIsb0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZnJvbUV2ZW50fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHt3aW5kb3d9IGZyb20gJy4uL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBwYWlyd2lzZSwgc2hhcmUsIHNraXAsIHRocm90dGxlVGltZX0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmVudW0gRGlyZWN0aW9uIHtcbiAgVXAgPSAnVXAnLFxuICBEb3duID0gJ0Rvd24nXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU3RpY2t5SGVhZGVyXScsXG4gIGV4cG9ydEFzOiAnbWRiU3RpY2t5SGVhZGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBTdGlja3lIZWFkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlciA9IDIwMDtcbiAgQE91dHB1dCgpIHRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjx7IHN0YXRlOiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhdGU6IHN0cmluZyB9PigpO1xuXG4gIHByaXZhdGUgc2Nyb2xsRG93biQ6IGFueVxuICBwcml2YXRlIHNjcm9sbFVwJDogYW55XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJykucGlwZShcbiAgICAgIHRocm90dGxlVGltZSgxMCksXG4gICAgICBtYXAoKCkgPT4gd2luZG93LnBhZ2VZT2Zmc2V0KSxcbiAgICAgIHBhaXJ3aXNlKCksXG4gICAgICBtYXAoKFt5MSwgeTJdKTogRGlyZWN0aW9uID0+ICh5MiA8IHkxID8gRGlyZWN0aW9uLlVwIDogRGlyZWN0aW9uLkRvd24pKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsVXAkID0gc2Nyb2xsJC5waXBlKFxuICAgICAgZmlsdGVyKGRpcmVjdGlvbiA9PiBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5VcClcbiAgICApO1xuICAgIHRoaXMuc2Nyb2xsRG93biQgPSBzY3JvbGwkLnBpcGUoXG4gICAgICBmaWx0ZXIoZGlyZWN0aW9uID0+IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkRvd24pXG4gICAgKTtcblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdwb3NpdGlvbicsICdmaXhlZCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAnMCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsICcxMDAlJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsVXAkLnBpcGUoc2tpcCgwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYWxsICR7dGhpcy5hbmltYXRpb25EdXJhdGlvbn1tcyBlYXNlLWluYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kLmVtaXQoe3N0YXRlOiAnVmlzaWJsZSd9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zY3JvbGxEb3duJC5waXBlKHNraXAoMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGFsbCAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb259bXMgZWFzZS1pbmApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoLTEwMCUpJyk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZC5lbWl0KHtzdGF0ZTogJ0hpZGRlbid9KTtcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9XG59XG4iXX0=