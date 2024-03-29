/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ElementRef } from '@angular/core';
import { positionElements } from './ng-positioning';
/**
 * @record
 */
export function PositioningOptions() { }
if (false) {
    /**
     * The DOM element, ElementRef, or a selector string of an element which will be moved
     * @type {?|undefined}
     */
    PositioningOptions.prototype.element;
    /**
     * The DOM element, ElementRef, or a selector string of an element which the element will be attached to
     * @type {?|undefined}
     */
    PositioningOptions.prototype.target;
    /**
     * A string of the form 'vert-attachment horiz-attachment' or 'placement'
     * - placement can be "top", "bottom", "left", "right"
     * not yet supported:
     * - vert-attachment can be any of 'top', 'middle', 'bottom'
     * - horiz-attachment can be any of 'left', 'center', 'right'
     * @type {?|undefined}
     */
    PositioningOptions.prototype.attachment;
    /**
     * A string similar to `attachment`. The one difference is that, if it's not provided,
     * `targetAttachment` will assume the mirror image of `attachment`.
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetAttachment;
    /**
     * A string of the form 'vert-offset horiz-offset'
     * - vert-offset and horiz-offset can be of the form "20px" or "55%"
     * @type {?|undefined}
     */
    PositioningOptions.prototype.offset;
    /**
     * A string similar to `offset`, but referring to the offset of the target
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetOffset;
    /**
     * If true component will be attached to body
     * @type {?|undefined}
     */
    PositioningOptions.prototype.appendToBody;
}
export class PositioningService {
    //  public position(options: PositioningOptions): void {
    /**
     * @param {?} options
     * @return {?}
     */
    position(options) {
        const { element, target, attachment, appendToBody } = options;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    _getHtmlElement(element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return (/** @type {?} */ (document.querySelector(element)));
        }
        if (element instanceof ElementRef) {
            return element.nativeElement;
        }
        return (/** @type {?} */ (element));
    }
}
PositioningService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRXBELHdDQStCSTs7Ozs7O0lBN0JGLHFDQUE0Qzs7Ozs7SUFHNUMsb0NBQTJDOzs7Ozs7Ozs7SUFVekMsd0NBQTBCOzs7Ozs7SUFJMUIsOENBQTBCOzs7Ozs7SUFLekIsb0NBQWdCOzs7OztJQUdoQiwwQ0FBc0I7Ozs7O0lBR3RCLDBDQUF1Qjs7QUFJekIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBRXJCLFFBQVEsQ0FBQyxPQUFpQztjQUMxQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBQyxHQUFHLE9BQU87UUFDM0QsZ0JBQWdCLENBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFDN0IsVUFBVSxFQUNWLFlBQVksQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxPQUEwQztRQUNoRSxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsT0FBTyxtQkFBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFlLENBQUM7U0FDdkQ7UUFFRCxJQUFJLE9BQU8sWUFBWSxVQUFVLEVBQUU7WUFDakMsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQzlCO1FBRUQsT0FBTyxtQkFBQSxPQUFPLEVBQWUsQ0FBQztJQUNoQyxDQUFDOzs7WUF2QkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBvc2l0aW9uRWxlbWVudHMgfSBmcm9tICcuL25nLXBvc2l0aW9uaW5nJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbmluZ09wdGlvbnMge1xuICAvKiogVGhlIERPTSBlbGVtZW50LCBFbGVtZW50UmVmLCBvciBhIHNlbGVjdG9yIHN0cmluZyBvZiBhbiBlbGVtZW50IHdoaWNoIHdpbGwgYmUgbW92ZWQgKi9cbiAgZWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcblxuICAvKiogVGhlIERPTSBlbGVtZW50LCBFbGVtZW50UmVmLCBvciBhIHNlbGVjdG9yIHN0cmluZyBvZiBhbiBlbGVtZW50IHdoaWNoIHRoZSBlbGVtZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gICovXG4gIHRhcmdldD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEEgc3RyaW5nIG9mIHRoZSBmb3JtICd2ZXJ0LWF0dGFjaG1lbnQgaG9yaXotYXR0YWNobWVudCcgb3IgJ3BsYWNlbWVudCdcbiAgICAgKiAtIHBsYWNlbWVudCBjYW4gYmUgXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgICAqIG5vdCB5ZXQgc3VwcG9ydGVkOlxuICAgICAqIC0gdmVydC1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJ1xuICAgICAqIC0gaG9yaXotYXR0YWNobWVudCBjYW4gYmUgYW55IG9mICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCdcbiAgICAgKi9cbiAgICAvLyAgYXR0YWNobWVudD86IHN0cmluZztcbiAgICBhdHRhY2htZW50Pzogc3RyaW5nIHwgYW55O1xuXG4gICAgLyoqIEEgc3RyaW5nIHNpbWlsYXIgdG8gYGF0dGFjaG1lbnRgLiBUaGUgb25lIGRpZmZlcmVuY2UgaXMgdGhhdCwgaWYgaXQncyBub3QgcHJvdmlkZWQsXG4gICAgYHRhcmdldEF0dGFjaG1lbnRgIHdpbGwgYXNzdW1lIHRoZSBtaXJyb3IgaW1hZ2Ugb2YgYGF0dGFjaG1lbnRgLiAqL1xuICAgIHRhcmdldEF0dGFjaG1lbnQ/OiBzdHJpbmc7XG5cbiAgICAvKiogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtb2Zmc2V0IGhvcml6LW9mZnNldCdcbiAgICAgKiAtIHZlcnQtb2Zmc2V0IGFuZCBob3Jpei1vZmZzZXQgY2FuIGJlIG9mIHRoZSBmb3JtIFwiMjBweFwiIG9yIFwiNTUlXCJcbiAgICAgKi9cbiAgICAgb2Zmc2V0Pzogc3RyaW5nO1xuXG4gICAgIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBvZmZzZXRgLCBidXQgcmVmZXJyaW5nIHRvIHRoZSBvZmZzZXQgb2YgdGhlIHRhcmdldCAqL1xuICAgICB0YXJnZXRPZmZzZXQ/OiBzdHJpbmc7XG5cbiAgICAgLyoqIElmIHRydWUgY29tcG9uZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gYm9keSAqL1xuICAgICBhcHBlbmRUb0JvZHk/OiBib29sZWFuO1xuICAgfVxuXG4gICBASW5qZWN0YWJsZSgpXG4gICBleHBvcnQgY2xhc3MgUG9zaXRpb25pbmdTZXJ2aWNlIHtcbiAgICAvLyAgcHVibGljIHBvc2l0aW9uKG9wdGlvbnM6IFBvc2l0aW9uaW5nT3B0aW9ucyk6IHZvaWQge1xuICAgICAgcHVibGljIHBvc2l0aW9uKG9wdGlvbnM6IFBvc2l0aW9uaW5nT3B0aW9ucyB8IGFueSk6IHZvaWQge1xuICAgICAgIGNvbnN0IHtlbGVtZW50LCB0YXJnZXQsIGF0dGFjaG1lbnQsIGFwcGVuZFRvQm9keX0gPSBvcHRpb25zO1xuICAgICAgIHBvc2l0aW9uRWxlbWVudHMoXG4gICAgICAgICB0aGlzLl9nZXRIdG1sRWxlbWVudCh0YXJnZXQpLFxuICAgICAgICAgdGhpcy5fZ2V0SHRtbEVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgICBhdHRhY2htZW50LFxuICAgICAgICAgYXBwZW5kVG9Cb2R5KTtcbiAgICAgfVxuXG4gICAgIHByaXZhdGUgX2dldEh0bWxFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAvLyBpdCBtZWFucyB0aGF0IHdlIGdvdCBhIHNlbGVjdG9yXG4gICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgfVxuXG4gICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XG4gICAgICAgICByZXR1cm4gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgIH1cblxuICAgICAgIHJldHVybiBlbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICB9XG4gICB9XG4iXX0=