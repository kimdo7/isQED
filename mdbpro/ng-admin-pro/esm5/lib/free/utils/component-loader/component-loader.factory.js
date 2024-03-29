/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from '../positioning/positioning.service';
var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer2
     */
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: NgZone },
        { type: Injector },
        { type: PositioningService },
        { type: ApplicationRef }
    ]; };
    return ComponentLoaderFactory;
}());
export { ComponentLoaderFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._posService;
    /**
     * @type {?}
     * @private
     */
    ComponentLoaderFactory.prototype._applicationRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxFQUFvQix3QkFBd0IsRUFBRSxRQUFRLEVBQ2pELGNBQWMsRUFDdEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXhFO0lBR0UsZ0NBQTJCLHlCQUFtRCxFQUNwRSxPQUFlLEVBQ2YsU0FBbUIsRUFDbkIsV0FBK0IsRUFDL0IsZUFBK0I7UUFKZCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ3BFLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDekMsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDSyw2Q0FBWTs7Ozs7Ozs7SUFBbkIsVUFBdUIsV0FBdUIsRUFBRSxpQkFBbUMsRUFBRSxTQUFvQjtRQUN2RyxPQUFPLElBQUksZUFBZSxDQUFJLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQ3JFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFDbEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7O2dCQXBCSCxVQUFVOzs7O2dCQU42Qix3QkFBd0I7Z0JBQWxELE1BQU07Z0JBQThDLFFBQVE7Z0JBSWpFLGtCQUFrQjtnQkFIRixjQUFjOztJQTBCdEMsNkJBQUM7Q0FBQSxBQXJCRixJQXFCRTtTQXBCVyxzQkFBc0I7Ozs7OztJQUVkLDJEQUEyRDs7Ozs7SUFDNUUseUNBQXVCOzs7OztJQUN2QiwyQ0FBMkI7Ozs7O0lBQzNCLDZDQUF1Qzs7Ozs7SUFDdkMsaURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSwgTmdab25lLCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yLFxuICBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEFwcGxpY2F0aW9uUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi9jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9wb3NTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIF9lbGVtZW50UmVmXG4gICAqIEBwYXJhbSBfdmlld0NvbnRhaW5lclJlZlxuICAgKiBAcGFyYW0gX3JlbmRlcmVyMlxuICAgKi9cbiAgIHB1YmxpYyBjcmVhdGVMb2FkZXI8VD4oX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBfcmVuZGVyZXI6IFJlbmRlcmVyMik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgIHJldHVybiBuZXcgQ29tcG9uZW50TG9hZGVyPFQ+KF92aWV3Q29udGFpbmVyUmVmLCBfcmVuZGVyZXIsIF9lbGVtZW50UmVmLFxuICAgICAgIHRoaXMuX2luamVjdG9yLCB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX25nWm9uZSwgdGhpcy5fYXBwbGljYXRpb25SZWYsXG4gICAgICAgdGhpcy5fcG9zU2VydmljZSk7XG4gICB9XG4gfVxuIl19