/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter, RendererFactory2 } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { ModalBackdropComponent } from './modalBackdrop.component';
import { ModalContainerComponent } from './modalContainer.component';
import { MDBModalRef, ClassName, modalConfigDefaults, ModalOptions, TransitionDurations } from './modal.options';
import { msConfig } from './modalService.config';
var MDBModalService = /** @class */ (function () {
    // public constructor(private clf: ComponentLoaderFactory) {
    function MDBModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        this.open = new EventEmitter();
        this.opened = new EventEmitter();
        this.close = new EventEmitter();
        this.closed = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        // private lastDismissReason = '';
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.renderer = rendererFactory.createRenderer(null, null);
        msConfig.serviceInstance = this;
    }
    /** Shows a modal */
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    MDBModalService.prototype.show = /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.hide = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }), this.config.animated ? TransitionDurations.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        var duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.removeBackdrop(); }), duration);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MDBModalService.prototype._showModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        var mdbModalRef = new MDBModalRef();
        /** @type {?} */
        var modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, data: this.config.data });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = (/**
         * @return {?}
         */
        function () {
            modalContainerRef.instance.hide();
        });
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype._hideModal = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        /** @type {?} */
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    MDBModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @protected
     * @return {?}
     */
    MDBModalService.prototype.removeBackdrop = /**
     * @protected
     * @return {?}
     */
    function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /** @internal */
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    MDBModalService.prototype.checkScrollbar = /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.resetScrollbar = /**
     * @private
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this.renderer.createElement('div');
        this.renderer.addClass(scrollDiv, ClassName.SCROLLBAR_MEASURER);
        this.renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype._createLoaders = /**
     * @private
     * @return {?}
     */
    function () {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        /** @type {?} */
        var loader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.copyEvent(loader.onBeforeShow, this.open);
        this.copyEvent(loader.onShown, this.opened);
        this.copyEvent(loader.onBeforeHide, this.close);
        this.copyEvent(loader.onHidden, this.closed);
        this.loaders.push(loader);
    };
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.removeLoaders = /**
     * @private
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((/**
         * @param {?} loader
         * @param {?} i
         * @return {?}
         */
        function (loader, i) {
            loader.instance.level = i + 1;
        }));
    };
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    MDBModalService.prototype.copyEvent = /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe((/**
         * @return {?}
         */
        function () {
            to.emit(_this.lastDismissReason);
        }));
    };
    MDBModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MDBModalService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: ComponentLoaderFactory }
    ]; };
    return MDBModalService;
}());
export { MDBModalService };
if (false) {
    /** @type {?} */
    MDBModalService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.el;
    /** @type {?} */
    MDBModalService.prototype.open;
    /** @type {?} */
    MDBModalService.prototype.opened;
    /** @type {?} */
    MDBModalService.prototype.close;
    /** @type {?} */
    MDBModalService.prototype.closed;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.isBodyOverflowing;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.originalBodyPadding;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.scrollbarWidth;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.backdropRef;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype._backdropLoader;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.modalsCount;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.lastDismissReason;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.loaders;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.clf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL21vZGFscy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUVWLFlBQVksRUFFWixnQkFBZ0IsRUFFSixNQUFNLGVBQWUsQ0FBQztBQUdwQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHakQ7SUEwQkUsNERBQTREO0lBQzFELHlCQUFtQixlQUFpQyxFQUFVLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCOztRQXhCcEYsV0FBTSxHQUFpQixtQkFBbUIsQ0FBQztRQUszQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUtyQixnQkFBVyxHQUFHLENBQUMsQ0FBQzs7UUFFaEIsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRTVCLFlBQU8sR0FBK0MsRUFBRSxD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e1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5MixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5mYWN0b3J5JztcbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL21vZGFsQmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbENvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTURCTW9kYWxSZWYsIENsYXNzTmFtZSwgbW9kYWxDb25maWdEZWZhdWx0cywgTW9kYWxPcHRpb25zLCBUcmFuc2l0aW9uRHVyYXRpb25zIH0gZnJvbSAnLi9tb2RhbC5vcHRpb25zJztcbmltcG9ydCB7IG1zQ29uZmlnIH0gZnJvbSAnLi9tb2RhbFNlcnZpY2UuY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTURCTW9kYWxTZXJ2aWNlIHtcbiAgLy8gY29uc3RydWN0b3IgcHJvcHNcbiAgcHVibGljIGNvbmZpZzogTW9kYWxPcHRpb25zID0gbW9kYWxDb25maWdEZWZhdWx0cztcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBvcGVuZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgY2xvc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcm90ZWN0ZWQgaXNCb2R5T3ZlcmZsb3dpbmcgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIG9yaWdpbmFsQm9keVBhZGRpbmcgPSAwO1xuXG4gIHByb3RlY3RlZCBzY3JvbGxiYXJXaWR0aCA9IDA7XG5cbiAgLy8gcHJvdGVjdGVkIGJhY2tkcm9wUmVmOiBDb21wb25lbnRSZWY8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XG4gIHByb3RlY3RlZCBiYWNrZHJvcFJlZjogQ29tcG9uZW50UmVmPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+IHwgYW55O1xuICBwcml2YXRlIF9iYWNrZHJvcExvYWRlcjogQ29tcG9uZW50TG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xuICBwcml2YXRlIG1vZGFsc0NvdW50ID0gMDtcbiAgLy8gcHJpdmF0ZSBsYXN0RGlzbWlzc1JlYXNvbiA9ICcnO1xuICBwcml2YXRlIGxhc3REaXNtaXNzUmVhc29uOiBhbnkgPSAnJztcblxuICBwcml2YXRlIGxvYWRlcnM6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD5bXSA9IFtdO1xuICAvLyBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBjbGY6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCBwcml2YXRlIGNsZjogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xuICAvLyAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+KG51bGwsIG51bGwsIG51bGwpO1xuICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+KHRoaXMuZWwsIHRoaXMudmNyLCB0aGlzLnJlbmRlcmVyKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICAgIG1zQ29uZmlnLnNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICAvKiogU2hvd3MgYSBtb2RhbCAqL1xuICBzaG93KGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBhbnksIGNvbmZpZz86IGFueSk6IE1EQk1vZGFsUmVmIHtcbiAgICB0aGlzLm1vZGFsc0NvdW50Kys7XG4gICAgdGhpcy5fY3JlYXRlTG9hZGVycygpO1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgY29uZmlnKTtcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKTtcbiAgICB0aGlzLmxhc3REaXNtaXNzUmVhc29uID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5fc2hvd01vZGFsKGNvbnRlbnQpO1xuICB9XG5cbiAgaGlkZShsZXZlbDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuX2hpZGVCYWNrZHJvcCgpO1xuICAgICAgdGhpcy5yZXNldFNjcm9sbGJhcigpO1xuICAgIH1cbiAgICB0aGlzLm1vZGFsc0NvdW50ID0gdGhpcy5tb2RhbHNDb3VudCA+PSAxID8gdGhpcy5tb2RhbHNDb3VudCAtIDEgOiAwO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5faGlkZU1vZGFsKGxldmVsKTtcbiAgICAgIHRoaXMucmVtb3ZlTG9hZGVycyhsZXZlbCk7XG4gICAgfSwgdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUcmFuc2l0aW9uRHVyYXRpb25zLkJBQ0tEUk9QIDogMCk7XG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQmFja2Ryb3BFbmFibGVkID0gdGhpcy5jb25maWcuYmFja2Ryb3AgfHwgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnO1xuICAgIGNvbnN0IGlzQmFja2Ryb3BJbkRPTSA9ICF0aGlzLmJhY2tkcm9wUmVmIHx8ICF0aGlzLmJhY2tkcm9wUmVmLmluc3RhbmNlLmlzU2hvd247XG5cbiAgICBpZiAodGhpcy5tb2RhbHNDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5yZW1vdmVCYWNrZHJvcCgpO1xuXG4gICAgICBpZiAoaXNCYWNrZHJvcEVuYWJsZWQgJiYgaXNCYWNrZHJvcEluRE9NKSB7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyXG4gICAgICAgIC5hdHRhY2goTW9kYWxCYWNrZHJvcENvbXBvbmVudClcbiAgICAgICAgLnRvKCdib2R5JylcbiAgICAgICAgLnNob3coe2lzQW5pbWF0ZWQ6IHRoaXMuY29uZmlnLmFuaW1hdGVkfSk7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BSZWYgPSB0aGlzLl9iYWNrZHJvcExvYWRlci5fY29tcG9uZW50UmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wUmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmFja2Ryb3BSZWYuaW5zdGFuY2UuaXNTaG93biA9IGZhbHNlO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUcmFuc2l0aW9uRHVyYXRpb25zLkJBQ0tEUk9QIDogMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlQmFja2Ryb3AoKSwgZHVyYXRpb24pO1xuICB9XG5cbiAgX3Nob3dNb2RhbChjb250ZW50OiBhbnkpOiBNREJNb2RhbFJlZiB7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSB0aGlzLmxvYWRlcnNbdGhpcy5sb2FkZXJzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG1kYk1vZGFsUmVmID0gbmV3IE1EQk1vZGFsUmVmKCk7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXJSZWYgPSBtb2RhbExvYWRlclxuICAgIC5wcm92aWRlKHtwcm92aWRlOiBNb2RhbE9wdGlvbnMsIHVzZVZhbHVlOiB0aGlzLmNvbmZpZ30pXG4gICAgLnByb3ZpZGUoe3Byb3ZpZGU6IE1EQk1vZGFsUmVmLCB1c2VWYWx1ZTogbWRiTW9kYWxSZWZ9KVxuICAgIC5hdHRhY2goTW9kYWxDb250YWluZXJDb21wb25lbnQpXG4gICAgLnRvKCdib2R5JylcbiAgICAuc2hvdyh7Y29udGVudCwgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQsIGRhdGE6IHRoaXMuY29uZmlnLmRhdGF9KTtcbiAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5sZXZlbCA9IHRoaXMuZ2V0TW9kYWxzQ291bnQoKTtcbiAgICBtZGJNb2RhbFJlZi5oaWRlID0gKCkgPT4ge1xuICAgICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UuaGlkZSgpO1xuICAgIH07XG4gICAgbWRiTW9kYWxSZWYuY29udGVudCA9IG1vZGFsTG9hZGVyLmdldElubmVyQ29tcG9uZW50KCkgfHwgbnVsbDtcbiAgICByZXR1cm4gbWRiTW9kYWxSZWY7XG4gIH1cblxuICBfaGlkZU1vZGFsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1tsZXZlbCAtIDFdO1xuICAgIGlmIChtb2RhbExvYWRlcikge1xuICAgICAgbW9kYWxMb2FkZXIuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldE1vZGFsc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxzQ291bnQ7XG4gIH1cblxuICBzZXREaXNtaXNzUmVhc29uKHJlYXNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IHJlYXNvbjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9iYWNrZHJvcExvYWRlci5oaWRlKCk7XG4gICAgdGhpcy5iYWNrZHJvcFJlZiA9IG51bGw7XG4gIH1cblxuICAvKiogQUZURVIgUFIgTUVSR0UgTU9EQUwuQ09NUE9ORU5UIFdJTEwgQkUgVVNJTkcgVEhJUyBDT0RFKi9cbiAgLyoqIFNjcm9sbCBiYXIgdHJpY2tzICovXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIGNoZWNrU2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3JpZ2luYWxCb2R5UGFkZGluZyA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSB8fCAnMCcsIDEwKTtcblxuICAgIGlmICh0aGlzLmlzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZyArIHRoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgKyAncHgnO1xuICB9XG5cbiAgLy8gdGh4IGQud2Fsc2hcbiAgcHJpdmF0ZSBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzY3JvbGxEaXYsIENsYXNzTmFtZS5TQ1JPTExCQVJfTUVBU1VSRVIpO1xuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG5cbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUxvYWRlcnMoKTogdm9pZCB7XG4gICAgLy8gY29uc3QgbG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PihudWxsLCBudWxsLCBudWxsKTtcbiAgICBjb25zdCBsb2FkZXIgPSB0aGlzLmNsZi5jcmVhdGVMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+KHRoaXMuZWwsIHRoaXMudmNyLCB0aGlzLnJlbmRlcmVyKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25CZWZvcmVTaG93LCB0aGlzLm9wZW4pO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vblNob3duLCB0aGlzLm9wZW5lZCk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlSGlkZSwgdGhpcy5jbG9zZSk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uSGlkZGVuLCB0aGlzLmNsb3NlZCk7XG4gICAgdGhpcy5sb2FkZXJzLnB1c2gobG9hZGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTG9hZGVycyhsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkZXJzLnNwbGljZShsZXZlbCAtIDEsIDEpO1xuICAgIHRoaXMubG9hZGVycy5mb3JFYWNoKChsb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgbG9hZGVyLmluc3RhbmNlLmxldmVsID0gaSArIDE7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvcHlFdmVudChmcm9tOiBFdmVudEVtaXR0ZXI8YW55PiwgdG86IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgZnJvbS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdG8uZW1pdCh0aGlzLmxhc3REaXNtaXNzUmVhc29uKTtcbiAgICB9KTtcbiAgfVxufVxuIl19