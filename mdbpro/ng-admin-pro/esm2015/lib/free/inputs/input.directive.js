/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Renderer2, Input, HostListener, PLATFORM_ID, Inject, } from '@angular/core';
export class MdbInput {
    /**
     * @param {?} el
     * @param {?} _renderer
     * @param {?} platformId
     */
    constructor(el, _renderer, platformId) {
        this.el = el;
        this._renderer = _renderer;
        this.elLabel = null;
        this.elIcon = null;
        this.element = null;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    onfocus() {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) {
        }
    }
    /**
     * @return {?}
     */
    onblur() {
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) {
        }
    }
    /**
     * @return {?}
     */
    onchange() {
        try {
            this.checkValue();
        }
        catch (error) {
        }
    }
    /**
     * @return {?}
     */
    oniput() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onkeydown(event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 10;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    }
    /**
     * @return {?}
     */
    oncut() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onpaste() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    ondrop() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.delayedResize();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) { }
        }
        /** @type {?} */
        const type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.initComponent();
        this.checkValue();
    }
    /**
     * @return {?}
     */
    resize() {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    }
    /**
     * @return {?}
     */
    delayedResize() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.resize();
        }), 0);
    }
    /**
     * @return {?}
     */
    initComponent() {
        /** @type {?} */
        let inputId;
        /** @type {?} */
        let inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this._renderer.addClass(this.elIcon, 'active');
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkValue() {
        /** @type {?} */
        let value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this._renderer.addClass(this.elLabel, 'active');
            }
        }
    }
}
MdbInput.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInput]'
            },] }
];
/** @nocollapse */
MdbInput.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbInput.propDecorators = {
    focusCheckbox: [{ type: Input, args: ['focusCheckbox',] }],
    focusRadio: [{ type: Input, args: ['focusRadio',] }],
    onfocus: [{ type: HostListener, args: ['focus',] }],
    onblur: [{ type: HostListener, args: ['blur',] }],
    onchange: [{ type: HostListener, args: ['change',] }],
    oniput: [{ type: HostListener, args: ['input',] }],
    onkeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    oncut: [{ type: HostListener, args: ['cut',] }],
    onpaste: [{ type: HostListener, args: ['paste',] }],
    ondrop: [{ type: HostListener, args: ['drop',] }]
};
if (false) {
    /** @type {?} */
    MdbInput.prototype.elLabel;
    /** @type {?} */
    MdbInput.prototype.elIcon;
    /** @type {?} */
    MdbInput.prototype.element;
    /** @type {?} */
    MdbInput.prototype.focusCheckbox;
    /** @type {?} */
    MdbInput.prototype.focusRadio;
    /** @type {?} */
    MdbInput.prototype.isBrowser;
    /** @type {?} */
    MdbInput.prototype.isClicked;
    /**
     * @type {?}
     * @private
     */
    MdbInput.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbInput.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXRzL2lucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFFTCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUt2QixNQUFNLE9BQU8sUUFBUTs7Ozs7O0lBVW5CLFlBQW9CLEVBQWMsRUFBVSxTQUFvQixFQUF1QixVQUFrQjtRQUFyRixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVR6RCxZQUFPLEdBQXFCLElBQUksQ0FBQztRQUNqQyxXQUFNLEdBQWtCLElBQUksQ0FBQztRQUNwQyxZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ0ksa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDeEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QyxjQUFTLEdBQVEsS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRXNCLE9BQU87UUFDNUIsSUFBSTtZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFBQyxPQUFPLEtBQUssRUFBRTtTQUVmO0lBQ0gsQ0FBQzs7OztJQUVxQixNQUFNO1FBQzFCLElBQUk7WUFDRixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFB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USxDQUFDLENBQUM7aUJBQ25EO2FBQ0Y7WUFBQyxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVM7Z0JBQ2xDLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVztnQkFDakQsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUM1RDtnQkFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7SUFDSCxDQUFDOzs7WUE3S0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBWkMsVUFBVTtZQUNWLFNBQVM7eUNBc0IwRCxNQUFNLFNBQUMsV0FBVzs7OzRCQU5wRixLQUFLLFNBQUMsZUFBZTt5QkFDckIsS0FBSyxTQUFDLFlBQVk7c0JBU2xCLFlBQVksU0FBQyxPQUFPO3FCQVNwQixZQUFZLFNBQUMsTUFBTTt1QkFZbkIsWUFBWSxTQUFDLFFBQVE7cUJBUXJCLFlBQVksU0FBQyxPQUFPO3dCQUdwQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO29CQTJCbEMsWUFBWSxTQUFDLEtBQUs7c0JBT2xCLFlBQVksU0FBQyxPQUFPO3FCQU9wQixZQUFZLFNBQUMsTUFBTTs7OztJQXRGcEIsMkJBQXdDOztJQUN4QywwQkFBb0M7O0lBQ3BDLDJCQUFvQjs7SUFDcEIsaUNBQTZDOztJQUM3Qyw4QkFBdUM7O0lBRXZDLDZCQUF1Qjs7SUFDdkIsNkJBQWtCOzs7OztJQUVOLHNCQUFzQjs7Ozs7SUFBRSw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdCxcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJJbnB1dF0nXG59KVxuZXhwb3J0IGNsYXNzIE1kYklucHV0IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBlbExhYmVsOiBFbGVtZW50UmVmIHwgYW55ID0gbnVsbDtcbiAgcHVibGljIGVsSWNvbjogRWxlbWVudCB8IGFueSA9IG51bGw7XG4gIGVsZW1lbnQ6IGFueSA9IG51bGw7XG4gIEBJbnB1dCgnZm9jdXNDaGVja2JveCcpIGZvY3VzQ2hlY2tib3ggPSB0cnVlO1xuICBASW5wdXQoJ2ZvY3VzUmFkaW8nKSBmb2N1c1JhZGlvID0gdHJ1ZTtcblxuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICBpc0NsaWNrZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbmZvY3VzKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsTGFiZWwsICdhY3RpdmUnKTtcbiAgICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIG9uYmx1cigpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICB9XG5cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScpIG9uY2hhbmdlKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNoZWNrVmFsdWUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbmlwdXQoKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25rZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgKyAxMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlIC0gMTA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlICsgMC4xO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgLSAwLjE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB0aGlzLmRlbGF5ZWRSZXNpemUoKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjdXQnKSBvbmN1dCgpIHtcbiAgICB0cnkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXllZFJlc2l6ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJykgb25wYXN0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXllZFJlc2l6ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnKSBvbmRyb3AoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGF5ZWRSZXNpemUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZC10ZXh0YXJlYS1hdXRvJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG5cbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC50eXBlO1xuICAgIGlmICh0aGlzLmZvY3VzQ2hlY2tib3ggJiYgdHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb25Gb2N1c1NlbGVjdCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c1JhZGlvICYmIHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ29uRm9jdXNTZWxlY3QnKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50KCk7XG4gICAgdGhpcy5jaGVja1ZhbHVlKCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWQtdGV4dGFyZWEtYXV0bycpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQgKyAncHgnKTtcbiAgICAgIH1cblxuICB9XG5cbiAgZGVsYXllZFJlc2l6ZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdENvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBsZXQgaW5wdXRJZDtcbiAgICBsZXQgaW5wdXRQO1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW5wdXRJZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5pZDtcbiAgICAgIH0gY2F0Y2ggKGVycikgeyB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlucHV0UCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7IH1cblxuICAgICAgdGhpcy5lbExhYmVsID0gaW5wdXRQLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIicgKyBpbnB1dElkICsgJ1wiXScpIHx8IGlucHV0UC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICAgICAgaWYgKHRoaXMuZWxMYWJlbCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxMYWJlbCwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbEljb24gPSBpbnB1dFAucXVlcnlTZWxlY3RvcignaScpIHx8IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5lbEljb24pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbEljb24sICdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrVmFsdWUoKTogdm9pZCB7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgaWYgKHRoaXMuZWxMYWJlbCAhPSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJztcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmVsSWNvbikge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxJY29uLCAnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0gaWYgKHZhbHVlID09PSAnJyAmJiB0aGlzLmlzQ2xpY2tlZCB8fFxuICAgICAgICB2YWx1ZSA9PT0gJycgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyIHx8XG4gICAgICAgIHZhbHVlID09PSAnJyAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcy5wbGFjZWhvbGRlclxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxMYWJlbCwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19