/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, ViewChild, Input, EventEmitter, Output, HostListener, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, timer } from 'rxjs';
import { take } from 'rxjs/operators';
/** @type {?} */
export const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => CheckboxComponent)),
    multi: true
};
/** @type {?} */
let defaultIdNumber = 0;
export class MdbCheckboxChange {
}
if (false) {
    /** @type {?} */
    MdbCheckboxChange.prototype.element;
    /** @type {?} */
    MdbCheckboxChange.prototype.checked;
}
export class CheckboxComponent {
    constructor() {
        this.defaultId = `mdb-checkbox-${++defaultIdNumber}`;
        this.id = this.defaultId;
        this.checked = false;
        this.filledIn = false;
        this.indeterminate = false;
        this.rounded = false;
        this.checkboxPosition = 'left';
        this.default = false;
        this.inline = false;
        this.change = new EventEmitter();
        this.checkboxClicked = new Subject();
        // Control Value Accessor Methods
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
        });
        this.onTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onLabelClick(event) {
        event.stopPropagation();
        this.checkboxClicked.next(true);
    }
    /**
     * @return {?}
     */
    onDocumentClick() {
        this.checkboxClicked.next(false);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.indeterminate && !this.filledIn && !this.rounded) {
            this.inputEl.indeterminate = true;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('checked')) {
            this.checked = changes.checked.currentValue;
        }
    }
    /**
     * @return {?}
     */
    get changeEvent() {
        /** @type {?} */
        const newChangeEvent = new MdbCheckboxChange();
        newChangeEvent.element = this;
        newChangeEvent.checked = this.checked;
        return newChangeEvent;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCheckboxClick(event) {
        event.stopPropagation();
        this.toggle();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCheckboxChange(event) {
        event.stopPropagation();
        timer(0).subscribe((/**
         * @return {?}
         */
        () => this.change.emit(this.changeEvent)));
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.checkboxClicked.pipe(take(1)).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            if (!val) {
                this.onTouched();
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.checked = !!value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-checkbox',
                template: "<div\n  [ngClass]=\"{\n  'custom-control custom-checkbox': default,\n  'form-check': !default,\n  'custom-control-inline': inline,\n  'form-check-inline': inline && !default }\">\n  <input\n    #input\n    type=\"checkbox\"\n    class=\"custom-control-input\"\n    [ngClass]=\"{\n      'filled-in': filledIn || rounded,\n      'custom-control-input': default,\n      'form-check-input': !default }\"\n    [id]=\"id\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    [indeterminate]=\"indeterminate\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [tabIndex]=\"tabIndex\"\n    (blur)=\"onBlur()\"\n    (click)=\"onCheckboxClick($event)\"\n    (change)=\"onCheckboxChange($event)\">\n  <label\n    [ngClass]=\"{\n      'custom-control-label': default,\n      'form-check-label': !default,\n      'label-before': checkboxPosition === 'right',\n      'checkbox-rounded': rounded,\n      'disabled': disabled }\"\n    [attr.for]=\"id\">\n    <ng-content></ng-content>\n  </label>\n</div>\n",
                providers: [CHECKBOX_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    inputEl: [{ type: ViewChild, args: ['input',] }],
    class: [{ type: Input }],
    id: [{ type: Input }],
    required: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    filledIn: [{ type: Input }],
    indeterminate: [{ type: Input }],
    disabled: [{ type: Input }],
    rounded: [{ type: Input }],
    checkboxPosition: [{ type: Input }],
    default: [{ type: Input }],
    inline: [{ type: Input }],
    tabIndex: [{ type: Input }],
    change: [{ type: Output }],
    onLabelClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onDocumentClick: [{ type: HostListener, args: ['document:click',] }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.inputEl;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype.defaultId;
    /** @type {?} */
    CheckboxComponent.prototype.class;
    /** @type {?} */
    CheckboxComponent.prototype.id;
    /** @type {?} */
    CheckboxComponent.prototype.required;
    /** @type {?} */
    CheckboxComponent.prototype.name;
    /** @type {?} */
    CheckboxComponent.prototype.value;
    /** @type {?} */
    CheckboxComponent.prototype.checked;
    /** @type {?} */
    CheckboxComponent.prototype.filledIn;
    /** @type {?} */
    CheckboxComponent.prototype.indeterminate;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.rounded;
    /** @type {?} */
    CheckboxComponent.prototype.checkboxPosition;
    /** @type {?} */
    CheckboxComponent.prototype.default;
    /** @type {?} */
    CheckboxComponent.prototype.inline;
    /** @type {?} */
    CheckboxComponent.prototype.tabIndex;
    /** @type {?} */
    CheckboxComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype.checkboxClicked;
    /** @type {?} */
    CheckboxComponent.prototype.onChange;
    /** @type {?} */
    CheckboxComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBR04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFcEMsTUFBTSxPQUFPLHVCQUF1QixHQUFRO0lBQzFDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ1o7O0lBRUcsZUFBZSxHQUFHLENBQUM7QUFFdkIsTUFBTSxPQUFPLGlCQUFpQjtDQUc3Qjs7O0lBRkMsb0NBQTJCOztJQUMzQixvQ0FBaUI7O0FBUW5CLE1BQU0sT0FBTyxpQkFBaUI7SUF5QjVCO1FBdEJRLGNBQVMsR0FBRyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsQ0FBQztRQUcvQyxPQUFFLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUk1QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDMUIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdB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LENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7O1lBL0dGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIseWhDQUF3QztnQkFDeEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckM7Ozs7O3NCQUVFLFNBQVMsU0FBQyxPQUFPO29CQUlqQixLQUFLO2lCQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBR0wsTUFBTTsyQkFNTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQU1oQyxZQUFZLFNBQUMsZ0JBQWdCOzs7O0lBaEM5QixvQ0FBaUM7Ozs7O0lBRWpDLHNDQUF3RDs7SUFFeEQsa0NBQXVCOztJQUN2QiwrQkFBcUM7O0lBQ3JDLHFDQUEyQjs7SUFDM0IsaUNBQXNCOztJQUN0QixrQ0FBdUI7O0lBQ3ZCLG9DQUF5Qjs7SUFDekIscUNBQTBCOztJQUMxQiwwQ0FBK0I7O0lBQy9CLHFDQUEyQjs7SUFDM0Isb0NBQXlCOztJQUN6Qiw2Q0FBbUM7O0lBQ25DLG9DQUF5Qjs7SUFDekIsbUNBQXdCOztJQUN4QixxQ0FBMEI7O0lBRzFCLG1DQUEwRjs7Ozs7SUFFMUYsNENBQWlEOztJQStEakQscUNBQ0U7O0lBQ0Ysc0NBQ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgVmlld0NoaWxkLFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U3ViamVjdCwgdGltZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxubGV0IGRlZmF1bHRJZE51bWJlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBNZGJDaGVja2JveENoYW5nZSB7XG4gIGVsZW1lbnQ6IENoZWNrYm94Q29tcG9uZW50O1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXRFbDogYW55O1xuXG4gIHByaXZhdGUgZGVmYXVsdElkID0gYG1kYi1jaGVja2JveC0keysrZGVmYXVsdElkTnVtYmVyfWA7XG5cbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuZGVmYXVsdElkO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBjaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpbGxlZEluID0gZmFsc2U7XG4gIEBJbnB1dCgpIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvdW5kZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY2hlY2tib3hQb3NpdGlvbiA9ICdsZWZ0JztcbiAgQElucHV0KCkgZGVmYXVsdCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbmxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlcjtcblxuXG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxNZGJDaGVja2JveENoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1kYkNoZWNrYm94Q2hhbmdlPigpO1xuXG4gIHByaXZhdGUgY2hlY2tib3hDbGlja2VkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25MYWJlbENsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmNoZWNrYm94Q2xpY2tlZC5uZXh0KHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snKVxuICBvbkRvY3VtZW50Q2xpY2soKSB7XG4gICAgdGhpcy5jaGVja2JveENsaWNrZWQubmV4dChmYWxzZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pbmRldGVybWluYXRlICYmICF0aGlzLmZpbGxlZEluICYmICF0aGlzLnJvdW5kZWQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbC5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKSkge1xuICAgICAgdGhpcy5jaGVja2VkID0gY2hhbmdlcy5jaGVja2VkLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hhbmdlRXZlbnQoKSB7XG4gICAgY29uc3QgbmV3Q2hhbmdlRXZlbnQgPSBuZXcgTWRiQ2hlY2tib3hDaGFuZ2UoKTtcbiAgICBuZXdDaGFuZ2VFdmVudC5lbGVtZW50ID0gdGhpcztcbiAgICBuZXdDaGFuZ2VFdmVudC5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuICAgIHJldHVybiBuZXdDaGFuZ2VFdmVudDtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xuICB9XG5cbiAgb25DaGVja2JveENsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgfVxuXG4gIG9uQ2hlY2tib3hDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRpbWVyKDApLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY2hhbmdlRXZlbnQpKTtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmNoZWNrYm94Q2xpY2tlZC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIENvbnRyb2wgVmFsdWUgQWNjZXNzb3IgTWV0aG9kc1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgfTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge1xuICB9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=