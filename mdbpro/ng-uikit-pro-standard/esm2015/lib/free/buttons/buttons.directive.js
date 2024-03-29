/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
export class MdbBtnDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.color = '';
        this.rounded = false;
        this.gradient = '';
        this.outline = false;
        this.flat = false;
        this.size = '';
        this.block = false;
        this.floating = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const colorClass = 'btn-' + this.color;
        /** @type {?} */
        const gradientClass = this.gradient + '-gradient';
        /** @type {?} */
        const outlineClass = 'btn-outline-' + this.color;
        /** @type {?} */
        const flatClass = 'btn-flat';
        /** @type {?} */
        const roundedClass = 'btn-rounded';
        /** @type {?} */
        const sizeClass = 'btn-' + this.size;
        /** @type {?} */
        const blockClass = 'btn-block';
        /** @type {?} */
        const floatingClass = 'btn-floating';
        this.renderer.addClass(this.el.nativeElement, 'btn');
        if (this.color !== '') {
            this.renderer.addClass(this.el.nativeElement, colorClass);
        }
        if (this.rounded) {
            this.renderer.addClass(this.el.nativeElement, roundedClass);
        }
        if (this.gradient) {
            if (this.color !== '') {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            this.renderer.addClass(this.el.nativeElement, gradientClass);
        }
        if (this.outline) {
            this.renderer.removeClass(this.el.nativeElement, colorClass);
            this.renderer.addClass(this.el.nativeElement, outlineClass);
        }
        if (this.flat) {
            if (this.color) {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            if (this.gradient) {
                this.renderer.removeClass(this.el.nativeElement, gradientClass);
            }
            if (this.outline) {
                this.renderer.removeClass(this.el.nativeElement, outlineClass);
            }
            if (this.rounded) {
                this.renderer.removeClass(this.el.nativeElement, roundedClass);
            }
            this.renderer.addClass(this.el.nativeElement, flatClass);
        }
        if (this.size) {
            this.renderer.addClass(this.el.nativeElement, sizeClass);
        }
        if (this.block) {
            this.renderer.addClass(this.el.nativeElement, blockClass);
        }
        if (this.floating) {
            this.renderer.removeClass(this.el.nativeElement, 'btn');
            this.renderer.addClass(this.el.nativeElement, floatingClass);
        }
    }
}
MdbBtnDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbBtn]'
            },] }
];
/** @nocollapse */
MdbBtnDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbBtnDirective.propDecorators = {
    color: [{ type: Input }],
    rounded: [{ type: Input }],
    gradient: [{ type: Input }],
    outline: [{ type: Input }],
    flat: [{ type: Input }],
    size: [{ type: Input }],
    block: [{ type: Input }],
    floating: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MdbBtnDirective.prototype.color;
    /** @type {?} */
    MdbBtnDirective.prototype.rounded;
    /** @type {?} */
    MdbBtnDirective.prototype.gradient;
    /** @type {?} */
    MdbBtnDirective.prototype.outline;
    /** @type {?} */
    MdbBtnDirective.prototype.flat;
    /** @type {?} */
    MdbBtnDirective.prototype.size;
    /** @type {?} */
    MdbBtnDirective.prototype.block;
    /** @type {?} */
    MdbBtnDirective.prototype.floating;
    /**
     * @type {?}
     * @private
     */
    MdbBtnDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbBtnDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9idXR0b25zL2J1dHRvbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS2hGLE1BQU0sT0FBTyxlQUFlOzs7OztJQVUxQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFSdEQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBQ2dDLENBQUM7Ozs7SUFFcEUsUUFBUTs7Y0FDQSxVQUFVLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLOztjQUNoQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXOztjQUMzQyxZQUFZLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLOztjQUMxQyxTQUFTLEdBQUcsVUFBVTs7Y0FDdEIsWUFBWSxHQUFHLGFBQWE7O2NBQzVCLFNBQVMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUk7O2NBQzlCLFVBQVUsR0FBRyxXQUFXOztjQUN4QixhQUFhLEdBQUcsY0FBYztRQUVwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVyRCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzlEO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDOUQ7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQ2pFO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNoRTtZQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDaEU7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMxRDtRQUVELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2FBQ3JCOzs7O1lBSjhCLFVBQVU7WUFBckIsU0FBUzs7O29CQU8xQixLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFQTixnQ0FBNEI7O0lBQzVCLGtDQUFrQzs7SUFDbEMsbUNBQStCOztJQUMvQixrQ0FBa0M7O0lBQ2xDLCtCQUErQjs7SUFDL0IsK0JBQTJCOztJQUMzQixnQ0FBZ0M7O0lBQ2hDLG1DQUFtQzs7Ozs7SUFDdkIsNkJBQXNCOzs7OztJQUFFLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJCdG5dJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJCdG5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBncmFkaWVudDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmxhdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYmxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmxvYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjb2xvckNsYXNzID0gJ2J0bi0nICsgdGhpcy5jb2xvcjtcbiAgICBjb25zdCBncmFkaWVudENsYXNzID0gdGhpcy5ncmFkaWVudCArICctZ3JhZGllbnQnO1xuICAgIGNvbnN0IG91dGxpbmVDbGFzcyA9ICdidG4tb3V0bGluZS0nICsgdGhpcy5jb2xvcjtcbiAgICBjb25zdCBmbGF0Q2xhc3MgPSAnYnRuLWZsYXQnO1xuICAgIGNvbnN0IHJvdW5kZWRDbGFzcyA9ICdidG4tcm91bmRlZCc7XG4gICAgY29uc3Qgc2l6ZUNsYXNzID0gJ2J0bi0nICsgdGhpcy5zaXplO1xuICAgIGNvbnN0IGJsb2NrQ2xhc3MgPSAnYnRuLWJsb2NrJztcbiAgICBjb25zdCBmbG9hdGluZ0NsYXNzID0gJ2J0bi1mbG9hdGluZyc7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2J0bicpO1xuXG4gICAgaWYgKHRoaXMuY29sb3IgIT09ICcnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY29sb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm91bmRlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHJvdW5kZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ3JhZGllbnQpIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yICE9PSAnJykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY29sb3JDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgZ3JhZGllbnRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3V0bGluZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNvbG9yQ2xhc3MpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG91dGxpbmVDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmxhdCkge1xuICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNvbG9yQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ3JhZGllbnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGdyYWRpZW50Q2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3V0bGluZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgb3V0bGluZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJvdW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHJvdW5kZWRDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgZmxhdENsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgc2l6ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ibG9jaykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGJsb2NrQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZsb2F0aW5nKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2J0bicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGZsb2F0aW5nQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIl19