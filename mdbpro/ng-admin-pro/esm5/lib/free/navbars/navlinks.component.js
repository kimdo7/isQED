/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ContentChildren, ElementRef, QueryList, EventEmitter, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
var NavlinksComponent = /** @class */ (function () {
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
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
    };
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    NavlinksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'navlinks',
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    NavlinksComponent.ctorParameters = function () { return [
        { type: NavbarService }
    ]; };
    NavlinksComponent.propDecorators = {
        links: [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] }],
        linkClick: [{ type: Output }]
    };
    return NavlinksComponent;
}());
export { NavlinksComponent };
if (false) {
    /** @type {?} */
    NavlinksComponent.prototype.links;
    /** @type {?} */
    NavlinksComponent.prototype.linkClick;
    /**
     * @type {?}
     * @private
     */
    NavlinksComponent.prototype._navbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2bGlua3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbmF2YmFycy9uYXZsaW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW9CLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJEO0lBV0UsMkJBQXFCLGNBQTZCO1FBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRHhDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBQ1EsQ0FBQzs7OztJQUV2RCw4Q0FBa0I7OztJQUFsQjs7WUFDUSxJQUFJLEdBQUcsSUFBSTtRQUlqQixVQUFVOzs7UUFBQztZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztZQUFDLFVBQVUsT0FBTztnQkFDbEMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7Z0JBQUc7b0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDNUMsQ0FBQyxDQUFBLENBQUM7WUFDSixDQUFDLEVBQUMsQ0FBQztRQUVMLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFDRCwyQ0FBZTs7O0lBQWY7SUFFQSxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsMkNBRVA7aUJBQ0o7Ozs7Z0JBVFEsYUFBYTs7O3dCQVduQixlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7NEJBRzNFLE1BQU07O0lBb0JULHdCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0F4QlksaUJBQWlCOzs7SUFDNUIsa0NBQzZCOztJQUU3QixzQ0FBOEM7Ozs7O0lBQ2pDLDJDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmJhclNlcnZpY2UgfSBmcm9tICcuL25hdmJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBRdWVyeUxpc3QsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYXZsaW5rcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZsaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZiwgeyByZWFkOiBFbGVtZW50UmVmLCBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBsaW5rczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgX25hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuXG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQubGlua3MuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGF0Ll9uYXZiYXJTZXJ2aWNlLnNldE5hdmJhckxpbmtDbGlja3MoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgfSwgMCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cbn1cbiJdfQ==