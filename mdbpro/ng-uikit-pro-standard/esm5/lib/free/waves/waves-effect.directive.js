/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
var WavesDirective = /** @class */ (function () {
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            var xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            var yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            var ripple = button.appendChild(tmp);
            /** @type {?} */
            var top_1 = yPos + 'px';
            /** @type {?} */
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            /** @type {?} */
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout((/**
         * @return {?}
         */
        function () {
            ripple.style.opacity = '0';
            setTimeout((/**
             * @return {?}
             */
            function () {
                button.removeChild(ripple);
            }), 750);
        }), 200);
    };
    WavesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbWavesEffect]'
                },] }
    ];
    /** @nocollapse */
    WavesDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    WavesDirective.propDecorators = {
        click: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return WavesDirective;
}());
export { WavesDirective };
if (false) {
    /** @type {?} */
    WavesDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRTtJQU1FLHdCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUdNLDhCQUFLOzs7O0lBRFosVUFDYSxLQUFVO1FBQ3JCLDJCQUEyQjtRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBRW5ELE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUM5QyxNQUFNLENBQUMsU0FBUyxJQUFJLGVBQWUsQ0FBQzthQUNyQzs7Z0JBRUssSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSTs7Z0JBQzFELElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUc7O2dCQUd6RCxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDekMsR0FBRyxDQUFDLFNBQVMsSUFBSSw2QkFBNkIsQ0FBQzs7Z0JBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs7Z0JBRWhDLEtBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSTs7Z0JBQ2pCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtZQUV4QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFHLENBQUM7WUFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztnQkFFaEIsS0FBSyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxrQkFBa0I7WUFFOUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7O2dCQUVsQixRQUFRLEdBQUcsR0FBRztZQUVwQixHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRy9DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQscUNBQVk7Ozs7O0lBQVosVUFBYSxNQUFXLEVBQUUsTUFBVztRQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTFDLFVBQVU7OztRQUFDO1lBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBRTNCLFVBQVU7OztZQUFDO2dCQUNULE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBSVYsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFIbUIsVUFBVTs7O3dCQVczQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXVEbkMscUJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTlEWSxjQUFjOzs7SUFDekIsNEJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYldhdmVzRWZmZWN0XSdcbn0pXG5leHBvcnQgY2xhc3MgV2F2ZXNEaXJlY3RpdmUge1xuICBlbDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuXG4gICAgICBjb25zdCBidXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3dhdmVzLWVmZmVjdCcpKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgKz0gJyB3YXZlcy1lZmZlY3QnO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB4UG9zID0gZXZlbnQuY2xpZW50WCAtIGJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgY29uc3QgeVBvcyA9IGV2ZW50LmNsaWVudFkgLSBidXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG5cbiAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG1wLmNsYXNzTmFtZSArPSAnd2F2ZXMtcmlwcGxlIHdhdmVzLXJpcHBsaW5nJztcbiAgICAgIGNvbnN0IHJpcHBsZSA9IGJ1dHRvbi5hcHBlbmRDaGlsZCh0bXApO1xuXG4gICAgICBjb25zdCB0b3AgPSB5UG9zICsgJ3B4JztcbiAgICAgIGNvbnN0IGxlZnQgPSB4UG9zICsgJ3B4JztcblxuICAgICAgdG1wLnN0eWxlLnRvcCA9IHRvcDtcbiAgICAgIHRtcC5zdHlsZS5sZWZ0ID0gbGVmdDtcblxuICAgICAgY29uc3Qgc2NhbGUgPSAnc2NhbGUoJyArICgoYnV0dG9uLmNsaWVudFdpZHRoIC8gMTAwKSAqIDMpICsgJykgdHJhbnNsYXRlKDAsMCknO1xuXG4gICAgICB0bXAuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gc2NhbGU7XG4gICAgICB0bXAuc3R5bGUudHJhbnNmb3JtID0gc2NhbGU7XG4gICAgICB0bXAuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgY29uc3QgZHVyYXRpb24gPSA3NTA7XG5cbiAgICAgIHRtcC5zdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgICB0bXAuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuXG5cbiAgICAgIHRoaXMucmVtb3ZlUmlwcGxlKGJ1dHRvbiwgcmlwcGxlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVSaXBwbGUoYnV0dG9uOiBhbnksIHJpcHBsZTogYW55KSB7XG4gICAgcmlwcGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdmVzLXJpcHBsaW5nJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJpcHBsZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKHJpcHBsZSk7XG4gICAgICB9LCA3NTApO1xuICAgIH0sIDIwMCk7XG5cblxuXG4gIH1cbn1cbiJdfQ==