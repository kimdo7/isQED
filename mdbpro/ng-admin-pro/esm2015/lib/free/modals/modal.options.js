/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ModalOptions {
}
ModalOptions.decorators = [
    { type: Injectable }
];
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
export class MDBModalRef {
    /**
     * Hides the modal
     * @return {?}
     */
    hide() { }
}
MDBModalRef.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Reference to a component inside the modal. Null if modal's been created with TemplateRef
     * @type {?}
     */
    MDBModalRef.prototype.content;
}
/** @type {?} */
export const modalConfigDefaults = {
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
export const ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
export const Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */
export const TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
export const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL21vZGFscy9tb2RhbC5vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxZQUFZOzs7WUFEeEIsVUFBVTs7Ozs7OztJQU1ULGdDQUFvQzs7Ozs7SUFJbkMsZ0NBQW1COztJQUVuQiw2QkFBZ0I7Ozs7O0lBSWhCLDRCQUFlOzs7OztJQUlmLDJDQUE4Qjs7Ozs7SUFJOUIsNkJBQWU7Ozs7O0lBSWYsc0NBQXdCOztJQUN4QixnQ0FBbUI7O0lBQ25CLDhCQUFpQjs7SUFDakIsNEJBQWM7O0FBSWhCLE1BQU0sT0FBTyxXQUFXOzs7OztJQVF0QixJQUFJLEtBQVUsQ0FBQzs7O1lBVGhCLFVBQVU7Ozs7Ozs7SUFLVCw4QkFBcUI7OztBQU92QixNQUFNLE9BQU8sbUJBQW1CLEdBQWlCO0lBQy9DLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLEVBQUUsRUFBRTtDQUNUOztBQUVELE1BQU0sT0FBTyxTQUFTLEdBQVE7SUFDNUIsa0JBQWtCLEVBQUUseUJBQXlCO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsSUFBSSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixFQUFFLEVBQUUsSUFBSTs7SUFDUixJQUFJLEVBQUUsTUFBTSxDQUFFLE1BQU07Q0FDckI7O0FBRUQsTUFBTSxPQUFPLFFBQVEsR0FBUTtJQUMzQixNQUFNLEVBQUUsZUFBZTtJQUN2QixXQUFXLEVBQUUsdUJBQXVCO0lBQ3BDLFlBQVksRUFBRSx3QkFBd0I7SUFDdEMsYUFBYSxFQUFFLG9EQUFvRDtDQUNwRTs7QUFFRCxNQUFNLE9BQU8sbUJBQW1CLEdBQVE7SUFDdEMsS0FBSyxFQUFFLEdBQUc7SUFDVixRQUFRLEVBQUUsR0FBRztDQUNkOztBQUVELE1BQU0sT0FBTyxlQUFlLEdBQUc7SUFDN0IsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixHQUFHLEVBQUUsS0FBSztDQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWxPcHRpb25zIHtcbiAgLyoqXG4gICAqICBJbmNsdWRlcyBhIG1vZGFsLWJhY2tkcm9wIGVsZW1lbnQuIEFsdGVybmF0aXZlbHksIHNwZWNpZnkgc3RhdGljIGZvciBhIGJhY2tkcm9wIHdoaWNoIGRvZXNuJ3QgY2xvc2UgdGhlIG1vZGFsIG9uIGNsaWNrLlxuICAgKi9cbiAgLy8gIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnO1xuICBiYWNrZHJvcD86IGJvb2xlYW4gfCAnc3RhdGljJyB8IGFueTtcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gICAqL1xuICAga2V5Ym9hcmQ/OiBib29sZWFuO1xuXG4gICBmb2N1cz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG93cyB0aGUgbW9kYWwgd2hlbiBpbml0aWFsaXplZC5cbiAgICovXG4gICBzaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElnbm9yZSB0aGUgYmFja2Ryb3AgY2xpY2tcbiAgICovXG4gICBpZ25vcmVCYWNrZHJvcENsaWNrPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3Igb3BlbmVkIG1vZGFsXG4gICAqL1xuICAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUb2dnbGUgYW5pbWF0aW9uXG4gICAqL1xuICAgY29udGFpbmVyQ2xhc3M/OiBzdHJpbmc7XG4gICBhbmltYXRlZD86IGJvb2xlYW47XG4gICBzY3JvbGw/OiBib29sZWFuO1xuICAgZGF0YT86IE9iamVjdDtcbiB9XG5cbiBASW5qZWN0YWJsZSgpXG4gZXhwb3J0IGNsYXNzIE1EQk1vZGFsUmVmIHtcbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byBhIGNvbXBvbmVudCBpbnNpZGUgdGhlIG1vZGFsLiBOdWxsIGlmIG1vZGFsJ3MgYmVlbiBjcmVhdGVkIHdpdGggVGVtcGxhdGVSZWZcbiAgICovXG4gICBjb250ZW50PzogYW55IHwgbnVsbDtcbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBtb2RhbFxuICAgKi9cbiAgIGhpZGUoKTogdm9pZCB7fVxuIH1cblxuIGV4cG9ydCBjb25zdCBtb2RhbENvbmZpZ0RlZmF1bHRzOiBNb2RhbE9wdGlvbnMgPSB7XG4gICBiYWNrZHJvcDogdHJ1ZSxcbiAgIGtleWJvYXJkOiB0cnVlLFxuICAgZm9jdXM6IHRydWUsXG4gICBzaG93OiBmYWxzZSxcbiAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxuICAgY2xhc3M6ICcnLFxuICAgY29udGFpbmVyQ2xhc3M6ICcnLFxuICAgYW5pbWF0ZWQ6IHRydWUsXG4gICBzY3JvbGw6IGZhbHNlLFxuICAgZGF0YToge31cbiB9O1xuXG4gZXhwb3J0IGNvbnN0IENsYXNzTmFtZTogYW55ID0ge1xuICAgU0NST0xMQkFSX01FQVNVUkVSOiAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnLFxuICAgQkFDS0RST1A6ICdtb2RhbC1iYWNrZHJvcCcsXG4gICBPUEVOOiAnbW9kYWwtb3BlbicsXG4gICBGQURFOiAnZmFkZScsXG4gICBJTjogJ2luJywgICAgIC8vIGJzM1xuICAgU0hPVzogJ3Nob3cnICAvLyBiczRcbiB9O1xuXG4gZXhwb3J0IGNvbnN0IFNlbGVjdG9yOiBhbnkgPSB7XG4gICBESUFMT0c6ICcubW9kYWwtZGlhbG9nJyxcbiAgIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICAgREFUQV9ESVNNSVNTOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgIEZJWEVEX0NPTlRFTlQ6ICcubmF2YmFyLWZpeGVkLXRvcCwgLm5hdmJhci1maXhlZC1ib3R0b20sIC5pcy1maXhlZCdcbiB9O1xuXG4gZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25EdXJhdGlvbnM6IGFueSA9IHtcbiAgIE1PREFMOiAzMDAsXG4gICBCQUNLRFJPUDogMTUwXG4gfTtcblxuIGV4cG9ydCBjb25zdCBESVNNSVNTX1JFQVNPTlMgPSB7XG4gICBCQUNLUkRPUDogJ2JhY2tkcm9wLWNsaWNrJyxcbiAgIEVTQzogJ2VzYydcbiB9O1xuIl19