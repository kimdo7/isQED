/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
export class Positioning {
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    position(element, round = true) {
        /** @type {?} */
        let elPosition;
        /** @type {?} */
        let parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            /** @type {?} */
            const bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            /** @type {?} */
            const offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    offset(element, round = true) {
        /** @type {?} */
        const elBcr = element.getBoundingClientRect();
        /** @type {?} */
        const viewportOffset = {
            top: window.pageYOffset - ((/** @type {?} */ (document.documentElement))).clientTop,
            left: window.pageXOffset - ((/** @type {?} */ (document.documentElement))).clientLeft
        };
        /** @type {?} */
        let elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    positionElements(hostElement, targetElement, placement, appendToBody) {
        /** @type {?} */
        const hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        /** @type {?} */
        const shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        /** @type {?} */
        const shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        /** @type {?} */
        const targetElBCR = targetElement.getBoundingClientRect();
        /** @type {?} */
        const placementPrimary = placement.split(' ')[0] || 'top';
        /** @type {?} */
        const placementSecondary = placement.split(' ')[1] || 'center';
        /** @type {?} */
        let targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    }
    /**
     * @private
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    getStyle(element, prop) { return ((/** @type {?} */ (window.getComputedStyle(element))))[prop]; }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    isStaticPositioned(element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    offsetParent(element) {
        /** @type {?} */
        let offsetParentEl = (/** @type {?} */ (element.offsetParent)) || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = (/** @type {?} */ (offsetParentEl.offsetParent));
        }
        return offsetParentEl || document.documentElement;
    }
}
/** @type {?} */
const positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @return {?}
 */
