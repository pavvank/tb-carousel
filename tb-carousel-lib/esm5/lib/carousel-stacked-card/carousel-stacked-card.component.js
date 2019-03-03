/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChildren, QueryList, Input, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { CardCSS } from '../models/cardcss.model';
import { UtilitiesService } from '../util/utilities.service';
import { ComponentGenFactoryService } from '../util/component-gen-factory.service';
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
        this.autoRotate = setInterval(function () { if (document.hasFocus()) {
            _this.moveNext();
        } }, this.timeInterval);
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
            this.autoRotate = setInterval(function () { if (document.hasFocus()) {
                _this.moveNext();
            } }, this.timeInterval);
        }
    };
    TbCarouselStackedCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tb-carousel-stacked-card',
                    template: "<div [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth,\n  'position' : 'relative', 'margin':'auto'}\" (mouseover)=\"pauseMethod()\" (mouseout)=\"resumeMethod()\">\n\n  <div class=\"common-card\" *ngFor=\"let block of data; let i = index;\" \n  [ngStyle]=\"{'z-index': cssStylesArray[i].zIndex, 'left': cssStylesArray[i].left,\n  'transform': cssStylesArray[i].scale, 'display' : cssStylesArray[i].display,\n  'height' : heightOfBox, 'width' : widthOfBox, 'margin-left' : marginLeft, 'transition' : tbTransition,\n  'top' : cssStylesArray[i].top, 'margin-top' : marginTop}\" #commonCard>\n\n    <div *ngIf=\"dataType=='custom-component'\">\n      <template #customComponent></template>\n    </div>\n    <div *ngIf=\"dataType=='image'\">\n      <table id=\"wrapper\" [ngStyle]=\"{'height' : heightOfBox, 'width' : widthOfBox, 'overflow': 'hidden'}\">\n        <tr>\n          <td>\n            <img [src]=\"utility.sanitizeUrl(block)\" alt=\"Image {{block}}\" [ngStyle]=\"tbImageStyle\">\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div *ngIf=\"dataType=='text'\" [ngStyle]=\"{ 'height' : heightOfBox, 'width' : widthOfBox,\n      'overflow': 'hidden'}\">\n      <h2 style=\"margin : 5px;\">{{block.heading}}</h2>\n      <hr style=\"margin : 2px 20px;\">\n      <p style=\"margin : 5px; overflow: hidden;\">{{block.content}}</p>\n    </div>\n\n  </div>\n\n  <!-- Navigation arrows -->\n\n  <div class=\"arrow-parent-left\" (click)=\"movePrevious()\" (mouseover)=\"changeArrowColor()\"\n    (mouseout)=\"changeArrowColorOut()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n    </div>\n  </div>\n\n  <div class=\"arrow-parent-right\" (click)=\"moveNext()\" (mouseover)=\"changeArrowColor1()\"\n    (mouseout)=\"changeArrowColorOut1()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n    </div>\n  </div>\n\n</div>",
                    styles: ["table,td,tr{margin:0;padding:0}.common-card{position:absolute;text-align:center;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.tb-button-left{z-index:100;position:absolute;left:5%;top:50%}.tb-button-right{z-index:100;position:absolute;right:5%;top:50%}#image{display:inline-block;margin-left:auto;margin-right:auto;vertical-align:middle}#wrapper{margin:0;padding:0;border:0}#wrapper td{vertical-align:middle;text-align:center}.arrow-parent-left{position:absolute;z-index:101;top:50%;left:0}.arrow-parent-right{position:absolute;z-index:101;top:50%;right:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.arrow{position:absolute;height:100%;width:100%}.common-line{border-radius:100px}.line1{position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-10%}.line2{top:-20%;position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"]
                }] }
    ];
    /** @nocollapse */
    TbCarouselStackedCardComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ComponentGenFactoryService },
        { type: UtilitiesService },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TbCarouselStackedCardComponent.propDecorators = {
        timeInterval: [{ type: Input, args: ['autoScrollInterval',] }],
        stopScrollOnHover: [{ type: Input, args: ['stopScrollOnHover',] }],
        data: [{ type: Input, args: ['displayData',] }],
        visibleBlocks: [{ type: Input, args: ['visibleCards',] }],
        orientation: [{ type: Input, args: ['orientation',] }],
        component: [{ type: Input, args: ['component',] }],
        dataType: [{ type: Input, args: ['dataType',] }],
        heightOfBox: [{ type: Input, args: ['cardHeight',] }],
        widthOfBox: [{ type: Input, args: ['cardWidth',] }],
        tbStyle: [{ type: Input, args: ['tbCardStyle',] }],
        containerHeight: [{ type: Input, args: ['containerHeight',] }],
        containerWidth: [{ type: Input, args: ['containerWidth',] }],
        tbTransition: [{ type: Input, args: ['tbTransition',] }],
        tbImageStyle: [{ type: Input, args: ['tbImageStyle',] }],
        arrowHeight: [{ type: Input, args: ['arrowHeight',] }],
        arrowColor: [{ type: Input, args: ['arrowColor',] }],
        arrowColor2: [{ type: Input, args: ['arrowColorChange',] }],
        navArrowOpacity: [{ type: Input, args: ['navArrowOpacity',] }],
        showNavArrow: [{ type: Input, args: ['showNavArrow',] }],
        widgetTargets: [{ type: ViewChildren, args: ['customComponent', { read: ViewContainerRef },] }],
        commonCard: [{ type: ViewChildren, args: ['commonCard', { read: ElementRef },] }]
    };
    return TbCarouselStackedCardComponent;
}());
export { TbCarouselStackedCardComponent };
if (false) {
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.marginLeft;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.marginTop;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.highestZIndex;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.centerPosition;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.centerPositionVertical;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.cssStylesArray;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrayOfPosFirstHalf;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrayOfPosLastHalf;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrayOfPosFirstHalfVertical;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrayOfPosLastHalfVertical;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrayOfZIndexes;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrayOfZIndexesReverse;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrayOfCardSizeHalf;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrayOfCardSizeHalfReverse;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.componentRef;
    /**
     *
     * @type {?}
     */
    TbCarouselStackedCardComponent.prototype.timeInterval;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.stopScrollOnHover;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.autoRotate;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.data;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.visibleBlocks;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.orientation;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.component;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.dataType;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.heightOfBox;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.widthOfBox;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.tbStyle;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.property;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.values;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.containerHeight;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.containerWidth;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.tbTransition;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.tbImageStyle;
    /**
     * Navigation arrow properties
     * @type {?}
     */
    TbCarouselStackedCardComponent.prototype.arrowHeight;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrowColor;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrowColor2;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrowWidth;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrowTopMargin;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrowColorTemp;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrowBorder;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrowColorTemp1;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.arrowBorder1;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.showNav;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.navArrowOpacity;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.showNavArrow;
    /**
     * Methods
     * @type {?}
     */
    TbCarouselStackedCardComponent.prototype.widgetTargets;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.commonCard;
    /**
     * @type {?}
     * @private
     */
    TbCarouselStackedCardComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    TbCarouselStackedCardComponent.prototype.compGenFactoryService;
    /** @type {?} */
    TbCarouselStackedCardComponent.prototype.utility;
    /**
     * @type {?}
     * @private
     */
    TbCarouselStackedCardComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    TbCarouselStackedCardComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    TbCarouselStackedCardComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtc3RhY2tlZC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RiLWNhcm91c2VsLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYXJvdXNlbC1zdGFja2VkLWNhcmQvY2Fyb3VzZWwtc3RhY2tlZC1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixTQUFTLEVBRVQsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVuRjtJQXVFRSx3Q0FBb0IsUUFBa0MsRUFDNUMscUJBQWlELEVBQVMsT0FBeUIsRUFDbkYsY0FBaUMsRUFDakMsS0FBaUIsRUFBVSxRQUFtQjtRQUhwQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUM1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQTRCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDbkYsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBaEV4RCxrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUk1QixtQkFBYyxHQUFjLEVBQUUsQ0FBQztRQUMvQix3QkFBbUIsR0FBYSxFQUFFLENBQUM7UUFDbkMsdUJBQWtCLEdBQWEsRUFBRSxDQUFDO1FBQ2xDLGdDQUEyQixHQUFhLEVBQUUsQ0FBQztRQUMzQywrQkFBMEIsR0FBYSxFQUFFLENBQUM7UUFDMUMsb0JBQWUsR0FBYSxFQUFFLENBQUM7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b3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyVmlld0luaXQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZENTUyB9IGZyb20gJy4uL21vZGVscy9jYXJkY3NzLm1vZGVsJztcbmltcG9ydCB7IENvbXBvbmVudEdlblNlcnZpY2UgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudC1nZW4uc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbC91dGlsaXRpZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRHZW5GYWN0b3J5U2VydmljZSB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50LWdlbi1mYWN0b3J5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Yi1jYXJvdXNlbC1zdGFja2VkLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwtc3RhY2tlZC1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwtc3RhY2tlZC1jYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYkNhcm91c2VsU3RhY2tlZENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIG1hcmdpbkxlZnQ6IHN0cmluZztcbiAgbWFyZ2luVG9wOiBzdHJpbmc7XG5cbiAgaGlnaGVzdFpJbmRleDogbnVtYmVyID0gMTAwO1xuICBjZW50ZXJQb3NpdGlvbjogbnVtYmVyO1xuICBjZW50ZXJQb3NpdGlvblZlcnRpY2FsOiBudW1iZXI7XG5cbiAgY3NzU3R5bGVzQXJyYXk6IENhcmRDU1NbXSA9IFtdO1xuICBhcnJheU9mUG9zRmlyc3RIYWxmOiBudW1iZXJbXSA9IFtdO1xuICBhcnJheU9mUG9zTGFzdEhhbGY6IG51bWJlcltdID0gW107XG4gIGFycmF5T2ZQb3NGaXJzdEhhbGZWZXJ0aWNhbDogbnVtYmVyW10gPSBbXTtcbiAgYXJyYXlPZlBvc0xhc3RIYWxmVmVydGljYWw6IG51bWJlcltdID0gW107XG4gIGFycmF5T2ZaSW5kZXhlczogbnVtYmVyW10gPSBbXTtcbiAgYXJyYXlPZlpJbmRleGVzUmV2ZXJzZTogbnVtYmVyW10gPSBbXTtcbiAgYXJyYXlPZkNhcmRTaXplSGFsZjogbnVtYmVyW10gPSBbXTtcbiAgYXJyYXlPZkNhcmRTaXplSGFsZlJldmVyc2U6IG51bWJlcltdID0gW107XG5cbiAgY29tcG9uZW50UmVmOiBhbnk7XG5cbiAgLyoqICovXG4gIEBJbnB1dCgnYXV0b1Njcm9sbEludGVydmFsJykgdGltZUludGVydmFsOiBudW1iZXIgPSAxMDAwO1xuICBASW5wdXQoJ3N0b3BTY3JvbGxPbkhvdmVyJykgc3RvcFNjcm9sbE9uSG92ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBhdXRvUm90YXRlO1xuXG4gIC8qRGF0YSBhbmQgdmlzaWJsZSBuby4gb2YgY2FyZHMgKi9cbiAgQElucHV0KCdkaXNwbGF5RGF0YScpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoJ3Zpc2libGVDYXJkcycpIHZpc2libGVCbG9ja3M6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgnb3JpZW50YXRpb24nKSBvcmllbnRhdGlvbjogc3RyaW5nID0gXCJob3Jpem9udGFsXCI7XG4gIEBJbnB1dCgnY29tcG9uZW50JykgY29tcG9uZW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2RhdGFUeXBlJykgZGF0YVR5cGU6IHN0cmluZyA9ICd0ZXh0JztcblxuICAvKkNhcmQgU3R5bGUgcHJvcGVydGllcyovXG4gIEBJbnB1dCgnY2FyZEhlaWdodCcpIGhlaWdodE9mQm94OiBzdHJpbmcgPSBcIjI1MHB4XCI7XG4gIEBJbnB1dCgnY2FyZFdpZHRoJykgd2lkdGhPZkJveDogc3RyaW5nID0gXCIzMDBweFwiO1xuICBASW5wdXQoJ3RiQ2FyZFN0eWxlJykgdGJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XG4gIHByb3BlcnR5OiBzdHJpbmdbXSA9IFtdO1xuICB2YWx1ZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLypDb250YWluZXIgcHJvcGVydGllcyAqL1xuICBASW5wdXQoJ2NvbnRhaW5lckhlaWdodCcpIGNvbnRhaW5lckhlaWdodCA9IFwiMHB4XCI7XG4gIEBJbnB1dCgnY29udGFpbmVyV2lkdGgnKSBjb250YWluZXJXaWR0aCA9IFwiMHB4XCI7XG4gIEBJbnB1dCgndGJUcmFuc2l0aW9uJykgdGJUcmFuc2l0aW9uID0gXCJsZWZ0IDFzLCB0cmFuc2Zvcm0gMXMsIHRvcCAxc1wiO1xuXG4gIC8qSW1hZ2UgcHJvcGVydGllcyAqL1xuICBASW5wdXQoJ3RiSW1hZ2VTdHlsZScpIHRiSW1hZ2VTdHlsZTtcblxuICAvKipOYXZpZ2F0aW9uIGFycm93IHByb3BlcnRpZXMgKi9cbiAgQElucHV0KCdhcnJvd0hlaWdodCcpIGFycm93SGVpZ2h0ID0gXCI0NXB4XCI7XG4gIEBJbnB1dCgnYXJyb3dDb2xvcicpIGFycm93Q29sb3IgPSBcImJsYWNrXCI7XG4gIEBJbnB1dCgnYXJyb3dDb2xvckNoYW5nZScpIGFycm93Q29sb3IyID0gXCJyZ2IoMTAwLCA5OSwgMTAwKVwiO1xuICBhcnJvd1dpZHRoID0gXCIzMHB4XCI7XG4gIGFycm93VG9wTWFyZ2luID0gXCItMjJweFwiO1xuICBhcnJvd0NvbG9yVGVtcCA9IHRoaXMuYXJyb3dDb2xvcjtcbiAgYXJyb3dCb3JkZXI7XG4gIGFycm93Q29sb3JUZW1wMSA9IHRoaXMuYXJyb3dDb2xvcjtcbiAgYXJyb3dCb3JkZXIxO1xuICBzaG93TmF2OiBzdHJpbmcgPSBcImJsb2NrXCI7XG4gIEBJbnB1dCgnbmF2QXJyb3dPcGFjaXR5JykgbmF2QXJyb3dPcGFjaXR5ID0gMC41O1xuICBASW5wdXQoJ3Nob3dOYXZBcnJvdycpIHNob3dOYXZBcnJvdzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqTWV0aG9kcyovXG5cbiAgQFZpZXdDaGlsZHJlbignY3VzdG9tQ29tcG9uZW50JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHB1YmxpYyB3aWRnZXRUYXJnZXRzOiBRdWVyeUxpc3Q8Vmlld0NvbnRhaW5lclJlZj47XG4gIEBWaWV3Q2hpbGRyZW4oJ2NvbW1vbkNhcmQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY29tbW9uQ2FyZDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb21wR2VuRmFjdG9yeVNlcnZpY2U6IENvbXBvbmVudEdlbkZhY3RvcnlTZXJ2aWNlLCBwdWJsaWMgdXRpbGl0eTogVXRpbGl0aWVzU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb21tb25DYXJkLnRvQXJyYXkoKS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHN0eWxlcztcblxuICAgICAgaWYgKGkgPT0gMCAmJiB0aGlzLnRiU3R5bGUpIHtcbiAgICAgICAgc3R5bGVzID0gdGhpcy50YlN0eWxlO1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gT2JqZWN0LmtleXMoc3R5bGVzKTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBPYmplY3QudmFsdWVzKHN0eWxlcyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0eS5sZW5ndGggPT0gdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wZXJ0eS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb21tb25DYXJkLnRvQXJyYXkoKVtpXS5uYXRpdmVFbGVtZW50LCB0aGlzLnByb3BlcnR5W2pdLCB0aGlzLnZhbHVlc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICh0aGlzLmRhdGFUeXBlID09IFwiY3VzdG9tLWNvbXBvbmVudFwiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgY29tcEdlblNlcnZpY2U6IENvbXBvbmVudEdlblNlcnZpY2UgPSB0aGlzLmNvbXBHZW5GYWN0b3J5U2VydmljZS5cbiAgICAgICAgICBjcmVhdGVDb21wb25lbnRHZW5TZXJ2aWNlT2JqZWN0KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndpZGdldFRhcmdldHMudG9BcnJheSgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29tcEdlblNlcnZpY2UuY3JlYXRlQ29tcG9uZW50KHRoaXMud2lkZ2V0VGFyZ2V0cy50b0FycmF5KClbaV0sIHRoaXMuY29tcG9uZW50UmVmLCB0aGlzLmRhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGNvbXBvbmVuZXQgaXMgZGVmaW5lZCBpbiBUYkNhcm91c2VsTGliTW9kdWxlLmZvclJvb3QoW10pIHBsZWFzZSBhZGQgdGhlIGNvbXBvbmVudCBuZWVkZWQgYW5kIHBhc3Mgb24gdGhlIGluZGV4IG9mIGNvbXBvbmVudCBhcyBwcm9wZXJ0eSBiaW5kIGUuZy4gY29tcG9uZW50PScxJy5cIik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIGRlc3Ryb3lDb21wb25lbnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLmF1dG9Sb3RhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IGlmIChkb2N1bWVudC5oYXNGb2N1cygpKSB7IHRoaXMubW92ZU5leHQoKTsgfSB9LCB0aGlzLnRpbWVJbnRlcnZhbCk7XG5cbiAgICBpZiAodGhpcy5zaG93TmF2QXJyb3cpIHtcbiAgICAgIHRoaXMuc2hvd05hdiA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93TmF2ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgdGhpcy52aXNpYmxlQmxvY2tzID0gdGhpcy5kYXRhLmxlbmd0aCA8IHRoaXMudmlzaWJsZUJsb2NrcyA/IHRoaXMuZGF0YS5sZW5ndGggOiB0aGlzLnZpc2libGVCbG9ja3M7XG5cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgdGhpcy5jZW50ZXJQb3NpdGlvbiA9IDUwO1xuICAgICAgdGhpcy5tYXJnaW5MZWZ0ID0gXCItXCIgKyBNYXRoLmZsb29yKHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudmFsdWUgLyAyKSArXG4gICAgICAgIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudW5pdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jZW50ZXJQb3NpdGlvbiA9IDA7XG4gICAgICB0aGlzLm1hcmdpbkxlZnQgPSAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy53aWR0aE9mQm94KS52YWx1ZSAqIDAuMSkgK1xuICAgICAgICB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnVuaXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICB0aGlzLmNlbnRlclBvc2l0aW9uVmVydGljYWwgPSA1MDtcbiAgICAgIHRoaXMubWFyZ2luVG9wID0gXCItXCIgKyBNYXRoLmZsb29yKHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuaGVpZ2h0T2ZCb3gpLnZhbHVlIC8gMikgK1xuICAgICAgICB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS51bml0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNlbnRlclBvc2l0aW9uVmVydGljYWwgPSAwO1xuICAgICAgdGhpcy5tYXJnaW5Ub3AgPSAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudmFsdWUgKiAwLjEpICtcbiAgICAgICAgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudW5pdDtcbiAgICB9XG5cbiAgICB0aGlzLmdlbmVyYXRlUG9zaXRpb25zKCk7XG5cbiAgICB0aGlzLmdlbmVyYXRlUG9zaXRpb25zVmVydGljYWwoKTtcblxuICAgIHRoaXMuZ2VuZXJhdGVTaXplUmV2ZXJzZSgpO1xuICAgIHRoaXMuZ2VuZXJhdGVTaXplKCk7XG5cbiAgICB0aGlzLmdlbmVyYXRlWkluZGV4UmV2ZXJzZSgpO1xuICAgIHRoaXMuZ2VuZXJhdGVaSW5kZXgoKTtcblxuICAgIHRoaXMuZ2VuZXJhdGVDc3NTdHlsZXMoKTtcblxuICAgIGlmICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmNvbnRhaW5lckhlaWdodCkudmFsdWUgPT0gMCkge1xuICAgICAgdGhpcy5jb250YWluZXJIZWlnaHQgPVxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIiA/XG4gICAgICAgICAgKHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuaGVpZ2h0T2ZCb3gpLnZhbHVlICpcbiAgICAgICAgICAgICgxICsgdGhpcy51dGlsaXR5LnN1bU9mTm9zSW5BcnJheSh0aGlzLmFycmF5T2ZDYXJkU2l6ZUhhbGYpKSArXG4gICAgICAgICAgICB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS51bml0KSA6XG4gICAgICAgICAgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudmFsdWUgKiAoMS4yKSArXG4gICAgICAgICAgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudW5pdDtcbiAgICB9XG5cblxuICAgIGlmICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmNvbnRhaW5lcldpZHRoKS52YWx1ZSA9PSAwKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lcldpZHRoID1cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIiA/XG4gICAgICAgICAgKHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudmFsdWUgKlxuICAgICAgICAgICAgKDEgKyB0aGlzLnV0aWxpdHkuc3VtT2ZOb3NJbkFycmF5KHRoaXMuYXJyYXlPZkNhcmRTaXplSGFsZikpICtcbiAgICAgICAgICAgIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudW5pdCkgOlxuICAgICAgICAgIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudmFsdWUgKiAoMS4yKSArXG4gICAgICAgICAgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy53aWR0aE9mQm94KS51bml0O1xuICAgIH1cblxuICAgIHRoaXMuYXJyb3dXaWR0aCA9ICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmFycm93SGVpZ2h0KS52YWx1ZSAvIDEuNSkgK1xuICAgICAgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5hcnJvd0hlaWdodCkudW5pdDtcbiAgICB0aGlzLmFycm93VG9wTWFyZ2luID0gXCItXCIgKyAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5hcnJvd0hlaWdodCkudmFsdWUgLyAyKSArXG4gICAgICB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmFycm93SGVpZ2h0KS51bml0O1xuICAgIHRoaXMuYXJyb3dCb3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHRoaXMuYXJyb3dDb2xvcjtcbiAgICB0aGlzLmFycm93Qm9yZGVyMSA9IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5hcnJvd0NvbG9yO1xuXG4gIH1cblxuICBnZW5lcmF0ZVBvc2l0aW9ucygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmZsb29yKHRoaXMudmlzaWJsZUJsb2NrcyAvIDIpOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIHRoaXMuYXJyYXlPZlBvc0ZpcnN0SGFsZi5wdXNoKCh0aGlzLmNlbnRlclBvc2l0aW9uICsgKGkgKiAxMCkpKTtcbiAgICAgICAgdGhpcy5hcnJheU9mUG9zTGFzdEhhbGYucHVzaCgodGhpcy5jZW50ZXJQb3NpdGlvbiAtIChpICogMTApKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFycmF5T2ZQb3NGaXJzdEhhbGYucHVzaCgwKTtcbiAgICAgICAgdGhpcy5hcnJheU9mUG9zTGFzdEhhbGYucHVzaCgwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hcnJheU9mUG9zTGFzdEhhbGYucmV2ZXJzZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVQb3NpdGlvbnNWZXJ0aWNhbCgpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmZsb29yKHRoaXMudmlzaWJsZUJsb2NrcyAvIDIpOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgICB0aGlzLmFycmF5T2ZQb3NGaXJzdEhhbGZWZXJ0aWNhbC5wdXNoKCh0aGlzLmNlbnRlclBvc2l0aW9uVmVydGljYWwgKyAoaSAqIDE1KSkpO1xuICAgICAgICB0aGlzLmFycmF5T2ZQb3NMYXN0SGFsZlZlcnRpY2FsLnB1c2goKHRoaXMuY2VudGVyUG9zaXRpb25WZXJ0aWNhbCAtIChpICogMTUpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFycmF5T2ZQb3NGaXJzdEhhbGZWZXJ0aWNhbC5wdXNoKDApO1xuICAgICAgICB0aGlzLmFycmF5T2ZQb3NMYXN0SGFsZlZlcnRpY2FsLnB1c2goMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYXJyYXlPZlBvc0xhc3RIYWxmVmVydGljYWwucmV2ZXJzZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVTaXplKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguZmxvb3IodGhpcy52aXNpYmxlQmxvY2tzIC8gMik7IGkrKykge1xuICAgICAgdGhpcy5hcnJheU9mQ2FyZFNpemVIYWxmLnB1c2goKDEgLSAoMC4xICogaSkpKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVNpemVSZXZlcnNlKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguZmxvb3IodGhpcy52aXNpYmxlQmxvY2tzIC8gMik7IGkrKykge1xuICAgICAgdGhpcy5hcnJheU9mQ2FyZFNpemVIYWxmUmV2ZXJzZS5wdXNoKCgxIC0gKDAuMSAqIGkpKSk7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlPZkNhcmRTaXplSGFsZlJldmVyc2UucmV2ZXJzZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVaSW5kZXgoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5mbG9vcih0aGlzLnZpc2libGVCbG9ja3MgLyAyKTsgaSsrKSB7XG4gICAgICB0aGlzLmFycmF5T2ZaSW5kZXhlcy5wdXNoKCh0aGlzLmhpZ2hlc3RaSW5kZXggLSAoaSkpKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVpJbmRleFJldmVyc2UoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5mbG9vcih0aGlzLnZpc2libGVCbG9ja3MgLyAyKTsgaSsrKSB7XG4gICAgICB0aGlzLmFycmF5T2ZaSW5kZXhlc1JldmVyc2UucHVzaCgodGhpcy5oaWdoZXN0WkluZGV4IC0gKGkpKSk7XG4gICAgfVxuICAgIHRoaXMuYXJyYXlPZlpJbmRleGVzUmV2ZXJzZS5yZXZlcnNlKCk7XG4gIH1cblxuICBnZXRTY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJzY2FsZTNkKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIiwgXCIgKyB6ICsgXCIpXCI7XG4gIH1cblxuICBnZXRaSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZ2V0TGVmdChtYXJnaW46IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1hcmdpbiArIFwiJVwiO1xuICB9XG5cbiAgZ2V0VG9wKG1hcmdpbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbWFyZ2luICsgXCIlXCI7XG4gIH1cblxuICBnZXREaXNwbGF5KGRpc3BsYXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRpc3BsYXk7XG4gIH1cblxuICBnZW5lcmF0ZUNzc1N0eWxlcygpIHtcbiAgICBsZXQgc3RhcnQ6IG51bWJlciA9IE1hdGguZmxvb3IodGhpcy52aXNpYmxlQmxvY2tzIC8gMik7XG4gICAgbGV0IGVuZDogbnVtYmVyID0gdGhpcy5kYXRhLmxlbmd0aCAtIE1hdGguZmxvb3IodGhpcy52aXNpYmxlQmxvY2tzIC8gMik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICB0aGlzLmNzc1N0eWxlc0FycmF5LnB1c2gobmV3IENhcmRDU1ModGhpcy5nZXRaSW5kZXgodGhpcy5oaWdoZXN0WkluZGV4KSxcbiAgICAgICAgICB0aGlzLmdldExlZnQodGhpcy5jZW50ZXJQb3NpdGlvbiksIHRoaXMuZ2V0U2NhbGUoMSwgMSwgMSksIHRoaXMuZ2V0RGlzcGxheShcImJsb2NrXCIpLFxuICAgICAgICAgIHRoaXMuZ2V0VG9wKHRoaXMuY2VudGVyUG9zaXRpb25WZXJ0aWNhbCkpKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGkgIT0gMCAmJiBpIDw9IHN0YXJ0KSB7XG4gICAgICAgIHRoaXMuY3NzU3R5bGVzQXJyYXkucHVzaChuZXcgQ2FyZENTUyh0aGlzLmdldFpJbmRleCh0aGlzLmFycmF5T2ZaSW5kZXhlc1tpIC0gMV0pLFxuICAgICAgICAgIHRoaXMuZ2V0TGVmdCh0aGlzLmFycmF5T2ZQb3NGaXJzdEhhbGZbaSAtIDFdKSxcbiAgICAgICAgICB0aGlzLmdldFNjYWxlKHRoaXMuYXJyYXlPZkNhcmRTaXplSGFsZltpIC0gMV0sIHRoaXMuYXJyYXlPZkNhcmRTaXplSGFsZltpIC0gMV0sIHRoaXMuYXJyYXlPZkNhcmRTaXplSGFsZltpIC0gMV0pLFxuICAgICAgICAgIHRoaXMuZ2V0RGlzcGxheShcImJsb2NrXCIpLCB0aGlzLmdldFRvcCh0aGlzLmFycmF5T2ZQb3NGaXJzdEhhbGZWZXJ0aWNhbFtpIC0gMV0pKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpICE9IDAgJiYgaSA+PSBlbmQpIHtcbiAgICAgICAgdGhpcy5jc3NTdHlsZXNBcnJheS5wdXNoKG5ldyBDYXJkQ1NTKHRoaXMuZ2V0WkluZGV4KHRoaXMuYXJyYXlPZlpJbmRleGVzUmV2ZXJzZVtpIC0gZW5kXSksXG4gICAgICAgICAgdGhpcy5nZXRMZWZ0KHRoaXMuYXJyYXlPZlBvc0xhc3RIYWxmW2kgLSBlbmRdKSxcbiAgICAgICAgICB0aGlzLmdldFNjYWxlKHRoaXMuYXJyYXlPZkNhcmRTaXplSGFsZlJldmVyc2VbaSAtIGVuZF0sIHRoaXMuYXJyYXlPZkNhcmRTaXplSGFsZlJldmVyc2VbaSAtIGVuZF0sXG4gICAgICAgICAgICB0aGlzLmFycmF5T2ZDYXJkU2l6ZUhhbGZSZXZlcnNlW2kgLSBlbmRdKSxcbiAgICAgICAgICB0aGlzLmdldERpc3BsYXkoXCJibG9ja1wiKSwgdGhpcy5nZXRUb3AodGhpcy5hcnJheU9mUG9zTGFzdEhhbGZWZXJ0aWNhbFtpIC0gZW5kXSkpKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGkgIT0gMCAmJiBpID4gc3RhcnQgJiYgaSA8IGVuZCkge1xuICAgICAgICB0aGlzLmNzc1N0eWxlc0FycmF5LnB1c2gobmV3IENhcmRDU1ModGhpcy5nZXRaSW5kZXgoMCksXG4gICAgICAgICAgdGhpcy5nZXRMZWZ0KHRoaXMuY2VudGVyUG9zaXRpb24pLCB0aGlzLmdldFNjYWxlKDAsIDAsIDApLCB0aGlzLmdldERpc3BsYXkoXCJub25lXCIpLFxuICAgICAgICAgIHRoaXMuZ2V0VG9wKHRoaXMuY2VudGVyUG9zaXRpb25WZXJ0aWNhbCkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlTmV4dCgpIHtcbiAgICB0aGlzLnV0aWxpdHkuc2hpZnRSaWdodCh0aGlzLmNzc1N0eWxlc0FycmF5KTtcbiAgfVxuXG4gIG1vdmVQcmV2aW91cygpIHtcbiAgICB0aGlzLnV0aWxpdHkuc2hpZnRMZWZ0KHRoaXMuY3NzU3R5bGVzQXJyYXkpO1xuICB9XG5cbiAgY2hhbmdlQXJyb3dDb2xvcigpIHtcbiAgICB0aGlzLmFycm93Q29sb3JUZW1wID0gdGhpcy5hcnJvd0NvbG9yMjtcbiAgICB0aGlzLmFycm93Qm9yZGVyID0gXCIxcHggc29saWQgXCIgKyB0aGlzLmFycm93Q29sb3IyO1xuICB9XG5cbiAgY2hhbmdlQXJyb3dDb2xvck91dCgpIHtcbiAgICB0aGlzLmFycm93Q29sb3JUZW1wID0gdGhpcy5hcnJvd0NvbG9yO1xuICAgIHRoaXMuYXJyb3dCb3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHRoaXMuYXJyb3dDb2xvcjtcbiAgfVxuXG4gIGNoYW5nZUFycm93Q29sb3IxKCkge1xuICAgIHRoaXMuYXJyb3dDb2xvclRlbXAxID0gdGhpcy5hcnJvd0NvbG9yMjtcbiAgICB0aGlzLmFycm93Qm9yZGVyMSA9IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5hcnJvd0NvbG9yMjtcbiAgfVxuXG4gIGNoYW5nZUFycm93Q29sb3JPdXQxKCkge1xuICAgIHRoaXMuYXJyb3dDb2xvclRlbXAxID0gdGhpcy5hcnJvd0NvbG9yO1xuICAgIHRoaXMuYXJyb3dCb3JkZXIxID0gXCIxcHggc29saWQgXCIgKyB0aGlzLmFycm93Q29sb3I7XG4gIH1cblxuICBwYXVzZU1ldGhvZCgpIHtcbiAgICBpZiAodGhpcy5zdG9wU2Nyb2xsT25Ib3Zlcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9Sb3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc3VtZU1ldGhvZCgpIHtcbiAgICBpZiAodGhpcy5zdG9wU2Nyb2xsT25Ib3Zlcikge1xuICAgICAgdGhpcy5hdXRvUm90YXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBpZiAoZG9jdW1lbnQuaGFzRm9jdXMoKSkgeyB0aGlzLm1vdmVOZXh0KCk7IH0gfSwgdGhpcy50aW1lSW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG59Il19