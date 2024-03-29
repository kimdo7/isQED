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
var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    //  public position(options: PositioningOptions): void {
    //  public position(options: PositioningOptions): void {
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = 
    //  public position(options: PositioningOptions): void {
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    PositioningService.prototype._getHtmlElement = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return (/** @type {?} */ (document.querySelector(element)));
        }
        if (element instanceof ElementRef) {
            return element.nativeElement;
        }
        return (/** @type {?} */ (element));
    };
    PositioningService.decorators = [
        { type: Injectable }
    ];
    return PositioningService;
}());
export { PositioningService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRXBELHdDQStCSTs7Ozs7O0lBN0JGLHFDQUE0Qzs7Ozs7SUFHNUMsb0NBQTJDOzs7Ozs7Ozs7SUFVekMsd0NBQTBCOzs7Ozs7SUFJMUIsOENBQTBCOzs7Ozs7SUFLekIsb0NBQWdCOzs7OztJQUdoQiwwQ0FBc0I7Ozs7O0lBR3RCLDBDQUF1Qjs7QUFHekI7SUFBQTtJQXdCQSxDQUFDO0lBdEJBLHdEQUF3RDs7Ozs7O0lBQy9DLHFDQUFROzs7Ozs7SUFBZixVQUFnQixPQUFpQztRQUN6QyxJQUFBLHlCQUFPLEVBQUUsdUJBQU0sRUFBRSwrQkFBVSxFQUFFLG1DQUFZO1FBQ2hELGdCQUFnQixDQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQzdCLFVBQVUsRUFDVixZQUFZLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFTyw0Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsT0FBMEM7UUFDaEUsa0NBQWtDO1FBQ2xDLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQy9CLE9BQU8sbUJBQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBZSxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxPQUFPLFlBQVksVUFBVSxFQUFFO1lBQ2pDLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQztTQUM5QjtRQUVELE9BQU8sbUJBQUEsT0FBTyxFQUFlLENBQUM7SUFDaEMsQ0FBQzs7Z0JBdkJGLFVBQVU7O0lBd0JYLHlCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcG9zaXRpb25FbGVtZW50cyB9IGZyb20gJy4vbmctcG9zaXRpb25pbmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uaW5nT3B0aW9ucyB7XG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggd2lsbCBiZSBtb3ZlZCAqL1xuICBlbGVtZW50PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nO1xuXG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggdGhlIGVsZW1lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byAgKi9cbiAgdGFyZ2V0PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtYXR0YWNobWVudCBob3Jpei1hdHRhY2htZW50JyBvciAncGxhY2VtZW50J1xuICAgICAqIC0gcGxhY2VtZW50IGNhbiBiZSBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAgICogbm90IHlldCBzdXBwb3J0ZWQ6XG4gICAgICogLSB2ZXJ0LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAndG9wJywgJ21pZGRsZScsICdib3R0b20nXG4gICAgICogLSBob3Jpei1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J1xuICAgICAqL1xuICAgIC8vICBhdHRhY2htZW50Pzogc3RyaW5nO1xuICAgIGF0dGFjaG1lbnQ/OiBzdHJpbmcgfCBhbnk7XG5cbiAgICAvKiogQSBzdHJpbmcgc2ltaWxhciB0byBgYXR0YWNobWVudGAuIFRoZSBvbmUgZGlmZmVyZW5jZSBpcyB0aGF0LCBpZiBpdCdzIG5vdCBwcm92aWRlZCxcbiAgICBgdGFyZ2V0QXR0YWNobWVudGAgd2lsbCBhc3N1bWUgdGhlIG1pcnJvciBpbWFnZSBvZiBgYXR0YWNobWVudGAuICovXG4gICAgdGFyZ2V0QXR0YWNobWVudD86IHN0cmluZztcblxuICAgIC8qKiBBIHN0cmluZyBvZiB0aGUgZm9ybSAndmVydC1vZmZzZXQgaG9yaXotb2Zmc2V0J1xuICAgICAqIC0gdmVydC1vZmZzZXQgYW5kIGhvcml6LW9mZnNldCBjYW4gYmUgb2YgdGhlIGZvcm0gXCIyMHB4XCIgb3IgXCI1NSVcIlxuICAgICAqL1xuICAgICBvZmZzZXQ/OiBzdHJpbmc7XG5cbiAgICAgLyoqIEEgc3RyaW5nIHNpbWlsYXIgdG8gYG9mZnNldGAsIGJ1dCByZWZlcnJpbmcgdG8gdGhlIG9mZnNldCBvZiB0aGUgdGFyZ2V0ICovXG4gICAgIHRhcmdldE9mZnNldD86IHN0cmluZztcblxuICAgICAvKiogSWYgdHJ1ZSBjb21wb25lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byBib2R5ICovXG4gICAgIGFwcGVuZFRvQm9keT86IGJvb2xlYW47XG4gICB9XG5cbiAgIEBJbmplY3RhYmxlKClcbiAgIGV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xuICAgIC8vICBwdWJsaWMgcG9zaXRpb24ob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zKTogdm9pZCB7XG4gICAgICBwdWJsaWMgcG9zaXRpb24ob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zIHwgYW55KTogdm9pZCB7XG4gICAgICAgY29uc3Qge2VsZW1lbnQsIHRhcmdldCwgYXR0YWNobWVudCwgYXBwZW5kVG9Cb2R5fSA9IG9wdGlvbnM7XG4gICAgICAgcG9zaXRpb25FbGVtZW50cyhcbiAgICAgICAgIHRoaXMuX2dldEh0bWxFbGVtZW50KHRhcmdldCksXG4gICAgICAgICB0aGlzLl9nZXRIdG1sRWxlbWVudChlbGVtZW50KSxcbiAgICAgICAgIGF0dGFjaG1lbnQsXG4gICAgICAgICBhcHBlbmRUb0JvZHkpO1xuICAgICB9XG5cbiAgICAgcHJpdmF0ZSBfZ2V0SHRtbEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgICAgIC8vIGl0IG1lYW5zIHRoYXQgd2UgZ290IGEgc2VsZWN0b3JcbiAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICB9XG5cbiAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYpIHtcbiAgICAgICAgIHJldHVybiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgfVxuXG4gICAgICAgcmV0dXJuIGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgIH1cbiAgIH1cbiJdfQ==