export function positionElements(hostElement, targetElement, placement, appendToBody) {
    /** @type {?} */
    const pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = `${pos.top}px`;
    targetElement.style.left = `${pos.left}px`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy9uZy1wb3NpdGlvbmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFDZixRQUFRLENBQUMsT0FBb0IsRUFBRSxLQUFLLEdBQUcsSUFBSTs7WUFDNUMsVUFBc0I7O1lBQ3RCLFlBQVksR0FBZSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO1FBRTFGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssT0FBTyxFQUFFOztrQkFDNUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QyxVQUFVLEdBQUc7Z0JBQ1gsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2dCQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ3JCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztnQkFDZixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ3JCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2FBQ3BCLENBQUM7U0FDSDthQUFNOztrQkFDQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFFakQsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXpDLElBQUksY0FBYyxLQUFLLFFBQVEsQ0FBQyxlQUFlLEVBQUU7Z0JBQy9DLFlBQVksR0FBRyxJQUFJ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RyxtQkFBYSxPQUFPLENBQUMsWUFBWSxFQUFBLElBQUksUUFBUSxDQUFDLGVBQWU7UUFFbEYsT0FBTyxjQUFjLElBQUksY0FBYyxLQUFLLFFBQVEsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQy9HLGNBQWMsR0FBRyxtQkFBYSxjQUFjLENBQUMsWUFBWSxFQUFBLENBQUM7U0FDM0Q7UUFFRCxPQUFPLGNBQWMsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQ3BELENBQUM7Q0FDRjs7TUFFSyxlQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUU7Ozs7Ozs7O0FBRXpDLE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsV0FBd0IsRUFBRSxhQUEwQixFQUFFLFNBQWlCLEVBQUUsWUFBc0I7O1VBQ3pGLEdBQUcsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDO0lBRWpHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3pDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQzdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5cbiAvLyBwcmV2aW91cyB2ZXJzaW9uOlxuIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL2Jvb3RzdHJhcC9ibG9iLzA3YzMxZDA3MzFmN2NiMDY4YTE5MzJiOGUwMWQyMzEyYjc5NmI0ZWMvc3JjL3Bvc2l0aW9uL3Bvc2l0aW9uLmpzXG4gLy8gdHNsaW50OmRpc2FibGVcbiBleHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICAgcHVibGljIHBvc2l0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBDbGllbnRSZWN0IHtcbiAgICAgbGV0IGVsUG9zaXRpb246IENsaWVudFJlY3Q7XG4gICAgIGxldCBwYXJlbnRPZmZzZXQ6IENsaWVudFJlY3QgPSB7d2lkdGg6IDAsIGhlaWdodDogMCwgdG9wOiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwfTtcblxuICAgICBpZiAodGhpcy5nZXRTdHlsZShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgICAgIGNvbnN0IGJjUmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgZWxQb3NpdGlvbiA9IHtcbiAgICAgICAgIHdpZHRoOiBiY1JlY3Qud2lkdGgsXG4gICAgICAgICBoZWlnaHQ6IGJjUmVjdC5oZWlnaHQsXG4gICAgICAgICB0b3A6IGJjUmVjdC50b3AsXG4gICAgICAgICBib3R0b206IGJjUmVjdC5ib3R0b20sXG4gICAgICAgICBsZWZ0OiBiY1JlY3QubGVmdCxcbiAgICAgICAgIHJpZ2h0OiBiY1JlY3QucmlnaHRcbiAgICAgICB9O1xuICAgICB9IGVsc2Uge1xuICAgICAgIGNvbnN0IG9mZnNldFBhcmVudEVsID0gdGhpcy5vZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgICAgICBlbFBvc2l0aW9uID0gdGhpcy5vZmZzZXQoZWxlbWVudCwgZmFsc2UpO1xuXG4gICAgICAgaWYgKG9mZnNldFBhcmVudEVsICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgIHBhcmVudE9mZnNldCA9IHRoaXMub2Zmc2V0KG9mZnNldFBhcmVudEVsLCBmYWxzZSk7XG4gICAgICAgfVxuXG4gICAgICAgcGFyZW50T2Zmc2V0LnRvcCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRUb3A7XG4gICAgICAgcGFyZW50T2Zmc2V0LmxlZnQgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50TGVmdDtcbiAgICAgfVxuXG4gICAgIGVsUG9zaXRpb24udG9wIC09IHBhcmVudE9mZnNldC50b3A7XG4gICAgIGVsUG9zaXRpb24uYm90dG9tIC09IHBhcmVudE9mZnNldC50b3A7XG4gICAgIGVsUG9zaXRpb24ubGVmdCAtPSBwYXJlbnRPZmZzZXQubGVmdDtcbiAgICAgZWxQb3NpdGlvbi5yaWdodCAtPSBwYXJlbnRPZmZzZXQubGVmdDtcblxuICAgICBpZiAocm91bmQpIHtcbiAgICAgICBlbFBvc2l0aW9uLnRvcCA9IE1hdGgucm91bmQoZWxQb3NpdGlvbi50b3ApO1xuICAgICAgIGVsUG9zaXRpb24uYm90dG9tID0gTWF0aC5yb3VuZChlbFBvc2l0aW9uLmJvdHRvbSk7XG4gICAgICAgZWxQb3NpdGlvbi5sZWZ0ID0gTWF0aC5yb3VuZChlbFBvc2l0aW9uLmxlZnQpO1xuICAgICAgIGVsUG9zaXRpb24ucmlnaHQgPSBNYXRoLnJvdW5kKGVsUG9zaXRpb24ucmlnaHQpO1xuICAgICB9XG5cbiAgICAgcmV0dXJuIGVsUG9zaXRpb247XG4gICB9XG5cbiAgIHB1YmxpYyBvZmZzZXQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHJvdW5kID0gdHJ1ZSk6IENsaWVudFJlY3Qge1xuICAgICBjb25zdCBlbEJjciA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgIGNvbnN0IHZpZXdwb3J0T2Zmc2V0ID0ge1xuICAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0IC0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBhbnkpLmNsaWVudFRvcCxcbiAgICAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgLSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIGFueSkuY2xpZW50TGVmdFxuICAgICB9O1xuXG4gICAgIGxldCBlbE9mZnNldCA9IHtcbiAgICAgICBoZWlnaHQ6IGVsQmNyLmhlaWdodCB8fCBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICB3aWR0aDogZWxCY3Iud2lkdGggfHwgZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICB0b3A6IGVsQmNyLnRvcCArIHZpZXdwb3J0T2Zmc2V0LnRvcCxcbiAgICAgICBib3R0b206IGVsQmNyLmJvdHRvbSArIHZpZXdwb3J0T2Zmc2V0LnRvcCxcbiAgICAgICBsZWZ0OiBlbEJjci5sZWZ0ICsgdmlld3BvcnRPZmZzZXQubGVmdCxcbiAgICAgICByaWdodDogZWxCY3IucmlnaHQgKyB2aWV3cG9ydE9mZnNldC5sZWZ0XG4gICAgIH07XG5cbiAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgZWxPZmZzZXQuaGVpZ2h0ID0gTWF0aC5yb3VuZChlbE9mZnNldC5oZWlnaHQpO1xuICAgICAgIGVsT2Zmc2V0LndpZHRoID0gTWF0aC5yb3VuZChlbE9mZnNldC53aWR0aCk7XG4gICAgICAgZWxPZmZzZXQudG9wID0gTWF0aC5yb3VuZChlbE9mZnNldC50b3ApO1xuICAgICAgIGVsT2Zmc2V0LmJvdHRvbSA9IE1hdGgucm91bmQoZWxPZmZzZXQuYm90dG9tKTtcbiAgICAgICBlbE9mZnNldC5sZWZ0ID0gTWF0aC5yb3VuZChlbE9mZnNldC5sZWZ0KTtcbiAgICAgICBlbE9mZnNldC5yaWdodCA9IE1hdGgucm91bmQoZWxPZmZzZXQucmlnaHQpO1xuICAgICB9XG5cbiAgICAgcmV0dXJuIGVsT2Zmc2V0O1xuICAgfVxuXG4gICBwdWJsaWMgcG9zaXRpb25FbGVtZW50cyhob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwbGFjZW1lbnQ6IHN0cmluZywgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbik6XG4gICBDbGllbnRSZWN0IHtcbiAgICAgY29uc3QgaG9zdEVsUG9zaXRpb24gPSBhcHBlbmRUb0JvZHkgPyB0aGlzLm9mZnNldChob3N0RWxlbWVudCwgZmFsc2UpIDogdGhpcy5wb3NpdGlvbihob3N0RWxlbWVudCwgZmFsc2UpO1xuICAgICBjb25zdCBzaGlmdFdpZHRoOiBhbnkgPSB7XG4gICAgICAgbGVmdDogaG9zdEVsUG9zaXRpb24ubGVmdCxcbiAgICAgICBjZW50ZXI6IGhvc3RFbFBvc2l0aW9uLmxlZnQgKyBob3N0RWxQb3NpdGlvbi53aWR0aCAvIDIgLSB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoIC8gMixcbiAgICAgICByaWdodDogaG9zdEVsUG9zaXRpb24ubGVmdCArIGhvc3RFbFBvc2l0aW9uLndpZHRoXG4gICAgIH07XG4gICAgIGNvbnN0IHNoaWZ0SGVpZ2h0OiBhbnkgPSB7XG4gICAgICAgdG9wOiBob3N0RWxQb3NpdGlvbi50b3AsXG4gICAgICAgY2VudGVyOiBob3N0RWxQb3NpdGlvbi50b3AgKyBob3N0RWxQb3NpdGlvbi5oZWlnaHQgLyAyIC0gdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgIGJvdHRvbTogaG9zdEVsUG9zaXRpb24udG9wICsgaG9zdEVsUG9zaXRpb24uaGVpZ2h0XG4gICAgIH07XG4gICAgIGNvbnN0IHRhcmdldEVsQkNSID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgY29uc3QgcGxhY2VtZW50UHJpbWFyeSA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzBdIHx8ICd0b3AnO1xuICAgICBjb25zdCBwbGFjZW1lbnRTZWNvbmRhcnkgPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXSB8fCAnY2VudGVyJztcblxuICAgICBsZXQgdGFyZ2V0RWxQb3NpdGlvbjogQ2xpZW50UmVjdCA9IHtcbiAgICAgICBoZWlnaHQ6IHRhcmdldEVsQkNSLmhlaWdodCB8fCB0YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICB3aWR0aDogdGFyZ2V0RWxCQ1Iud2lkdGggfHwgdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICB0b3A6IDAsXG4gICAgICAgYm90dG9tOiB0YXJnZXRFbEJDUi5oZWlnaHQgfHwgdGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgbGVmdDogMCxcbiAgICAgICByaWdodDogdGFyZ2V0RWxCQ1Iud2lkdGggfHwgdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICB9O1xuXG4gICAgIHN3aXRjaCAocGxhY2VtZW50UHJpbWFyeSkge1xuICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgdGFyZ2V0RWxQb3NpdGlvbi50b3AgPSBob3N0RWxQb3NpdGlvbi50b3AgLSB0YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSArPSBob3N0RWxQb3NpdGlvbi50b3AgLSB0YXJnZXRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmxlZnQgPSBzaGlmdFdpZHRoW3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5yaWdodCArPSBzaGlmdFdpZHRoW3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgYnJlYWs7XG4gICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCA9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFByaW1hcnldO1xuICAgICAgIHRhcmdldEVsUG9zaXRpb24uYm90dG9tICs9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFByaW1hcnldO1xuICAgICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9IHNoaWZ0V2lkdGhbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnJpZ2h0ICs9IHNoaWZ0V2lkdGhbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICBicmVhaztcbiAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCA9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5ib3R0b20gKz0gc2hpZnRIZWlnaHRbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmxlZnQgPSBob3N0RWxQb3NpdGlvbi5sZWZ0IC0gdGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnJpZ2h0ICs9IGhvc3RFbFBvc2l0aW9uLmxlZnQgLSB0YXJnZXRFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgIGJyZWFrO1xuICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICB0YXJnZXRFbFBvc2l0aW9uLnRvcCA9IHNoaWZ0SGVpZ2h0W3BsYWNlbWVudFNlY29uZGFyeV07XG4gICAgICAgdGFyZ2V0RWxQb3NpdGlvbi5ib3R0b20gKz0gc2hpZnRIZWlnaHRbcGxhY2VtZW50U2Vjb25kYXJ5XTtcbiAgICAgICB0YXJnZXRFbFBvc2l0aW9uLmxlZnQgPSBzaGlmdFdpZHRoW3BsYWNlbWVudFByaW1hcnldO1xuICAgICAgIHRhcmdldEVsUG9zaXRpb24ucmlnaHQgKz0gc2hpZnRXaWR0aFtwbGFjZW1lbnRQcmltYXJ5XTtcbiAgICAgICBicmVhaztcbiAgICAgfVxuXG4gICAgIHRhcmdldEVsUG9zaXRpb24udG9wID0gTWF0aC5yb3VuZCh0YXJnZXRFbFBvc2l0aW9uLnRvcCk7XG4gICAgIHRhcmdldEVsUG9zaXRpb24uYm90dG9tID0gTWF0aC5yb3VuZCh0YXJnZXRFbFBvc2l0aW9uLmJvdHRvbSk7XG4gICAgIHRhcmdldEVsUG9zaXRpb24ubGVmdCA9IE1hdGgucm91bmQodGFyZ2V0RWxQb3NpdGlvbi5sZWZ0KTtcbiAgICAgdGFyZ2V0RWxQb3NpdGlvbi5yaWdodCA9IE1hdGgucm91bmQodGFyZ2V0RWxQb3NpdGlvbi5yaWdodCk7XG5cbiAgICAgcmV0dXJuIHRhcmdldEVsUG9zaXRpb247XG4gICB9XG5cbiAgIHByaXZhdGUgZ2V0U3R5bGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3A6IHN0cmluZyk6IHN0cmluZyB7IHJldHVybiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkgYXMgYW55KVtwcm9wXTsgfVxuXG4gICBwcml2YXRlIGlzU3RhdGljUG9zaXRpb25lZChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgICByZXR1cm4gKHRoaXMuZ2V0U3R5bGUoZWxlbWVudCwgJ3Bvc2l0aW9uJykgfHwgJ3N0YXRpYycpID09PSAnc3RhdGljJztcbiAgIH1cblxuICAgcHJpdmF0ZSBvZmZzZXRQYXJlbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgIGxldCBvZmZzZXRQYXJlbnRFbCA9IDxIVE1MRWxlbWVudD5lbGVtZW50Lm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgd2hpbGUgKG9mZnNldFBhcmVudEVsICYmIG9mZnNldFBhcmVudEVsICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgdGhpcy5pc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50RWwpKSB7XG4gICAgICAgb2Zmc2V0UGFyZW50RWwgPSA8SFRNTEVsZW1lbnQ+b2Zmc2V0UGFyZW50RWwub2Zmc2V0UGFyZW50O1xuICAgICB9XG5cbiAgICAgcmV0dXJuIG9mZnNldFBhcmVudEVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgIH1cbiB9XG5cbiBjb25zdCBwb3NpdGlvblNlcnZpY2UgPSBuZXcgUG9zaXRpb25pbmcoKTtcblxuIGV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbkVsZW1lbnRzKFxuICAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgcGxhY2VtZW50OiBzdHJpbmcsIGFwcGVuZFRvQm9keT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50LCBwbGFjZW1lbnQsIGFwcGVuZFRvQm9keSk7XG5cbiAgIHRhcmdldEVsZW1lbnQuc3R5bGUudG9wID0gYCR7cG9zLnRvcH1weGA7XG4gICB0YXJnZXRFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtwb3MubGVmdH1weGA7XG4gfVxuIl19