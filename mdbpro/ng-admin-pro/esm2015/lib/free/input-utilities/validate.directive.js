/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
export class MdbValidateDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._validate = true;
        this._validateSuccess = true;
        this._validateError = true;
    }
    /**
     * @return {?}
     */
    get validate() { return this._validate; }
    /**
     * @param {?} value
     * @return {?}
     */
    set validate(value) {
        this._validate = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    get validateSuccess() { return this._validateSuccess; }
    /**
     * @param {?} value
     * @return {?}
     */
    set validateSuccess(value) {
        this._validateSuccess = value;
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    get validateError() { return this._validateError; }
    /**
     * @param {?} value
     * @return {?}
     */
    set validateError(value) {
        this._validateError = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    updateSuccessClass() {
        if (this.validate && this.validateSuccess) {
            this.renderer.addClass(this.el.nativeElement, 'validate-success');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-success');
        }
    }
    /**
     * @return {?}
     */
    updateErrorClass() {
        if (this.validate && this.validateError) {
            this.renderer.addClass(this.el.nativeElement, 'validate-error');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-error');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateSuccessClass();
        this.updateErrorClass();
    }
}
MdbValidateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbValidate]'
            },] }
];
/** @nocollapse */
MdbValidateDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
MdbValidateDirective.propDecorators = {
    mdbValidate: [{ type: Input }],
    validate: [{ type: Input }],
    validateSuccess: [{ type: Input }],
    validateError: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validate;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validateSuccess;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validateError;
    /** @type {?} */
    MdbValidateDirective.prototype.mdbValidate;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXQtdXRpbGl0aWVzL3ZhbGlkYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtoRixNQUFNLE9BQU8sb0JBQW9COzs7OztJQTJCL0IsWUFBb0IsUUFBbUIsRUFBVSxFQUFjO1FBQTNDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBMUJ2RCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztJQXdCb0MsQ0FBQzs7OztJQXJCbkUsSUFDSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDekMsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ0QsSUFDSSxlQUFlLEtBQUssT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOzs7OztJQUN2RCxJQUFJLGVBQWUsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUNELElBQ0ksYUFBYSxLQUFLLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ25ELElBQUksYUFBYSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ25FO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUFKa0MsU0FBUztZQUFFLFVBQVU7OzswQkFVckQsS0FBSzt1QkFDTCxLQUFLOzhCQU9MLEtBQUs7NEJBTUwsS0FBSzs7Ozs7OztJQWxCTix5Q0FBeUI7Ozs7O0lBQ3pCLGdEQUFnQzs7Ozs7SUFDaEMsOENBQThCOztJQUU5QiwyQ0FBOEI7Ozs7O0lBc0JsQix3Q0FBMkI7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlZhbGlkYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWRiVmFsaWRhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF92YWxpZGF0ZSA9IHRydWU7XG4gIHByaXZhdGUgX3ZhbGlkYXRlU3VjY2VzcyA9IHRydWU7XG4gIHByaXZhdGUgX3ZhbGlkYXRlRXJyb3IgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG1kYlZhbGlkYXRlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBnZXQgdmFsaWRhdGUoKSB7IHJldHVybiB0aGlzLl92YWxpZGF0ZTsgfVxuICBzZXQgdmFsaWRhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWxpZGF0ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlRXJyb3JDbGFzcygpO1xuICAgIHRoaXMudXBkYXRlU3VjY2Vzc0NsYXNzKCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHZhbGlkYXRlU3VjY2VzcygpIHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlU3VjY2VzczsgfVxuICBzZXQgdmFsaWRhdGVTdWNjZXNzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVTdWNjZXNzID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgdmFsaWRhdGVFcnJvcigpIHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlRXJyb3I7IH1cbiAgc2V0IHZhbGlkYXRlRXJyb3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWxpZGF0ZUVycm9yID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVFcnJvckNsYXNzKCk7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICB1cGRhdGVTdWNjZXNzQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMudmFsaWRhdGUgJiYgdGhpcy52YWxpZGF0ZVN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsaWRhdGUtc3VjY2VzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbGlkYXRlLXN1Y2Nlc3MnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVFcnJvckNsYXNzKCkge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlICYmIHRoaXMudmFsaWRhdGVFcnJvcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd2YWxpZGF0ZS1lcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbGlkYXRlLWVycm9yJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yQ2xhc3MoKTtcbiAgfVxuXG59XG4iXX0=