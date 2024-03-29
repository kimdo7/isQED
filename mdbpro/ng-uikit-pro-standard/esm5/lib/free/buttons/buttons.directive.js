/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
var MdbBtnDirective = /** @class */ (function () {
    function MdbBtnDirective(el, renderer) {
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
    MdbBtnDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var colorClass = 'btn-' + this.color;
        /** @type {?} */
        var gradientClass = this.gradient + '-gradient';
        /** @type {?} */
        var outlineClass = 'btn-outline-' + this.color;
        /** @type {?} */
        var flatClass = 'btn-flat';
        /** @type {?} */
        var roundedClass = 'btn-rounded';
        /** @type {?} */
        var sizeClass = 'btn-' + this.size;
        /** @type {?} */
        var blockClass = 'btn-block';
        /** @type {?} */
        var floatingClass = 'btn-floating';
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
    };
    MdbBtnDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbBtn]'
                },] }
    ];
    /** @nocollapse */
    MdbBtnDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return MdbBtnDirective;
}());
export { MdbBtnDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9idXR0b25zL2J1dHRvbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWhGO0lBYUUseUJBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVJ0RCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFDZ0MsQ0FBQzs7OztJQUVwRSxrQ0FBUTs7O0lBQVI7O1lBQ1EsVUFBVSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDaEMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVzs7WUFDM0MsWUFBWSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSzs7WUFDMUMsU0FBUyxHQUFHLFVBQVU7O1lBQ3RCLFlBQVksR0FBRyxhQUFhOztZQUM1QixTQUFTLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJOztZQUM5QixVQUFVLEdBQUcsV0FBVzs7WUFDeEIsYUFBYSxHQUFHLGNBQWM7UUFFcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFF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QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQWdFUixzQkFBQztDQUFBLEFBNUVELElBNEVDO1NBekVZLGVBQWU7OztJQUUxQixnQ0FBNEI7O0lBQzVCLGtDQUFrQzs7SUFDbEMsbUNBQStCOztJQUMvQixrQ0FBa0M7O0lBQ2xDLCtCQUErQjs7SUFDL0IsK0JBQTJCOztJQUMzQixnQ0FBZ0M7O0lBQ2hDLG1DQUFtQzs7Ozs7SUFDdkIsNkJBQXNCOzs7OztJQUFFLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJCdG5dJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJCdG5EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBncmFkaWVudDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG91dGxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmxhdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgYmxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmxvYXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjb2xvckNsYXNzID0gJ2J0bi0nICsgdGhpcy5jb2xvcjtcbiAgICBjb25zdCBncmFkaWVudENsYXNzID0gdGhpcy5ncmFkaWVudCArICctZ3JhZGllbnQnO1xuICAgIGNvbnN0IG91dGxpbmVDbGFzcyA9ICdidG4tb3V0bGluZS0nICsgdGhpcy5jb2xvcjtcbiAgICBjb25zdCBmbGF0Q2xhc3MgPSAnYnRuLWZsYXQnO1xuICAgIGNvbnN0IHJvdW5kZWRDbGFzcyA9ICdidG4tcm91bmRlZCc7XG4gICAgY29uc3Qgc2l6ZUNsYXNzID0gJ2J0bi0nICsgdGhpcy5zaXplO1xuICAgIGNvbnN0IGJsb2NrQ2xhc3MgPSAnYnRuLWJsb2NrJztcbiAgICBjb25zdCBmbG9hdGluZ0NsYXNzID0gJ2J0bi1mbG9hdGluZyc7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2J0bicpO1xuXG4gICAgaWYgKHRoaXMuY29sb3IgIT09ICcnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY29sb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm91bmRlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHJvdW5kZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ3JhZGllbnQpIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yICE9PSAnJykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY29sb3JDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgZ3JhZGllbnRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3V0bGluZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNvbG9yQ2xhc3MpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG91dGxpbmVDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmxhdCkge1xuICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNvbG9yQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ3JhZGllbnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGdyYWRpZW50Q2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3V0bGluZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgb3V0bGluZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJvdW5kZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHJvdW5kZWRDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgZmxhdENsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgc2l6ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ibG9jaykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGJsb2NrQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZsb2F0aW5nKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2J0bicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGZsb2F0aW5nQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIl19