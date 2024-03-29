/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ViewChild } from '@angular/core';
var MdbCardComponent = /** @class */ (function () {
    function MdbCardComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardComponent.prototype, "narrower", {
        set: /**
         * @param {?} narrower
         * @return {?}
         */
        function (narrower) {
            if (narrower) {
                this._r.addClass(this._el.nativeElement, 'narrower');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "reverse", {
        set: /**
         * @param {?} reverse
         * @return {?}
         */
        function (reverse) {
            if (reverse) {
                this._r.addClass(this._el.nativeElement, 'reverse');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "dark", {
        set: /**
         * @param {?} dark
         * @return {?}
         */
        function (dark) {
            if (dark) {
                this._r.addClass(this._el.nativeElement, 'card-dark');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "bgColor", {
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (color) {
                this._r.addClass(this.card.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "borderColor", {
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (color) {
                this._r.addClass(this.card.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
            function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            }));
        }
        if (this._el.nativeElement.parentElement.classList.contains('card-deck')) {
            this._r.addClass(this.card.nativeElement, 'w-100');
            this._r.addClass(this.card.nativeElement, 'mx-0');
        }
    };
    MdbCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card',
                    template: "<div class=\"card\" [ngClass]=\"{'card-cascade': cascade, 'wider': wider}\" #card>\n    <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MdbCardComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return MdbCardComponent;
}());
export { MdbCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2FyZHMvbWRiLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRjtJQTJDSSwwQkFBb0IsR0FBZSxFQUFVLEVBQWE7UUFBdEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDO0lBOUIvRCxzQkFBYSxzQ0FBUTs7Ozs7UUFBckIsVUFBc0IsUUFBaUI7WUFDbkMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDeEQ7UUFDTCxDQUFDOzs7T0FBQTtJQUVELHNCQUFhLHFDQUFPOzs7OztRQUFwQixVQUFxQixPQUFnQjtZQUNqQyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN2RDtRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQWEsa0NBQUk7Ozs7O1FBQWpCLFVBQWtCLElBQWE7WUFDM0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDekQ7UUFDTCxDQUFDOzs7T0FBQTtJQUVELHNCQUFhLHFDQUFPOzs7OztRQUFwQixVQUFxQixLQUFhO1lBQzlCLElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3BEO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYSx5Q0FBVzs7Ozs7UUFBeEIsVUFBeUIsS0FBYTtZQUNsQyxJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNwRDtRQUNMLENBQUM7OztPQUFBOzs7O0lBSUQsbUNBQVE7OztJQUFSO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLE9BQVk7Z0JBQ3ZDLEtBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELENBQUMsRUFBQyxDQUFDO1NBQ047UUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3JEO0lBQ0wsQ0FBQzs7Z0JBakVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIscUlBQXdDO2lCQUMzQzs7OztnQkFMMEIsVUFBVTtnQkFBRSxTQUFTOzs7d0JBUTNDLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUVMLFNBQVMsU0FBQyxNQUFNOzJCQUdoQixLQUFLOzBCQU1MLEtBQUs7dUJBTUwsS0FBSzswQkFNTCxLQUFLOzhCQU1MLEtBQUs7O0lBNkJWLHVCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0E3RFksZ0JBQWdCOzs7SUFDekIsaUNBQXVCOztJQUN2QixtQ0FBMEI7O0lBQzFCLGlDQUF3Qjs7SUFFeEIsZ0NBQW9DOzs7OztJQWlDeEIsK0JBQXVCOzs7OztJQUFFLDhCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21kYi1jYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWRiLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIE1kYkNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2FzY2FkZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB3aWRlcjogYm9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NhcmQnKSBjYXJkOiBFbGVtZW50UmVmO1xuXG5cbiAgICBASW5wdXQoKSBzZXQgbmFycm93ZXIobmFycm93ZXI6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKG5hcnJvd2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICduYXJyb3dlcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IHJldmVyc2UocmV2ZXJzZTogYm9vbGVhbikge1xuICAgICAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAncmV2ZXJzZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGRhcmsoZGFyazogYm9vbGVhbikge1xuICAgICAgICBpZiAoZGFyaykge1xuICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2FyZC1kYXJrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKSBzZXQgYmdDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgY29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KCkgc2V0IGJvcmRlckNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCBjb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcjogUmVuZGVyZXIyKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdjYXJkJyk7XG4gICAgICAgIGlmICh0aGlzLmNhc2NhZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NhcmQtY2FzY2FkZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd3aWRlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5hcnJvd2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICduYXJyb3dlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLWRlY2snKSkge1xuICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLmNhcmQubmF0aXZlRWxlbWVudCwgJ3ctMTAwJyk7XG4gICAgICAgICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LCAnbXgtMCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19