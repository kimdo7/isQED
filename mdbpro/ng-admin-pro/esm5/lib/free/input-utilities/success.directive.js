/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';
/** @type {?} */
var defaultIdNumber = 0;
var MdbSuccessDirective = /** @class */ (function () {
    function MdbSuccessDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = "mdb-success-" + defaultIdNumber++;
        this.successMsg = true;
        this.messageId = this.id;
    }
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    MdbSuccessDirective.prototype._getClosestEl = /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) {
        for (; el && el !== document; el = el.previousElementSibling) {
            if (el.matches(selector)) {
                return el;
            }
        }
        return null;
    };
    /**
     * @return {?}
     */
    MdbSuccessDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var textarea = this._getClosestEl(this.el.nativeElement, '.md-textarea');
        if (textarea) {
            /** @type {?} */
            var height_1 = textarea.offsetHeight + 4 + 'px';
            this.renderer.setStyle(this.el.nativeElement, 'top', height_1);
            this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', (/**
             * @return {?}
             */
            function () {
                height_1 = textarea.offsetHeight + 4 + 'px';
                _this.renderer.setStyle(_this.el.nativeElement, 'top', height_1);
            }));
        }
    };
    /**
     * @return {?}
     */
    MdbSuccessDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
    };
    MdbSuccessDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdb-success'
                },] }
    ];
    /** @nocollapse */
    MdbSuccessDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbSuccessDirective.propDecorators = {
        id: [{ type: Input }],
        successMsg: [{ type: HostBinding, args: ['class.success-message',] }],
        messageId: [{ type: HostBinding, args: ['attr.id',] }]
    };
    return MdbSuccessDirective;
}());
export { MdbSuccessDirective };
if (false) {
    /** @type {?} */
    MdbSuccessDirective.prototype.id;
    /** @type {?} */
    MdbSuccessDirective.prototype.successMsg;
    /** @type {?} */
    MdbSuccessDirective.prototype.messageId;
    /** @type {?} */
    MdbSuccessDirective.prototype.textareaListenFunction;
    /**
     * @type {?}
     * @private
     */
    MdbSuccessDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbSuccessDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pbnB1dC11dGlsaXRpZXMvc3VjY2Vzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7SUFFcEcsZUFBZSxHQUFHLENBQUM7QUFFdkI7SUFXRSw2QkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUHRELE9BQUUsR0FBRyxpQkFBZSxlQUFlLEVBQUksQ0FBQztRQUVYLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDaEMsY0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFJc0IsQ0FBQzs7Ozs7OztJQUUzRCwyQ0FBYTs7Ozs7O0lBQXJCLFVBQXNCLEVBQU8sRUFBRSxRQUFnQjtRQUM3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUU7WUFDNUQsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4QixPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQzs7WUFYTyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFFMUUsSUFBSSxRQUFRLEVBQUU7O2dCQUNSLFFBQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxRQUFNLENBQUMsQ0FBQztZQUU3RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU87OztZQUFFO2dCQUNwRSxRQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMxQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBTSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQU51QyxVQUFVO2dCQUFFLFNBQVM7OztxQkFRMUQsS0FBSzs2QkFFTCxXQUFXLFNBQUMsdUJBQXVCOzRCQUNuQyxXQUFXLFNBQUMsU0FBUzs7SUFrQ3hCLDBCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F0Q1ksbUJBQW1COzs7SUFDOUIsaUNBQWlEOztJQUVqRCx5Q0FBd0Q7O0lBQ3hELHdDQUE0Qzs7SUFFNUMscURBQWlDOzs7OztJQUVyQixpQ0FBc0I7Ozs7O0lBQUUsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxubGV0IGRlZmF1bHRJZE51bWJlciA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21kYi1zdWNjZXNzJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJTdWNjZXNzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpZCA9IGBtZGItc3VjY2Vzcy0ke2RlZmF1bHRJZE51bWJlcisrfWA7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdWNjZXNzLW1lc3NhZ2UnKSBzdWNjZXNzTXNnID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJykgbWVzc2FnZUlkID0gdGhpcy5pZDtcblxuICB0ZXh0YXJlYUxpc3RlbkZ1bmN0aW9uOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2xvc2VzdEVsKGVsOiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICBmb3IgKDsgZWwgJiYgZWwgIT09IGRvY3VtZW50OyBlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLl9nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1kLXRleHRhcmVhJyk7XG5cbiAgICBpZiAodGV4dGFyZWEpIHtcbiAgICAgIGxldCBoZWlnaHQgPSB0ZXh0YXJlYS5vZmZzZXRIZWlnaHQgKyA0ICsgJ3B4JztcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndG9wJywgaGVpZ2h0KTtcblxuICAgICAgdGhpcy50ZXh0YXJlYUxpc3RlbkZ1bmN0aW9uID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGV4dGFyZWEsICdrZXl1cCcsICgpID0+IHtcbiAgICAgICAgaGVpZ2h0ID0gdGV4dGFyZWEub2Zmc2V0SGVpZ2h0ICsgNCArICdweCc7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndG9wJywgaGVpZ2h0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnRleHRhcmVhTGlzdGVuRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMudGV4dGFyZWFMaXN0ZW5GdW5jdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19