/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, HostListener, Inject, PLATFORM_ID, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { LinkedList } from '../utils/linked-list.class';
import { CarouselConfig } from './carousel.config';
import { isPlatformBrowser } from '@angular/common';
/** @enum {number} */
var Direction = {
    UNKNOWN: 0, NEXT: 1, PREV: 2,
};
export { Direction };
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, el, platformId, cdRef, renderer) {
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._slides = new LinkedList();
        this.destroyed = false;
        this.el = null;
        this.animationEnd = true;
        this.isBrowser = false;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        this.activeSlideChange = new EventEmitter(false);
        this.isBrowser = isPlatformBrowser(platformId);
        Object.assign(this, config);
        this.el = el;
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentActiveSlide;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkNavigation = /**
     * @return {?}
     */
    function () {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkDots = /**
     * @return {?}
     */
    function () {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.getImg = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        return slide.el.nativeElement.querySelector('img').src;
    };
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.activeSlideIndex) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._select(_this.activeSlideIndex);
                _this.activeSlideChange.emit({ 'relatedTarget': _this.activeSlide });
            }), 0);
        }
        if (this.isControls) {
            this.carouselIndicators = this.el.nativeElement.querySelectorAll('.carousel-indicators > li');
            this.renderer.addClass(this.carouselIndicators[0], 'active');
        }
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        var _this = this;
        /** @type {?} */
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            /** @type {?} */
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._select(nextSlideIndex_1);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }), 0);
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    CarouselComponent.prototype.swipe = /**
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
            this.cdRef.markForCheck();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
            this.cdRef.markForCheck();
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            var direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force), Direction.NEXT);
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': this.activeSlide });
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            var direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force), Direction.PREV);
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ 'direction': 'Prev', 'relatedTarget': this.activeSlide });
        }
    };
    /**
     * @protected
     * @param {?} goToIndex
     * @param {?=} direction
     * @return {?}
     */
    CarouselComponent.prototype.fadeAnimation = /**
     * @protected
     * @param {?} goToIndex
     * @param {?=} direction
     * @return {?}
     */
    function (goToIndex, direction) {
        var _this = this;
        /** @type {?} */
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            if (this.isBrowser) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var previous = _this._slides.get(_this._currentActiveSlide).el.nativeElement;
                    _this.renderer.setStyle(previous, 'opacity', '0');
                    _this.renderer.setStyle(previous, 'transition', 'all 600ms');
                    _this.renderer.setStyle(previous, 'display', 'block');
                    _this.renderer.setStyle(goToSlide.el.nativeElement, 'display', 'block');
                    _this.renderer.setStyle(goToSlide.el.nativeElement, 'opacity', '1');
                    _this.renderer.setStyle(goToSlide.el.nativeElement, 'transition', 'all 600ms');
                    if (direction === 1) {
                        _this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': _this.activeSlide });
                    }
                    else if (direction === 2) {
                        _this.activeSlideChange.emit({ 'direction': 'Prev', 'relatedTarget': _this.activeSlide });
                    }
                    goToSlide.directionNext = false;
                    _this.animationEnd = true;
                    _this.activeSlide = goToIndex;
                    _this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': _this.activeSlide });
                    _this.play();
                    _this.cdRef.markForCheck();
                }), 0);
            }
        }
    };
    /**
     * @protected
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.slideAnimation = /**
     * @protected
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    function (goToIndex, direction) {
        var _this = this;
        /** @type {?} */
        var currentSlide = this._slides.get(this._currentActiveSlide);
        /** @type {?} */
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                if (this.isBrowser) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        goToSlide.directionLeft = true;
                        currentSlide.directionLeft = true;
                        _this.cdRef.markForCheck();
                    }), 100);
                }
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                if (this.isBrowser) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        goToSlide.directionRight = true;
                        currentSlide.directionRight = true;
                        _this.cdRef.markForCheck();
                    }), 100);
                }
            }
            if (this.isBrowser) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    goToSlide.directionLeft = false;
                    goToSlide.directionNext = false;
                    currentSlide.directionLeft = false;
                    currentSlide.directionNext = false;
                    goToSlide.directionRight = false;
                    goToSlide.directionPrev = false;
                    currentSlide.directionRight = false;
                    currentSlide.directionPrev = false;
                    _this.animationEnd = true;
                    _this.activeSlide = goToIndex;
                    /** @type {?} */
                    var directionName;
                    if (direction === Direction.NEXT) {
                        directionName = 'Next';
                    }
                    else if (direction === Direction.PREV) {
                        directionName = 'Prev';
                    }
                    _this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': _this.activeSlide });
                    _this.play();
                    _this.cdRef.markForCheck();
                }), 700);
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        this.play();
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.play = /**
     * @return {?}
     */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.pause = /**
     * @return {?}
     */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * @return {?}
     */
    function () {
        return this._slides.findIndex((/**
         * @param {?} slide
         * @return {?}
         */
        function (slide) { return slide.active; }));
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = /**
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    function (direction, force) {
        /** @type {?} */
        var nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        /** @type {?} */
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        /** @type {?} */
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.resetTimer();
        if (this.isBrowser) {
            /** @type {?} */
            var interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
                this.currentInterval = setInterval((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var nInterval = +_this.interval;
                    if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                        _this.nextSlide();
                    }
                    else {
                        _this.pause();
                    }
                }), interval);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
                this.currentInterval = void 0;
            }
        }
    };
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.hasClass = /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.classAdd = /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.removeClass = /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            /** @type {?} */
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keyboardControl = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.focus();
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-carousel',
                    template: "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\">\n  <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\">\n    <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fas fa-chevron-left\"></i></a>\n    <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fas fa-chevron-right\"></i></a>\n  </div>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\">\n      <img  class=\"d-block w-100 img-fluid\" src=\"{{ getImg(slidez) }}\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span  class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig },
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    CarouselComponent.propDecorators = {
        noWrap: [{ type: Input }],
        noPause: [{ type: Input }],
        isControls: [{ type: Input, args: ['isControls',] }],
        keyboard: [{ type: Input }],
        class: [{ type: Input, args: ['class',] }],
        type: [{ type: Input, args: ['type',] }],
        animation: [{ type: Input, args: ['animation',] }],
        activeSlideIndex: [{ type: Input }],
        activeSlideChange: [{ type: Output }],
        activeSlide: [{ type: Input }],
        interval: [{ type: Input }],
        play: [{ type: HostListener, args: ['mouseleave',] }],
        pause: [{ type: HostListener, args: ['mouseenter',] }],
        keyboardControl: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        focus: [{ type: HostListener, args: ['click',] }]
    };
    return CarouselComponent;
}());
export { CarouselComponent };
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.SWIPE_ACTION;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._slides;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.currentInterval;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.isPlaying;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.destroyed;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.animationEnd;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._currentActiveSlide;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype.carouselIndicators;
    /** @type {?} */
    CarouselComponent.prototype.isBrowser;
    /** @type {?} */
    CarouselComponent.prototype.noWrap;
    /** @type {?} */
    CarouselComponent.prototype.noPause;
    /** @type {?} */
    CarouselComponent.prototype.isControls;
    /** @type {?} */
    CarouselComponent.prototype.keyboard;
    /** @type {?} */
    CarouselComponent.prototype.class;
    /** @type {?} */
    CarouselComponent.prototype.type;
    /** @type {?} */
    CarouselComponent.prototype.animation;
    /** @type {?} */
    CarouselComponent.prototype.activeSlideIndex;
    /** @type {?} */
    CarouselComponent.prototype.activeSlideChange;
    /**
     * @type {?}
     * @protected
     */
    CarouselComponent.prototype._interval;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFdBQVcsRUFFWCxpQkFBaUIsRUFBRSxTQUFTLEVBQzdCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFdEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7SUFFMUIsVUFBTyxFQUFFLE9BQUksRUFBRSxPQUFJOzs7Ozs7Ozs7QUFLM0M7SUFpRkUsMkJBQ0UsTUFBc0IsRUFDdEIsRUFBYyxFQUNPLFVBQWtCLEVBQy9CLEtBQXdCLEVBQ3hCLFFBQW1CO1FBRG5CLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFoRjdCLGlCQUFZLEdBQUcsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUMsQ0FBQztRQUU5QyxZQUFPLEdBQStCLElBQUksVUFBVSxFQUFrQixDQUFDO1FBT3ZFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsT0FBRSxHQUFxQixJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFJOUIsY0FBUyxHQUFRLEtBQUssQ0FBQztRQUlLLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFHdkIsVUFBSyxHQUFXLEVBQUUsQ0FB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QVksU0FBQyxPQUFPOztJQUd2Qix3QkFBQztDQUFBLEFBeGJELElBd2JDO1NBbmJZLGlCQUFpQjs7O0lBQzVCLHlDQUF3RDs7Ozs7SUFFeEQsb0NBQWlGOzs7OztJQUtqRiw0Q0FBK0I7Ozs7O0lBQy9CLHNDQUE2Qjs7Ozs7SUFDN0Isc0NBQTRCOzs7OztJQUM1QiwrQkFBc0M7Ozs7O0lBQ3RDLHlDQUE4Qjs7Ozs7SUFDOUIsZ0RBQTRDOzs7OztJQUM1QywrQ0FBa0M7O0lBRWxDLHNDQUF1Qjs7SUFDdkIsbUNBQWdDOztJQUNoQyxvQ0FBaUM7O0lBRWpDLHVDQUE4Qzs7SUFDOUMscUNBQWtDOztJQUVsQyxrQ0FBMEM7O0lBQzFDLGlDQUF3Qzs7SUFDeEMsc0NBQWtEOztJQUNsRCw2Q0FBa0M7O0lBR2xDLDhDQUFxRjs7Ozs7SUFhckYsc0NBQTRCOzs7OztJQXNDMUIsa0NBQWdDOzs7OztJQUNoQyxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLCBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7aXNCczN9IGZyb20gJy4uL3V0aWxzL25nMi1ib290c3RyYXAtY29uZmlnJztcbmltcG9ydCB7TGlua2VkTGlzdH0gZnJvbSAnLi4vdXRpbHMvbGlua2VkLWxpc3QuY2xhc3MnO1xuaW1wb3J0IHtTbGlkZUNvbXBvbmVudH0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xuaW1wb3J0IHtDYXJvdXNlbENvbmZpZ30gZnJvbSAnLi9jYXJvdXNlbC5jb25maWcnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHsgVU5LTk9XTiwgTkVYVCwgUFJFViB9XG5cbi8qKlxuICogQmFzZSBlbGVtZW50IHRvIGNyZWF0ZSBjYXJvdXNlbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBTV0lQRV9BQ1RJT04gPSB7TEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCd9O1xuXG4gIHByb3RlY3RlZCBfc2xpZGVzOiBMaW5rZWRMaXN0PFNsaWRlQ29tcG9uZW50PiA9IG5ldyBMaW5rZWRMaXN0PFNsaWRlQ29tcG9uZW50PigpO1xuICBwdWJsaWMgZ2V0IHNsaWRlcygpOiBTbGlkZUNvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVzLnRvQXJyYXkoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjdXJyZW50SW50ZXJ2YWw6IGFueTtcbiAgcHJvdGVjdGVkIGlzUGxheWluZzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYgfCBhbnkgPSBudWxsO1xuICBwcm90ZWN0ZWQgYW5pbWF0aW9uRW5kID0gdHJ1ZTtcbiAgcHJvdGVjdGVkIF9jdXJyZW50QWN0aXZlU2xpZGU6IG51bWJlciB8IGFueTtcbiAgcHJvdGVjdGVkIGNhcm91c2VsSW5kaWNhdG9yczogYW55O1xuXG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBub1dyYXA6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1YmxpYyBub1BhdXNlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnaXNDb250cm9scycpIHB1YmxpYyBpc0NvbnRyb2xzID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIGtleWJvYXJkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnY2xhc3MnKSBwdWJsaWMgY2xhc3M6IFN0cmluZyA9ICcnO1xuICBASW5wdXQoJ3R5cGUnKSBwdWJsaWMgdHlwZTogU3RyaW5nID0gJyc7XG4gIEBJbnB1dCgnYW5pbWF0aW9uJykgcHVibGljIGFuaW1hdGlvbjogU3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGFjdGl2ZVNsaWRlSW5kZXg6IG51bWJlcjtcblxuXG4gIEBPdXRwdXQoKSBwdWJsaWMgYWN0aXZlU2xpZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KGZhbHNlKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGFjdGl2ZVNsaWRlKGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCAmJiBpbmRleCAhPT0gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKSB7XG4gICAgICB0aGlzLl9zZWxlY3QoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWN0aXZlU2xpZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9pbnRlcnZhbDogbnVtYmVyO1xuXG4gIHB1YmxpYyBjaGVja05hdmlnYXRpb24oKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Nhcm91c2VsLW11bHRpLWl0ZW0nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGNoZWNrRG90cygpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnY2Fyb3VzZWwtdGh1bWJuYWlscycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRJbWcoc2xpZGU6IGFueSkge1xuICAgIHJldHVybiBzbGlkZS5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgaW50ZXJ2YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XG4gIH1cblxuICBwdWJsaWMgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlO1xuICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNCczMoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBjb25maWc6IENhcm91c2VsQ29uZmlnLFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGFkZFNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NsaWRlcy5hZGQoc2xpZGUpO1xuICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSB2b2lkIDA7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gMDtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTbGlkZUluZGV4KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2VsZWN0KHRoaXMuYWN0aXZlU2xpZGVJbmRleCk7XG4gICAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh7J3JlbGF0ZWRUYXJnZXQnOiB0aGlzLmFjdGl2ZVNsaWRlfSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NvbnRyb2xzKSB7XG4gICAgICB0aGlzLmNhcm91c2VsSW5kaWNhdG9ycyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycyA+IGxpJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuY2Fyb3VzZWxJbmRpY2F0b3JzWzBdLCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZVNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHJlbUluZGV4ID0gdGhpcy5fc2xpZGVzLmluZGV4T2Yoc2xpZGUpO1xuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9PT0gcmVtSW5kZXgpIHtcblxuICAgICAgbGV0IG5leHRTbGlkZUluZGV4OiBudW1iZXIgfCBhbnkgPSB2b2lkIDA7XG4gICAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPSAhdGhpcy5pc0xhc3QocmVtSW5kZXgpID8gcmVtSW5kZXggOlxuICAgICAgICAgIHRoaXMubm9XcmFwID8gcmVtSW5kZXggLSAxIDogMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NsaWRlcy5yZW1vdmUocmVtSW5kZXgpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2VsZWN0KG5leHRTbGlkZUluZGV4KTtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZUluZGV4ID0gdGhpcy5nZXRDdXJyZW50U2xpZGVJbmRleCgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUluZGV4O1xuICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcbiAgICAgIH0sIDApO1xuXG4gICAgfVxuICB9XG5cbiAgc3dpcGUoYWN0aW9uID0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcbiAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xuICAgICAgdGhpcy5wcmV2aW91c1NsaWRlKCk7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLkxFRlQpIHtcbiAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZXh0U2xpZGUoZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gJ3NsaWRlJykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gRGlyZWN0aW9uLk5FWFQ7XG4gICAgICB0aGlzLnNsaWRlQW5pbWF0aW9uKHRoaXMuZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbiwgZm9yY2UpLCBkaXJlY3Rpb24pO1xuICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uID09PSAnZmFkZScpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuZmFkZUFuaW1hdGlvbih0aGlzLmZpbmROZXh0U2xpZGVJbmRleChEaXJlY3Rpb24uTkVYVCwgZm9yY2UpLCBEaXJlY3Rpb24uTkVYVCk7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKTtcbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh7J2RpcmVjdGlvbic6ICdOZXh0JywgJ3JlbGF0ZWRUYXJnZXQnOiB0aGlzLmFjdGl2ZVNsaWRlfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHByZXZpb3VzU2xpZGUoZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gJ3NsaWRlJykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gRGlyZWN0aW9uLlBSRVY7XG4gICAgICB0aGlzLnNsaWRlQW5pbWF0aW9uKHRoaXMuZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbiwgZm9yY2UpLCBkaXJlY3Rpb24pO1xuICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uID09PSAnZmFkZScpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuZmFkZUFuaW1hdGlvbih0aGlzLmZpbmROZXh0U2xpZGVJbmRleChEaXJlY3Rpb24uUFJFViwgZm9yY2UpLCBEaXJlY3Rpb24uUFJFVik7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLlBSRVYsIGZvcmNlKTtcbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh7J2RpcmVjdGlvbic6ICdQcmV2JywgJ3JlbGF0ZWRUYXJnZXQnOiB0aGlzLmFjdGl2ZVNsaWRlfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZhZGVBbmltYXRpb24oZ29Ub0luZGV4OiBudW1iZXIsIGRpcmVjdGlvbj86IGFueSkge1xuICAgIGNvbnN0IGdvVG9TbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQoZ29Ub0luZGV4KTtcblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkVuZCkge1xuICAgICAgdGhpcy5hbmltYXRpb25FbmQgPSBmYWxzZTtcblxuICAgICAgZ29Ub1NsaWRlLmRpcmVjdGlvbk5leHQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5fc2xpZGVzLmdldCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHByZXZpb3VzLCAnb3BhY2l0eScsICcwJyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShwcmV2aW91cywgJ3RyYW5zaXRpb24nLCAnYWxsIDYwMG1zJyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShwcmV2aW91cywgJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZ29Ub1NsaWRlLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShnb1RvU2xpZGUuZWwubmF0aXZlRWxlbWVudCwgJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZ29Ub1NsaWRlLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgJ2FsbCA2MDBtcycpO1xuXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHsnZGlyZWN0aW9uJzogJ05leHQnLCAncmVsYXRlZFRhcmdldCc6IHRoaXMuYWN0aXZlU2xpZGV9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHsnZGlyZWN0aW9uJzogJ1ByZXYnLCAncmVsYXRlZFRhcmdldCc6IHRoaXMuYWN0aXZlU2xpZGV9KTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25OZXh0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25FbmQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBnb1RvSW5kZXg7XG4gICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHsnZGlyZWN0aW9uJzogJ05leHQnLCAncmVsYXRlZFRhcmdldCc6IHRoaXMuYWN0aXZlU2xpZGV9KTtcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgc2xpZGVBbmltYXRpb24oZ29Ub0luZGV4OiBudW1iZXIsIGRpcmVjdGlvbjogYW55KSB7XG5cbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSB0aGlzLl9zbGlkZXMuZ2V0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSk7XG4gICAgY29uc3QgZ29Ub1NsaWRlID0gdGhpcy5fc2xpZGVzLmdldChnb1RvSW5kZXgpO1xuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRW5kKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkVuZCA9IGZhbHNlO1xuICAgICAgICBnb1RvU2xpZGUuZGlyZWN0aW9uTmV4dCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZ29Ub1NsaWRlLmRpcmVjdGlvbkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvbkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5QUkVWKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kID0gZmFsc2U7XG5cbiAgICAgICAgZ29Ub1NsaWRlLmRpcmVjdGlvblByZXYgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25SaWdodCA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUuZGlyZWN0aW9uUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBnb1RvU2xpZGUuZGlyZWN0aW9uTGVmdCA9IGZhbHNlO1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25OZXh0ID0gZmFsc2U7XG4gICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvbkxlZnQgPSBmYWxzZTtcbiAgICAgICAgICBjdXJyZW50U2xpZGUuZGlyZWN0aW9uTmV4dCA9IGZhbHNlO1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25SaWdodCA9IGZhbHNlO1xuICAgICAgICAgIGdvVG9TbGlkZS5kaXJlY3Rpb25QcmV2ID0gZmFsc2U7XG4gICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvblJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgY3VycmVudFNsaWRlLmRpcmVjdGlvblByZXYgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kID0gdHJ1ZTtcblxuICAgICAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBnb1RvSW5kZXg7XG5cbiAgICAgICAgICBsZXQgZGlyZWN0aW9uTmFtZTtcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCkge1xuICAgICAgICAgICAgZGlyZWN0aW9uTmFtZSA9ICdOZXh0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVYpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbk5hbWUgPSAnUHJldic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHsnZGlyZWN0aW9uJzogZGlyZWN0aW9uTmFtZSwgJ3JlbGF0ZWRUYXJnZXQnOiB0aGlzLmFjdGl2ZVNsaWRlfSk7XG4gICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgNzAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0U2xpZGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGF1c2UoKTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24gPT09ICdzbGlkZScpIHtcblxuICAgICAgaWYgKHRoaXMuYWN0aXZlU2xpZGUgPCBpbmRleCkge1xuICAgICAgICB0aGlzLnNsaWRlQW5pbWF0aW9uKGluZGV4LCBEaXJlY3Rpb24uTkVYVCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlU2xpZGUgPiBpbmRleCkge1xuICAgICAgICB0aGlzLnNsaWRlQW5pbWF0aW9uKGluZGV4LCBEaXJlY3Rpb24uUFJFVik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbiA9PT0gJ2ZhZGUnKSB7XG4gICAgICBpZiAoaW5kZXggIT09IHRoaXMuYWN0aXZlU2xpZGUpIHtcbiAgICAgICAgdGhpcy5mYWRlQW5pbWF0aW9uKGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgcGxheSgpIHtcbiAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBwYXVzZSgpIHtcbiAgICBpZiAoIXRoaXMubm9QYXVzZSkge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50U2xpZGVJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zbGlkZXMuZmluZEluZGV4KChzbGlkZTogU2xpZGVDb21wb25lbnQpID0+IHNsaWRlLmFjdGl2ZSk7XG4gIH1cblxuICBwdWJsaWMgaXNMYXN0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaW5kZXggKyAxID49IHRoaXMuX3NsaWRlcy5sZW5ndGg7XG4gIH1cblxuICBwcml2YXRlIGZpbmROZXh0U2xpZGVJbmRleChkaXJlY3Rpb246IERpcmVjdGlvbiwgZm9yY2U6IGJvb2xlYW4pOiBhbnkge1xuICAgIGxldCBuZXh0U2xpZGVJbmRleCA9IDA7XG5cbiAgICBpZiAoIWZvcmNlICYmICh0aGlzLmlzTGFzdCh0aGlzLmFjdGl2ZVNsaWRlKSAmJiBkaXJlY3Rpb24gIT09IERpcmVjdGlvbi5QUkVWICYmIHRoaXMubm9XcmFwKSkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSBEaXJlY3Rpb24uTkVYVDpcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPSAoIXRoaXMuaXNMYXN0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSkpID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlICsgMSA6XG4gICAgICAgICAgKCFmb3JjZSAmJiB0aGlzLm5vV3JhcCkgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgOiAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlBSRVY6XG4gICAgICAgIG5leHRTbGlkZUluZGV4ID0gKHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA+IDApID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlIC0gMSA6XG4gICAgICAgICAgKCFmb3JjZSAmJiB0aGlzLm5vV3JhcCkgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgOiB0aGlzLl9zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZGlyZWN0aW9uJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0U2xpZGVJbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGlzTmFOKGluZGV4KSkge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSB0aGlzLl9zbGlkZXMuZ2V0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSk7XG4gICAgaWYgKGN1cnJlbnRTbGlkZSkge1xuICAgICAgY3VycmVudFNsaWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBuZXh0U2xpZGUgPSB0aGlzLl9zbGlkZXMuZ2V0KGluZGV4KTtcbiAgICBpZiAobmV4dFNsaWRlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSBpbmRleDtcbiAgICAgIG5leHRTbGlkZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzdGFydFRpbWVyKCk6IGFueSB7XG4gICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xuICAgICAgaWYgKCFpc05hTihpbnRlcnZhbCkgJiYgaW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbkludGVydmFsID0gK3RoaXMuaW50ZXJ2YWw7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcgJiYgIWlzTmFOKHRoaXMuaW50ZXJ2YWwpICYmIG5JbnRlcnZhbCA+IDAgJiYgdGhpcy5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHRoaXMuY3VycmVudEludGVydmFsKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jdXJyZW50SW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNDbGFzcyhlbDogYW55LCBjbGFzc05hbWU6IGFueSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICEhZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJykpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBjbGFzc0FkZChlbDogYW55LCBjbGFzc05hbWU6IGFueSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVDbGFzcyhlbDogYW55LCBjbGFzc05hbWU6IGFueSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJyk7XG4gICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKSBrZXlib2FyZENvbnRyb2woZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0aGlzLnByZXZpb3VzU2xpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIGZvY3VzKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=