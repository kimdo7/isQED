/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';
/** @type {?} */
var defaultIdNumber = 0;
var MdbErrorDirective = /** @class */ (function () {
    function MdbErrorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = "mdb-error-" + defaultIdNumber++;
        this.errorMsg = true;
        this.messageId = this.id;
    }
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    MdbErrorDirective.prototype._getClosestEl = /**
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
    MdbErrorDirective.prototype.ngOnInit = /**
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
    MdbErrorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
    };
    MdbErrorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdb-error'
                },] }
    ];
    /** @nocollapse */
    MdbErrorDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbErrorDirective.propDecorators = {
        id: [{ type: Input }],
        errorMsg: [{ type: HostBinding, args: ['class.error-message',] }],
        messageId: [{ type: HostBinding, args: ['attr.id',] }]
    };
    return MdbErrorDirective;
}());
export { MdbErrorDirective };
if (false) {
    /** @type {?} */
    MdbErrorDirective.prototype.id;
    /** @type {?} */
    MdbErrorDirective.prototype.errorMsg;
    /** @type {?} */
    MdbErrorDirective.prototype.messageId;
    /** @type {?} */
    MdbErrorDirective.prototype.textareaListenFunction;
    /**
     * @type {?}
     * @private
     */
    MdbErrorDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbErrorDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXQtdXRpbGl0aWVzL2Vycm9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLFVBQVUsRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7O0lBRXBHLGVBQWUsR0FBRyxDQUFDO0FBRXZCO0lBV0UsMkJBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVB0RCxPQUFFLEdBQUcsZUFBYSxlQUFlLEVBQUksQ0FBQztRQUVYLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFJc0IsQ0FBQzs7Ozs7OztJQUUzRCx5Q0FBYTs7Ozs7O0lBQXJCLFVBQXNCLEVBQU8sRUFBRSxRQUFnQjtRQUM3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUU7WUFDNUQsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4QixPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQzs7WUFYTyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFFMUUsSUFBSSxRQUFRLEVBQUU7O2dCQUNSLFFBQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxRQUFNLENBQUMsQ0FBQztZQUU3RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU87OztZQUFFO2dCQUNwRSxRQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMxQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBTSxDQUFDLENBQUM7WUFDL0QsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCOzs7O2dCQU4rQyxVQUFVO2dCQUFFLFNBQVM7OztxQkFRbEUsS0FBSzsyQkFFTCxXQUFXLFNBQUMscUJBQXFCOzRCQUNqQyxXQUFXLFNBQUMsU0FBUzs7SUFrQ3hCLHdCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F0Q1ksaUJBQWlCOzs7SUFDNUIsK0JBQStDOztJQUUvQyxxQ0FBb0Q7O0lBQ3BELHNDQUE0Qzs7SUFFNUMsbURBQWlDOzs7OztJQUVyQiwrQkFBc0I7Ozs7O0lBQUUscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxubGV0IGRlZmF1bHRJZE51bWJlciA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21kYi1lcnJvcidcbn0pXG5leHBvcnQgY2xhc3MgTWRiRXJyb3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlkID0gYG1kYi1lcnJvci0ke2RlZmF1bHRJZE51bWJlcisrfWA7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5lcnJvci1tZXNzYWdlJykgZXJyb3JNc2cgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKSBtZXNzYWdlSWQgPSB0aGlzLmlkO1xuXG4gIHRleHRhcmVhTGlzdGVuRnVuY3Rpb246IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBwcml2YXRlIF9nZXRDbG9zZXN0RWwoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGZvciAoOyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuX2dldENsb3Nlc3RFbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcubWQtdGV4dGFyZWEnKTtcblxuICAgIGlmICh0ZXh0YXJlYSkge1xuICAgICAgbGV0IGhlaWdodCA9IHRleHRhcmVhLm9mZnNldEhlaWdodCArIDQgKyAncHgnO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBoZWlnaHQpO1xuXG4gICAgICB0aGlzLnRleHRhcmVhTGlzdGVuRnVuY3Rpb24gPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0ZXh0YXJlYSwgJ2tleXVwJywgKCkgPT4ge1xuICAgICAgICBoZWlnaHQgPSB0ZXh0YXJlYS5vZmZzZXRIZWlnaHQgKyA0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBoZWlnaHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudGV4dGFyZWFMaXN0ZW5GdW5jdGlvbikge1xuICAgICAgdGhpcy50ZXh0YXJlYUxpc3RlbkZ1bmN0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iXX0=