import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Injectable, Component, ViewContainerRef, ComponentFactoryResolver, ViewChildren, Input, ChangeDetectorRef, ElementRef, Renderer2, Optional, NgModule, SkipSelf, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TbCarouselLibService {
    constructor() { }
}
TbCarouselLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TbCarouselLibService.ctorParameters = () => [];
/** @nocollapse */ TbCarouselLibService.ngInjectableDef = defineInjectable({ factory: function TbCarouselLibService_Factory() { return new TbCarouselLibService(); }, token: TbCarouselLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TbCarouselLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TbCarouselLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'tb-carousel-lib',
                template: `
    <p>
      tb-carousel-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
TbCarouselLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CardCSS {
    /**
     * @param {?} zIndex
     * @param {?} left
     * @param {?} scale
     * @param {?} display
     * @param {?} top
     */
    constructor(zIndex, left, scale, display, top) {
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
    setZIndex(zIndex) {
        this.zIndex = zIndex;
    }
    /**
     * @param {?} dispaly
     * @return {?}
     */
    setDisplay(dispaly) {
        this.display = dispaly;
    }
    /**
     * @param {?} left
     * @return {?}
     */
    setleft(left) {
        this.left = left;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtilitiesService {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    getNumberAndUnit(str) {
        /** @type {?} */
        let value = 0;
        /** @type {?} */
        let unit = "";
        /** @type {?} */
        let cssUnits = ["em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc",
            "ch", "rem", "vh", "vw", "vmin", "vmax"];
        for (let i = 0; i < cssUnits.length; i++) {
            if (!isNaN(Number(str.split(cssUnits[i])[0]))) {
                value = Number(str.split(cssUnits[i])[0]);
                unit = cssUnits[i];
            }
        }
        return { value: value, unit: unit };
    }
    /**
     * @param {?} array
     * @return {?}
     */
    shiftRight(array) {
        /** @type {?} */
        let last = array[array.length - 1];
        for (let index = array.length - 2; index >= 0; index--)
            array[index + 1] = array[index];
        array[0] = last;
    }
    /**
     * @param {?} array
     * @return {?}
     */
    shiftLeft(array) {
        /** @type {?} */
        let first = array[0];
        for (let index = 0; index < array.length; index++) {
            array[index] = array[index + 1];
        }
        array[array.length - 1] = first;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    sanitizeUrl(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
    /**
     * @param {?} array
     * @return {?}
     */
    sumOfNosInArray(array) {
        /** @type {?} */
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
}
UtilitiesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UtilitiesService.ctorParameters = () => [
    { type: DomSanitizer }
];
/** @nocollapse */ UtilitiesService.ngInjectableDef = defineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(inject(DomSanitizer)); }, token: UtilitiesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentGenServiceConfig {
}
class ComponentGenService {
    /**
     * @param {?} componentId
     * @param {?} resolver
     * @param {?} config
     */
    constructor(componentId, resolver, config) {
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
    createComponent(e, componentRef, modelObject) {
        //this.entry.clear();
        /** @type {?} */
        let factory = this.resolver.resolveComponentFactory(this._userDefinedComp);
        componentRef = e.createComponent(factory);
        componentRef.instance._tbModelObject = modelObject;
    }
}
/** @nocollapse */
ComponentGenService.ctorParameters = () => [
    { type: Number },
    { type: ComponentFactoryResolver },
    { type: ComponentGenServiceConfig, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentGenFactoryService {
    /**
     * @param {?} resolver
     * @param {?} config
     */
    constructor(resolver, config) {
        this.resolver = resolver;
        this.config = config;
    }
    /**
     * @param {?} componentId
     * @return {?}
     */
    createComponentGenServiceObject(componentId) {
        return new ComponentGenService(componentId, this.resolver, this.config);
    }
}
/** @nocollapse */
ComponentGenFactoryService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ComponentGenServiceConfig, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TbCarouselStackedCardComponent {
    /**
     * @param {?} resolver
     * @param {?} compGenFactoryService
     * @param {?} utility
     * @param {?} changeDetector
     * @param {?} elRef
     * @param {?} renderer
     */
    constructor(resolver, compGenFactoryService, utility, changeDetector, elRef, renderer) {
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
    ngAfterViewInit() {
        for (let i = 0; i < this.commonCard.toArray().length; i++) {
            /** @type {?} */
            let styles;
            if (i == 0 && this.tbStyle) {
                styles = this.tbStyle;
                this.property = Object.keys(styles);
                this.values = Object.values(styles);
            }
            if (this.property.length == this.values.length) {
                for (let j = 0; j < this.property.length; j++) {
                    this.renderer.setStyle(this.commonCard.toArray()[i].nativeElement, this.property[j], this.values[j]);
                }
            }
        }
        if (this.dataType == "custom-component") {
            try {
                /** @type {?} */
                let compGenService = this.compGenFactoryService.
                    createComponentGenServiceObject(this.component);
                for (let i = 0; i < this.widgetTargets.toArray().length; i++) {
                    compGenService.createComponent(this.widgetTargets.toArray()[i], this.componentRef, this.data[i]);
                }
                this.changeDetector.detectChanges();
            }
            catch (error) {
                console.error("No componenet is defined in TbCarouselLibModule.forRoot([]) please add the component needed and pass on the index of component as property bind e.g. component='1'.");
            }
        }
    }
    /**
     * @return {?}
     */
    destroyComponent() {
        this.componentRef.destroy();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.autoRotate = setInterval(() => { if (document.hasFocus()) {
            this.moveNext();
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
    }
    /**
     * @return {?}
     */
    generatePositions() {
        for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
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
    }
    /**
     * @return {?}
     */
    generatePositionsVertical() {
        for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
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
    }
    /**
     * @return {?}
     */
    generateSize() {
        for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
            this.arrayOfCardSizeHalf.push((1 - (0.1 * i)));
        }
    }
    /**
     * @return {?}
     */
    generateSizeReverse() {
        for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
            this.arrayOfCardSizeHalfReverse.push((1 - (0.1 * i)));
        }
        this.arrayOfCardSizeHalfReverse.reverse();
    }
    /**
     * @return {?}
     */
    generateZIndex() {
        for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
            this.arrayOfZIndexes.push((this.highestZIndex - (i)));
        }
    }
    /**
     * @return {?}
     */
    generateZIndexReverse() {
        for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
            this.arrayOfZIndexesReverse.push((this.highestZIndex - (i)));
        }
        this.arrayOfZIndexesReverse.reverse();
    }
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} z
     * @return {?}
     */
    getScale(x, y, z) {
        return "scale3d(" + x + ", " + y + ", " + z + ")";
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getZIndex(index) {
        return index;
    }
    /**
     * @param {?} margin
     * @return {?}
     */
    getLeft(margin) {
        return margin + "%";
    }
    /**
     * @param {?} margin
     * @return {?}
     */
    getTop(margin) {
        return margin + "%";
    }
    /**
     * @param {?} display
     * @return {?}
     */
    getDisplay(display) {
        return display;
    }
    /**
     * @return {?}
     */
    generateCssStyles() {
        /** @type {?} */
        let start = Math.floor(this.visibleBlocks / 2);
        /** @type {?} */
        let end = this.data.length - Math.floor(this.visibleBlocks / 2);
        for (let i = 0; i < this.data.length; i++) {
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
    }
    /**
     * @return {?}
     */
    moveNext() {
        this.utility.shiftRight(this.cssStylesArray);
    }
    /**
     * @return {?}
     */
    movePrevious() {
        this.utility.shiftLeft(this.cssStylesArray);
    }
    /**
     * @return {?}
     */
    changeArrowColor() {
        this.arrowColorTemp = this.arrowColor2;
        this.arrowBorder = "1px solid " + this.arrowColor2;
    }
    /**
     * @return {?}
     */
    changeArrowColorOut() {
        this.arrowColorTemp = this.arrowColor;
        this.arrowBorder = "1px solid " + this.arrowColor;
    }
    /**
     * @return {?}
     */
    changeArrowColor1() {
        this.arrowColorTemp1 = this.arrowColor2;
        this.arrowBorder1 = "1px solid " + this.arrowColor2;
    }
    /**
     * @return {?}
     */
    changeArrowColorOut1() {
        this.arrowColorTemp1 = this.arrowColor;
        this.arrowBorder1 = "1px solid " + this.arrowColor;
    }
    /**
     * @return {?}
     */
    pauseMethod() {
        if (this.stopScrollOnHover) {
            clearInterval(this.autoRotate);
        }
    }
    /**
     * @return {?}
     */
    resumeMethod() {
        if (this.stopScrollOnHover) {
            this.autoRotate = setInterval(() => { if (document.hasFocus()) {
                this.moveNext();
            } }, this.timeInterval);
        }
    }
}
TbCarouselStackedCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'tb-carousel-stacked-card',
                template: "<div [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth,\n  'position' : 'relative', 'margin':'auto'}\" (mouseover)=\"pauseMethod()\" (mouseout)=\"resumeMethod()\">\n\n  <div class=\"common-card\" *ngFor=\"let block of data; let i = index;\" \n  [ngStyle]=\"{'z-index': cssStylesArray[i].zIndex, 'left': cssStylesArray[i].left,\n  'transform': cssStylesArray[i].scale, 'display' : cssStylesArray[i].display,\n  'height' : heightOfBox, 'width' : widthOfBox, 'margin-left' : marginLeft, 'transition' : tbTransition,\n  'top' : cssStylesArray[i].top, 'margin-top' : marginTop}\" #commonCard>\n\n    <div *ngIf=\"dataType=='custom-component'\">\n      <template #customComponent></template>\n    </div>\n    <div *ngIf=\"dataType=='image'\">\n      <table id=\"wrapper\" [ngStyle]=\"{'height' : heightOfBox, 'width' : widthOfBox, 'overflow': 'hidden'}\">\n        <tr>\n          <td>\n            <img [src]=\"utility.sanitizeUrl(block)\" alt=\"Image {{block}}\" [ngStyle]=\"tbImageStyle\">\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div *ngIf=\"dataType=='text'\" [ngStyle]=\"{ 'height' : heightOfBox, 'width' : widthOfBox,\n      'overflow': 'hidden'}\">\n      <h2 style=\"margin : 5px;\">{{block.heading}}</h2>\n      <hr style=\"margin : 2px 20px;\">\n      <p style=\"margin : 5px; overflow: hidden;\">{{block.content}}</p>\n    </div>\n\n  </div>\n\n  <!-- Navigation arrows -->\n\n  <div class=\"arrow-parent-left\" (click)=\"movePrevious()\" (mouseover)=\"changeArrowColor()\"\n    (mouseout)=\"changeArrowColorOut()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n    </div>\n  </div>\n\n  <div class=\"arrow-parent-right\" (click)=\"moveNext()\" (mouseover)=\"changeArrowColor1()\"\n    (mouseout)=\"changeArrowColorOut1()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n    </div>\n  </div>\n\n</div>",
                styles: ["table,td,tr{margin:0;padding:0}.common-card{position:absolute;text-align:center;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.tb-button-left{z-index:100;position:absolute;left:5%;top:50%}.tb-button-right{z-index:100;position:absolute;right:5%;top:50%}#image{display:inline-block;margin-left:auto;margin-right:auto;vertical-align:middle}#wrapper{margin:0;padding:0;border:0}#wrapper td{vertical-align:middle;text-align:center}.arrow-parent-left{position:absolute;z-index:101;top:50%;left:0}.arrow-parent-right{position:absolute;z-index:101;top:50%;right:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.arrow{position:absolute;height:100%;width:100%}.common-line{border-radius:100px}.line1{position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-10%}.line2{top:-20%;position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"]
            }] }
];
/** @nocollapse */
TbCarouselStackedCardComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ComponentGenFactoryService },
    { type: UtilitiesService },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselBasicComponent {
    /**
     * @param {?} resolver
     * @param {?} compGenFactoryService
     * @param {?} utility
     * @param {?} changeDetector
     * @param {?} renderer
     */
    constructor(resolver, compGenFactoryService, utility, changeDetector, renderer) {
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
    ngAfterViewInit() {
        for (let i = 0; i < this.commonCard.toArray().length; i++) {
            /** @type {?} */
            let styles;
            if (i == 0 && this.tbStyle) {
                styles = this.tbStyle;
                this.property = Object.keys(styles);
                this.values = Object.values(styles);
            }
            if (this.property.length == this.values.length) {
                for (let j = 0; j < this.property.length; j++) {
                    this.renderer.setStyle(this.commonCard.toArray()[i].nativeElement, this.property[j], this.values[j]);
                }
            }
        }
        if (this.dataType == "custom-component") {
            try {
                /** @type {?} */
                let compGenService = this.compGenFactoryService.
                    createComponentGenServiceObject(this.component);
                for (let i = 0; i < this.widgetTargets.toArray().length; i++) {
                    compGenService.createComponent(this.widgetTargets.toArray()[i], this.componentRef, this.data[i]);
                }
                this.changeDetector.detectChanges();
            }
            catch (error) {
                console.error("No componenet is defined in TbCarouselLibModule.forRoot([]) please add the component needed and pass on the index of component as property bind e.g. component='1'.");
            }
        }
    }
    /**
     * @return {?}
     */
    destroyComponent() {
        this.componentRef.destroy();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tbTransitionInitial = this.tbTransition;
        this.rotateTransform = this.orientation == "horizontal" ? "translateX(0px)" : "translateY(0px)";
        this.rotateFn = this.orientation == "horizontal" ? "translateX" : "translateY";
        this.containerHeight = this.heightOfBox;
        this.containerWidth = this.widthOfBox;
        this.autoRotate = setInterval(() => { if (document.hasFocus()) {
            this.moveNext();
        } }, this.timeInterval);
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
    }
    /**
     * @return {?}
     */
    generatePositions() {
        if (this.orientation == "horizontal") {
            if (this.data) {
                if (this.data.length > 0) {
                    for (let i = 0; i < this.data.length; i++) {
                        this.arrayOfPosition.push(this.utility.getNumberAndUnit(this.widthOfBox).value * i);
                    }
                }
            }
        }
        else if (this.orientation == "vertical") {
            if (this.data) {
                if (this.data.length > 0) {
                    for (let i = 0; i < this.data.length; i++) {
                        this.arrayOfPosition.push(0);
                    }
                }
            }
        }
    }
    /**
     * @return {?}
     */
    generateVerticalPositions() {
        if (this.orientation == "vertical") {
            if (this.data) {
                if (this.data.length > 0) {
                    for (let i = 0; i < this.data.length; i++) {
                        this.arrayOfVerticalPosition.push(this.utility.getNumberAndUnit(this.heightOfBox).value * i);
                    }
                }
            }
        }
        else if (this.orientation == "horizontal") {
            if (this.data) {
                if (this.data.length > 0) {
                    for (let i = 0; i < this.data.length; i++) {
                        this.arrayOfVerticalPosition.push(0);
                    }
                }
            }
        }
    }
    /**
     * @param {?} margin
     * @return {?}
     */
    getLeft(margin) {
        return margin + this.utility.getNumberAndUnit(this.widthOfBox).unit;
    }
    /**
     * @param {?} margin
     * @return {?}
     */
    getTop(margin) {
        return margin + this.utility.getNumberAndUnit(this.heightOfBox).unit;
    }
    /**
     * @return {?}
     */
    generateCssStyles() {
        for (let i = 0; i < this.data.length; i++) {
            this.cssStylesArray.push(new CardCSS(100, this.getLeft(this.arrayOfPosition[i]), "scale3d(1,1,1)", "block", this.getTop(this.arrayOfVerticalPosition[i])));
        }
    }
    /**
     * @return {?}
     */
    rotate() {
        /** @type {?} */
        let multiplier = this.orientation == "horizontal" ?
            this.utility.getNumberAndUnit(this.widthOfBox).value : this.utility.getNumberAndUnit(this.heightOfBox).value;
        /** @type {?} */
        let unit = this.orientation == "horizontal" ?
            this.utility.getNumberAndUnit(this.widthOfBox).unit : this.utility.getNumberAndUnit(this.heightOfBox).unit;
        this.rotateTransform = this.rotateFn + "(" + this.selectedIndex * -1 *
            multiplier + unit + ")";
    }
    /**
     * @return {?}
     */
    moveNext() {
        this.selectedIndex++;
        if (this.selectedIndex > this.data.length - 1) {
            this.selectedIndex = 0;
            this.tbTransition = "none";
        }
        else {
            this.tbTransition = this.tbTransitionInitial;
        }
        this.rotate();
    }
    /**
     * @return {?}
     */
    movePrevious() {
        this.selectedIndex--;
        if (this.selectedIndex < 0) {
            this.selectedIndex = this.data.length - 1;
            this.tbTransition = "none";
        }
        else {
            this.tbTransition = this.tbTransitionInitial;
        }
        this.rotate();
    }
    /**
     * @return {?}
     */
    changeArrowColor() {
        this.arrowColorTemp = this.arrowColor2;
        this.arrowBorder = "1px solid " + this.arrowColor2;
    }
    /**
     * @return {?}
     */
    changeArrowColorOut() {
        this.arrowColorTemp = this.arrowColor;
        this.arrowBorder = "1px solid " + this.arrowColor;
    }
    /**
     * @return {?}
     */
    changeArrowColor1() {
        this.arrowColorTemp1 = this.arrowColor2;
        this.arrowBorder1 = "1px solid " + this.arrowColor2;
    }
    /**
     * @return {?}
     */
    changeArrowColorOut1() {
        this.arrowColorTemp1 = this.arrowColor;
        this.arrowBorder1 = "1px solid " + this.arrowColor;
    }
    /**
     * @return {?}
     */
    pauseMethod() {
        if (this.stopScrollOnHover) {
            clearInterval(this.autoRotate);
        }
    }
    /**
     * @return {?}
     */
    resumeMethod() {
        if (this.stopScrollOnHover) {
            this.autoRotate = setInterval(() => { if (document.hasFocus()) {
                this.moveNext();
            } }, this.timeInterval);
        }
    }
}
CarouselBasicComponent.decorators = [
    { type: Component, args: [{
                selector: 'tb-carousel-basic',
                template: "<div [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth, 'overflow':'hidden',\n  'position' : 'relative', 'margin':'auto', 'box-sizing': 'border-box'}\" (mouseover)=\"pauseMethod()\"\n  (mouseout)=\"resumeMethod()\">\n\n  <div class=\"tb-carousel\" [ngStyle]=\"{'height': heightOfBox, 'width':widthOfBox, \n    'transform':rotateTransform, 'transition': tbTransition}\">\n\n    <div class=\"common-card\" *ngFor=\"let block of data; let i = index;\"\n      [ngStyle]=\"{'z-index': cssStylesArray[i].zIndex, 'left': cssStylesArray[i].left,\n      'transform': cssStylesArray[i].scale, 'display' : cssStylesArray[i].display,\n      'height' : heightOfBox, 'width' : widthOfBox,\n      'top' : cssStylesArray[i].top}\" #commonCard>\n\n      <div *ngIf=\"dataType=='custom-component'\">\n        <template #customComponent></template>\n      </div>\n      <div *ngIf=\"dataType=='image'\">\n        <table id=\"wrapper\" [ngStyle]=\"{'height' : heightOfBox, 'width' : widthOfBox, 'overflow': 'hidden',\n        'margin':'0px', 'padding':'0px'}\">\n          <tr [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n            <td [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n              <img [src]=\"utility.sanitizeUrl(block)\" alt=\"Image {{block}}\" [ngStyle]=\"tbImageStyle\">\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div *ngIf=\"dataType=='text'\" [ngStyle]=\"{ 'height' : heightOfBox, 'width' : widthOfBox,\n      'overflow': 'hidden'}\">\n        <h2 style=\"margin : 5px;\">{{block.heading}}</h2>\n        <hr style=\"margin : 2px 20px;\">\n        <p style=\"margin : 5px; overflow: hidden;\">{{block.content}}</p>\n      </div>\n\n    </div>\n\n  </div>\n\n  <!-- Navigation arrows -->\n\n  <div class=\"arrow-parent-left\" (click)=\"movePrevious()\" (mouseover)=\"changeArrowColor()\"\n    (mouseout)=\"changeArrowColorOut()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n    </div>\n  </div>\n\n  <div class=\"arrow-parent-right\" (click)=\"moveNext()\" (mouseover)=\"changeArrowColor1()\"\n    (mouseout)=\"changeArrowColorOut1()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n    </div>\n  </div>\n\n</div>",
                styles: [".common-card{position:absolute;text-align:center;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;box-sizing:border-box}.tb-button-left{z-index:100;position:absolute;left:5%;top:50%}.tb-button-right{z-index:100;position:absolute;right:5%;top:50%}#image{display:inline-block;margin-left:auto;margin-right:auto;vertical-align:middle}#wrapper{margin:0;padding:0;border:0}#wrapper td{vertical-align:middle;text-align:center}.arrow-parent-left{position:absolute;z-index:101;top:50%;left:0}.arrow-parent-right{position:absolute;z-index:101;top:50%;right:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.arrow{position:absolute;height:100%;width:100%}.common-line{border-radius:100px}.line1{position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-10%}.line2{top:-20%;position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"]
            }] }
];
/** @nocollapse */
CarouselBasicComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ComponentGenFactoryService },
    { type: UtilitiesService },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
CarouselBasicComponent.propDecorators = {
    timeInterval: [{ type: Input, args: ['autoScrollInterval',] }],
    stopScrollOnHover: [{ type: Input, args: ['stopScrollOnHover',] }],
    data: [{ type: Input, args: ['displayData',] }],
    orientation: [{ type: Input, args: ['orientation',] }],
    component: [{ type: Input, args: ['component',] }],
    dataType: [{ type: Input, args: ['dataType',] }],
    heightOfBox: [{ type: Input, args: ['cardHeight',] }],
    widthOfBox: [{ type: Input, args: ['cardWidth',] }],
    tbStyle: [{ type: Input, args: ['tbCardStyle',] }],
    tbImageStyle: [{ type: Input, args: ['tbImageStyle',] }],
    containerHeight: [{ type: Input, args: ['containerHeight',] }],
    containerWidth: [{ type: Input, args: ['containerWidth',] }],
    tbTransition: [{ type: Input, args: ['tbTransition',] }],
    arrowHeight: [{ type: Input, args: ['arrowHeight',] }],
    arrowColor: [{ type: Input, args: ['arrowColor',] }],
    arrowColor2: [{ type: Input, args: ['arrowColorChange',] }],
    navArrowOpacity: [{ type: Input, args: ['navArrowOpacity',] }],
    showNavArrow: [{ type: Input, args: ['showNavArrow',] }],
    widgetTargets: [{ type: ViewChildren, args: ['customComponent', { read: ViewContainerRef },] }],
    commonCard: [{ type: ViewChildren, args: ['commonCard', { read: ElementRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselThreeDComponent {
    /**
     * @param {?} resolver
     * @param {?} compGenFactoryService
     * @param {?} utility
     * @param {?} changeDetector
     * @param {?} renderer
     */
    constructor(resolver, compGenFactoryService, utility, changeDetector, renderer) {
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
    ngAfterViewInit() {
        for (let i = 0; i < this.commonCard.toArray().length; i++) {
            /** @type {?} */
            let styles;
            if (i == 0 && this.tbStyle) {
                styles = this.tbStyle;
                this.property = Object.keys(styles);
                this.values = Object.values(styles);
            }
            if (this.property.length == this.values.length) {
                for (let j = 0; j < this.property.length; j++) {
                    this.renderer.setStyle(this.commonCard.toArray()[i].nativeElement, this.property[j], this.values[j]);
                }
            }
        }
        if (this.dataType == "custom-component") {
            try {
                /** @type {?} */
                let compGenService = this.compGenFactoryService.
                    createComponentGenServiceObject(this.component);
                for (let i = 0; i < this.widgetTargets.toArray().length; i++) {
                    compGenService.createComponent(this.widgetTargets.toArray()[i], this.componentRef, this.data[i]);
                }
                this.changeDetector.detectChanges();
            }
            catch (error) {
                console.error("No componenet is defined in TbCarouselLibModule.forRoot([]) please add the component needed and pass on the index of component as property bind e.g. component='1'.");
            }
        }
    }
    /**
     * @return {?}
     */
    destroyComponent() {
        this.componentRef.destroy();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        this.autoRotate = setInterval(() => { if (document.hasFocus()) {
            this.moveNext();
        } }, this.timeInterval);
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
    }
    /**
     * @param {?} angle
     * @param {?} zTranslate
     * @return {?}
     */
    getTransformValue(angle, zTranslate) {
        return this.orientation == "horizontal" ?
            "rotateY(" + angle + "deg) translateZ(" + zTranslate + "px)" :
            "rotateX(" + angle + "deg) translateZ(" + zTranslate + "px)";
    }
    /**
     * @return {?}
     */
    generateTransformStyleArr() {
        for (let i = 0; i < this.data.length; i++) {
            this.cssTransformStyleArr.push(this.getTransformValue(i * this.inclinedAngle, this.radius));
        }
    }
    /**
     * @return {?}
     */
    rotateCarousel() {
        /** @type {?} */
        let rotationAngle = this.inclinedAngle * -1 * this.selectedIndex;
        this.tbCarouselTransform =
            "translateZ(-" + this.radius + this.utility.getNumberAndUnit(this.widthOfBox).unit + ")" +
                this.rotateFn + "(" + rotationAngle + "deg)";
    }
    /**
     * @return {?}
     */
    moveNext() {
        this.selectedIndex++;
        this.rotateCarousel();
    }
    /**
     * @return {?}
     */
    movePrevious() {
        this.selectedIndex--;
        this.rotateCarousel();
    }
    /**
     * @return {?}
     */
    changeArrowColor() {
        this.arrowColorTemp = this.arrowColor2;
        this.arrowBorder = "1px solid " + this.arrowColor2;
    }
    /**
     * @return {?}
     */
    changeArrowColorOut() {
        this.arrowColorTemp = this.arrowColor;
        this.arrowBorder = "1px solid " + this.arrowColor;
    }
    /**
     * @return {?}
     */
    changeArrowColor1() {
        this.arrowColorTemp1 = this.arrowColor2;
        this.arrowBorder1 = "1px solid " + this.arrowColor2;
    }
    /**
     * @return {?}
     */
    changeArrowColorOut1() {
        this.arrowColorTemp1 = this.arrowColor;
        this.arrowBorder1 = "1px solid " + this.arrowColor;
    }
    /**
     * @return {?}
     */
    pauseMethod() {
        if (this.stopScrollOnHover) {
            clearInterval(this.autoRotate);
        }
    }
    /**
     * @return {?}
     */
    resumeMethod() {
        if (this.stopScrollOnHover) {
            this.autoRotate = setInterval(() => { if (document.hasFocus()) {
                this.moveNext();
            } }, this.timeInterval);
        }
    }
}
CarouselThreeDComponent.decorators = [
    { type: Component, args: [{
                selector: 'tb-carousel-three-d',
                template: "<div [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth,\n'position' : 'relative', 'margin':'auto', 'box-sizing': 'border-box'}\" (mouseover)=\"pauseMethod()\"\n  (mouseout)=\"resumeMethod()\">\n\n\n  <!-- table is used for vertically central aligning -->\n  <table id=\"wrapper\" [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth,\n  'margin':'0px', 'padding':'0px'}\">\n    <tr [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n      <td [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n\n\n        <div class=\"scene\" [ngStyle]=\"{'width':sceneWidth, 'height': sceneHeight}\">\n          <div class=\"tb-carousel\" [ngStyle]=\"{'transform' : tbCarouselTransform, 'transition' : tbTransition}\">\n            <div class=\"common-card\" *ngFor=\"let block of data; let i = index;\" [ngStyle]=\"{'transform' : cssTransformStyleArr[i],\n                  'height': cardHeight, 'width': cardWidth, 'top':cardTop, 'left':cardLeft}\" #commonCard>\n\n              <div *ngIf=\"dataType=='custom-component'\">\n                <template #customComponent></template>\n              </div>\n              <div *ngIf=\"dataType=='image'\">\n                <table id=\"wrapper\" [ngStyle]=\"{'height' : heightOfBox, 'width' : widthOfBox, 'overflow': 'hidden',\n                    'margin':'0px', 'padding':'0px'}\">\n                  <tr [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n                    <td [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n                      <img [src]=\"utility.sanitizeUrl(block)\" alt=\"Image {{block}}\" [ngStyle]=\"tbImageStyle\">\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div *ngIf=\"dataType=='text'\" [ngStyle]=\"{ 'height' : cardHeight, 'width' : cardWidth}\">\n                <h2 style=\"margin : 5px;\">{{block.heading}}</h2>\n                <hr style=\"margin : 2px 20px;\">\n                <p style=\"margin : 5px; overflow: hidden;\">{{block.content}}</p>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </td>\n    </tr>\n  </table>\n\n  <!-- Navigation arrows -->\n\n  <div class=\"arrow-parent-left\" (click)=\"movePrevious()\" (mouseover)=\"changeArrowColor()\"\n    (mouseout)=\"changeArrowColorOut()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n    </div>\n  </div>\n\n  <div class=\"arrow-parent-right\" (click)=\"moveNext()\" (mouseover)=\"changeArrowColor1()\"\n    (mouseout)=\"changeArrowColorOut1()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n    </div>\n  </div>\n\n</div>",
                styles: ["*{box-sizing:border-box}.scene{margin:auto;position:relative;-webkit-perspective:1000px;perspective:1000px}.tb-carousel{width:100%;height:100%;position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.common-card{position:absolute;text-align:center;box-sizing:border-box}.tb-button-left{z-index:100;position:absolute;left:5%;top:50%}.tb-button-right{z-index:100;position:absolute;right:5%;top:50%}#image{display:inline-block;margin-left:auto;margin-right:auto;vertical-align:middle}#wrapper{margin:0;padding:0;border:0}#wrapper td{vertical-align:middle;text-align:center}.arrow-parent-left{position:absolute;z-index:101;top:50%;left:0}.arrow-parent-right{position:absolute;z-index:101;top:50%;right:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.arrow{position:absolute;height:100%;width:100%}.common-line{border-radius:100px}.line1{position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-10%}.line2{top:-20%;position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"]
            }] }
];
/** @nocollapse */
CarouselThreeDComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ComponentGenFactoryService },
    { type: UtilitiesService },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
CarouselThreeDComponent.propDecorators = {
    timeInterval: [{ type: Input, args: ['autoScrollInterval',] }],
    stopScrollOnHover: [{ type: Input, args: ['stopScrollOnHover',] }],
    data: [{ type: Input, args: ['displayData',] }],
    orientation: [{ type: Input, args: ['orientation',] }],
    component: [{ type: Input, args: ['component',] }],
    dataType: [{ type: Input, args: ['dataType',] }],
    heightOfBox: [{ type: Input, args: ['cardHeight',] }],
    widthOfBox: [{ type: Input, args: ['cardWidth',] }],
    tbStyle: [{ type: Input, args: ['tbCardStyle',] }],
    tbImageStyle: [{ type: Input, args: ['tbImageStyle',] }],
    containerHeight: [{ type: Input, args: ['containerHeight',] }],
    containerWidth: [{ type: Input, args: ['containerWidth',] }],
    tbTransition: [{ type: Input, args: ['tbTransition',] }],
    arrowHeight: [{ type: Input, args: ['arrowHeight',] }],
    arrowColor: [{ type: Input, args: ['arrowColor',] }],
    arrowColor2: [{ type: Input, args: ['arrowColorChange',] }],
    navArrowOpacity: [{ type: Input, args: ['navArrowOpacity',] }],
    showNavArrow: [{ type: Input, args: ['showNavArrow',] }],
    widgetTargets: [{ type: ViewChildren, args: ['customComponent', { read: ViewContainerRef },] }],
    commonCard: [{ type: ViewChildren, args: ['commonCard', { read: ElementRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TbCarouselLibModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: TbCarouselLibModule,
            providers: [
                { provide: ComponentGenServiceConfig, useValue: config }
            ]
        };
    }
}
TbCarouselLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TbCarouselLibComponent,
                    TbCarouselStackedCardComponent,
                    CarouselBasicComponent,
                    CarouselThreeDComponent
                ],
                imports: [
                    CommonModule
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
TbCarouselLibModule.ctorParameters = () => [
    { type: TbCarouselLibModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TbCarouselLibService, TbCarouselLibComponent, TbCarouselLibModule, CarouselBasicComponent as ɵe, TbCarouselStackedCardComponent as ɵa, CarouselThreeDComponent as ɵf, ComponentGenFactoryService as ɵb, ComponentGenServiceConfig as ɵc, UtilitiesService as ɵd };

//# sourceMappingURL=tb-carousel-lib.js.map