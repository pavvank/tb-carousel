/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChildren, QueryList, Input, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { CardCSS } from '../models/cardcss.model';
import { UtilitiesService } from '../util/utilities.service';
import { ComponentGenFactoryService } from '../util/component-gen-factory.service';
export class CarouselBasicComponent {
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
if (false) {
    /** @type {?} */
    CarouselBasicComponent.prototype.cssStylesArray;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrayOfPosition;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrayOfVerticalPosition;
    /** @type {?} */
    CarouselBasicComponent.prototype.autoRotate;
    /** @type {?} */
    CarouselBasicComponent.prototype.rotateTransform;
    /** @type {?} */
    CarouselBasicComponent.prototype.rotateFn;
    /** @type {?} */
    CarouselBasicComponent.prototype.selectedIndex;
    /** @type {?} */
    CarouselBasicComponent.prototype.componentRef;
    /**
     *
     * @type {?}
     */
    CarouselBasicComponent.prototype.timeInterval;
    /** @type {?} */
    CarouselBasicComponent.prototype.stopScrollOnHover;
    /** @type {?} */
    CarouselBasicComponent.prototype.data;
    /** @type {?} */
    CarouselBasicComponent.prototype.orientation;
    /** @type {?} */
    CarouselBasicComponent.prototype.component;
    /** @type {?} */
    CarouselBasicComponent.prototype.dataType;
    /** @type {?} */
    CarouselBasicComponent.prototype.heightOfBox;
    /** @type {?} */
    CarouselBasicComponent.prototype.widthOfBox;
    /** @type {?} */
    CarouselBasicComponent.prototype.tbStyle;
    /** @type {?} */
    CarouselBasicComponent.prototype.property;
    /** @type {?} */
    CarouselBasicComponent.prototype.values;
    /** @type {?} */
    CarouselBasicComponent.prototype.tbImageStyle;
    /** @type {?} */
    CarouselBasicComponent.prototype.containerHeight;
    /** @type {?} */
    CarouselBasicComponent.prototype.containerWidth;
    /** @type {?} */
    CarouselBasicComponent.prototype.tbTransition;
    /** @type {?} */
    CarouselBasicComponent.prototype.tbTransitionInitial;
    /**
     * Navigation arrow properties
     * @type {?}
     */
    CarouselBasicComponent.prototype.arrowHeight;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrowColor;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrowColor2;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrowWidth;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrowTopMargin;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrowColorTemp;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrowBorder;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrowColorTemp1;
    /** @type {?} */
    CarouselBasicComponent.prototype.arrowBorder1;
    /** @type {?} */
    CarouselBasicComponent.prototype.showNav;
    /** @type {?} */
    CarouselBasicComponent.prototype.navArrowOpacity;
    /** @type {?} */
    CarouselBasicComponent.prototype.showNavArrow;
    /**
     * Methods
     * @type {?}
     */
    CarouselBasicComponent.prototype.widgetTargets;
    /** @type {?} */
    CarouselBasicComponent.prototype.commonCard;
    /**
     * @type {?}
     * @private
     */
    CarouselBasicComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    CarouselBasicComponent.prototype.compGenFactoryService;
    /** @type {?} */
    CarouselBasicComponent.prototype.utility;
    /**
     * @type {?}
     * @private
     */
    CarouselBasicComponent.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    CarouselBasicComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtYmFzaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGItY2Fyb3VzZWwtbGliLyIsInNvdXJjZXMiOlsibGliL2Nhcm91c2VsLWJhc2ljL2Nhcm91c2VsLWJhc2ljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQU9uRixNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7OztJQXlEakMsWUFBb0IsUUFBa0MsRUFDNUMscUJBQWlELEVBQVMsT0FBeUIsRUFDbkYsY0FBaUMsRUFBVSxRQUFtQjtRQUZwRCxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUM1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQTRCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDbkYsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXpEeEUsbUJBQWMsR0FBYyxFQUFFLENBQUM7UUFDL0Isb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0IsNEJBQXVCLEdBQWEsRUFBRSxDQUFDO1FBSXZDLGtCQUFhLEdBQUcsQ0FBQyxDQUFDOzs7O1FBS1csaUJBQVksR0FBVyxJQUFJLENBQUM7UUFDN0Isc0JBQWlCLEdBQVksSUFBSSxDQUFDO1FBSXhDLGdCQUFXLEdBQVcsWUFBWSxDQUFDO1FBQ3JDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdkIsYUFB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bnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZENTUyB9IGZyb20gJy4uL21vZGVscy9jYXJkY3NzLm1vZGVsJztcbmltcG9ydCB7IENvbXBvbmVudEdlblNlcnZpY2UgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudC1nZW4uc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbC91dGlsaXRpZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnRHZW5GYWN0b3J5U2VydmljZSB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50LWdlbi1mYWN0b3J5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0Yi1jYXJvdXNlbC1iYXNpYycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1iYXNpYy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLWJhc2ljLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbEJhc2ljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjc3NTdHlsZXNBcnJheTogQ2FyZENTU1tdID0gW107XG4gIGFycmF5T2ZQb3NpdGlvbjogbnVtYmVyW10gPSBbXTtcbiAgYXJyYXlPZlZlcnRpY2FsUG9zaXRpb246IG51bWJlcltdID0gW107XG4gIGF1dG9Sb3RhdGU7XG4gIHJvdGF0ZVRyYW5zZm9ybTtcbiAgcm90YXRlRm47XG4gIHNlbGVjdGVkSW5kZXggPSAwO1xuXG4gIGNvbXBvbmVudFJlZjogYW55O1xuXG4gIC8qKiAqL1xuICBASW5wdXQoJ2F1dG9TY3JvbGxJbnRlcnZhbCcpIHRpbWVJbnRlcnZhbDogbnVtYmVyID0gMTAwMDtcbiAgQElucHV0KCdzdG9wU2Nyb2xsT25Ib3ZlcicpIHN0b3BTY3JvbGxPbkhvdmVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKkRhdGEgYW5kIHZpc2libGUgbm8uIG9mIGNhcmRzICovXG4gIEBJbnB1dCgnZGlzcGxheURhdGEnKSBkYXRhOiBhbnlbXTtcbiAgQElucHV0KCdvcmllbnRhdGlvbicpIG9yaWVudGF0aW9uOiBzdHJpbmcgPSBcImhvcml6b250YWxcIjtcbiAgQElucHV0KCdjb21wb25lbnQnKSBjb21wb25lbnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnZGF0YVR5cGUnKSBkYXRhVHlwZTogc3RyaW5nID0gJ3RleHQnO1xuXG4gIC8qQ2FyZCBTdHlsZSBwcm9wZXJ0aWVzKi9cbiAgQElucHV0KCdjYXJkSGVpZ2h0JykgaGVpZ2h0T2ZCb3g6IHN0cmluZyA9IFwiMjUwcHhcIjtcbiAgQElucHV0KCdjYXJkV2lkdGgnKSB3aWR0aE9mQm94OiBzdHJpbmcgPSBcIjMwMHB4XCI7XG4gIEBJbnB1dCgndGJDYXJkU3R5bGUnKSB0YlN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcbiAgcHJvcGVydHk6IHN0cmluZ1tdID0gW107XG4gIHZhbHVlczogc3RyaW5nW10gPSBbXTtcblxuICAvKkltYWdlIHByb3BlcnRpZXMgKi9cbiAgQElucHV0KCd0YkltYWdlU3R5bGUnKSB0YkltYWdlU3R5bGU7XG5cbiAgLypDb250YWluZXIgcHJvcGVydGllcyAqL1xuICBASW5wdXQoJ2NvbnRhaW5lckhlaWdodCcpIGNvbnRhaW5lckhlaWdodDtcbiAgQElucHV0KCdjb250YWluZXJXaWR0aCcpIGNvbnRhaW5lcldpZHRoO1xuICBASW5wdXQoJ3RiVHJhbnNpdGlvbicpIHRiVHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDFzXCI7XG4gIHRiVHJhbnNpdGlvbkluaXRpYWw7XG5cbiAgLyoqTmF2aWdhdGlvbiBhcnJvdyBwcm9wZXJ0aWVzICovXG4gIEBJbnB1dCgnYXJyb3dIZWlnaHQnKSBhcnJvd0hlaWdodCA9IFwiNDVweFwiO1xuICBASW5wdXQoJ2Fycm93Q29sb3InKSBhcnJvd0NvbG9yID0gXCJibGFja1wiO1xuICBASW5wdXQoJ2Fycm93Q29sb3JDaGFuZ2UnKSBhcnJvd0NvbG9yMiA9IFwicmdiKDEwMCwgOTksIDEwMClcIjtcbiAgYXJyb3dXaWR0aCA9IFwiMzBweFwiO1xuICBhcnJvd1RvcE1hcmdpbiA9IFwiLTIycHhcIjtcbiAgYXJyb3dDb2xvclRlbXAgPSB0aGlzLmFycm93Q29sb3I7XG4gIGFycm93Qm9yZGVyO1xuICBhcnJvd0NvbG9yVGVtcDEgPSB0aGlzLmFycm93Q29sb3I7XG4gIGFycm93Qm9yZGVyMTtcbiAgc2hvd05hdjogc3RyaW5nID0gXCJibG9ja1wiO1xuICBASW5wdXQoJ25hdkFycm93T3BhY2l0eScpIG5hdkFycm93T3BhY2l0eSA9IDAuNTtcbiAgQElucHV0KCdzaG93TmF2QXJyb3cnKSBzaG93TmF2QXJyb3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKk1ldGhvZHMqL1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ2N1c3RvbUNvbXBvbmVudCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBwdWJsaWMgd2lkZ2V0VGFyZ2V0czogUXVlcnlMaXN0PFZpZXdDb250YWluZXJSZWY+O1xuICBAVmlld0NoaWxkcmVuKCdjb21tb25DYXJkJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNvbW1vbkNhcmQ6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb21wR2VuRmFjdG9yeVNlcnZpY2U6IENvbXBvbmVudEdlbkZhY3RvcnlTZXJ2aWNlLCBwdWJsaWMgdXRpbGl0eTogVXRpbGl0aWVzU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tbW9uQ2FyZC50b0FycmF5KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzdHlsZXM7XG5cbiAgICAgIGlmIChpID09IDAgJiYgdGhpcy50YlN0eWxlKSB7XG4gICAgICAgIHN0eWxlcyA9IHRoaXMudGJTdHlsZTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IE9iamVjdC5rZXlzKHN0eWxlcyk7XG4gICAgICAgIHRoaXMudmFsdWVzID0gT2JqZWN0LnZhbHVlcyhzdHlsZXMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcGVydHkubGVuZ3RoID09IHRoaXMudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucHJvcGVydHkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29tbW9uQ2FyZC50b0FycmF5KClbaV0ubmF0aXZlRWxlbWVudCwgdGhpcy5wcm9wZXJ0eVtqXSwgdGhpcy52YWx1ZXNbal0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0YVR5cGUgPT0gXCJjdXN0b20tY29tcG9uZW50XCIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBjb21wR2VuU2VydmljZTogQ29tcG9uZW50R2VuU2VydmljZSA9IHRoaXMuY29tcEdlbkZhY3RvcnlTZXJ2aWNlLlxuICAgICAgICAgIGNyZWF0ZUNvbXBvbmVudEdlblNlcnZpY2VPYmplY3QodGhpcy5jb21wb25lbnQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2lkZ2V0VGFyZ2V0cy50b0FycmF5KCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb21wR2VuU2VydmljZS5jcmVhdGVDb21wb25lbnQodGhpcy53aWRnZXRUYXJnZXRzLnRvQXJyYXkoKVtpXSwgdGhpcy5jb21wb25lbnRSZWYsIHRoaXMuZGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gY29tcG9uZW5ldCBpcyBkZWZpbmVkIGluIFRiQ2Fyb3VzZWxMaWJNb2R1bGUuZm9yUm9vdChbXSkgcGxlYXNlIGFkZCB0aGUgY29tcG9uZW50IG5lZWRlZCBhbmQgcGFzcyBvbiB0aGUgaW5kZXggb2YgY29tcG9uZW50IGFzIHByb3BlcnR5IGJpbmQgZS5nLiBjb21wb25lbnQ9JzEnLlwiKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgZGVzdHJveUNvbXBvbmVudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIHRoaXMudGJUcmFuc2l0aW9uSW5pdGlhbCA9IHRoaXMudGJUcmFuc2l0aW9uO1xuXG4gICAgdGhpcy5yb3RhdGVUcmFuc2Zvcm0gPSB0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiID8gXCJ0cmFuc2xhdGVYKDBweClcIiA6IFwidHJhbnNsYXRlWSgwcHgpXCI7XG5cbiAgICB0aGlzLnJvdGF0ZUZuID0gdGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIiA/IFwidHJhbnNsYXRlWFwiIDogXCJ0cmFuc2xhdGVZXCI7XG5cbiAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IHRoaXMuaGVpZ2h0T2ZCb3g7XG4gICAgdGhpcy5jb250YWluZXJXaWR0aCA9IHRoaXMud2lkdGhPZkJveDtcblxuICAgIHRoaXMuYXV0b1JvdGF0ZSA9IHNldEludGVydmFsKCgpID0+IHsgaWYgKGRvY3VtZW50Lmhhc0ZvY3VzKCkpIHsgdGhpcy5tb3ZlTmV4dCgpOyB9IH0sIHRoaXMudGltZUludGVydmFsKTtcblxuICAgIGlmICh0aGlzLnNob3dOYXZBcnJvdykge1xuICAgICAgdGhpcy5zaG93TmF2ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dOYXYgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICB0aGlzLmdlbmVyYXRlUG9zaXRpb25zKCk7XG4gICAgdGhpcy5nZW5lcmF0ZVZlcnRpY2FsUG9zaXRpb25zKCk7XG4gICAgdGhpcy5nZW5lcmF0ZUNzc1N0eWxlcygpO1xuXG4gICAgdGhpcy5hcnJvd1dpZHRoID0gKHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuYXJyb3dIZWlnaHQpLnZhbHVlIC8gMS41KSArXG4gICAgICB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmFycm93SGVpZ2h0KS51bml0O1xuICAgIHRoaXMuYXJyb3dUb3BNYXJnaW4gPSBcIi1cIiArICh0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLmFycm93SGVpZ2h0KS52YWx1ZSAvIDIpICtcbiAgICAgIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuYXJyb3dIZWlnaHQpLnVuaXQ7XG4gICAgdGhpcy5hcnJvd0JvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5hcnJvd0NvbG9yO1xuICAgIHRoaXMuYXJyb3dCb3JkZXIxID0gXCIxcHggc29saWQgXCIgKyB0aGlzLmFycm93Q29sb3I7XG5cbiAgfVxuXG4gIGdlbmVyYXRlUG9zaXRpb25zKCkge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5T2ZQb3NpdGlvbi5wdXNoKFxuICAgICAgICAgICAgICB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnZhbHVlICogaVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYXJyYXlPZlBvc2l0aW9uLnB1c2goMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdlbmVyYXRlVmVydGljYWxQb3NpdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5T2ZWZXJ0aWNhbFBvc2l0aW9uLnB1c2goXG4gICAgICAgICAgICAgIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuaGVpZ2h0T2ZCb3gpLnZhbHVlICogaVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hcnJheU9mVmVydGljYWxQb3NpdGlvbi5wdXNoKDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0TGVmdChtYXJnaW46IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1hcmdpbiArIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudW5pdDtcbiAgfVxuXG4gIGdldFRvcChtYXJnaW46IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1hcmdpbiArIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuaGVpZ2h0T2ZCb3gpLnVuaXQ7XG4gIH1cblxuICBnZW5lcmF0ZUNzc1N0eWxlcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5jc3NTdHlsZXNBcnJheS5wdXNoKG5ldyBDYXJkQ1NTKDEwMCxcbiAgICAgICAgdGhpcy5nZXRMZWZ0KHRoaXMuYXJyYXlPZlBvc2l0aW9uW2ldKSxcbiAgICAgICAgXCJzY2FsZTNkKDEsMSwxKVwiLCBcImJsb2NrXCIsXG4gICAgICAgIHRoaXMuZ2V0VG9wKHRoaXMuYXJyYXlPZlZlcnRpY2FsUG9zaXRpb25baV0pKSk7XG4gICAgfVxuICB9XG5cbiAgcm90YXRlKCkge1xuICAgIGxldCBtdWx0aXBsaWVyID0gdGhpcy5vcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIiA/XG4gICAgICB0aGlzLnV0aWxpdHkuZ2V0TnVtYmVyQW5kVW5pdCh0aGlzLndpZHRoT2ZCb3gpLnZhbHVlIDogdGhpcy51dGlsaXR5LmdldE51bWJlckFuZFVuaXQodGhpcy5oZWlnaHRPZkJveCkudmFsdWU7XG4gICAgbGV0IHVuaXQgPSB0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiID9cbiAgICAgIHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMud2lkdGhPZkJveCkudW5pdCA6IHRoaXMudXRpbGl0eS5nZXROdW1iZXJBbmRVbml0KHRoaXMuaGVpZ2h0T2ZCb3gpLnVuaXQ7XG5cbiAgICB0aGlzLnJvdGF0ZVRyYW5zZm9ybSA9IHRoaXMucm90YXRlRm4gKyBcIihcIiArIHRoaXMuc2VsZWN0ZWRJbmRleCAqIC0xICpcbiAgICAgIG11bHRpcGxpZXIgKyB1bml0ICsgXCIpXCI7XG4gIH1cblxuXG4gIG1vdmVOZXh0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCsrO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPiB0aGlzLmRhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgIHRoaXMudGJUcmFuc2l0aW9uID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGJUcmFuc2l0aW9uID0gdGhpcy50YlRyYW5zaXRpb25Jbml0aWFsO1xuICAgIH1cbiAgICB0aGlzLnJvdGF0ZSgpO1xuICB9XG5cbiAgbW92ZVByZXZpb3VzKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmRhdGEubGVuZ3RoIC0gMTtcbiAgICAgIHRoaXMudGJUcmFuc2l0aW9uID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGJUcmFuc2l0aW9uID0gdGhpcy50YlRyYW5zaXRpb25Jbml0aWFsO1xuICAgIH1cbiAgICB0aGlzLnJvdGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlQXJyb3dDb2xvcigpIHtcbiAgICB0aGlzLmFycm93Q29sb3JUZW1wID0gdGhpcy5hcnJvd0NvbG9yMjtcbiAgICB0aGlzLmFycm93Qm9yZGVyID0gXCIxcHggc29saWQgXCIgKyB0aGlzLmFycm93Q29sb3IyO1xuICB9XG5cbiAgY2hhbmdlQXJyb3dDb2xvck91dCgpIHtcbiAgICB0aGlzLmFycm93Q29sb3JUZW1wID0gdGhpcy5hcnJvd0NvbG9yO1xuICAgIHRoaXMuYXJyb3dCb3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIHRoaXMuYXJyb3dDb2xvcjtcbiAgfVxuXG4gIGNoYW5nZUFycm93Q29sb3IxKCkge1xuICAgIHRoaXMuYXJyb3dDb2xvclRlbXAxID0gdGhpcy5hcnJvd0NvbG9yMjtcbiAgICB0aGlzLmFycm93Qm9yZGVyMSA9IFwiMXB4IHNvbGlkIFwiICsgdGhpcy5hcnJvd0NvbG9yMjtcbiAgfVxuXG4gIGNoYW5nZUFycm93Q29sb3JPdXQxKCkge1xuICAgIHRoaXMuYXJyb3dDb2xvclRlbXAxID0gdGhpcy5hcnJvd0NvbG9yO1xuICAgIHRoaXMuYXJyb3dCb3JkZXIxID0gXCIxcHggc29saWQgXCIgKyB0aGlzLmFycm93Q29sb3I7XG4gIH1cblxuICBwYXVzZU1ldGhvZCgpIHtcbiAgICBpZiAodGhpcy5zdG9wU2Nyb2xsT25Ib3Zlcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9Sb3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc3VtZU1ldGhvZCgpIHtcbiAgICBpZiAodGhpcy5zdG9wU2Nyb2xsT25Ib3Zlcikge1xuICAgICAgdGhpcy5hdXRvUm90YXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBpZiAoZG9jdW1lbnQuaGFzRm9jdXMoKSkgeyB0aGlzLm1vdmVOZXh0KCk7IH0gfSwgdGhpcy50aW1lSW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG59Il19