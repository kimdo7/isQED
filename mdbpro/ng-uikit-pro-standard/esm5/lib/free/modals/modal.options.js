/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable }
    ];
    return ModalOptions;
}());
export { ModalOptions };
if (false) {
    /**
     *  Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.
     * @type {?}
     */
    ModalOptions.prototype.backdrop;
    /**
     * Closes the modal when escape key is pressed.
     * @type {?}
     */
    ModalOptions.prototype.keyboard;
    /** @type {?} */
    ModalOptions.prototype.focus;
    /**
     * Shows the modal when initialized.
     * @type {?}
     */
    ModalOptions.prototype.show;
    /**
     * Ignore the backdrop click
     * @type {?}
     */
    ModalOptions.prototype.ignoreBackdropClick;
    /**
     * Css class for opened modal
     * @type {?}
     */
    ModalOptions.prototype.class;
    /**
     * Toggle animation
     * @type {?}
     */
    ModalOptions.prototype.containerClass;
    /** @type {?} */
    ModalOptions.prototype.animated;
    /** @type {?} */
    ModalOptions.prototype.scroll;
    /** @type {?} */
    ModalOptions.prototype.data;
}
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     */
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = /**
     * Hides the modal
     * @return {?}
     */
    function () { };
    MDBModalRef.decorators = [
        { type: Injectable }
    ];
    return MDBModalRef;
}());
export { MDBModalRef };
if (false) {
    /**
     * Reference to a component inside the modal. Null if modal's been created with TemplateRef
     * @type {?}
     */
    MDBModalRef.prototype.content;
}
/** @type {?} */
export var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    scroll: false,
    data: {}
};
/** @type {?} */
export var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
export var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */
export var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
export var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL21vZGFscy9tb2RhbC5vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBQUE7SUFnQ0MsQ0FBQzs7Z0JBaENELFVBQVU7O0lBZ0NWLG1CQUFDO0NBQUEsQUFoQ0YsSUFnQ0U7U0EvQlcsWUFBWTs7Ozs7O0lBS3ZCLGdDQUFvQzs7Ozs7SUFJbkMsZ0NBQW1COztJQUVuQiw2QkFBZ0I7Ozs7O0lBSWhCLDRCQUFlOzs7OztJQUlmLDJDQUE4Qjs7Ozs7SUFJOUIsNkJBQWU7Ozs7O0lBSWYsc0NBQXdCOztJQUN4QixnQ0FBbUI7O0lBQ25CLDhCQUFpQjs7SUFDakIsNEJBQWM7O0FBR2hCO0lBQUE7SUFVQSxDQUFDO0lBSkE7O09BRUc7Ozs7O0lBQ0YsMEJBQUk7Ozs7SUFBSixjQUFjLENBQUM7O2dCQVRoQixVQUFVOztJQVVYLGtCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVFksV0FBVzs7Ozs7O0lBSXRCLDhCQUFxQjs7O0FBT3ZCLE1BQU0sS0FBTyxtQkFBbUIsR0FBaUI7SUFDL0MsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLEtBQUssRUFBRSxJQUFJO0lBQ1gsSUFBSSxFQUFFLEtBQUs7SUFDWCxtQkFBbUIsRUFBRSxLQUFLO0lBQzFCLEtBQUssRUFBRSxFQUFFO0lBQ1QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsUUFBUSxFQUFFLElBQUk7SUFDZCxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSxFQUFFO0NBQ1Q7O0FBRUQsTUFBTSxLQUFPLFNBQVMsR0FBUTtJQUM1QixrQkFBa0IsRUFBRSx5QkFBeUI7SUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsTUFBTTtJQUNaLEVBQUUsRUFBRSxJQUFJOztJQUNSLElBQUksRUFBRSxNQUFNLENBQUUsTUFBTTtDQUNyQjs7QUFFRCxNQUFNLEtBQU8sUUFBUSxHQUFRO0lBQzNCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsb0RBQW9EO0NBQ3BFOztBQUVELE1BQU0sS0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxLQUFLLEVBQUUsR0FBRztJQUNWLFFBQVEsRUFBRSxHQUFHO0NBQ2Q7O0FBRUQsTUFBTSxLQUFPLGVBQWUsR0FBRztJQUM3QixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLEdBQUcsRUFBRSxLQUFLO0NBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbE9wdGlvbnMge1xuICAvKipcbiAgICogIEluY2x1ZGVzIGEgbW9kYWwtYmFja2Ryb3AgZWxlbWVudC4gQWx0ZXJuYXRpdmVseSwgc3BlY2lmeSBzdGF0aWMgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXG4gICAqL1xuICAvLyAgYmFja2Ryb3A/OiBib29sZWFuIHwgJ3N0YXRpYyc7XG4gIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnIHwgYW55O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAgICovXG4gICBrZXlib2FyZD86IGJvb2xlYW47XG5cbiAgIGZvY3VzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3dzIHRoZSBtb2RhbCB3aGVuIGluaXRpYWxpemVkLlxuICAgKi9cbiAgIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogSWdub3JlIHRoZSBiYWNrZHJvcCBjbGlja1xuICAgKi9cbiAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xuICAvKipcbiAgICogQ3NzIGNsYXNzIGZvciBvcGVuZWQgbW9kYWxcbiAgICovXG4gICBjbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRvZ2dsZSBhbmltYXRpb25cbiAgICovXG4gICBjb250YWluZXJDbGFzcz86IHN0cmluZztcbiAgIGFuaW1hdGVkPzogYm9vbGVhbjtcbiAgIHNjcm9sbD86IGJvb2xlYW47XG4gICBkYXRhPzogT2JqZWN0O1xuIH1cblxuIEBJbmplY3RhYmxlKClcbiBleHBvcnQgY2xhc3MgTURCTW9kYWxSZWYge1xuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIGEgY29tcG9uZW50IGluc2lkZSB0aGUgbW9kYWwuIE51bGwgaWYgbW9kYWwncyBiZWVuIGNyZWF0ZWQgd2l0aCBUZW1wbGF0ZVJlZlxuICAgKi9cbiAgIGNvbnRlbnQ/OiBhbnkgfCBudWxsO1xuICAvKipcbiAgICogSGlkZXMgdGhlIG1vZGFsXG4gICAqL1xuICAgaGlkZSgpOiB2b2lkIHt9XG4gfVxuXG4gZXhwb3J0IGNvbnN0IG1vZGFsQ29uZmlnRGVmYXVsdHM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgIGJhY2tkcm9wOiB0cnVlLFxuICAga2V5Ym9hcmQ6IHRydWUsXG4gICBmb2N1czogdHJ1ZSxcbiAgIHNob3c6IGZhbHNlLFxuICAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXG4gICBjbGFzczogJycsXG4gICBjb250YWluZXJDbGFzczogJycsXG4gICBhbmltYXRlZDogdHJ1ZSxcbiAgIHNjcm9sbDogZmFsc2UsXG4gICBkYXRhOiB7fVxuIH07XG5cbiBleHBvcnQgY29uc3QgQ2xhc3NOYW1lOiBhbnkgPSB7XG4gICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gICBCQUNLRFJPUDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgIE9QRU46ICdtb2RhbC1vcGVuJyxcbiAgIEZBREU6ICdmYWRlJyxcbiAgIElOOiAnaW4nLCAgICAgLy8gYnMzXG4gICBTSE9XOiAnc2hvdycgIC8vIGJzNFxuIH07XG5cbiBleHBvcnQgY29uc3QgU2VsZWN0b3I6IGFueSA9IHtcbiAgIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxuICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICAgRklYRURfQ09OVEVOVDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJ1xuIH07XG5cbiBleHBvcnQgY29uc3QgVHJhbnNpdGlvbkR1cmF0aW9uczogYW55ID0ge1xuICAgTU9EQUw6IDMwMCxcbiAgIEJBQ0tEUk9QOiAxNTBcbiB9O1xuXG4gZXhwb3J0IGNvbnN0IERJU01JU1NfUkVBU09OUyA9IHtcbiAgIEJBQ0tSRE9QOiAnYmFja2Ryb3AtY2xpY2snLFxuICAgRVNDOiAnZXNjJ1xuIH07XG4iXX0=