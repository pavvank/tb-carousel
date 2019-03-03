(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tb-carousel-lib', ['exports', '@angular/platform-browser', '@angular/common', '@angular/core'], factory) :
    (factory((global['tb-carousel-lib'] = {}),global.ng.platformBrowser,global.ng.common,global.ng.core));
}(this, (function (exports,i1,common,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbCarouselLibService = /** @class */ (function () {
        function TbCarouselLibService() {
        }
        TbCarouselLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TbCarouselLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ TbCarouselLibService.ngInjectableDef = i0.defineInjectable({ factory: function TbCarouselLibService_Factory() { return new TbCarouselLibService(); }, token: TbCarouselLibService, providedIn: "root" });
        return TbCarouselLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbCarouselLibComponent = /** @class */ (function () {
        function TbCarouselLibComponent() {
        }
        /**
         * @return {?}
         */
        TbCarouselLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TbCarouselLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tb-carousel-lib',
                        template: "\n    <p>\n      tb-carousel-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        TbCarouselLibComponent.ctorParameters = function () { return []; };
        return TbCarouselLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CardCSS = /** @class */ (function () {
        function CardCSS(zIndex, left, scale, display, top) {
            this.zIndex = zIndex;
            this.left = left;
            this.scale = scale;
            this.display = display;
            this.top = top;
        }
        /**
         * @param {?} zIndex
         * @return {?}
         */
        CardCSS.prototype.setZIndex = /**
         * @param {?} zIndex
         * @return {?}
         */
            function (zIndex) {
                this.zIndex = zIndex;
            };
        /**
         * @param {?} dispaly
         * @return {?}
         */
        CardCSS.prototype.setDisplay = /**
         * @param {?} dispaly
         * @return {?}
         */
            function (dispaly) {
                this.display = dispaly;
            };
        /**
         * @param {?} left
         * @return {?}
         */
        CardCSS.prototype.setleft = /**
         * @param {?} left
         * @return {?}
         */
            function (left) {
                this.left = left;
            };
        return CardCSS;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UtilitiesService = /** @class */ (function () {
        function UtilitiesService(sanitizer) {
            this.sanitizer = sanitizer;
        }
        /**
         * @param {?} str
         * @return {?}
         */
        UtilitiesService.prototype.getNumberAndUnit = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                /** @type {?} */
                var value = 0;
                /** @type {?} */
                var unit = "";
                /** @type {?} */
                var cssUnits = ["em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc",
                    "ch", "rem", "vh", "vw", "vmin", "vmax"];
                for (var i = 0; i < cssUnits.length; i++) {
                    if (!isNaN(Number(str.split(cssUnits[i])[0]))) {
                        value = Number(str.split(cssUnits[i])[0]);
                        unit = cssUnits[i];
                    }
                }
                return { value: value, unit: unit };
            };
        /**
         * @param {?} array
         * @return {?}
         */
        UtilitiesService.prototype.shiftRight = /**
         * @param {?} array
         * @return {?}
         */
            function (array) {
                /** @type {?} */
                var last = array[array.length - 1];
                for (var index = array.length - 2; index >= 0; index--)
                    array[index + 1] = array[index];
                array[0] = last;
            };
        /**
         * @param {?} array
         * @return {?}
         */
        UtilitiesService.prototype.shiftLeft = /**
         * @param {?} array
         * @return {?}
         */
            function (array) {
                /** @type {?} */
                var first = array[0];
                for (var index = 0; index < array.length; index++) {
                    array[index] = array[index + 1];
                }
                array[array.length - 1] = first;
            };
        /**
         * @param {?} url
         * @return {?}
         */
        UtilitiesService.prototype.sanitizeUrl = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return this.sanitizer.bypassSecurityTrustUrl(url);
            };
        /**
         * @param {?} array
         * @return {?}
         */
        UtilitiesService.prototype.sumOfNosInArray = /**
         * @param {?} array
         * @return {?}
         */
            function (array) {
                /** @type {?} */
                var sum = 0;
                for (var i = 0; i < array.length; i++) {
                    sum += array[i];
                }
                return sum;
            };
        UtilitiesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UtilitiesService.ctorParameters = function () {
            return [
                { type: i1.DomSanitizer }
            ];
        };
        /** @nocollapse */ UtilitiesService.ngInjectableDef = i0.defineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(i0.inject(i1.DomSanitizer)); }, token: UtilitiesService, providedIn: "root" });
        return UtilitiesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentGenServiceConfig = /** @class */ (function () {
        function ComponentGenServiceConfig() {
        }
        return ComponentGenServiceConfig;
    }());
    var ComponentGenService = /** @class */ (function () {
        function ComponentGenService(componentId, resolver, config) {
            this.resolver = resolver;
            this._userDefinedComp = TbCarouselLibComponent;
            if (config) {
                this._userDefinedComp = config[componentId].userDefinedComp;
            }
        }
        /**
         * @param {?} e
         * @param {?} componentRef
         * @param {?} modelObject
         * @return {?}
         */
        ComponentGenService.prototype.createComponent = /**
         * @param {?} e
         * @param {?} componentRef
         * @param {?} modelObject
         * @return {?}
         */
            function (e, componentRef, modelObject) {
                //this.entry.clear();
                /** @type {?} */
                var factory = this.resolver.resolveComponentFactory(this._userDefinedComp);
                componentRef = e.createComponent(factory);
                componentRef.instance._tbModelObject = modelObject;
            };
        /** @nocollapse */
        ComponentGenService.ctorParameters = function () {
            return [
                { type: Number },
                { type: i0.ComponentFactoryResolver },
                { type: ComponentGenServiceConfig, decorators: [{ type: i0.Optional }] }
            ];
        };
        return ComponentGenService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentGenFactoryService = /** @class */ (function () {
        function ComponentGenFactoryService(resolver, config) {
            this.resolver = resolver;
            this.config = config;
        }
        /**
         * @param {?} componentId
         * @return {?}
         */
        ComponentGenFactoryService.prototype.createComponentGenServiceObject = /**
         * @param {?} componentId
         * @return {?}
         */
            function (componentId) {
                return new ComponentGenService(componentId, this.resolver, this.config);
            };
        /** @nocollapse */
        ComponentGenFactoryService.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: ComponentGenServiceConfig, decorators: [{ type: i0.Optional }] }
            ];
        };
        return ComponentGenFactoryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbCarouselStackedCardComponent = /** @class */ (function () {
        function TbCarouselStackedCardComponent(resolver, compGenFactoryService, utility, changeDetector, elRef, renderer) {
            this.resolver = resolver;
            this.compGenFactoryService = compGenFactoryService;
            this.utility = utility;
            this.changeDetector = changeDetector;
            this.elRef = elRef;
            this.renderer = renderer;
            this.highestZIndex = 100;
            this.cssStylesArray = [];
            this.arrayOfPosFirstHalf = [];
            this.arrayOfPosLastHalf = [];
            this.arrayOfPosFirstHalfVertical = [];
            this.arrayOfPosLastHalfVertical = [];
            this.arrayOfZIndexes = [];
            this.arrayOfZIndexesReverse = [];
            this.arrayOfCardSizeHalf = [];
            this.arrayOfCardSizeHalfReverse = [];
            /**
             *
             */
            this.timeInterval = 1000;
            this.stopScrollOnHover = true;
            this.visibleBlocks = 5;
            this.orientation = "horizontal";
            this.component = 0;
            this.dataType = 'text';
            /*Card Style properties*/
            this.heightOfBox = "250px";
            this.widthOfBox = "300px";
            this.property = [];
            this.values = [];
            /*Container properties */
            this.containerHeight = "0px";
            this.containerWidth = "0px";
            this.tbTransition = "left 1s, transform 1s, top 1s";
            /**
             * Navigation arrow properties
             */
            this.arrowHeight = "45px";
            this.arrowColor = "black";
            this.arrowColor2 = "rgb(100, 99, 100)";
            this.arrowWidth = "30px";
            this.arrowTopMargin = "-22px";
            this.arrowColorTemp = this.arrowColor;
            this.arrowColorTemp1 = this.arrowColor;
            this.showNav = "block";
            this.navArrowOpacity = 0.5;
            this.showNavArrow = true;
        }
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                for (var i = 0; i < this.commonCard.toArray().length; i++) {
                    /** @type {?} */
                    var styles = void 0;
                    if (i == 0 && this.tbStyle) {
                        styles = this.tbStyle;
                        this.property = Object.keys(styles);
                        this.values = Object.values(styles);
                    }
                    if (this.property.length == this.values.length) {
                        for (var j = 0; j < this.property.length; j++) {
                            this.renderer.setStyle(this.commonCard.toArray()[i].nativeElement, this.property[j], this.values[j]);
                        }
                    }
                }
                if (this.dataType == "custom-component") {
                    try {
                        /** @type {?} */
                        var compGenService = this.compGenFactoryService.
                            createComponentGenServiceObject(this.component);
                        for (var i = 0; i < this.widgetTargets.toArray().length; i++) {
                            compGenService.createComponent(this.widgetTargets.toArray()[i], this.componentRef, this.data[i]);
                        }
                        this.changeDetector.detectChanges();
                    }
                    catch (error) {
                        console.error("No componenet is defined in TbCarouselLibModule.forRoot([]) please add the component needed and pass on the index of component as property bind e.g. component='1'.");
                    }
                }
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.destroyComponent = /**
         * @return {?}
         */
            function () {
                this.componentRef.destroy();
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.autoRotate = setInterval(function () {
                    if (document.hasFocus()) {
                        _this.moveNext();
                    }
                }, this.timeInterval);
                if (this.showNavArrow) {
                    this.showNav = "block";
                }
                else {
                    this.showNav = "none";
                }
                this.visibleBlocks = this.data.length < this.visibleBlocks ? this.data.length : this.visibleBlocks;
                if (this.orientation == "horizontal") {
                    this.centerPosition = 50;
                    this.marginLeft = "-" + Math.floor(this.utility.getNumberAndUnit(this.widthOfBox).value / 2) +
                        this.utility.getNumberAndUnit(this.widthOfBox).unit;
                }
                else {
                    this.centerPosition = 0;
                    this.marginLeft = (this.utility.getNumberAndUnit(this.widthOfBox).value * 0.1) +
                        this.utility.getNumberAndUnit(this.widthOfBox).unit;
                }
                if (this.orientation == "vertical") {
                    this.centerPositionVertical = 50;
                    this.marginTop = "-" + Math.floor(this.utility.getNumberAndUnit(this.heightOfBox).value / 2) +
                        this.utility.getNumberAndUnit(this.heightOfBox).unit;
                }
                else {
                    this.centerPositionVertical = 0;
                    this.marginTop = (this.utility.getNumberAndUnit(this.heightOfBox).value * 0.1) +
                        this.utility.getNumberAndUnit(this.heightOfBox).unit;
                }
                this.generatePositions();
                this.generatePositionsVertical();
                this.generateSizeReverse();
                this.generateSize();
                this.generateZIndexReverse();
                this.generateZIndex();
                this.generateCssStyles();
                if (this.utility.getNumberAndUnit(this.containerHeight).value == 0) {
                    this.containerHeight =
                        this.orientation == "vertical" ?
                            (this.utility.getNumberAndUnit(this.heightOfBox).value *
                                (1 + this.utility.sumOfNosInArray(this.arrayOfCardSizeHalf)) +
                                this.utility.getNumberAndUnit(this.heightOfBox).unit) :
                            this.utility.getNumberAndUnit(this.heightOfBox).value * (1.2) +
                                this.utility.getNumberAndUnit(this.heightOfBox).unit;
                }
                if (this.utility.getNumberAndUnit(this.containerWidth).value == 0) {
                    this.containerWidth =
                        this.orientation == "horizontal" ?
                            (this.utility.getNumberAndUnit(this.widthOfBox).value *
                                (1 + this.utility.sumOfNosInArray(this.arrayOfCardSizeHalf)) +
                                this.utility.getNumberAndUnit(this.widthOfBox).unit) :
                            this.utility.getNumberAndUnit(this.widthOfBox).value * (1.2) +
                                this.utility.getNumberAndUnit(this.widthOfBox).unit;
                }
                this.arrowWidth = (this.utility.getNumberAndUnit(this.arrowHeight).value / 1.5) +
                    this.utility.getNumberAndUnit(this.arrowHeight).unit;
                this.arrowTopMargin = "-" + (this.utility.getNumberAndUnit(this.arrowHeight).value / 2) +
                    this.utility.getNumberAndUnit(this.arrowHeight).unit;
                this.arrowBorder = "1px solid " + this.arrowColor;
                this.arrowBorder1 = "1px solid " + this.arrowColor;
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.generatePositions = /**
         * @return {?}
         */
            function () {
                for (var i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
                    if (this.orientation == "horizontal") {
                        this.arrayOfPosFirstHalf.push((this.centerPosition + (i * 10)));
                        this.arrayOfPosLastHalf.push((this.centerPosition - (i * 10)));
                    }
                    else {
                        this.arrayOfPosFirstHalf.push(0);
                        this.arrayOfPosLastHalf.push(0);
                    }
                }
                this.arrayOfPosLastHalf.reverse();
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.generatePositionsVertical = /**
         * @return {?}
         */
            function () {
                for (var i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
                    if (this.orientation == "vertical") {
                        this.arrayOfPosFirstHalfVertical.push((this.centerPositionVertical + (i * 15)));
                        this.arrayOfPosLastHalfVertical.push((this.centerPositionVertical - (i * 15)));
                    }
                    else {
                        this.arrayOfPosFirstHalfVertical.push(0);
                        this.arrayOfPosLastHalfVertical.push(0);
                    }
                }
                this.arrayOfPosLastHalfVertical.reverse();
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.generateSize = /**
         * @return {?}
         */
            function () {
                for (var i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
                    this.arrayOfCardSizeHalf.push((1 - (0.1 * i)));
                }
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.generateSizeReverse = /**
         * @return {?}
         */
            function () {
                for (var i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
                    this.arrayOfCardSizeHalfReverse.push((1 - (0.1 * i)));
                }
                this.arrayOfCardSizeHalfReverse.reverse();
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.generateZIndex = /**
         * @return {?}
         */
            function () {
                for (var i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
                    this.arrayOfZIndexes.push((this.highestZIndex - (i)));
                }
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.generateZIndexReverse = /**
         * @return {?}
         */
            function () {
                for (var i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
                    this.arrayOfZIndexesReverse.push((this.highestZIndex - (i)));
                }
                this.arrayOfZIndexesReverse.reverse();
            };
        /**
         * @param {?} x
         * @param {?} y
         * @param {?} z
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.getScale = /**
         * @param {?} x
         * @param {?} y
         * @param {?} z
         * @return {?}
         */
            function (x, y, z) {
                return "scale3d(" + x + ", " + y + ", " + z + ")";
            };
        /**
         * @param {?} index
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.getZIndex = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return index;
            };
        /**
         * @param {?} margin
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.getLeft = /**
         * @param {?} margin
         * @return {?}
         */
            function (margin) {
                return margin + "%";
            };
        /**
         * @param {?} margin
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.getTop = /**
         * @param {?} margin
         * @return {?}
         */
            function (margin) {
                return margin + "%";
            };
        /**
         * @param {?} display
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.getDisplay = /**
         * @param {?} display
         * @return {?}
         */
            function (display) {
                return display;
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.generateCssStyles = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var start = Math.floor(this.visibleBlocks / 2);
                /** @type {?} */
                var end = this.data.length - Math.floor(this.visibleBlocks / 2);
                for (var i = 0; i < this.data.length; i++) {
                    if (i == 0) {
                        this.cssStylesArray.push(new CardCSS(this.getZIndex(this.highestZIndex), this.getLeft(this.centerPosition), this.getScale(1, 1, 1), this.getDisplay("block"), this.getTop(this.centerPositionVertical)));
                    }
                    else if (i != 0 && i <= start) {
                        this.cssStylesArray.push(new CardCSS(this.getZIndex(this.arrayOfZIndexes[i - 1]), this.getLeft(this.arrayOfPosFirstHalf[i - 1]), this.getScale(this.arrayOfCardSizeHalf[i - 1], this.arrayOfCardSizeHalf[i - 1], this.arrayOfCardSizeHalf[i - 1]), this.getDisplay("block"), this.getTop(this.arrayOfPosFirstHalfVertical[i - 1])));
                    }
                    else if (i != 0 && i >= end) {
                        this.cssStylesArray.push(new CardCSS(this.getZIndex(this.arrayOfZIndexesReverse[i - end]), this.getLeft(this.arrayOfPosLastHalf[i - end]), this.getScale(this.arrayOfCardSizeHalfReverse[i - end], this.arrayOfCardSizeHalfReverse[i - end], this.arrayOfCardSizeHalfReverse[i - end]), this.getDisplay("block"), this.getTop(this.arrayOfPosLastHalfVertical[i - end])));
                    }
                    else if (i != 0 && i > start && i < end) {
                        this.cssStylesArray.push(new CardCSS(this.getZIndex(0), this.getLeft(this.centerPosition), this.getScale(0, 0, 0), this.getDisplay("none"), this.getTop(this.centerPositionVertical)));
                    }
                }
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.moveNext = /**
         * @return {?}
         */
            function () {
                this.utility.shiftRight(this.cssStylesArray);
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.movePrevious = /**
         * @return {?}
         */
            function () {
                this.utility.shiftLeft(this.cssStylesArray);
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.changeArrowColor = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp = this.arrowColor2;
                this.arrowBorder = "1px solid " + this.arrowColor2;
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.changeArrowColorOut = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp = this.arrowColor;
                this.arrowBorder = "1px solid " + this.arrowColor;
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.changeArrowColor1 = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp1 = this.arrowColor2;
                this.arrowBorder1 = "1px solid " + this.arrowColor2;
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.changeArrowColorOut1 = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp1 = this.arrowColor;
                this.arrowBorder1 = "1px solid " + this.arrowColor;
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.pauseMethod = /**
         * @return {?}
         */
            function () {
                if (this.stopScrollOnHover) {
                    clearInterval(this.autoRotate);
                }
            };
        /**
         * @return {?}
         */
        TbCarouselStackedCardComponent.prototype.resumeMethod = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.stopScrollOnHover) {
                    this.autoRotate = setInterval(function () {
                        if (document.hasFocus()) {
                            _this.moveNext();
                        }
                    }, this.timeInterval);
                }
            };
        TbCarouselStackedCardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tb-carousel-stacked-card',
                        template: "<div [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth,\n  'position' : 'relative', 'margin':'auto'}\" (mouseover)=\"pauseMethod()\" (mouseout)=\"resumeMethod()\">\n\n  <div class=\"common-card\" *ngFor=\"let block of data; let i = index;\" \n  [ngStyle]=\"{'z-index': cssStylesArray[i].zIndex, 'left': cssStylesArray[i].left,\n  'transform': cssStylesArray[i].scale, 'display' : cssStylesArray[i].display,\n  'height' : heightOfBox, 'width' : widthOfBox, 'margin-left' : marginLeft, 'transition' : tbTransition,\n  'top' : cssStylesArray[i].top, 'margin-top' : marginTop}\" #commonCard>\n\n    <div *ngIf=\"dataType=='custom-component'\">\n      <template #customComponent></template>\n    </div>\n    <div *ngIf=\"dataType=='image'\">\n      <table id=\"wrapper\" [ngStyle]=\"{'height' : heightOfBox, 'width' : widthOfBox, 'overflow': 'hidden'}\">\n        <tr>\n          <td>\n            <img [src]=\"utility.sanitizeUrl(block)\" alt=\"Image {{block}}\" [ngStyle]=\"tbImageStyle\">\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div *ngIf=\"dataType=='text'\" [ngStyle]=\"{ 'height' : heightOfBox, 'width' : widthOfBox,\n      'overflow': 'hidden'}\">\n      <h2 style=\"margin : 5px;\">{{block.heading}}</h2>\n      <hr style=\"margin : 2px 20px;\">\n      <p style=\"margin : 5px; overflow: hidden;\">{{block.content}}</p>\n    </div>\n\n  </div>\n\n  <!-- Navigation arrows -->\n\n  <div class=\"arrow-parent-left\" (click)=\"movePrevious()\" (mouseover)=\"changeArrowColor()\"\n    (mouseout)=\"changeArrowColorOut()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n    </div>\n  </div>\n\n  <div class=\"arrow-parent-right\" (click)=\"moveNext()\" (mouseover)=\"changeArrowColor1()\"\n    (mouseout)=\"changeArrowColorOut1()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n    </div>\n  </div>\n\n</div>",
                        styles: ["table,td,tr{margin:0;padding:0}.common-card{position:absolute;text-align:center;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.tb-button-left{z-index:100;position:absolute;left:5%;top:50%}.tb-button-right{z-index:100;position:absolute;right:5%;top:50%}#image{display:inline-block;margin-left:auto;margin-right:auto;vertical-align:middle}#wrapper{margin:0;padding:0;border:0}#wrapper td{vertical-align:middle;text-align:center}.arrow-parent-left{position:absolute;z-index:101;top:50%;left:0}.arrow-parent-right{position:absolute;z-index:101;top:50%;right:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.arrow{position:absolute;height:100%;width:100%}.common-line{border-radius:100px}.line1{position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-10%}.line2{top:-20%;position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"]
                    }] }
        ];
        /** @nocollapse */
        TbCarouselStackedCardComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: ComponentGenFactoryService },
                { type: UtilitiesService },
                { type: i0.ChangeDetectorRef },
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        TbCarouselStackedCardComponent.propDecorators = {
            timeInterval: [{ type: i0.Input, args: ['autoScrollInterval',] }],
            stopScrollOnHover: [{ type: i0.Input, args: ['stopScrollOnHover',] }],
            data: [{ type: i0.Input, args: ['displayData',] }],
            visibleBlocks: [{ type: i0.Input, args: ['visibleCards',] }],
            orientation: [{ type: i0.Input, args: ['orientation',] }],
            component: [{ type: i0.Input, args: ['component',] }],
            dataType: [{ type: i0.Input, args: ['dataType',] }],
            heightOfBox: [{ type: i0.Input, args: ['cardHeight',] }],
            widthOfBox: [{ type: i0.Input, args: ['cardWidth',] }],
            tbStyle: [{ type: i0.Input, args: ['tbCardStyle',] }],
            containerHeight: [{ type: i0.Input, args: ['containerHeight',] }],
            containerWidth: [{ type: i0.Input, args: ['containerWidth',] }],
            tbTransition: [{ type: i0.Input, args: ['tbTransition',] }],
            tbImageStyle: [{ type: i0.Input, args: ['tbImageStyle',] }],
            arrowHeight: [{ type: i0.Input, args: ['arrowHeight',] }],
            arrowColor: [{ type: i0.Input, args: ['arrowColor',] }],
            arrowColor2: [{ type: i0.Input, args: ['arrowColorChange',] }],
            navArrowOpacity: [{ type: i0.Input, args: ['navArrowOpacity',] }],
            showNavArrow: [{ type: i0.Input, args: ['showNavArrow',] }],
            widgetTargets: [{ type: i0.ViewChildren, args: ['customComponent', { read: i0.ViewContainerRef },] }],
            commonCard: [{ type: i0.ViewChildren, args: ['commonCard', { read: i0.ElementRef },] }]
        };
        return TbCarouselStackedCardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CarouselBasicComponent = /** @class */ (function () {
        function CarouselBasicComponent(resolver, compGenFactoryService, utility, changeDetector, renderer) {
            this.resolver = resolver;
            this.compGenFactoryService = compGenFactoryService;
            this.utility = utility;
            this.changeDetector = changeDetector;
            this.renderer = renderer;
            this.cssStylesArray = [];
            this.arrayOfPosition = [];
            this.arrayOfVerticalPosition = [];
            this.selectedIndex = 0;
            /**
             *
             */
            this.timeInterval = 1000;
            this.stopScrollOnHover = true;
            this.orientation = "horizontal";
            this.component = 0;
            this.dataType = 'text';
            /*Card Style properties*/
            this.heightOfBox = "250px";
            this.widthOfBox = "300px";
            this.property = [];
            this.values = [];
            this.tbTransition = "transform 1s";
            /**
             * Navigation arrow properties
             */
            this.arrowHeight = "45px";
            this.arrowColor = "black";
            this.arrowColor2 = "rgb(100, 99, 100)";
            this.arrowWidth = "30px";
            this.arrowTopMargin = "-22px";
            this.arrowColorTemp = this.arrowColor;
            this.arrowColorTemp1 = this.arrowColor;
            this.showNav = "block";
            this.navArrowOpacity = 0.5;
            this.showNavArrow = true;
        }
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                for (var i = 0; i < this.commonCard.toArray().length; i++) {
                    /** @type {?} */
                    var styles = void 0;
                    if (i == 0 && this.tbStyle) {
                        styles = this.tbStyle;
                        this.property = Object.keys(styles);
                        this.values = Object.values(styles);
                    }
                    if (this.property.length == this.values.length) {
                        for (var j = 0; j < this.property.length; j++) {
                            this.renderer.setStyle(this.commonCard.toArray()[i].nativeElement, this.property[j], this.values[j]);
                        }
                    }
                }
                if (this.dataType == "custom-component") {
                    try {
                        /** @type {?} */
                        var compGenService = this.compGenFactoryService.
                            createComponentGenServiceObject(this.component);
                        for (var i = 0; i < this.widgetTargets.toArray().length; i++) {
                            compGenService.createComponent(this.widgetTargets.toArray()[i], this.componentRef, this.data[i]);
                        }
                        this.changeDetector.detectChanges();
                    }
                    catch (error) {
                        console.error("No componenet is defined in TbCarouselLibModule.forRoot([]) please add the component needed and pass on the index of component as property bind e.g. component='1'.");
                    }
                }
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.destroyComponent = /**
         * @return {?}
         */
            function () {
                this.componentRef.destroy();
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.tbTransitionInitial = this.tbTransition;
                this.rotateTransform = this.orientation == "horizontal" ? "translateX(0px)" : "translateY(0px)";
                this.rotateFn = this.orientation == "horizontal" ? "translateX" : "translateY";
                this.containerHeight = this.heightOfBox;
                this.containerWidth = this.widthOfBox;
                this.autoRotate = setInterval(function () {
                    if (document.hasFocus()) {
                        _this.moveNext();
                    }
                }, this.timeInterval);
                if (this.showNavArrow) {
                    this.showNav = "block";
                }
                else {
                    this.showNav = "none";
                }
                this.generatePositions();
                this.generateVerticalPositions();
                this.generateCssStyles();
                this.arrowWidth = (this.utility.getNumberAndUnit(this.arrowHeight).value / 1.5) +
                    this.utility.getNumberAndUnit(this.arrowHeight).unit;
                this.arrowTopMargin = "-" + (this.utility.getNumberAndUnit(this.arrowHeight).value / 2) +
                    this.utility.getNumberAndUnit(this.arrowHeight).unit;
                this.arrowBorder = "1px solid " + this.arrowColor;
                this.arrowBorder1 = "1px solid " + this.arrowColor;
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.generatePositions = /**
         * @return {?}
         */
            function () {
                if (this.orientation == "horizontal") {
                    if (this.data) {
                        if (this.data.length > 0) {
                            for (var i = 0; i < this.data.length; i++) {
                                this.arrayOfPosition.push(this.utility.getNumberAndUnit(this.widthOfBox).value * i);
                            }
                        }
                    }
                }
                else if (this.orientation == "vertical") {
                    if (this.data) {
                        if (this.data.length > 0) {
                            for (var i = 0; i < this.data.length; i++) {
                                this.arrayOfPosition.push(0);
                            }
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.generateVerticalPositions = /**
         * @return {?}
         */
            function () {
                if (this.orientation == "vertical") {
                    if (this.data) {
                        if (this.data.length > 0) {
                            for (var i = 0; i < this.data.length; i++) {
                                this.arrayOfVerticalPosition.push(this.utility.getNumberAndUnit(this.heightOfBox).value * i);
                            }
                        }
                    }
                }
                else if (this.orientation == "horizontal") {
                    if (this.data) {
                        if (this.data.length > 0) {
                            for (var i = 0; i < this.data.length; i++) {
                                this.arrayOfVerticalPosition.push(0);
                            }
                        }
                    }
                }
            };
        /**
         * @param {?} margin
         * @return {?}
         */
        CarouselBasicComponent.prototype.getLeft = /**
         * @param {?} margin
         * @return {?}
         */
            function (margin) {
                return margin + this.utility.getNumberAndUnit(this.widthOfBox).unit;
            };
        /**
         * @param {?} margin
         * @return {?}
         */
        CarouselBasicComponent.prototype.getTop = /**
         * @param {?} margin
         * @return {?}
         */
            function (margin) {
                return margin + this.utility.getNumberAndUnit(this.heightOfBox).unit;
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.generateCssStyles = /**
         * @return {?}
         */
            function () {
                for (var i = 0; i < this.data.length; i++) {
                    this.cssStylesArray.push(new CardCSS(100, this.getLeft(this.arrayOfPosition[i]), "scale3d(1,1,1)", "block", this.getTop(this.arrayOfVerticalPosition[i])));
                }
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.rotate = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var multiplier = this.orientation == "horizontal" ?
                    this.utility.getNumberAndUnit(this.widthOfBox).value : this.utility.getNumberAndUnit(this.heightOfBox).value;
                /** @type {?} */
                var unit = this.orientation == "horizontal" ?
                    this.utility.getNumberAndUnit(this.widthOfBox).unit : this.utility.getNumberAndUnit(this.heightOfBox).unit;
                this.rotateTransform = this.rotateFn + "(" + this.selectedIndex * -1 *
                    multiplier + unit + ")";
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.moveNext = /**
         * @return {?}
         */
            function () {
                this.selectedIndex++;
                if (this.selectedIndex > this.data.length - 1) {
                    this.selectedIndex = 0;
                    this.tbTransition = "none";
                }
                else {
                    this.tbTransition = this.tbTransitionInitial;
                }
                this.rotate();
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.movePrevious = /**
         * @return {?}
         */
            function () {
                this.selectedIndex--;
                if (this.selectedIndex < 0) {
                    this.selectedIndex = this.data.length - 1;
                    this.tbTransition = "none";
                }
                else {
                    this.tbTransition = this.tbTransitionInitial;
                }
                this.rotate();
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.changeArrowColor = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp = this.arrowColor2;
                this.arrowBorder = "1px solid " + this.arrowColor2;
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.changeArrowColorOut = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp = this.arrowColor;
                this.arrowBorder = "1px solid " + this.arrowColor;
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.changeArrowColor1 = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp1 = this.arrowColor2;
                this.arrowBorder1 = "1px solid " + this.arrowColor2;
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.changeArrowColorOut1 = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp1 = this.arrowColor;
                this.arrowBorder1 = "1px solid " + this.arrowColor;
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.pauseMethod = /**
         * @return {?}
         */
            function () {
                if (this.stopScrollOnHover) {
                    clearInterval(this.autoRotate);
                }
            };
        /**
         * @return {?}
         */
        CarouselBasicComponent.prototype.resumeMethod = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.stopScrollOnHover) {
                    this.autoRotate = setInterval(function () {
                        if (document.hasFocus()) {
                            _this.moveNext();
                        }
                    }, this.timeInterval);
                }
            };
        CarouselBasicComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tb-carousel-basic',
                        template: "<div [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth, 'overflow':'hidden',\n  'position' : 'relative', 'margin':'auto', 'box-sizing': 'border-box'}\" (mouseover)=\"pauseMethod()\"\n  (mouseout)=\"resumeMethod()\">\n\n  <div class=\"tb-carousel\" [ngStyle]=\"{'height': heightOfBox, 'width':widthOfBox, \n    'transform':rotateTransform, 'transition': tbTransition}\">\n\n    <div class=\"common-card\" *ngFor=\"let block of data; let i = index;\"\n      [ngStyle]=\"{'z-index': cssStylesArray[i].zIndex, 'left': cssStylesArray[i].left,\n      'transform': cssStylesArray[i].scale, 'display' : cssStylesArray[i].display,\n      'height' : heightOfBox, 'width' : widthOfBox,\n      'top' : cssStylesArray[i].top}\" #commonCard>\n\n      <div *ngIf=\"dataType=='custom-component'\">\n        <template #customComponent></template>\n      </div>\n      <div *ngIf=\"dataType=='image'\">\n        <table id=\"wrapper\" [ngStyle]=\"{'height' : heightOfBox, 'width' : widthOfBox, 'overflow': 'hidden',\n        'margin':'0px', 'padding':'0px'}\">\n          <tr [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n            <td [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n              <img [src]=\"utility.sanitizeUrl(block)\" alt=\"Image {{block}}\" [ngStyle]=\"tbImageStyle\">\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div *ngIf=\"dataType=='text'\" [ngStyle]=\"{ 'height' : heightOfBox, 'width' : widthOfBox,\n      'overflow': 'hidden'}\">\n        <h2 style=\"margin : 5px;\">{{block.heading}}</h2>\n        <hr style=\"margin : 2px 20px;\">\n        <p style=\"margin : 5px; overflow: hidden;\">{{block.content}}</p>\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- Navigation arrows -->\n\n  <div class=\"arrow-parent-left\" (click)=\"movePrevious()\" (mouseover)=\"changeArrowColor()\"\n    (mouseout)=\"changeArrowColorOut()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n    </div>\n  </div>\n\n  <div class=\"arrow-parent-right\" (click)=\"moveNext()\" (mouseover)=\"changeArrowColor1()\"\n    (mouseout)=\"changeArrowColorOut1()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n    </div>\n  </div>\n\n</div>",
                        styles: [".common-card{position:absolute;text-align:center;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;box-sizing:border-box}.tb-button-left{z-index:100;position:absolute;left:5%;top:50%}.tb-button-right{z-index:100;position:absolute;right:5%;top:50%}#image{display:inline-block;margin-left:auto;margin-right:auto;vertical-align:middle}#wrapper{margin:0;padding:0;border:0}#wrapper td{vertical-align:middle;text-align:center}.arrow-parent-left{position:absolute;z-index:101;top:50%;left:0}.arrow-parent-right{position:absolute;z-index:101;top:50%;right:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.arrow{position:absolute;height:100%;width:100%}.common-line{border-radius:100px}.line1{position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-10%}.line2{top:-20%;position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"]
                    }] }
        ];
        /** @nocollapse */
        CarouselBasicComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: ComponentGenFactoryService },
                { type: UtilitiesService },
                { type: i0.ChangeDetectorRef },
                { type: i0.Renderer2 }
            ];
        };
        CarouselBasicComponent.propDecorators = {
            timeInterval: [{ type: i0.Input, args: ['autoScrollInterval',] }],
            stopScrollOnHover: [{ type: i0.Input, args: ['stopScrollOnHover',] }],
            data: [{ type: i0.Input, args: ['displayData',] }],
            orientation: [{ type: i0.Input, args: ['orientation',] }],
            component: [{ type: i0.Input, args: ['component',] }],
            dataType: [{ type: i0.Input, args: ['dataType',] }],
            heightOfBox: [{ type: i0.Input, args: ['cardHeight',] }],
            widthOfBox: [{ type: i0.Input, args: ['cardWidth',] }],
            tbStyle: [{ type: i0.Input, args: ['tbCardStyle',] }],
            tbImageStyle: [{ type: i0.Input, args: ['tbImageStyle',] }],
            containerHeight: [{ type: i0.Input, args: ['containerHeight',] }],
            containerWidth: [{ type: i0.Input, args: ['containerWidth',] }],
            tbTransition: [{ type: i0.Input, args: ['tbTransition',] }],
            arrowHeight: [{ type: i0.Input, args: ['arrowHeight',] }],
            arrowColor: [{ type: i0.Input, args: ['arrowColor',] }],
            arrowColor2: [{ type: i0.Input, args: ['arrowColorChange',] }],
            navArrowOpacity: [{ type: i0.Input, args: ['navArrowOpacity',] }],
            showNavArrow: [{ type: i0.Input, args: ['showNavArrow',] }],
            widgetTargets: [{ type: i0.ViewChildren, args: ['customComponent', { read: i0.ViewContainerRef },] }],
            commonCard: [{ type: i0.ViewChildren, args: ['commonCard', { read: i0.ElementRef },] }]
        };
        return CarouselBasicComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CarouselThreeDComponent = /** @class */ (function () {
        function CarouselThreeDComponent(resolver, compGenFactoryService, utility, changeDetector, renderer) {
            this.resolver = resolver;
            this.compGenFactoryService = compGenFactoryService;
            this.utility = utility;
            this.changeDetector = changeDetector;
            this.renderer = renderer;
            this.selectedIndex = 0;
            this.cssTransformStyleArr = [];
            this.sceneHeight = "300px";
            this.sceneWidth = "300px";
            /**
             *
             */
            this.timeInterval = 1000;
            this.stopScrollOnHover = true;
            this.orientation = "horizontal";
            this.component = 0;
            this.dataType = 'text';
            /*Card Style properties*/
            this.heightOfBox = "250px";
            this.widthOfBox = "300px";
            this.property = [];
            this.values = [];
            this.tbTransition = "transform 1s";
            /**
             * Navigation arrow properties
             */
            this.arrowHeight = "45px";
            this.arrowColor = "black";
            this.arrowColor2 = "rgb(100, 99, 100)";
            this.arrowWidth = "30px";
            this.arrowTopMargin = "-22px";
            this.arrowColorTemp = this.arrowColor;
            this.arrowColorTemp1 = this.arrowColor;
            this.showNav = "block";
            this.navArrowOpacity = 0.5;
            this.showNavArrow = true;
        }
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                for (var i = 0; i < this.commonCard.toArray().length; i++) {
                    /** @type {?} */
                    var styles = void 0;
                    if (i == 0 && this.tbStyle) {
                        styles = this.tbStyle;
                        this.property = Object.keys(styles);
                        this.values = Object.values(styles);
                    }
                    if (this.property.length == this.values.length) {
                        for (var j = 0; j < this.property.length; j++) {
                            this.renderer.setStyle(this.commonCard.toArray()[i].nativeElement, this.property[j], this.values[j]);
                        }
                    }
                }
                if (this.dataType == "custom-component") {
                    try {
                        /** @type {?} */
                        var compGenService = this.compGenFactoryService.
                            createComponentGenServiceObject(this.component);
                        for (var i = 0; i < this.widgetTargets.toArray().length; i++) {
                            compGenService.createComponent(this.widgetTargets.toArray()[i], this.componentRef, this.data[i]);
                        }
                        this.changeDetector.detectChanges();
                    }
                    catch (error) {
                        console.error("No componenet is defined in TbCarouselLibModule.forRoot([]) please add the component needed and pass on the index of component as property bind e.g. component='1'.");
                    }
                }
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.destroyComponent = /**
         * @return {?}
         */
            function () {
                this.componentRef.destroy();
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.rotateFn = this.orientation == "horizontal" ? "rotateY" : "rotateX";
                this.inclinedAngle = 360 / this.data.length;
                this.sceneHeight = this.heightOfBox;
                this.sceneWidth = this.widthOfBox;
                this.cardHeight = this.utility.getNumberAndUnit(this.heightOfBox).value * 0.90 + this.utility.getNumberAndUnit(this.heightOfBox).unit;
                this.cardWidth = this.utility.getNumberAndUnit(this.widthOfBox).value * 0.90 + this.utility.getNumberAndUnit(this.widthOfBox).unit;
                this.cardTop = this.utility.getNumberAndUnit(this.heightOfBox).value * 0.05 + this.utility.getNumberAndUnit(this.heightOfBox).unit;
                this.cardLeft = this.utility.getNumberAndUnit(this.widthOfBox).value * 0.05 + this.utility.getNumberAndUnit(this.widthOfBox).unit;
                this.radius = this.orientation == "horizontal" ?
                    (this.utility.getNumberAndUnit(this.widthOfBox).value) * 0.5 /
                        Math.tan((0.5 * this.inclinedAngle) * (Math.PI / 180)) :
                    (this.utility.getNumberAndUnit(this.heightOfBox).value) * 0.5 /
                        Math.tan((0.5 * this.inclinedAngle) * (Math.PI / 180));
                this.tbCarouselTransform = this.orientation == "horizontal" ?
                    "translateZ(-" + this.radius + this.utility.getNumberAndUnit(this.widthOfBox).unit + ")" +
                        this.rotateFn + "(" + 0 + "deg)" :
                    "translateZ(-" + this.radius + this.utility.getNumberAndUnit(this.heightOfBox).unit + ")" +
                        this.rotateFn + "(" + 0 + "deg)";
                this.generateTransformStyleArr();
                this.autoRotate = setInterval(function () {
                    if (document.hasFocus()) {
                        _this.moveNext();
                    }
                }, this.timeInterval);
                if (this.showNavArrow) {
                    this.showNav = "block";
                }
                else {
                    this.showNav = "none";
                }
                this.containerHeight = this.orientation == "horizontal" ? this.sceneHeight :
                    2 * Math.sqrt((this.radius * this.radius +
                        (this.utility.getNumberAndUnit(this.heightOfBox).value) * 0.5 *
                            (this.utility.getNumberAndUnit(this.heightOfBox).value) * 0.5))
                        + this.utility.getNumberAndUnit(this.heightOfBox).unit;
                this.containerWidth = this.orientation == "horizontal" ?
                    2 * Math.sqrt((this.radius * this.radius +
                        (this.utility.getNumberAndUnit(this.widthOfBox).value) * 0.5 *
                            (this.utility.getNumberAndUnit(this.widthOfBox).value) * 0.5))
                        + this.utility.getNumberAndUnit(this.widthOfBox).unit : this.sceneWidth;
                this.arrowWidth = (this.utility.getNumberAndUnit(this.arrowHeight).value / 1.5) +
                    this.utility.getNumberAndUnit(this.arrowHeight).unit;
                this.arrowTopMargin = "-" + (this.utility.getNumberAndUnit(this.arrowHeight).value / 2) +
                    this.utility.getNumberAndUnit(this.arrowHeight).unit;
                this.arrowBorder = "1px solid " + this.arrowColor;
                this.arrowBorder1 = "1px solid " + this.arrowColor;
            };
        /**
         * @param {?} angle
         * @param {?} zTranslate
         * @return {?}
         */
        CarouselThreeDComponent.prototype.getTransformValue = /**
         * @param {?} angle
         * @param {?} zTranslate
         * @return {?}
         */
            function (angle, zTranslate) {
                return this.orientation == "horizontal" ?
                    "rotateY(" + angle + "deg) translateZ(" + zTranslate + "px)" :
                    "rotateX(" + angle + "deg) translateZ(" + zTranslate + "px)";
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.generateTransformStyleArr = /**
         * @return {?}
         */
            function () {
                for (var i = 0; i < this.data.length; i++) {
                    this.cssTransformStyleArr.push(this.getTransformValue(i * this.inclinedAngle, this.radius));
                }
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.rotateCarousel = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var rotationAngle = this.inclinedAngle * -1 * this.selectedIndex;
                this.tbCarouselTransform =
                    "translateZ(-" + this.radius + this.utility.getNumberAndUnit(this.widthOfBox).unit + ")" +
                        this.rotateFn + "(" + rotationAngle + "deg)";
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.moveNext = /**
         * @return {?}
         */
            function () {
                this.selectedIndex++;
                this.rotateCarousel();
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.movePrevious = /**
         * @return {?}
         */
            function () {
                this.selectedIndex--;
                this.rotateCarousel();
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.changeArrowColor = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp = this.arrowColor2;
                this.arrowBorder = "1px solid " + this.arrowColor2;
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.changeArrowColorOut = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp = this.arrowColor;
                this.arrowBorder = "1px solid " + this.arrowColor;
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.changeArrowColor1 = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp1 = this.arrowColor2;
                this.arrowBorder1 = "1px solid " + this.arrowColor2;
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.changeArrowColorOut1 = /**
         * @return {?}
         */
            function () {
                this.arrowColorTemp1 = this.arrowColor;
                this.arrowBorder1 = "1px solid " + this.arrowColor;
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.pauseMethod = /**
         * @return {?}
         */
            function () {
                if (this.stopScrollOnHover) {
                    clearInterval(this.autoRotate);
                }
            };
        /**
         * @return {?}
         */
        CarouselThreeDComponent.prototype.resumeMethod = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.stopScrollOnHover) {
                    this.autoRotate = setInterval(function () {
                        if (document.hasFocus()) {
                            _this.moveNext();
                        }
                    }, this.timeInterval);
                }
            };
        CarouselThreeDComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tb-carousel-three-d',
                        template: "<div [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth,\n'position' : 'relative', 'margin':'auto', 'box-sizing': 'border-box'}\" (mouseover)=\"pauseMethod()\"\n  (mouseout)=\"resumeMethod()\">\n\n\n  <!-- table is used for vertically central aligning -->\n  <table id=\"wrapper\" [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth,\n  'margin':'0px', 'padding':'0px'}\">\n    <tr [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n      <td [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n\n\n        <div class=\"scene\" [ngStyle]=\"{'width':sceneWidth, 'height': sceneHeight}\">\n          <div class=\"tb-carousel\" [ngStyle]=\"{'transform' : tbCarouselTransform, 'transition' : tbTransition}\">\n            <div class=\"common-card\" *ngFor=\"let block of data; let i = index;\" [ngStyle]=\"{'transform' : cssTransformStyleArr[i],\n                  'height': cardHeight, 'width': cardWidth, 'top':cardTop, 'left':cardLeft}\" #commonCard>\n\n              <div *ngIf=\"dataType=='custom-component'\">\n                <template #customComponent></template>\n              </div>\n              <div *ngIf=\"dataType=='image'\">\n                <table id=\"wrapper\" [ngStyle]=\"{'height' : heightOfBox, 'width' : widthOfBox, 'overflow': 'hidden',\n                    'margin':'0px', 'padding':'0px'}\">\n                  <tr [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n                    <td [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n                      <img [src]=\"utility.sanitizeUrl(block)\" alt=\"Image {{block}}\" [ngStyle]=\"tbImageStyle\">\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div *ngIf=\"dataType=='text'\" [ngStyle]=\"{ 'height' : cardHeight, 'width' : cardWidth}\">\n                <h2 style=\"margin : 5px;\">{{block.heading}}</h2>\n                <hr style=\"margin : 2px 20px;\">\n                <p style=\"margin : 5px; overflow: hidden;\">{{block.content}}</p>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </td>\n    </tr>\n  </table>\n\n  <!-- Navigation arrows -->\n\n  <div class=\"arrow-parent-left\" (click)=\"movePrevious()\" (mouseover)=\"changeArrowColor()\"\n    (mouseout)=\"changeArrowColorOut()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n    </div>\n  </div>\n\n  <div class=\"arrow-parent-right\" (click)=\"moveNext()\" (mouseover)=\"changeArrowColor1()\"\n    (mouseout)=\"changeArrowColorOut1()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n    </div>\n  </div>\n\n</div>",
                        styles: ["*{box-sizing:border-box}.scene{margin:auto;position:relative;-webkit-perspective:1000px;perspective:1000px}.tb-carousel{width:100%;height:100%;position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.common-card{position:absolute;text-align:center;box-sizing:border-box}.tb-button-left{z-index:100;position:absolute;left:5%;top:50%}.tb-button-right{z-index:100;position:absolute;right:5%;top:50%}#image{display:inline-block;margin-left:auto;margin-right:auto;vertical-align:middle}#wrapper{margin:0;padding:0;border:0}#wrapper td{vertical-align:middle;text-align:center}.arrow-parent-left{position:absolute;z-index:101;top:50%;left:0}.arrow-parent-right{position:absolute;z-index:101;top:50%;right:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.arrow{position:absolute;height:100%;width:100%}.common-line{border-radius:100px}.line1{position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-10%}.line2{top:-20%;position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"]
                    }] }
        ];
        /** @nocollapse */
        CarouselThreeDComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: ComponentGenFactoryService },
                { type: UtilitiesService },
                { type: i0.ChangeDetectorRef },
                { type: i0.Renderer2 }
            ];
        };
        CarouselThreeDComponent.propDecorators = {
            timeInterval: [{ type: i0.Input, args: ['autoScrollInterval',] }],
            stopScrollOnHover: [{ type: i0.Input, args: ['stopScrollOnHover',] }],
            data: [{ type: i0.Input, args: ['displayData',] }],
            orientation: [{ type: i0.Input, args: ['orientation',] }],
            component: [{ type: i0.Input, args: ['component',] }],
            dataType: [{ type: i0.Input, args: ['dataType',] }],
            heightOfBox: [{ type: i0.Input, args: ['cardHeight',] }],
            widthOfBox: [{ type: i0.Input, args: ['cardWidth',] }],
            tbStyle: [{ type: i0.Input, args: ['tbCardStyle',] }],
            tbImageStyle: [{ type: i0.Input, args: ['tbImageStyle',] }],
            containerHeight: [{ type: i0.Input, args: ['containerHeight',] }],
            containerWidth: [{ type: i0.Input, args: ['containerWidth',] }],
            tbTransition: [{ type: i0.Input, args: ['tbTransition',] }],
            arrowHeight: [{ type: i0.Input, args: ['arrowHeight',] }],
            arrowColor: [{ type: i0.Input, args: ['arrowColor',] }],
            arrowColor2: [{ type: i0.Input, args: ['arrowColorChange',] }],
            navArrowOpacity: [{ type: i0.Input, args: ['navArrowOpacity',] }],
            showNavArrow: [{ type: i0.Input, args: ['showNavArrow',] }],
            widgetTargets: [{ type: i0.ViewChildren, args: ['customComponent', { read: i0.ViewContainerRef },] }],
            commonCard: [{ type: i0.ViewChildren, args: ['commonCard', { read: i0.ElementRef },] }]
        };
        return CarouselThreeDComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TbCarouselLibModule = /** @class */ (function () {
        function TbCarouselLibModule(parentModule) {
            if (parentModule) {
                throw new Error('CoreModule is already loaded. Import it in the AppModule only');
            }
        }
        /**
         * @param {?} config
         * @return {?}
         */
        TbCarouselLibModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: TbCarouselLibModule,
                    providers: [
                        { provide: ComponentGenServiceConfig, useValue: config }
                    ]
                };
            };
        TbCarouselLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            TbCarouselLibComponent,
                            TbCarouselStackedCardComponent,
                            CarouselBasicComponent,
                            CarouselThreeDComponent
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            TbCarouselStackedCardComponent,
                            CarouselBasicComponent,
                            CarouselThreeDComponent
                        ],
                        providers: [
                            UtilitiesService,
                            ComponentGenFactoryService
                        ]
                    },] }
        ];
        /** @nocollapse */
        TbCarouselLibModule.ctorParameters = function () {
            return [
                { type: TbCarouselLibModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return TbCarouselLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TbCarouselLibService = TbCarouselLibService;
    exports.TbCarouselLibComponent = TbCarouselLibComponent;
    exports.TbCarouselLibModule = TbCarouselLibModule;
    exports.ɵe = CarouselBasicComponent;
    exports.ɵa = TbCarouselStackedCardComponent;
    exports.ɵf = CarouselThreeDComponent;
    exports.ɵb = ComponentGenFactoryService;
    exports.ɵc = ComponentGenServiceConfig;
    exports.ɵd = UtilitiesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=tb-carousel-lib.umd.js.map