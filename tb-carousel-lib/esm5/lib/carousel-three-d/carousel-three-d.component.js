/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChildren, QueryList, Input, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { UtilitiesService } from '../util/utilities.service';
import { ComponentGenFactoryService } from '../util/component-gen-factory.service';
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
        this.autoRotate = setInterval(function () { if (document.hasFocus()) {
            _this.moveNext();
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
            this.autoRotate = setInterval(function () { if (document.hasFocus()) {
                _this.moveNext();
            } }, this.timeInterval);
        }
    };
    CarouselThreeDComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tb-carousel-three-d',
                    template: "<div [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth,\n'position' : 'relative', 'margin':'auto', 'box-sizing': 'border-box'}\" (mouseover)=\"pauseMethod()\"\n  (mouseout)=\"resumeMethod()\">\n\n\n  <!-- table is used for vertically central aligning -->\n  <table id=\"wrapper\" [ngStyle]=\"{'height' : containerHeight, 'width' : containerWidth,\n  'margin':'0px', 'padding':'0px'}\">\n    <tr [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n      <td [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n\n\n        <div class=\"scene\" [ngStyle]=\"{'width':sceneWidth, 'height': sceneHeight}\">\n          <div class=\"tb-carousel\" [ngStyle]=\"{'transform' : tbCarouselTransform, 'transition' : tbTransition}\">\n            <div class=\"common-card\" *ngFor=\"let block of data; let i = index;\" [ngStyle]=\"{'transform' : cssTransformStyleArr[i],\n                  'height': cardHeight, 'width': cardWidth, 'top':cardTop, 'left':cardLeft}\" #commonCard>\n\n              <div *ngIf=\"dataType=='custom-component'\">\n                <template #customComponent></template>\n              </div>\n              <div *ngIf=\"dataType=='image'\">\n                <table id=\"wrapper\" [ngStyle]=\"{'height' : heightOfBox, 'width' : widthOfBox, 'overflow': 'hidden',\n                    'margin':'0px', 'padding':'0px'}\">\n                  <tr [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n                    <td [ngStyle]=\"{'margin':'0px', 'padding':'0px'}\">\n                      <img [src]=\"utility.sanitizeUrl(block)\" alt=\"Image {{block}}\" [ngStyle]=\"tbImageStyle\">\n                    </td>\n                  </tr>\n                </table>\n              </div>\n              <div *ngIf=\"dataType=='text'\" [ngStyle]=\"{ 'height' : cardHeight, 'width' : cardWidth}\">\n                <h2 style=\"margin : 5px;\">{{block.heading}}</h2>\n                <hr style=\"margin : 2px 20px;\">\n                <p style=\"margin : 5px; overflow: hidden;\">{{block.content}}</p>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </td>\n    </tr>\n  </table>\n\n  <!-- Navigation arrows -->\n\n  <div class=\"arrow-parent-left\" (click)=\"movePrevious()\" (mouseover)=\"changeArrowColor()\"\n    (mouseout)=\"changeArrowColorOut()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp, 'border' : arrowBorder}\"></div>\n    </div>\n  </div>\n\n  <div class=\"arrow-parent-right\" (click)=\"moveNext()\" (mouseover)=\"changeArrowColor1()\"\n    (mouseout)=\"changeArrowColorOut1()\" [ngStyle]=\"{'height' : arrowHeight, 'width' : arrowWidth, 'margin-top' : arrowTopMargin,\n    'display':showNav, 'opacity': navArrowOpacity}\">\n    <div class=\"arrow\">\n      <div class=\"line1 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n      <div class=\"line2 common-line\" [ngStyle]=\"{'background-color' : arrowColorTemp1, 'border' : arrowBorder1}\"></div>\n    </div>\n  </div>\n\n</div>",
                    styles: ["*{box-sizing:border-box}.scene{margin:auto;position:relative;-webkit-perspective:1000px;perspective:1000px}.tb-carousel{width:100%;height:100%;position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.common-card{position:absolute;text-align:center;box-sizing:border-box}.tb-button-left{z-index:100;position:absolute;left:5%;top:50%}.tb-button-right{z-index:100;position:absolute;right:5%;top:50%}#image{display:inline-block;margin-left:auto;margin-right:auto;vertical-align:middle}#wrapper{margin:0;padding:0;border:0}#wrapper td{vertical-align:middle;text-align:center}.arrow-parent-left{position:absolute;z-index:101;top:50%;left:0}.arrow-parent-right{position:absolute;z-index:101;top:50%;right:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}.arrow{position:absolute;height:100%;width:100%}.common-line{border-radius:100px}.line1{position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-10%}.line2{top:-20%;position:absolute;height:65%;width:20%;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotate(135deg);transform:rotate(135deg)}"]
                }] }
    ];
    /** @nocollapse */
    CarouselThreeDComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ComponentGenFactoryService },
        { type: UtilitiesService },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
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
    return CarouselThreeDComponent;
}());
export { CarouselThreeDComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtdGhyZWUtZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Yi1jYXJvdXNlbC1saWIvIiwic291cmNlcyI6WyJsaWIvY2Fyb3VzZWwtdGhyZWUtZC9jYXJvdXNlbC10aHJlZS1kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRW5GO0lBbUVFLGlDQUFvQixRQUFrQyxFQUM1QyxxQkFBaUQsRUFBUyxPQUF5QixFQUNuRixjQUFpQyxFQUFVLFFBQW1CO1FBRnBELGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQzVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBNEI7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNuRixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBOUR4RSxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQix5QkFBb0IsR0FBVSxFQUFFLENBQUM7UUFHakMsZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDdEIsZUFBVSxHQUFHLE9BQU8sQ0FBQzs7OztRQVdRLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1FBQzdCLHNCQUFpQixHQUFZLElBQUksQ0FBQztRQUl4QyxnQkFBVyxHQUFXLFlBQVksQ0FBQztRQUNyQyxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxNQUFNLENBQUM7O1FBR3hCLGdCQUFXLEdBQVcsT0FBTyxDQUFDO1FBQy9CLGVBQVUsR0FBVyxP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QzNDLDZDQUEwQzs7SUFDMUMsOENBQTZEOztJQUM3RCw2Q0FBb0I7O0lBQ3BCLGlEQUF5Qjs7SUFDekIsaURBQWlDOztJQUNqQyw4Q0FBWTs7SUFDWixrREFBa0M7O0lBQ2xDLCtDQUFhOztJQUNiLDBDQUEwQjs7SUFDMUIsa0RBQWdEOztJQUNoRCwrQ0FBb0Q7Ozs7O0lBSXBELGdEQUErRzs7SUFDL0csNkNBQW9GOzs7OztJQUV4RSwyQ0FBMEM7Ozs7O0lBQ3BELHdEQUF5RDs7SUFBRSwwQ0FBZ0M7Ozs7O0lBQzNGLGlEQUF5Qzs7Ozs7SUFBRSwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRHZW5TZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQtZ2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXRpbGl0aWVzU2VydmljZSB9IGZyb20gJy4uL3V0aWwvdXRpbGl0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50R2VuRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudC1nZW4tZmFjdG9yeS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGItY2Fyb3VzZWwtdGhyZWUtZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC10aHJlZS1kLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwtdGhyZWUtZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxUaHJlZURDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHNlbGVjdGVkSW5kZXggPSAwO1xuXG4gIGNzc1RyYW5zZm9ybVN0eWxlQXJyOiBhbnlbXSA9IFtdO1xuICBhdXRvUm90YXRlO1xuICByYWRpdXM7XG4gIHNjZW5lSGVpZ2h0ID0gXCIzMDBweFwiO1xuICBzY2VuZVdpZHRoID0gXCIzMDBweFwiO1xuICB0YkNhcm91c2VsVHJhbnNmb3JtO1xuICBjYXJkSGVpZ2h0O1xuICBjYXJkV2lkdGg7XG4gIGNhcmRUb3A7XG4gIGNhcmRMZWZ0O1xuICByb3RhdGVGbjtcbiAgaW5jbGluZWRBbmdsZTtcbiAgY29tcG9uZW50UmVmOiBhbnk7XG5cbiAgLyoqICovXG4gIEBJbnB1dCgnYXV0b1Njcm9sbEludGVydmFsJykgdGltZUludGVydmFsOiBudW1iZXIgPSAxMDAwO1xuICBASW5wdXQoJ3N0b3BTY3JvbGxPbkhvdmVyJykgc3RvcFNjcm9sbE9uSG92ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qRGF0YSBhbmQgdmlzaWJsZSBuby4gb2YgY2FyZHMgKi9cbiAgQElucHV0KCdkaXNwbGF5RGF0YScpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoJ29yaWVudGF0aW9uJykgb3JpZW50YXRpb246IHN0cmluZyA9IFwiaG9yaXpvbnRhbFwiO1xuICBASW5wdXQoJ2NvbXBvbmVudCcpIGNvbXBvbmVudDogbnVtYmVyID0gMDtcbiAgQElucHV0KCdkYXRhVHlwZScpIGRhdGFUeXBlOiBzdHJpbmcgPSAndGV4dCc7XG5cbiAgLypDYXJkIFN0eWxlIHByb3BlcnRpZXMqL1xuICBASW5wdXQoJ2NhcmRIZWlnaHQnKSBoZWlnaHRPZkJveDogc3RyaW5nID0gXCIyNTBweFwiO1xuICBASW5wdXQoJ2NhcmRXaWR0aCcpIHdpZHRoT2ZCb3g6IHN0cmluZyA9IFwiMzAwcHhcIjtcbiAgQElucHV0KCd0YkNhcmRTdHlsZScpIHRiU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xuICBwcm9wZXJ0eTogc3RyaW5nW10gPSBbXTtcbiAgdmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qSW1hZ2UgcHJvcGVydGllcyAqL1xuICBASW5wdXQoJ3RiSW1hZ2VTdHlsZScpIHRiSW1hZ2VTdHlsZTtcblxuICAvKkNvbnRhaW5lciBwcm9wZXJ0aWVzICovXG4gIEBJbnB1dCgnY29udGFpbmVySGVpZ2h0JykgY29udGFpbmVySGVpZ2h0O1xuICBASW5wdXQoJ2NvbnRhaW5lcldpZHRoJykgY29udGFpbmVyV2lkdGg7XG4gIEBJbnB1dCgndGJUcmFuc2l0aW9uJykgdGJUcmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMXNcIjtcblxuICAvKipOYXZpZ2F0aW9uIGFycm93IHByb3BlcnRpZXMgKi9cbiAgQElucHV0KCdhcnJvd0hlaWdodCcpIGFycm93SGVpZ2h0ID0gXCI0NXB4XCI7XG4gIEBJbnB1dCgnYXJyb3dDb2xvcicpIGFycm93Q29sb3IgPSBcImJsYWNrXCI7XG4gIEBJbnB1dCgnYXJyb3dDb2xvckNoYW5nZScpIGFycm93Q29sb3IyID0gXCJyZ2IoMTAwLCA5OSwgMTAwKVwiO1xuICBhcnJvd1dpZHRoID0gXCIzMHB4XCI7XG4gIGFycm93VG9wTWFyZ2luID0gXCItMjJweFwiO1xuICBhcnJvd0NvbG9yVGVtcCA9IHRoaXMuYXJyb3dDb2xvcjtcbiAgYXJyb3dCb3JkZXI7XG4gIGFycm93Q29sb3JUZW1wMSA9IHRoaXMuYXJyb3dDb2xvcjtcbiAgYXJyb3dCb3JkZXIxO1xuICBzaG93TmF2OiBzdHJpbmcgPSBcImJsb2NrXCI7XG4gIEBJbnB1dCgnbmF2QXJyb3dPcGFjaXR5JykgbmF2QXJyb3dPcGFjaXR5ID0gMC41O1xuICBASW5wdXQoJ3Nob3dOYXZBcnJvdycpIHNob3dOYXZBcnJvdzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqTWV0aG9kcyovXG5cbiAgQFZpZXdDaGlsZHJlbignY3VzdG9tQ29tcG9uZW50JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHB1YmxpYyB3aWRnZXRUYXJnZXRzOiBRdWVyeUxpc3Q8Vmlld0NvbnRhaW5lclJlZj47XG4gIEBWaWV3Q2hpbGRyZW4oJ2NvbW1vbkNhcmQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgY29tbW9uQ2FyZDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGNvbXBHZW5GYWN0b3J5U2VydmljZTogQ29tcG9uZW50R2VuRmFjdG9yeVNlcnZpY2UsIHB1YmxpYyB1dGlsaXR5OiBVdGlsaXRpZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb21tb25DYXJkLnRvQXJyYXkoKS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHN0eWxlcztcblxuICAgICAgaWYgKGkgPT0gMCAmJiB0aGlzLnRiU3R5bGUpIHtcbiAgICAgICAgc3R5bGVzID0gdGhpcy50YlN0eWxlO1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gT2JqZWN0LmtleXMoc3R5bGVzKTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBPYmplY3QudmFsdWVzKHN0eWxlcyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wZXJ0eS5sZW5ndGggPT0gdGhpcy52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wZXJ0eS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb21tb25DYXJkLnRvQXJyYXkoKVtpXS5uYXRpdmVFbGVtZW50LCB0aGlzLnByb3BlcnR5W2pdLCB0aGlzLnZhbHVlc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRhVHlwZSA9PSBcImN1c3RvbS1jb21wb25lbnRcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvbXBHZW5TZXJ2aWNlOiBDb21wb25lbnRHZW5TZXJ2aWNlID0gdGhpcy5jb21wR2VuRmFjdG9yeVNlcnZpY2UuXG4gICAgICAgICAgY3JlYXRlQ29tcG9uZW50R2VuU2VydmljZU9iamVjdCh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aWRnZXRUYXJnZXRzLnRvQXJyYXkoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbXBHZW5TZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudCh0aGlzLndpZGdldFRhcmdldHMudG9BcnJheSgpW2ldLCB0aGlzLmNvbXBvbmVudFJlZiwgdGhpcy5kYXRhW2ldKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBjb21wb25lbmV0IGlzIGRlZmluZWQgaW4gVGJDYXJvdXNlbExpYk1vZHVsZS5mb3JSb290KFtdKSBwbGVhc2UgYWRkIHRoZSBjb21wb25lbnQgbmVlZGVkIGFuZCBwYXNzIG9uIHRoZSBpbmRleCBvZiBjb21wb25lbnQgYXMgcHJvcGVydHkgYmluZCBlLmcuIGNvbXBvbmVudD0nMScuXCIpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICBkZXN0cm95Q29tcG9uZW50KCkge1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5yb3RhdGVGbiA9IHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIgPyBcInJvdGF0ZVlcIiA6IFwicm90YXRlWFwiO1xuICAgIHRoaXMuaW5jbGluZWRBbmdsZSA9IDM2MCAvIHRoaXMuZGF0YS5sZW5ndGg7XG5cbiAgICB0aGlzLnNjZW5lSGVpZ2h0ID0gdGhpcy5oZWlnaHRPZkJveDtcbiAgICB0aGlzLnNjZW5lV2lkdGggPSB0aGlzLndpZHRoT2ZCb3g7XG5cbiAgICB0aGlzLmNhcmRIZWlnaHQgPSB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS52YWx1ZSAqIDAuOTAgKyB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS51bml0O1xuICAgIHRoaXMuY2FyZFdpZHRoID0gdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy53aWR0aE9mQm94KS52YWx1ZSAqIDAuOTAgKyB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnVuaXQ7XG4gICAgdGhpcy5jYXJkVG9wID0gdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudmFsdWUgKiAwLjA1ICsgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudW5pdDtcbiAgICB0aGlzLmNhcmRMZWZ0ID0gdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy53aWR0aE9mQm94KS52YWx1ZSAqIDAuMDUgKyB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnVuaXQ7XG5cbiAgICB0aGlzLnJhZGl1cyA9IHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIgP1xuICAgICAgKHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudmFsdWUpICogMC41IC9cbiAgICAgIE1hdGgudGFuKCgwLjUgKiB0aGlzLmluY2xpbmVkQW5nbGUpICogKE1hdGguUEkgLyAxODApKSA6XG4gICAgICAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudmFsdWUpICogMC41IC9cbiAgICAgIE1hdGgudGFuKCgwLjUgKiB0aGlzLmluY2xpbmVkQW5nbGUpICogKE1hdGguUEkgLyAxODApKTtcblxuXG4gICAgdGhpcy50YkNhcm91c2VsVHJhbnNmb3JtID0gdGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIiA/XG4gICAgICBcInRyYW5zbGF0ZVooLVwiICsgdGhpcy5yYWRpdXMgKyB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnVuaXQgKyBcIilcIiArXG4gICAgICB0aGlzLnJvdGF0ZUZuICsgXCIoXCIgKyAwICsgXCJkZWcpXCIgOlxuICAgICAgXCJ0cmFuc2xhdGVaKC1cIiArIHRoaXMucmFkaXVzICsgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudW5pdCArIFwiKVwiICtcbiAgICAgIHRoaXMucm90YXRlRm4gKyBcIihcIiArIDAgKyBcImRlZylcIjtcblxuICAgIHRoaXMuZ2VuZXJhdGVUcmFuc2Zvcm1TdHlsZUFycigpO1xuXG4gICAgdGhpcy5hdXRvUm90YXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBpZiAoZG9jdW1lbnQuaGFzRm9jdXMoKSkgeyB0aGlzLm1vdmVOZXh0KCk7IH0gfSwgdGhpcy50aW1lSW50ZXJ2YWwpO1xuXG4gICAgaWYgKHRoaXMuc2hvd05hdkFycm93KSB7XG4gICAgICB0aGlzLnNob3dOYXYgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd05hdiA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gdGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIiA/IHRoaXMuc2NlbmVIZWlnaHQgOlxuICAgICAgMiAqIE1hdGguc3FydCgodGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cyArXG4gICAgICAgICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmhlaWdodE9mQm94KS52YWx1ZSkgKiAwLjUgKlxuICAgICAgICAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudmFsdWUpICogMC41KSlcbiAgICAgICsgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudW5pdDtcblxuICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSB0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiID9cbiAgICAgIDIgKiBNYXRoLnNxcnQoKHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXMgK1xuICAgICAgICAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy53aWR0aE9mQm94KS52YWx1ZSkgKiAwLjUgKlxuICAgICAgICAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy53aWR0aE9mQm94KS52YWx1ZSkgKiAwLjUpKVxuICAgICAgKyB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnVuaXQgOiB0aGlzLnNjZW5lV2lkdGg7XG5cbiAgICB0aGlzLmFycm93V2lkdGggPSAodGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5hcnJvd0hlaWdodCkudmFsdWUgLyAxLjUpICtcbiAgICAgIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuYXJyb3dIZWlnaHQpLnVuaXQ7XG4gICAgdGhpcy5hcnJvd1RvcE1hcmdpbiA9IFwiLVwiICsgKHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuYXJyb3dIZWlnaHQpLnZhbHVlIC8gMikgK1xuICAgICAgdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5hcnJvd0hlaWdodCkudW5pdDtcbiAgICB0aGlzLmFycm93Qm9yZGVyID0gXCIxcHggc29saWQgXCIgKyB0aGlzLmFycm93Q29sb3I7XG4gICAgdGhpcy5hcnJvd0JvcmRlcjEgPSBcIjFweCBzb2xpZCBcIiArIHRoaXMuYXJyb3dDb2xvcjtcblxuICB9XG5cbiAgZ2V0VHJhbnNmb3JtVmFsdWUoYW5nbGU6IG51bWJlciwgelRyYW5zbGF0ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIiA/XG4gICAgICBcInJvdGF0ZVkoXCIgKyBhbmdsZSArIFwiZGVnKSB0cmFuc2xhdGVaKFwiICsgelRyYW5zbGF0ZSArIFwicHgpXCIgOlxuICAgICAgXCJyb3RhdGVYKFwiICsgYW5nbGUgKyBcImRlZykgdHJhbnNsYXRlWihcIiArIHpUcmFuc2xhdGUgKyBcInB4KVwiO1xuICB9XG5cbiAgZ2VuZXJhdGVUcmFuc2Zvcm1TdHlsZUFycigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5jc3NUcmFuc2Zvcm1TdHlsZUFyci5wdXNoKHRoaXMuZ2V0VHJhbnNmb3JtVmFsdWUoaSAqIHRoaXMuaW5jbGluZWRBbmdsZSwgdGhpcy5yYWRpdXMpKTtcbiAgICB9XG4gIH1cblxuICByb3RhdGVDYXJvdXNlbCgpIHtcbiAgICBsZXQgcm90YXRpb25BbmdsZSA9IHRoaXMuaW5jbGluZWRBbmdsZSAqIC0xICogdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIHRoaXMudGJDYXJvdXNlbFRyYW5zZm9ybSA9XG4gICAgICBcInRyYW5zbGF0ZVooLVwiICsgdGhpcy5yYWRpdXMgKyB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnVuaXQgKyBcIilcIiArXG4gICAgICB0aGlzLnJvdGF0ZUZuICsgXCIoXCIgKyByb3RhdGlvbkFuZ2xlICsgXCJkZWcpXCI7XG4gIH1cblxuICBtb3ZlTmV4dCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXgrKztcbiAgICB0aGlzLnJvdGF0ZUNhcm91c2VsKCk7XG4gIH1cblxuICBtb3ZlUHJldmlvdXMoKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4LS07XG4gICAgdGhpcy5yb3RhdGVDYXJvdXNlbCgpO1xuICB9XG5cbiAgY2hhbmdlQXJyb3dDb2xvcigpIHtcbiAgICB0aGlzLmFycm93Q29sb3JUZW1wID0gdGhpcy5hcnJvd0NvbG9yMjtcbiAgICB0aGlzLmFycm93Qm9yZGVyID0gXCIxcHggc29saWQgXCIgKyB0aGlzLmFycm93Q29sb3IyO1xuICB9XG5cbiAgY2hhbmdlQXJyb3dDb2xvck91dCgpIHtcbiAgICB0aGlzLmFycm93Q29sb3JUZW1wID0gdGhpcy5hcnJvd0NvbG9yO1xuICAgIHRoaXMuYXJyb3dCb3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHRoaXMuYXJyb3dDb2xvcjtcbiAgfVxuXG4gIGNoYW5nZUFycm93Q29sb3IxKCkge1xuICAgIHRoaXMuYXJyb3dDb2xvclRlbXAxID0gdGhpcy5hcnJvd0NvbG9yMjtcbiAgICB0aGlzLmFycm93Qm9yZGVyMSA9IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5hcnJvd0NvbG9yMjtcbiAgfVxuXG4gIGNoYW5nZUFycm93Q29sb3JPdXQxKCkge1xuICAgIHRoaXMuYXJyb3dDb2xvclRlbXAxID0gdGhpcy5hcnJvd0NvbG9yO1xuICAgIHRoaXMuYXJyb3dCb3JkZXIxID0gXCIxcHggc29saWQgXCIgKyB0aGlzLmFycm93Q29sb3I7XG4gIH1cblxuICBwYXVzZU1ldGhvZCgpIHtcbiAgICBpZiAodGhpcy5zdG9wU2Nyb2xsT25Ib3Zlcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9Sb3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc3VtZU1ldGhvZCgpIHtcbiAgICBpZiAodGhpcy5zdG9wU2Nyb2xsT25Ib3Zlcikge1xuICAgICAgdGhpcy5hdXRvUm90YXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBpZiAoZG9jdW1lbnQuaGFzRm9jdXMoKSkgeyB0aGlzLm1vdmVOZXh0KCk7IH0gfSwgdGhpcy50aW1lSW50ZXJ2YWwpO1xuICAgIH1cblxuICB9XG5cbn0iXX0=