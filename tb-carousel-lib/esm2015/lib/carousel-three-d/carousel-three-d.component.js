/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChildren, QueryList, Input, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { UtilitiesService } from '../util/utilities.service';
import { ComponentGenFactoryService } from '../util/component-gen-factory.service';
export class CarouselThreeDComponent {
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
if (false) {
    /** @type {?} */
    CarouselThreeDComponent.prototype.selectedIndex;
    /** @type {?} */
    CarouselThreeDComponent.prototype.cssTransformStyleArr;
    /** @type {?} */
    CarouselThreeDComponent.prototype.autoRotate;
    /** @type {?} */
    CarouselThreeDComponent.prototype.radius;
    /** @type {?} */
    CarouselThreeDComponent.prototype.sceneHeight;
    /** @type {?} */
    CarouselThreeDComponent.prototype.sceneWidth;
    /** @type {?} */
    CarouselThreeDComponent.prototype.tbCarouselTransform;
    /** @type {?} */
    CarouselThreeDComponent.prototype.cardHeight;
    /** @type {?} */
    CarouselThreeDComponent.prototype.cardWidth;
    /** @type {?} */
    CarouselThreeDComponent.prototype.cardTop;
    /** @type {?} */
    CarouselThreeDComponent.prototype.cardLeft;
    /** @type {?} */
    CarouselThreeDComponent.prototype.rotateFn;
    /** @type {?} */
    CarouselThreeDComponent.prototype.inclinedAngle;
    /** @type {?} */
    CarouselThreeDComponent.prototype.componentRef;
    /**
     *
     * @type {?}
     */
    CarouselThreeDComponent.prototype.timeInterval;
    /** @type {?} */
    CarouselThreeDComponent.prototype.stopScrollOnHover;
    /** @type {?} */
    CarouselThreeDComponent.prototype.data;
    /** @type {?} */
    CarouselThreeDComponent.prototype.orientation;
    /** @type {?} */
    CarouselThreeDComponent.prototype.component;
    /** @type {?} */
    CarouselThreeDComponent.prototype.dataType;
    /** @type {?} */
    CarouselThreeDComponent.prototype.heightOfBox;
    /** @type {?} */
    CarouselThreeDComponent.prototype.widthOfBox;
    /** @type {?} */
    CarouselThreeDComponent.prototype.tbStyle;
    /** @type {?} */
    CarouselThreeDComponent.prototype.property;
    /** @type {?} */
    CarouselThreeDComponent.prototype.values;
    /** @type {?} */
    CarouselThreeDComponent.prototype.tbImageStyle;
    /** @type {?} */
    CarouselThreeDComponent.prototype.containerHeight;
    /** @type {?} */
    CarouselThreeDComponent.prototype.containerWidth;
    /** @type {?} */
    CarouselThreeDComponent.prototype.tbTransition;
    /**
     * Navigation arrow properties
     * @type {?}
     */
    CarouselThreeDComponent.prototype.arrowHeight;
    /** @type {?} */
    CarouselThreeDComponent.prototype.arrowColor;
    /** @type {?} */
    CarouselThreeDComponent.prototype.arrowColor2;
    /** @type {?} */
    CarouselThreeDComponent.prototype.arrowWidth;
    /** @type {?} */
    CarouselThreeDComponent.prototype.arrowTopMargin;
    /** @type {?} */
    CarouselThreeDComponent.prototype.arrowColorTemp;
    /** @type {?} */
    CarouselThreeDComponent.prototype.arrowBorder;
    /** @type {?} */
    CarouselThreeDComponent.prototype.arrowColorTemp1;
    /** @type {?} */
    CarouselThreeDComponent.prototype.arrowBorder1;
    /** @type {?} */
    CarouselThreeDComponent.prototype.showNav;
    /** @type {?} */
    CarouselThreeDComponent.prototype.navArrowOpacity;
    /** @type {?} */
    CarouselThreeDComponent.prototype.showNavArrow;
    /**
     * Methods
     * @type {?}
     */
    CarouselThreeDComponent.prototype.widgetTargets;
    /** @type {?} */
    CarouselThreeDComponent.prototype.commonCard;
    /**
     * @type {?}
     * @private
     */
    CarouselThreeDComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    CarouselThreeDComponent.prototype.compGenFactoryService;
    /** @type {?} */
    CarouselThreeDComponent.prototype.utility;
    /**
     * @type {?}
     * @private
     */
    CarouselThreeDComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    CarouselThreeDComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtdGhyZWUtZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Yi1jYXJvdXNlbC1saWIvIiwic291cmNlcyI6WyJsaWIvY2Fyb3VzZWwtdGhyZWUtZC9jYXJvdXNlbC10aHJlZS1kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBT25GLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7O0lBOERsQyxZQUFvQixRQUFrQyxFQUM1QyxxQkFBaUQsRUFBUyxPQUF5QixFQUNuRixjQUFpQyxFQUFVLFFBQW1CO1FBRnBELGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQzVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBNEI7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNuRixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBOUR4RSxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQix5QkFBb0IsR0FBVSxFQUFFLENBQUM7UUFHakMsZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDdEIsZUFBVSxHQUFHLE9BQU8sQ0FBQzs7OztRQVdRLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1FBQzdCLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUl4QyxnQkFBVyxHQUFXLFlBQVksQ0FBQztRQUNyQyxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxNQUFNLENBQUM7O1FBR3hCLGdCQUFXLEdBQVcsT0FBTyxDQUFDO1FBQy9CLGVBQVUsR0FBVyxPQUFPLENBQUM7UUFFakQsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBUUMsaUJBQVksR0FBRyxjQUFjLENBQUM7Ozs7UUFHL0IsZ0JBQVcsR0FBRyxNQUFNLENBQUM7UUFDdEIsZUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNmLGdCQUFXLEdBQUcsbUJBQW1CLENBQUM7UUFDN0QsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwQixtQkFBYyxHQUFHLE9BQU8sQ0FBQztRQUN6QixtQkFBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFakMsb0JBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRWxDLFlBQU8sR0FBVyxPQUFPLENBQUM7UUFDQSxvQkFBZSxHQUFHLEdBQUcsQ0FBQztRQUN6QixpQkFBWSxHQUFZLElBQUksQ0FBQztJQVVwRCxDQUFDOzs7O0lBRUQsZUFBZTtRQUViLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ3JELE1BQU07WUFFVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdEc7YUFDRjtTQUNGO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLGtCQUFrQixFQUFFO1lBQ3ZDLElBQUk7O29CQUNFLGNBQWMsR0FBd0IsSUFBSSxDQUFDLHFCQUFxQjtvQkFDbEUsK0JBQStCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM1RCxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xHO2dCQUNELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDckM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLHFLQUFxSyxDQUFDLENBQUM7YUFDdEw7U0FFRjtJQUVILENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRWxJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUMsQ0FBQztZQUM5QyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUc7Z0JBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUd6RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUMsQ0FBQztZQUMzRCxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFDeEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUN6RixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBRW5DLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO2dCQUN0QyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUc7b0JBQzdELENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7a0JBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUV6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO2dCQUN0QyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUc7b0JBQzVELENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7a0JBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUUxRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUM3RSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFFckQsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBYSxFQUFFLFVBQWtCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUMsQ0FBQztZQUN2QyxVQUFVLEdBQUcsS0FBSyxHQUFHLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM5RCxVQUFVLEdBQUcsS0FBSyxHQUFHLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELHlCQUF5QjtRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0Y7SUFDSCxDQUFDOzs7O0lBRUQsY0FBYzs7WUFDUixhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYTtRQUNoRSxJQUFJLENBQUMsbUJBQW1CO1lBQ3RCLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUN4RixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0c7SUFFSCxDQUFDOzs7WUFsT0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHd4R0FBZ0Q7O2FBRWpEOzs7O1lBaEJDLHdCQUF3QjtZQVVqQiwwQkFBMEI7WUFEMUIsZ0JBQWdCO1lBTHZCLGlCQUFpQjtZQUVqQixTQUFTOzs7MkJBOEJSLEtBQUssU0FBQyxvQkFBb0I7Z0NBQzFCLEtBQUssU0FBQyxtQkFBbUI7bUJBR3pCLEtBQUssU0FBQyxhQUFhOzBCQUNuQixLQUFLLFNBQUMsYUFBYTt3QkFDbkIsS0FBSyxTQUFDLFdBQVc7dUJBQ2pCLEtBQUssU0FBQyxVQUFVOzBCQUdoQixLQUFLLFNBQUMsWUFBWTt5QkFDbEIsS0FBSyxTQUFDLFdBQVc7c0JBQ2pCLEtBQUssU0FBQyxhQUFhOzJCQUtuQixLQUFLLFNBQUMsY0FBYzs4QkFHcEIsS0FBSyxTQUFDLGlCQUFpQjs2QkFDdkIsS0FBSyxTQUFDLGdCQUFnQjsyQkFDdEIsS0FBSyxTQUFDLGNBQWM7MEJBR3BCLEtBQUssU0FBQyxhQUFhO3lCQUNuQixLQUFLLFNBQUMsWUFBWTswQkFDbEIsS0FBSyxTQUFDLGtCQUFrQjs4QkFReEIsS0FBSyxTQUFDLGlCQUFpQjsyQkFDdkIsS0FBSyxTQUFDLGNBQWM7NEJBSXBCLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTt5QkFDMUQsWUFBWSxTQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Ozs7SUExRGhELGdEQUFrQjs7SUFFbEIsdURBQWlDOztJQUNqQyw2Q0FBVzs7SUFDWCx5Q0FBTzs7SUFDUCw4Q0FBc0I7O0lBQ3RCLDZDQUFxQjs7SUFDckIsc0RBQW9COztJQUNwQiw2Q0FBVzs7SUFDWCw0Q0FBVTs7SUFDViwwQ0FBUTs7SUFDUiwyQ0FBUzs7SUFDVCwyQ0FBUzs7SUFDVCxnREFBYzs7SUFDZCwrQ0FBa0I7Ozs7O0lBR2xCLCtDQUF5RDs7SUFDekQsb0RBQThEOztJQUc5RCx1Q0FBa0M7O0lBQ2xDLDhDQUF5RDs7SUFDekQsNENBQTBDOztJQUMxQywyQ0FBNkM7O0lBRzdDLDhDQUFtRDs7SUFDbkQsNkNBQWlEOztJQUNqRCwwQ0FBMEQ7O0lBQzFELDJDQUF3Qjs7SUFDeEIseUNBQXNCOztJQUd0QiwrQ0FBb0M7O0lBR3BDLGtEQUEwQzs7SUFDMUMsaURBQXdDOztJQUN4QywrQ0FBcUQ7Ozs7O0lBR3JELDhDQUEyQzs7SUFDM0MsNkNBQTBDOztJQUMxQyw4Q0FBNkQ7O0lBQzdELDZDQUFvQjs7SUFDcEIsaURBQXlCOztJQUN6QixpREFBaUM7O0lBQ2pDLDhDQUFZOztJQUNaLGtEQUFrQzs7SUFDbEMsK0NBQWE7O0lBQ2IsMENBQTBCOztJQUMxQixrREFBZ0Q7O0lBQ2hELCtDQUFvRDs7Ozs7SUFJcEQsZ0RBQStHOztJQUMvRyw2Q0FBb0Y7Ozs7O0lBRXhFLDJDQUEwQzs7Ozs7SUFDcEQsd0RBQXlEOztJQUFFLDBDQUFnQzs7Ozs7SUFDM0YsaURBQXlDOzs7OztJQUFFLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFZpZXdDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEdlblNlcnZpY2UgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudC1nZW4uc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbC91dGlsaXRpZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRHZW5GYWN0b3J5U2VydmljZSB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50LWdlbi1mYWN0b3J5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Yi1jYXJvdXNlbC10aHJlZS1kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLXRocmVlLWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC10aHJlZS1kLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbFRocmVlRENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc2VsZWN0ZWRJbmRleCA9IDA7XG5cbiAgY3NzVHJhbnNmb3JtU3R5bGVBcnI6IGFueVtdID0gW107XG4gIGF1dG9Sb3RhdGU7XG4gIHJhZGl1cztcbiAgc2NlbmVIZWlnaHQgPSBcIjMwMHB4XCI7XG4gIHNjZW5lV2lkdGggPSBcIjMwMHB4XCI7XG4gIHRiQ2Fyb3VzZWxUcmFuc2Zvcm07XG4gIGNhcmRIZWlnaHQ7XG4gIGNhcmRXaWR0aDtcbiAgY2FyZFRvcDtcbiAgY2FyZExlZnQ7XG4gIHJvdGF0ZUZuO1xuICBpbmNsaW5lZEFuZ2xlO1xuICBjb21wb25lbnRSZWY6IGFueTtcblxuICAvKiogKi9cbiAgQElucHV0KCdhdXRvU2Nyb2xsSW50ZXJ2YWwnKSB0aW1lSW50ZXJ2YWw6IG51bWJlciA9IDEwMDA7XG4gIEBJbnB1dCgnc3RvcFNjcm9sbE9uSG92ZXInKSBzdG9wU2Nyb2xsT25Ib3ZlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLypEYXRhIGFuZCB2aXNpYmxlIG5vLiBvZiBjYXJkcyAqL1xuICBASW5wdXQoJ2Rpc3BsYXlEYXRhJykgZGF0YTogYW55W107XG4gIEBJbnB1dCgnb3JpZW50YXRpb24nKSBvcmllbnRhdGlvbjogc3RyaW5nID0gXCJob3Jpem9udGFsXCI7XG4gIEBJbnB1dCgnY29tcG9uZW50JykgY29tcG9uZW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2RhdGFUeXBlJykgZGF0YVR5cGU6IHN0cmluZyA9ICd0ZXh0JztcblxuICAvKkNhcmQgU3R5bGUgcHJvcGVydGllcyovXG4gIEBJbnB1dCgnY2FyZEhlaWdodCcpIGhlaWdodE9mQm94OiBzdHJpbmcgPSBcIjI1MHB4XCI7XG4gIEBJbnB1dCgnY2FyZFdpZHRoJykgd2lkdGhPZkJveDogc3RyaW5nID0gXCIzMDBweFwiO1xuICBASW5wdXQoJ3RiQ2FyZFN0eWxlJykgdGJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XG4gIHByb3BlcnR5OiBzdHJpbmdbXSA9IFtdO1xuICB2YWx1ZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLypJbWFnZSBwcm9wZXJ0aWVzICovXG4gIEBJbnB1dCgndGJJbWFnZVN0eWxlJykgdGJJbWFnZVN0eWxlO1xuXG4gIC8qQ29udGFpbmVyIHByb3BlcnRpZXMgKi9cbiAgQElucHV0KCdjb250YWluZXJIZWlnaHQnKSBjb250YWluZXJIZWlnaHQ7XG4gIEBJbnB1dCgnY29udGFpbmVyV2lkdGgnKSBjb250YWluZXJXaWR0aDtcbiAgQElucHV0KCd0YlRyYW5zaXRpb24nKSB0YlRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAxc1wiO1xuXG4gIC8qKk5hdmlnYXRpb24gYXJyb3cgcHJvcGVydGllcyAqL1xuICBASW5wdXQoJ2Fycm93SGVpZ2h0JykgYXJyb3dIZWlnaHQgPSBcIjQ1cHhcIjtcbiAgQElucHV0KCdhcnJvd0NvbG9yJykgYXJyb3dDb2xvciA9IFwiYmxhY2tcIjtcbiAgQElucHV0KCdhcnJvd0NvbG9yQ2hhbmdlJykgYXJyb3dDb2xvcjIgPSBcInJnYigxMDAsIDk5LCAxMDApXCI7XG4gIGFycm93V2lkdGggPSBcIjMwcHhcIjtcbiAgYXJyb3dUb3BNYXJnaW4gPSBcIi0yMnB4XCI7XG4gIGFycm93Q29sb3JUZW1wID0gdGhpcy5hcnJvd0NvbG9yO1xuICBhcnJvd0JvcmRlcjtcbiAgYXJyb3dDb2xvclRlbXAxID0gdGhpcy5hcnJvd0NvbG9yO1xuICBhcnJvd0JvcmRlcjE7XG4gIHNob3dOYXY6IHN0cmluZyA9IFwiYmxvY2tcIjtcbiAgQElucHV0KCduYXZBcnJvd09wYWNpdHknKSBuYXZBcnJvd09wYWNpdHkgPSAwLjU7XG4gIEBJbnB1dCgnc2hvd05hdkFycm93Jykgc2hvd05hdkFycm93OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipNZXRob2RzKi9cblxuICBAVmlld0NoaWxkcmVuKCdjdXN0b21Db21wb25lbnQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgcHVibGljIHdpZGdldFRhcmdldHM6IFF1ZXJ5TGlzdDxWaWV3Q29udGFpbmVyUmVmPjtcbiAgQFZpZXdDaGlsZHJlbignY29tbW9uQ2FyZCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBjb21tb25DYXJkOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgY29tcEdlbkZhY3RvcnlTZXJ2aWNlOiBDb21wb25lbnRHZW5GYWN0b3J5U2VydmljZSwgcHVibGljIHV0aWxpdHk6IFV0aWxpdGllc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbW1vbkNhcmQudG9BcnJheSgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc3R5bGVzO1xuXG4gICAgICBpZiAoaSA9PSAwICYmIHRoaXMudGJTdHlsZSkge1xuICAgICAgICBzdHlsZXMgPSB0aGlzLnRiU3R5bGU7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBPYmplY3Qua2V5cyhzdHlsZXMpO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IE9iamVjdC52YWx1ZXMoc3R5bGVzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BlcnR5Lmxlbmd0aCA9PSB0aGlzLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnByb3BlcnR5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbW1vbkNhcmQudG9BcnJheSgpW2ldLm5hdGl2ZUVsZW1lbnQsIHRoaXMucHJvcGVydHlbal0sIHRoaXMudmFsdWVzW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGFUeXBlID09IFwiY3VzdG9tLWNvbXBvbmVudFwiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgY29tcEdlblNlcnZpY2U6IENvbXBvbmVudEdlblNlcnZpY2UgPSB0aGlzLmNvbXBHZW5GYWN0b3J5U2VydmljZS5cbiAgICAgICAgICBjcmVhdGVDb21wb25lbnRHZW5TZXJ2aWNlT2JqZWN0KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndpZGdldFRhcmdldHMudG9BcnJheSgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29tcEdlblNlcnZpY2UuY3JlYXRlQ29tcG9uZW50KHRoaXMud2lkZ2V0VGFyZ2V0cy50b0FycmF5KClbaV0sIHRoaXMuY29tcG9uZW50UmVmLCB0aGlzLmRhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGNvbXBvbmVuZXQgaXMgZGVmaW5lZCBpbiBUYkNhcm91c2VsTGliTW9kdWxlLmZvclJvb3QoW10pIHBsZWFzZSBhZGQgdGhlIGNvbXBvbmVudCBuZWVkZWQgYW5kIHBhc3Mgb24gdGhlIGluZGV4IG9mIGNvbXBvbmVudCBhcyBwcm9wZXJ0eSBiaW5kIGUuZy4gY29tcG9uZW50PScxJy5cIik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIGRlc3Ryb3lDb21wb25lbnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB0aGlzLnJvdGF0ZUZuID0gdGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIiA/IFwicm90YXRlWVwiIDogXCJyb3RhdGVYXCI7XG4gICAgdGhpcy5pbmNsaW5lZEFuZ2xlID0gMzYwIC8gdGhpcy5kYXRhLmxlbmd0aDtcblxuICAgIHRoaXMuc2NlbmVIZWlnaHQgPSB0aGlzLmhlaWdodE9mQm94O1xuICAgIHRoaXMuc2NlbmVXaWR0aCA9IHRoaXMud2lkdGhPZkJveDtcblxuICAgIHRoaXMuY2FyZEhlaWdodCA9IHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuaGVpZ2h0T2ZCb3gpLnZhbHVlICogMC45MCArIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuaGVpZ2h0T2ZCb3gpLnVuaXQ7XG4gICAgdGhpcy5jYXJkV2lkdGggPSB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnZhbHVlICogMC45MCArIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudW5pdDtcbiAgICB0aGlzLmNhcmRUb3AgPSB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS52YWx1ZSAqIDAuMDUgKyB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS51bml0O1xuICAgIHRoaXMuY2FyZExlZnQgPSB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnZhbHVlICogMC4wNSArIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudW5pdDtcblxuICAgIHRoaXMucmFkaXVzID0gdGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIiA/XG4gICAgICAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy53aWR0aE9mQm94KS52YWx1ZSkgKiAwLjUgL1xuICAgICAgTWF0aC50YW4oKDAuNSAqIHRoaXMuaW5jbGluZWRBbmdsZSkgKiAoTWF0aC5QSSAvIDE4MCkpIDpcbiAgICAgICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS52YWx1ZSkgKiAwLjUgL1xuICAgICAgTWF0aC50YW4oKDAuNSAqIHRoaXMuaW5jbGluZWRBbmdsZSkgKiAoTWF0aC5QSSAvIDE4MCkpO1xuXG5cbiAgICB0aGlzLnRiQ2Fyb3VzZWxUcmFuc2Zvcm0gPSB0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiID9cbiAgICAgIFwidHJhbnNsYXRlWigtXCIgKyB0aGlzLnJhZGl1cyArIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudW5pdCArIFwiKVwiICtcbiAgICAgIHRoaXMucm90YXRlRm4gKyBcIihcIiArIDAgKyBcImRlZylcIiA6XG4gICAgICBcInRyYW5zbGF0ZVooLVwiICsgdGhpcy5yYWRpdXMgKyB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS51bml0ICsgXCIpXCIgK1xuICAgICAgdGhpcy5yb3RhdGVGbiArIFwiKFwiICsgMCArIFwiZGVnKVwiO1xuXG4gICAgdGhpcy5nZW5lcmF0ZVRyYW5zZm9ybVN0eWxlQXJyKCk7XG5cbiAgICB0aGlzLmF1dG9Sb3RhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IGlmIChkb2N1bWVudC5oYXNGb2N1cygpKSB7IHRoaXMubW92ZU5leHQoKTsgfSB9LCB0aGlzLnRpbWVJbnRlcnZhbCk7XG5cbiAgICBpZiAodGhpcy5zaG93TmF2QXJyb3cpIHtcbiAgICAgIHRoaXMuc2hvd05hdiA9IFwiYmxvY2tcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93TmF2ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgdGhpcy5jb250YWluZXJIZWlnaHQgPSB0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiID8gdGhpcy5zY2VuZUhlaWdodCA6XG4gICAgICAyICogTWF0aC5zcXJ0KCh0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzICtcbiAgICAgICAgKHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuaGVpZ2h0T2ZCb3gpLnZhbHVlKSAqIDAuNSAqXG4gICAgICAgICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS52YWx1ZSkgKiAwLjUpKVxuICAgICAgKyB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS51bml0O1xuXG4gICAgdGhpcy5jb250YWluZXJXaWR0aCA9IHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIgP1xuICAgICAgMiAqIE1hdGguc3FydCgodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cyArXG4gICAgICAgICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnZhbHVlKSAqIDAuNSAqXG4gICAgICAgICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnZhbHVlKSAqIDAuNSkpXG4gICAgICArIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudW5pdCA6IHRoaXMuc2NlbmVXaWR0aDtcblxuICAgIHRoaXMuYXJyb3dXaWR0aCA9ICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmFycm93SGVpZ2h0KS52YWx1ZSAvIDEuNSkgK1xuICAgICAgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5hcnJvd0hlaWdodCkudW5pdDtcbiAgICB0aGlzLmFycm93VG9wTWFyZ2luID0gXCItXCIgKyAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5hcnJvd0hlaWdodCkudmFsdWUgLyAyKSArXG4gICAgICB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmFycm93SGVpZ2h0KS51bml0O1xuICAgIHRoaXMuYXJyb3dCb3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHRoaXMuYXJyb3dDb2xvcjtcbiAgICB0aGlzLmFycm93Qm9yZGVyMSA9IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5hcnJvd0NvbG9yO1xuXG4gIH1cblxuICBnZXRUcmFuc2Zvcm1WYWx1ZShhbmdsZTogbnVtYmVyLCB6VHJhbnNsYXRlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiID9cbiAgICAgIFwicm90YXRlWShcIiArIGFuZ2xlICsgXCJkZWcpIHRyYW5zbGF0ZVooXCIgKyB6VHJhbnNsYXRlICsgXCJweClcIiA6XG4gICAgICBcInJvdGF0ZVgoXCIgKyBhbmdsZSArIFwiZGVnKSB0cmFuc2xhdGVaKFwiICsgelRyYW5zbGF0ZSArIFwicHgpXCI7XG4gIH1cblxuICBnZW5lcmF0ZVRyYW5zZm9ybVN0eWxlQXJyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmNzc1RyYW5zZm9ybVN0eWxlQXJyLnB1c2godGhpcy5nZXRUcmFuc2Zvcm1WYWx1ZShpICogdGhpcy5pbmNsaW5lZEFuZ2xlLCB0aGlzLnJhZGl1cykpO1xuICAgIH1cbiAgfVxuXG4gIHJvdGF0ZUNhcm91c2VsKCkge1xuICAgIGxldCByb3RhdGlvbkFuZ2xlID0gdGhpcy5pbmNsaW5lZEFuZ2xlICogLTEgKiB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgdGhpcy50YkNhcm91c2VsVHJhbnNmb3JtID1cbiAgICAgIFwidHJhbnNsYXRlWigtXCIgKyB0aGlzLnJhZGl1cyArIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudW5pdCArIFwiKVwiICtcbiAgICAgIHRoaXMucm90YXRlRm4gKyBcIihcIiArIHJvdGF0aW9uQW5nbGUgKyBcImRlZylcIjtcbiAgfVxuXG4gIG1vdmVOZXh0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCsrO1xuICAgIHRoaXMucm90YXRlQ2Fyb3VzZWwoKTtcbiAgfVxuXG4gIG1vdmVQcmV2aW91cygpIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXgtLTtcbiAgICB0aGlzLnJvdGF0ZUNhcm91c2VsKCk7XG4gIH1cblxuICBjaGFuZ2VBcnJvd0NvbG9yKCkge1xuICAgIHRoaXMuYXJyb3dDb2xvclRlbXAgPSB0aGlzLmFycm93Q29sb3IyO1xuICAgIHRoaXMuYXJyb3dCb3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHRoaXMuYXJyb3dDb2xvcjI7XG4gIH1cblxuICBjaGFuZ2VBcnJvd0NvbG9yT3V0KCkge1xuICAgIHRoaXMuYXJyb3dDb2xvclRlbXAgPSB0aGlzLmFycm93Q29sb3I7XG4gICAgdGhpcy5hcnJvd0JvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5hcnJvd0NvbG9yO1xuICB9XG5cbiAgY2hhbmdlQXJyb3dDb2xvcjEoKSB7XG4gICAgdGhpcy5hcnJvd0NvbG9yVGVtcDEgPSB0aGlzLmFycm93Q29sb3IyO1xuICAgIHRoaXMuYXJyb3dCb3JkZXIxID0gXCIxcHggc29saWQgXCIgKyB0aGlzLmFycm93Q29sb3IyO1xuICB9XG5cbiAgY2hhbmdlQXJyb3dDb2xvck91dDEoKSB7XG4gICAgdGhpcy5hcnJvd0NvbG9yVGVtcDEgPSB0aGlzLmFycm93Q29sb3I7XG4gICAgdGhpcy5hcnJvd0JvcmRlcjEgPSBcIjFweCBzb2xpZCBcIiArIHRoaXMuYXJyb3dDb2xvcjtcbiAgfVxuXG4gIHBhdXNlTWV0aG9kKCkge1xuICAgIGlmICh0aGlzLnN0b3BTY3JvbGxPbkhvdmVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1JvdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVzdW1lTWV0aG9kKCkge1xuICAgIGlmICh0aGlzLnN0b3BTY3JvbGxPbkhvdmVyKSB7XG4gICAgICB0aGlzLmF1dG9Sb3RhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IGlmIChkb2N1bWVudC5oYXNGb2N1cygpKSB7IHRoaXMubW92ZU5leHQoKTsgfSB9LCB0aGlzLnRpbWVJbnRlcnZhbCk7XG4gICAgfVxuXG4gIH1cblxufSJdfQ==