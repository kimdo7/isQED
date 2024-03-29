/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ViewChild } from '@angular/core';
export class MdbCardComponent {
    /**
     * @param {?} _el
     * @param {?} _r
     */
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @param {?} narrower
     * @return {?}
     */
    set narrower(narrower) {
        if (narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
    }
    /**
     * @param {?} reverse
     * @return {?}
     */
    set reverse(reverse) {
        if (reverse) {
            this._r.addClass(this._el.nativeElement, 'reverse');
        }
    }
    /**
     * @param {?} dark
     * @return {?}
     */
    set dark(dark) {
        if (dark) {
            this._r.addClass(this._el.nativeElement, 'card-dark');
        }
    }
    /**
     * @param {?} color
     * @return {?}
     */
    set bgColor(color) {
        if (color) {
            this._r.addClass(this.card.nativeElement, color);
        }
    }
    /**
     * @param {?} color
     * @return {?}
     */
    set borderColor(color) {
        if (color) {
            this._r.addClass(this.card.nativeElement, color);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._r.addClass(this._el.nativeElement, 'card');
        if (this.cascade) {
            this._r.addClass(this._el.nativeElement, 'card-cascade');
        }
        if (this.wider) {
            this._r.addClass(this._el.nativeElement, 'wider');
        }
        if (this.narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        if (this.class) {
            this.class.split(' ').forEach((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                this._r.addClass(this._el.nativeElement, element);
            }));
        }
        if (this._el.nativeElement.parentElement.classList.contains('card-deck')) {
            this._r.addClass(this.card.nativeElement, 'w-100');
            this._r.addClass(this.card.nativeElement, 'mx-0');
        }
    }
}
MdbCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card',
                template: "<div class=\"card\" [ngClass]=\"{'card-cascade': cascade, 'wider': wider}\" #card>\n    <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
MdbCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbCardComponent.propDecorators = {
    class: [{ type: Input }],
    cascade: [{ type: Input }],
    wider: [{ type: Input }],
    card: [{ type: ViewChild, args: ['card',] }],
    narrower: [{ type: Input }],
    reverse: [{ type: Input }],
    dark: [{ type: Input }],
    bgColor: [{ type: Input }],
    borderColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MdbCardComponent.prototype.class;
    /** @type {?} */
    MdbCardComponent.prototype.cascade;
    /** @type {?} */
    MdbCardComponent.prototype.wider;
    /** @type {?} */
    MdbCardComponent.prototype.card;
    /**
     * @type {?}
     * @private
     */
    MdbCardComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbCardComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2FyZHMvbWRiLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8zRixNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQXNDekIsWUFBb0IsR0FBZSxFQUFVLEVBQWE7UUFBdEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDOzs7OztJQTlCL0QsSUFBYSxRQUFRLENBQUMsUUFBaUI7UUFDbkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN4RDtJQUNMLENBQUM7Ozs7O0lBRUQsSUFBYSxPQUFPLENBQUMsT0FBZ0I7UUFDakMsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7Ozs7O0lBRUQsSUFBYSxJQUFJLENBQUMsSUFBYTtRQUMzQixJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxJQUFhLE9BQU8sQ0FBQyxLQUFhO1FBQzlCLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEQ7SUFDTCxDQUFDOzs7OztJQUVELElBQWEsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRDtJQUNMLENBQUM7Ozs7SUFJRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELENBQUMsRUFBQyxDQUFDO1NBQ047UUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQzs7O1lBakVKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIscUlBQXdDO2FBQzNDOzs7O1lBTDBCLFVBQVU7WUFBRSxTQUFTOzs7b0JBUTNDLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUVMLFNBQVMsU0FBQyxNQUFNO3VCQUdoQixLQUFLO3NCQU1MLEtBQUs7bUJBTUwsS0FBSztzQkFNTCxLQUFLOzBCQU1MLEtBQUs7Ozs7SUEvQk4saUNBQXVCOztJQUN2QixtQ0FBMEI7O0lBQzFCLGlDQUF3Qjs7SUFFeEIsZ0NBQW9DOzs7OztJQWlDeEIsK0JBQXVCOzs7OztJQUFFLDhCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21kYi1jYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWRiLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIE1kYkNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2FzY2FkZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB3aWRlcjogYm9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NhcmQnKSBjYXJkOiBFbGVtZW50UmVmO1xuXG5cbiAgICBASW5wdXQoKSBzZXQgbmFycm93ZXIobmFycm93ZXI6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKG5hcnJvd2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICduYXJyb3dlcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IHJldmVyc2UocmV2ZXJzZTogYm9vbGVhbikge1xuICAgICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAncmV2ZXJzZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGRhcmsoZGFyazogYm9vbGVhbikge1xuICAgICAgICBpZiAoZGFyaykge1xuICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2FyZC1kYXJrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgYmdDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGJvcmRlckNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCBjb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcjogUmVuZGVyZXIyKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdjYXJkJyk7XG4gICAgICAgIGlmICh0aGlzLmNhc2NhZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NhcmQtY2FzY2FkZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd3aWRlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5hcnJvd2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICduYXJyb3dlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLWRlY2snKSkge1xuICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3ctMTAwJyk7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAnbXgtMCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19