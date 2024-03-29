/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from '../positioning/positioning.service';
export class ComponentLoaderFactory {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
}
ComponentLoaderFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: NgZone },
    { type: Injector },
    { type: PositioningService },
    { type: ApplicationRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQUUsTUFBTSxFQUFvQix3QkFBd0IsRUFBRSxRQUFRLEVBQ2pELGNBQWMsRUFDdEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR3hFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7O0lBRWpDLFlBQTJCLHlCQUFtRCxFQUNwRSxPQUFlLEVBQ2YsU0FBbUIsRUFDbkIsV0FBK0IsRUFDL0IsZUFBK0I7UUFKZCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ3BFLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDekMsQ0FBQzs7Ozs7Ozs7O0lBUU8sWUFBWSxDQUFJLFdBQXVCLEVBQUUsaUJBQW1DLEVBQUUsU0FBb0I7UUFDdkcsT0FBTyxJQUFJLGVBQWUsQ0FBSSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUNyRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQ2xGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7WUFwQkgsVUFBVTs7OztZQU42Qix3QkFBd0I7WUFBbEQsTUFBTTtZQUE4QyxRQUFRO1lBSWpFLGtCQUFrQjtZQUhGLGNBQWM7Ozs7Ozs7SUFRbEIsMkRBQTJEOzs7OztJQUM1RSx5Q0FBdUI7Ozs7O0lBQ3ZCLDJDQUEyQjs7Ozs7SUFDM0IsNkNBQXVDOzs7OztJQUN2QyxpREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLCBOZ1pvbmUsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsXG4gIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQXBwbGljYXRpb25SZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnLi4vcG9zaXRpb25pbmcvcG9zaXRpb25pbmcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IHtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3Bvc1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSxcbiAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYpIHtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gX2VsZW1lbnRSZWZcbiAgICogQHBhcmFtIF92aWV3Q29udGFpbmVyUmVmXG4gICAqIEBwYXJhbSBfcmVuZGVyZXIyXG4gICAqL1xuICAgcHVibGljIGNyZWF0ZUxvYWRlcjxUPihfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIF9yZW5kZXJlcjogUmVuZGVyZXIyKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICAgcmV0dXJuIG5ldyBDb21wb25lbnRMb2FkZXI8VD4oX3ZpZXdDb250YWluZXJSZWYsIF9yZW5kZXJlciwgX2VsZW1lbnRSZWYsXG4gICAgICAgdGhpcy5faW5qZWN0b3IsIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fbmdab25lLCB0aGlzLl9hcHBsaWNhdGlvblJlZixcbiAgICAgICB0aGlzLl9wb3NTZXJ2aWNlKTtcbiAgIH1cbiB9XG4iXX0=