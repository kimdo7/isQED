/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, ElementRef } from '@angular/core';
import { CarouselComponent } from './carousel.component';
export class SlideComponent {
    /**
     * @param {?} carousel
     * @param {?} el
     */
    constructor(carousel, el) {
        this.carousel = carousel;
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.el = null;
        // this.carousel = carousel;
        this.el = el;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    ngOnInit() {
        this.carousel.addSlide(this);
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-slide, mdb-carousel-item',
                template: `
  <ng-content></ng-content>
  `
            }] }
];
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent },
    { type: ElementRef }
];
SlideComponent.propDecorators = {
    active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
    animated: [{ type: HostBinding, args: ['class.animated',] }],
    directionNext: [{ type: HostBinding, args: ['class.carousel-item-next',] }],
    directionLeft: [{ type: HostBinding, args: ['class.carousel-item-left',] }],
    directionPrev: [{ type: HostBinding, args: ['class.carousel-item-prev',] }],
    directionRight: [{ type: HostBinding, args: ['class.carousel-item-right',] }],
    el: [{ type: HostBinding, args: ['class.carousel-item',] }]
};
if (false) {
    /**
     * Is current slide active
     * @type {?}
     */
    SlideComponent.prototype.active;
    /** @type {?} */
    SlideComponent.prototype.animated;
    /** @type {?} */
    SlideComponent.prototype.directionNext;
    /** @type {?} */
    SlideComponent.prototype.directionLeft;
    /** @type {?} */
    SlideComponent.prototype.directionPrev;
    /** @type {?} */
    SlideComponent.prototype.directionRight;
    /**
     * Wraps element by appropriate CSS classes
     * @type {?}
     */
    SlideComponent.prototype.el;
    /** @type {?} */
    SlideComponent.prototype.carousel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2Fyb3VzZWwvc2xpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUXpELE1BQU0sT0FBTyxjQUFjOzs7OztJQW1CekIsWUFBMEIsUUFBMkIsRUFBRSxFQUFjO1FBQTNDLGFBQVEsR0FBUixRQUFRLENBQW1CO1FBZHRCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDUCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUNyQixtQkFBYyxHQUFHLEtBQUssQ0FBQzs7OztRQVExRCxPQUFFLEdBQXFCLElBQUksQ0FBQztRQUdqQyw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7OztJQUdNLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUdNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7OztZQVBRLGlCQUFpQjtZQUZpQyxVQUFVOzs7cUJBYWxFLFdBQVcsU0FBQyxjQUFjLGNBQzFCLEtBQUs7dUJBQ0wsV0FBVyxTQUFDLGdCQUFnQjs0QkFDNUIsV0FBVyxTQUFDLDBCQUEwQjs0QkFDdEMsV0FBVyxTQUFDLDBCQUEwQjs0QkFDdEMsV0FBVyxTQUFDLDBCQUEwQjs2QkFDdEMsV0FBVyxTQUFDLDJCQUEyQjtpQkFFdkMsV0FBVyxTQUFDLHFCQUFxQjs7Ozs7OztJQVJsQyxnQ0FDZ0M7O0lBQ2hDLGtDQUFnRDs7SUFDaEQsdUNBQStEOztJQUMvRCx1Q0FBK0Q7O0lBQy9ELHVDQUErRDs7SUFDL0Qsd0NBQWlFOzs7OztJQUVqRSw0QkFNbUM7O0lBRWhCLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNsaWRlLCBtZGItY2Fyb3VzZWwtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKiogSXMgY3VycmVudCBzbGlkZSBhY3RpdmUgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBASW5wdXQoKSBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFuaW1hdGVkJykgYW5pbWF0ZWQgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtLW5leHQnKSBkaXJlY3Rpb25OZXh0ID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbS1sZWZ0JykgZGlyZWN0aW9uTGVmdCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0tcHJldicpIGRpcmVjdGlvblByZXYgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtLXJpZ2h0JykgZGlyZWN0aW9uUmlnaHQgPSBmYWxzZTtcbiAgLyoqIFdyYXBzIGVsZW1lbnQgYnkgYXBwcm9wcmlhdGUgQ1NTIGNsYXNzZXMgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtJylcblxuXG4gIC8qKiBMaW5rIHRvIFBhcmVudChjb250YWluZXItY29sbGVjdGlvbikgY29tcG9uZW50ICovXG4gIC8vIHB1YmxpYyBjYXJvdXNlbDogQ2Fyb3VzZWxDb21wb25lbnQ7XG4gIC8vIHB1YmxpYyBlbDogRWxlbWVudFJlZiA9IG51bGw7XG4gIHB1YmxpYyBlbDogRWxlbWVudFJlZiB8IGFueSA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBjYXJvdXNlbDogQ2Fyb3VzZWxDb21wb25lbnQsIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgLy8gdGhpcy5jYXJvdXNlbCA9IGNhcm91c2VsO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIGFkZGluZyBhIG5ldyBzbGlkZSBpbnN0YW5jZSAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYXJvdXNlbC5hZGRTbGlkZSh0aGlzKTtcbiAgfVxuXG4gIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIHJlbW92aW5nIG9mIHRoaXMgc2xpZGUgaW5zdGFuY2UgKi9cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWwucmVtb3ZlU2xpZGUodGhpcyk7XG4gIH1cbn1cbiJdfQ==