/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?
import { ElementRef, EventEmitter, Injector, TemplateRef } from '@angular/core';
import { listenToTriggers } from '../triggers';
import { ContentRef } from './content-ref.class';
/**
 * @record
 */
export function ListenOptions() { }
if (false) {
    /** @type {?|undefined} */
    ListenOptions.prototype.target;
    /** @type {?|undefined} */
    ListenOptions.prototype.triggers;
    /** @type {?|undefined} */
    ListenOptions.prototype.show;
    /** @type {?|undefined} */
    ListenOptions.prototype.hide;
    /** @type {?|undefined} */
    ListenOptions.prototype.toggle;
}
/**
 * @template T
 */
export class ComponentLoader {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    // tslint:disable-next-line
    constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        this.onShown = new EventEmitter();
        this.shown = new EventEmitter();
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.hidden = new EventEmitter();
        this._providers = [];
    }
    /**
     * @return {?}
     */
    get isShown() {
        return !!this._componentRef;
    }
    /**
     * @param {?} compType
     * @return {?}
     */
    attach(compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    }
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    to(container) {
        this.container = container || this.container;
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    position(opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = (/** @type {?} */ (opts.target)) || this._elementRef;
        return this;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    provide(provider) {
        this._providers.push(provider);
        return this;
    }
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    show(opts = {}) {
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.data);
            /** @type {?} */
            const injector = Injector.create({ providers: this._providers, parent: this._injector });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector((/** @type {?} */ (this.container)))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        const componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    }
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    listen(listenOpts) {
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || ((/**
         * @return {?}
         */
        () => this.show()));
        listenOpts.hide = listenOpts.hide || ((/**
         * @return {?}
         */
        () => this.hide()));
        listenOpts.toggle = listenOpts.toggle || ((/**
         * @return {?}
         */
        () => this.isShown
            ? listenOpts.hide()
            : listenOpts.show()));
        this._unregisterListenersFn = listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    }
    /**
     * @return {?}
     */
    getInnerComponent() {
        return this._innerComponent;
    }
    /**
     * @private
     * @return {?}
     */
    _subscribePositioning() {
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe((/**
         * @return {?}
         */
        () => {
            if (!this._componentRef) {
                return;
            }
            this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: this.container === 'body'
            });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribePositioning() {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    }
    /**
     * @private
     * @param {?} content
     * @param {?=} data
     * @return {?}
     */
    _getContentRef(content, data) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof TemplateRef) {
            if (this._viewContainerRef) {
                /** @type {?} */
                const viewRef = this._viewContainerRef.createEmbeddedView(content);
                return new ContentRef([viewRef.rootNodes], viewRef);
            }
            /** @type {?} */
            const viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            const modalContentInjector = Injector.create({ providers: this._providers, parent: this._injector });
            /** @type {?} */
            const componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, data);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
}
if (false) {
    /** @type {?} */
    ComponentLoader.prototype.onBeforeShow;
    /** @type {?} */
    ComponentLoader.prototype.onShown;
    /** @type {?} */
    ComponentLoader.prototype.shown;
    /** @type {?} */
    ComponentLoader.prototype.onBeforeHide;
    /** @type {?} */
    ComponentLoader.prototype.onHidden;
    /** @type {?} */
    ComponentLoader.prototype.hidden;
    /** @type {?} */
    ComponentLoader.prototype.instance;
    /** @type {?} */
    ComponentLoader.prototype._componentRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._providers;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._componentFactory;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._zoneSubscription;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._contentRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._innerComponent;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._unregisterListenersFn;
    /**
     * Placement of a component. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.attachment;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.container;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.triggers;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._applicationRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._posService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUtMLFVBQVUsRUFDVixZQUFZLEVBQ1osUUFBUSxFQUdSLFdBQVcsRUFJWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRWpELG1DQU1DOzs7SUFMQywrQkFBb0I7O0lBQ3BCLGlDQUFrQjs7SUFDbEIsNkJBQXNCOztJQUN0Qiw2QkFBc0I7O0lBQ3RCLCtCQUFrQjs7Ozs7QUFHcEIsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztJQThDdkIsWUFBMkIsaUJBQW1DLEVBQ3BELFNBQW9CLEVBQ3BCLFdBQXVCLEVBQ3ZCLFNBQW1CLEVBQ25CLHlCQUFtRCxFQUNuRCxPQUFlLEVBQ2YsZUFBK0IsRUFDL0IsV0FBK0I7UUFQZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ3BELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBcERyQyxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxVQUFLLEdBQXNCLElBQUksWUFB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QTZDOzs7Ozs7O0lBTTdDLG1DQUF5Qjs7Ozs7SUFRTiw0Q0FBMkM7Ozs7O0lBQzVELG9DQUE0Qjs7Ozs7SUFDNUIsc0NBQStCOzs7OztJQUMvQixvQ0FBMkI7Ozs7O0lBQzNCLG9EQUEyRDs7Ozs7SUFDM0Qsa0NBQXVCOzs7OztJQUN2QiwwQ0FBdUM7Ozs7O0lBQ3ZDLHNDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IGFkZCBkZWxheSBzdXBwb3J0XG4vLyB0b2RvOiBtZXJnZSBldmVudHMgb25TaG93LCBvblNob3duLCBldGMuLi5cbi8vIHRvZG86IGFkZCBnbG9iYWwgcG9zaXRpb25pbmcgY29uZmlndXJhdGlvbj9cbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RvcixcbiAgTmdab25lLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBTdGF0aWNQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nT3B0aW9ucywgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnLi4vcG9zaXRpb25pbmcvcG9zaXRpb25pbmcuc2VydmljZSc7XG5pbXBvcnQgeyBsaXN0ZW5Ub1RyaWdnZXJzIH0gZnJvbSAnLi4vdHJpZ2dlcnMnO1xuaW1wb3J0IHsgQ29udGVudFJlZiB9IGZyb20gJy4vY29udGVudC1yZWYuY2xhc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3Rlbk9wdGlvbnMge1xuICB0YXJnZXQ/OiBFbGVtZW50UmVmO1xuICB0cmlnZ2Vycz86IHN0cmluZztcbiAgc2hvdz86IEZ1bmN0aW9uIHwgYW55O1xuICBoaWRlPzogRnVuY3Rpb24gfCBhbnk7XG4gIHRvZ2dsZT86IEZ1bmN0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgcHVibGljIG9uQmVmb3JlU2hvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIHNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIG9uQmVmb3JlSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBoaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBpbnN0YW5jZTogVDtcbiAgcHVibGljIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPiB8IGFueTtcblxuICBwcml2YXRlIF9wcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxUPjtcbiAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIF9jb250ZW50UmVmOiBDb250ZW50UmVmIHwgYW55O1xuICBwcml2YXRlIF9pbm5lckNvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+IHwgYW55IDtcblxuICBwcml2YXRlIF91bnJlZ2lzdGVyTGlzdGVuZXJzRm46IEZ1bmN0aW9uO1xuXG4gIHB1YmxpYyBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9jb21wb25lbnRSZWY7XG4gIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlbWVudCBvZiBhIGNvbXBvbmVudC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgICAqL1xuICAgICBwcml2YXRlIGF0dGFjaG1lbnQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXG4gICAgICovXG4gICAgIHByaXZhdGUgY29udGFpbmVyOiBzdHJpbmcgfCBFbGVtZW50UmVmIHwgYW55O1xuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAgICogZXZlbnQgbmFtZXMuXG4gICAgICovXG4gICAgIHByaXZhdGUgdHJpZ2dlcnM6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIERvIG5vdCB1c2UgdGhpcyBkaXJlY3RseSwgaXQgc2hvdWxkIGJlIGluc3RhbmNlZCB2aWFcbiAgICAgKiBgQ29tcG9uZW50TG9hZEZhY3RvcnkuYXR0YWNoYFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICAgcHJpdmF0ZSBfcG9zU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlKSB7XG4gICAgIH1cblxuICAgICBwdWJsaWMgYXR0YWNoKGNvbXBUeXBlOiBUeXBlPFQ+KTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBUeXBlKTtcbiAgICAgICByZXR1cm4gdGhpcztcbiAgICAgfVxuXG4gICAgIC8vIHRvZG86IGFkZCBiZWhhdmlvdXI6IHRvIHRhcmdldCBlbGVtZW50LCBgYm9keWAsIGN1c3RvbSBlbGVtZW50XG4gICAgIHB1YmxpYyB0byhjb250YWluZXI/OiBzdHJpbmcpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyO1xuICAgICAgIHJldHVybiB0aGlzO1xuICAgICB9XG5cbiAgICAgcHVibGljIHBvc2l0aW9uKG9wdHM/OiBQb3NpdGlvbmluZ09wdGlvbnMgfCBhbnkpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgICAgIHRoaXMuYXR0YWNobWVudCA9IG9wdHMuYXR0YWNobWVudCB8fCB0aGlzLmF0dGFjaG1lbnQ7XG4gICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IG9wdHMudGFyZ2V0IGFzIEVsZW1lbnRSZWYgfHwgdGhpcy5fZWxlbWVudFJlZjtcbiAgICAgICByZXR1cm4gdGhpcztcbiAgICAgfVxuXG4gICAgIHB1YmxpYyBwcm92aWRlKHByb3ZpZGVyOiBTdGF0aWNQcm92aWRlcik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgICAgdGhpcy5fcHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xuICAgICAgIHJldHVybiB0aGlzO1xuICAgICB9XG5cbiAgICAgLy8gdG9kbzogYXBwZW5kQ2hpbGQgdG8gZWxlbWVudCBvciBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyKVxuICAgICBwdWJsaWMgc2hvdyhvcHRzOiB7IGNvbnRlbnQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+LCBkYXRhPzogYW55LCBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9KTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICAgICB0aGlzLl9zdWJzY3JpYmVQb3NpdGlvbmluZygpO1xuICAgICAgIHRoaXMuX2lubmVyQ29tcG9uZW50ID0gbnVsbDtcblxuICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICAgICB0aGlzLm9uQmVmb3JlU2hvdy5lbWl0KCk7XG4gICAgICAgICB0aGlzLl9jb250ZW50UmVmID0gdGhpcy5fZ2V0Q29udGVudFJlZihvcHRzLmNvbnRlbnQsIG9wdHMuZGF0YSk7XG4gICAgICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7cHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsIHBhcmVudDogdGhpcy5faW5qZWN0b3J9KTtcblxuICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IsIHRoaXMuX2NvbnRlbnRSZWYubm9kZXMpO1xuICAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZTtcblxuICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UsIG9wdHMpO1xuXG4gICAgICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XG4gICAgICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyID09PSAnYm9keScgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250YWluZXIgYXMgc3RyaW5nIHwgYW55KVxuICAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgfVxuXG4gICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyICYmIHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgIH1cblxuICAgICAgICAgLy8gd2UgbmVlZCB0byBtYW51YWxseSBpbnZva2UgY2hhbmdlIGRldGVjdGlvbiBzaW5jZSBldmVudHMgcmVnaXN0ZXJlZFxuICAgICAgICAgLy8gdmlhXG4gICAgICAgICAvLyBSZW5kZXJlcjo6bGlzdGVuKCkgYXJlIG5vdCBwaWNrZWQgdXAgYnkgY2hhbmdlIGRldGVjdGlvbiB3aXRoIHRoZVxuICAgICAgICAgLy8gT25QdXNoIHN0cmF0ZWd5XG4gICAgICAgICBpZiAodGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgICAgdGhpcy5faW5uZXJDb21wb25lbnQgPSB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgICAgICAgICAgdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgIHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50UmVmO1xuICAgICB9XG5cbiAgICAgcHVibGljIGhpZGUoKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgfVxuXG4gICAgICAgdGhpcy5vbkJlZm9yZUhpZGUuZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuXG4gICAgICAgY29uc3QgY29tcG9uZW50RWwgPSB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgICBjb21wb25lbnRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbXBvbmVudEVsKTtcbiAgICAgICBpZiAodGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgIHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICB9XG4gICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZiAmJiB0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpIHtcbiAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYucmVtb3ZlKHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpKTtcbiAgICAgICB9XG5cbiAgICAgICAgIHRoaXMuX2NvbnRlbnRSZWYgPSBudWxsO1xuICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gbnVsbDtcblxuICAgICAgICAgdGhpcy5vbkhpZGRlbi5lbWl0KCk7XG4gICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICB9XG5cbiAgICAgICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQgfCBhbnkge1xuICAgICAgICAgaWYgKHRoaXMuaXNTaG93bikge1xuICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuXG4gICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICB9XG5cbiAgICAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlUG9zaXRpb25pbmcoKTtcblxuICAgICAgICAgaWYgKHRoaXMuX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbikge1xuICAgICAgICAgICB0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4oKTtcbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICBwdWJsaWMgbGlzdGVuKGxpc3Rlbk9wdHM6IExpc3Rlbk9wdGlvbnMpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgICAgICAgdGhpcy50cmlnZ2VycyA9IGxpc3Rlbk9wdHMudHJpZ2dlcnMgfHwgdGhpcy50cmlnZ2VycztcblxuICAgICAgICAgbGlzdGVuT3B0cy50YXJnZXQgPSBsaXN0ZW5PcHRzLnRhcmdldCB8fCB0aGlzLl9lbGVtZW50UmVmO1xuICAgICAgICAgbGlzdGVuT3B0cy5zaG93ID0gbGlzdGVuT3B0cy5zaG93IHx8ICgoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICAgICBsaXN0ZW5PcHRzLmhpZGUgPSBsaXN0ZW5PcHRzLmhpZGUgfHwgKCgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgICAgIGxpc3Rlbk9wdHMudG9nZ2xlID0gbGlzdGVuT3B0cy50b2dnbGUgfHwgKCgpID0+IHRoaXMuaXNTaG93blxuICAgICAgICAgICA/IGxpc3Rlbk9wdHMuaGlkZSgpXG4gICAgICAgICAgIDogbGlzdGVuT3B0cy5zaG93KCkpO1xuXG4gICAgICAgICB0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4gPSBsaXN0ZW5Ub1RyaWdnZXJzKFxuICAgICAgICAgICB0aGlzLl9yZW5kZXJlcixcbiAgICAgICAgICAgbGlzdGVuT3B0cy50YXJnZXQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgdGhpcy50cmlnZ2VycyxcbiAgICAgICAgICAgbGlzdGVuT3B0cy5zaG93LFxuICAgICAgICAgICBsaXN0ZW5PcHRzLmhpZGUsXG4gICAgICAgICAgIGxpc3Rlbk9wdHMudG9nZ2xlKTtcblxuICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgfVxuXG4gICAgICAgcHVibGljIGdldElubmVyQ29tcG9uZW50KCk6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgICAgICByZXR1cm4gdGhpcy5faW5uZXJDb21wb25lbnQ7XG4gICAgICAgfVxuXG4gICAgICAgcHJpdmF0ZSBfc3Vic2NyaWJlUG9zaXRpb25pbmcoKTogdm9pZCB8IGFueSB7XG4gICAgICAgICBpZiAodGhpcy5fem9uZVN1YnNjcmlwdGlvbiB8fCAhdGhpcy5hdHRhY2htZW50KSB7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cblxuICAgICAgICAgdGhpcy5fem9uZVN1YnNjcmlwdGlvbiA9IHRoaXMuX25nWm9uZVxuICAgICAgICAgLm9uU3RhYmxlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHRoaXMuX3Bvc1NlcnZpY2UucG9zaXRpb24oe1xuICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbixcbiAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuX2VsZW1lbnRSZWYsXG4gICAgICAgICAgICAgYXR0YWNobWVudDogdGhpcy5hdHRhY2htZW50LFxuICAgICAgICAgICAgIGFwcGVuZFRvQm9keTogdGhpcy5jb250YWluZXIgPT09ICdib2R5J1xuICAgICAgICAgICB9KTtcbiAgICAgICAgIH0pO1xuICAgICAgIH1cblxuICAgICAgIHByaXZhdGUgX3Vuc3Vic2NyaWJlUG9zaXRpb25pbmcoKTogdm9pZCB8IGFueSB7XG4gICAgICAgICBpZiAoIXRoaXMuX3pvbmVTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5fem9uZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgdGhpcy5fem9uZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgfVxuXG4gICAgICAgcHJpdmF0ZSBfZ2V0Q29udGVudFJlZihjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgYW55LCBkYXRhPzogYW55KTogQ29udGVudFJlZiB7XG4gICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtdKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldzxUZW1wbGF0ZVJlZjxUPj4oY29udGVudCk7XG4gICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFt2aWV3UmVmLnJvb3ROb2Rlc10sIHZpZXdSZWYpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyh7fSk7XG4gICAgICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG4gICAgICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbdmlld1JlZi5yb290Tm9kZXNdLCB2aWV3UmVmKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgIGNvbnN0IGNvbnRlbnRDbXB0RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb250ZW50KTtcbiAgICAgICAgICAgY29uc3QgbW9kYWxDb250ZW50SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoeyBwcm92aWRlcnM6IHRoaXMuX3Byb3ZpZGVycywgcGFyZW50OiB0aGlzLl9pbmplY3Rvcn0pO1xuICAgICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb250ZW50Q21wdEZhY3RvcnkuY3JlYXRlKG1vZGFsQ29udGVudEluamVjdG9yKTtcbiAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRSZWYuaW5zdGFuY2UsIGRhdGEpO1xuICAgICAgICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbW2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XV0sIGNvbXBvbmVudFJlZi5ob3N0VmlldywgY29tcG9uZW50UmVmKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbW3RoaXMuX3JlbmRlcmVyLmNyZWF0ZVRleHQoYCR7Y29udGVudH1gKV1dKTtcbiAgICAgICB9XG4gICAgIH1cbiJdfQ==