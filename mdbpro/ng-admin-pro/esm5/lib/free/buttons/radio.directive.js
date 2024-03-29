/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostBinding, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ButtonRadioDirective; })),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, renderer) {
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.radioElementsArray = [];
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    // @HostBinding('class.active')
    // @HostBinding('class.active')
    /**
     * @param {?=} event
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = 
    // @HostBinding('class.active')
    /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        try {
            this.el.nativeElement.parentElement.childNodes.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.radioElementsArray.push(element);
            }));
            this.radioElementsArray.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.renderer.removeClass(element, 'active');
            }));
            this.renderer.addClass(event.target, 'active');
        }
        catch (error) {
        }
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ButtonRadioDirective.propDecorators = {
        mdbRadio: [{ type: Input }],
        uncheckable: [{ type: Input }],
        value: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.active',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ButtonRadioDirective;
}());
export { ButtonRadioDirective };
if (false) {
    /** @type {?} */
    ButtonRadioDirective.prototype.onChange;
    /** @type {?} */
    ButtonRadioDirective.prototype.onTouched;
    /** @type {?} */
    ButtonRadioDirective.prototype.radioElementsArray;
    /**
     * Radio button value, will be set to `ngModel`
     * @type {?}
     */
    ButtonRadioDirective.prototype.mdbRadio;
    /**
     * If `true` — radio button can be unchecked
     * @type {?}
     */
    ButtonRadioDirective.prototype.uncheckable;
    /**
     * Current value of radio component or group
     * @type {?}
     */
    ButtonRadioDirective.prototype.value;
    /**
     * @type {?}
     * @protected
     */
    ButtonRadioDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ButtonRadioDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvYnV0dG9ucy9yYWRpby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxNQUFNLEtBQU8sNEJBQTRCLEdBQVE7SUFDL0MsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7O0FBTUQ7SUFnREUsOEJBQW1CLEVBQWMsRUFBVSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBOUN2RCxhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUUzQyx1QkFBa0IsR0FBZSxFQUFFLENBQUM7UUE0Q2xDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQW5DRCxzQkFDVywwQ0FBUTs7OztRQURuQjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsK0JBQStCOzs7Ozs7SUFFeEIsc0NBQU87Ozs7OztJQURkLFVBQ2UsS0FBVztRQUQxQixpQkF5QkM7UUF2QkMsSUFBSTtZQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsT0FBWTtnQkFDbEUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxPQUFPO2dCQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO1FBQUMsT0FBTyxLQUFLLEVBQUU7U0FFZjtRQUNELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM3QyxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQU1NLHVDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRU0scUNBQU07OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsZ0JBQWdCOzs7Ozs7O0lBQ1QseUNBQVU7Ozs7Ozs7SUFBakIsVUFBa0IsS0FBVTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLCtDQUFnQjs7OztJQUF2QixVQUF3QixFQUFPO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU0sZ0RBQWlCOzs7O0lBQXhCLFVBQXlCLEVBQU87UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBeEVGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUMsRUFBRTs7OztnQkFiNUQsVUFBVTtnQkFBd0QsU0FBUzs7OzJCQW9CNUYsS0FBSzs4QkFFTCxLQUFLO3dCQUVMLEtBQUs7MkJBSUwsV0FBVyxTQUFDLGNBQWM7MEJBTTFCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBb0RuQywyQkFBQztDQUFBLEFBekVELElBeUVDO1NBeEVZLG9CQUFvQjs7O0lBQy9CLHdDQUEwQzs7SUFDMUMseUNBQTJDOztJQUUzQyxrREFBb0M7Ozs7O0lBRXBDLHdDQUE4Qjs7Ozs7SUFFOUIsMkNBQXFDOzs7OztJQUVyQyxxQ0FBMkI7Ozs7O0lBRTNCLGtDQUF5Qjs7Ozs7SUFtQ1Usd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IFJBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKlxuKiBDcmVhdGUgcmFkaW8gYnV0dG9ucyBvciBncm91cHMgb2YgYnV0dG9ucy5cbiogQSB2YWx1ZSBvZiBhIHNlbGVjdGVkIGJ1dHRvbiBpcyBib3VuZCB0byBhIHZhcmlhYmxlIHNwZWNpZmllZCB2aWEgbmdNb2RlbC5cbiovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbWRiUmFkaW9dJywgcHJvdmlkZXJzOiBbUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0gfSlcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0RpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBwdWJsaWMgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHVibGljIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIHJhZGlvRWxlbWVudHNBcnJheTogQXJyYXk8YW55PiA9IFtdO1xuICAvKiogUmFkaW8gYnV0dG9uIHZhbHVlLCB3aWxsIGJlIHNldCB0byBgbmdNb2RlbGAgKi9cbiAgQElucHV0KCkgcHVibGljIG1kYlJhZGlvOiBhbnk7XG4gIC8qKiBJZiBgdHJ1ZWAg4oCUIHJhZGlvIGJ1dHRvbiBjYW4gYmUgdW5jaGVja2VkICovXG4gIEBJbnB1dCgpIHB1YmxpYyB1bmNoZWNrYWJsZTogYm9vbGVhbjtcbiAgLyoqIEN1cnJlbnQgdmFsdWUgb2YgcmFkaW8gY29tcG9uZW50IG9yIGdyb3VwICovXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIHB1YmxpYyBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWRiUmFkaW8gPT09IHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ/OiBhbnkpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5yYWRpb0VsZW1lbnRzQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yYWRpb0VsZW1lbnRzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZXZlbnQudGFyZ2V0LCAnYWN0aXZlJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgIH1cbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bmNoZWNrYWJsZSAmJiB0aGlzLm1kYlJhZGlvID09PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5tZGJSYWRpbztcbiAgICB9XG5cbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVuY2hlY2thYmxlID0gdHlwZW9mIHRoaXMudW5jaGVja2FibGUgIT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgcHVibGljIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgLy8gbW9kZWwgLT4gdmlld1xuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19