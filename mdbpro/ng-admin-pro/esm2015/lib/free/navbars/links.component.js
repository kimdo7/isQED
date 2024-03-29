/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
export class LinksComponent {
    /**
     * @param {?} _navbarService
     */
    constructor(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const that = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            that.links.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                element.nativeElement.onclick = (/**
                 * @return {?}
                 */
                function () {
                    that._navbarService.setNavbarLinkClicks();
                });
            }));
        }), 0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
LinksComponent.decorators = [
    { type: Component, args: [{
                selector: 'links',
                template: `
        <ng-content></ng-content>
    `
            }] }
];
/** @nocollapse */
LinksComponent.ctorParameters = () => [
    { type: NavbarService }
];
LinksComponent.propDecorators = {
    links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
    linkClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LinksComponent.prototype.links;
    /** @type {?} */
    LinksComponent.prototype.linkClick;
    /**
     * @type {?}
     * @private
     */
    LinksComponent.prototype._navbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbmF2YmFycy9saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW9CLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXJELE1BQU0sT0FBTyxjQUFjOzs7O0lBS3pCLFlBQXFCLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRHhDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ1EsQ0FBQzs7OztJQUV2RCxrQkFBa0I7O2NBQ1YsSUFBSSxHQUFHLElBQUk7UUFJakIsVUFBVTs7O1FBQUM7WUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFVLE9BQU87Z0JBQ2xDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTzs7O2dCQUFHO29CQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzVDLENBQUMsQ0FBQSxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQUM7UUFFTCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7O0lBQ0QsZUFBZTtJQUVmLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTs7S0FFUDthQUNKOzs7O1lBVFEsYUFBYTs7O29CQVduQixlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7d0JBRzNFLE1BQU07Ozs7SUFIUCwrQkFDNkI7O0lBRTdCLG1DQUE4Qzs7Ozs7SUFDakMsd0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyU2VydmljZSB9IGZyb20gJy4vbmF2YmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIFF1ZXJ5TGlzdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpbmtzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIExpbmtzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGxpbmtzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgQE91dHB1dCgpIGxpbmtDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfbmF2YmFyU2VydmljZTogTmF2YmFyU2VydmljZSkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuXG5cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoYXQuX25hdmJhclNlcnZpY2Uuc2V0TmF2YmFyTGlua0NsaWNrcygpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICB9LCAwKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgfVxufVxuIl19