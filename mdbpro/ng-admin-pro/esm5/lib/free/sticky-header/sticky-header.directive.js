/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { fromEvent } from "rxjs";
import { window } from '../utils/facade/browser';
import { distinctUntilChanged, filter, map, pairwise, share, skip, throttleTime } from "rxjs/operators";
/** @enum {string} */
var Direction = {
    Up: 'Up',
    Down: 'Down',
};
;
var StickyHeaderDirective = /** @class */ (function () {
    function StickyHeaderDirective(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.animationDuration = 200;
        this.transitionEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StickyHeaderDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map((/**
         * @return {?}
         */
        function () { return window.pageYOffset; })), pairwise(), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), y1 = _b[0], y2 = _b[1];
            return (y2 < y1 ? Direction.Up : Direction.Down);
        })), distinctUntilChanged(), share());
        this.scrollUp$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return direction === Direction.Up; })));
        this.scrollDown$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return direction === Direction.Down; })));
        this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
        this._renderer.setStyle(this._el.nativeElement, 'top', '0');
        this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.scrollUp$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(0%)');
                _this.transitionEnd.emit({ state: 'Visible' });
            }));
            _this.scrollDown$.pipe(skip(0)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(-100%)');
                _this.transitionEnd.emit({ state: 'Hidden' });
            }));
        }), 0);
    };
    StickyHeaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbStickyHeader]',
                    exportAs: 'mdbStickyHeader'
                },] }
    ];
    /** @nocollapse */
    StickyHeaderDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    StickyHeaderDirective.propDecorators = {
        animationDuration: [{ type: Input }],
        transitionEnd: [{ type: Output }]
    };
    return StickyHeaderDirective;
}());
export { StickyHeaderDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9zdGlja3ktaGVhZGVyL3N0aWNreS1oZWFkZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR3BHLElBQUssSUFBSTtJQUNULE1BQU8sTUFBTTs7QUFDZCxDQUFDO0FBRUY7SUFXRSwrQkFDVSxTQUFvQixFQUNwQixHQUFlO1FBRGYsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBUmhCLHNCQUFpQixHQUFXLEdBQUcsQ0FBQztRQUMvQixrQkFBYSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztJQVFqRyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQUEsaUJBaUNDOztZQWhDTyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzlDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFDaEIsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQWxCLENBQWtCLEVBQUMsRUFDN0IsUUFBUSxFQUFFLEVBQ1YsR0FBRzs7OztRQUFDLFVBQUMsRUFBUTtnQkFBUiwwQkFB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dGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtmcm9tRXZlbnR9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge3dpbmRvd30gZnJvbSAnLi4vdXRpbHMvZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHBhaXJ3aXNlLCBzaGFyZSwgc2tpcCwgdGhyb3R0bGVUaW1lfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuZW51bSBEaXJlY3Rpb24ge1xuICBVcCA9ICdVcCcsXG4gIERvd24gPSAnRG93bidcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJTdGlja3lIZWFkZXJdJyxcbiAgZXhwb3J0QXM6ICdtZGJTdGlja3lIZWFkZXInXG59KVxuZXhwb3J0IGNsYXNzIFN0aWNreUhlYWRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBhbmltYXRpb25EdXJhdGlvbjogbnVtYmVyID0gMjAwO1xuICBAT3V0cHV0KCkgdHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPHsgc3RhdGU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGF0ZTogc3RyaW5nIH0+KCk7XG5cbiAgcHJpdmF0ZSBzY3JvbGxEb3duJDogYW55XG4gIHByaXZhdGUgc2Nyb2xsVXAkOiBhbnlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKS5waXBlKFxuICAgICAgdGhyb3R0bGVUaW1lKDEwKSxcbiAgICAgIG1hcCgoKSA9PiB3aW5kb3cucGFnZVlPZmZzZXQpLFxuICAgICAgcGFpcndpc2UoKSxcbiAgICAgIG1hcCgoW3kxLCB5Ml0pOiBEaXJlY3Rpb24gPT4gKHkyIDwgeTEgPyBEaXJlY3Rpb24uVXAgOiBEaXJlY3Rpb24uRG93bikpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHNoYXJlKClcbiAgICApO1xuXG4gICAgdGhpcy5zY3JvbGxVcCQgPSBzY3JvbGwkLnBpcGUoXG4gICAgICBmaWx0ZXIoZGlyZWN0aW9uID0+IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlVwKVxuICAgICk7XG4gICAgdGhpcy5zY3JvbGxEb3duJCA9IHNjcm9sbCQucGlwZShcbiAgICAgIGZpbHRlcihkaXJlY3Rpb24gPT4gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uRG93bilcbiAgICApO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsICcwJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgJzEwMCUnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxVcCQucGlwZShza2lwKDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIGBhbGwgJHt0aGlzLmFuaW1hdGlvbkR1cmF0aW9ufW1zIGVhc2UtaW5gKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDAlKScpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmQuZW1pdCh7c3RhdGU6ICdWaXNpYmxlJ30pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNjcm9sbERvd24kLnBpcGUoc2tpcCgwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYWxsICR7dGhpcy5hbmltYXRpb25EdXJhdGlvbn1tcyBlYXNlLWluYCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgtMTAwJSknKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kLmVtaXQoe3N0YXRlOiAnSGlkZGVuJ30pO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==