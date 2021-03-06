import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChildren,
  QueryList,
  AfterViewInit,
  Input,
  ChangeDetectorRef,
  ElementRef,
  Renderer2
} from '@angular/core';
import { CardCSS } from '../models/cardcss.model';
import { ComponentGenService } from '../util/component-gen.service';
import { UtilitiesService } from '../util/utilities.service';
import { ComponentGenFactoryService } from '../util/component-gen-factory.service';

@Component({
  selector: 'tb-carousel-stacked-card',
  templateUrl: './carousel-stacked-card.component.html',
  styleUrls: ['./carousel-stacked-card.component.css']
})
export class TbCarouselStackedCardComponent implements OnInit, AfterViewInit {

  marginLeft: string;
  marginTop: string;

  highestZIndex: number = 100;
  centerPosition: number;
  centerPositionVertical: number;

  cssStylesArray: CardCSS[] = [];
  arrayOfPosFirstHalf: number[] = [];
  arrayOfPosLastHalf: number[] = [];
  arrayOfPosFirstHalfVertical: number[] = [];
  arrayOfPosLastHalfVertical: number[] = [];
  arrayOfZIndexes: number[] = [];
  arrayOfZIndexesReverse: number[] = [];
  arrayOfCardSizeHalf: number[] = [];
  arrayOfCardSizeHalfReverse: number[] = [];

  componentRef: any;

  /** */
  @Input('autoScrollInterval') timeInterval: number = 1000;
  @Input('stopScrollOnHover') stopScrollOnHover: boolean = true;
  autoRotate;

  /*Data and visible no. of cards */
  @Input('displayData') data: any[];
  @Input('visibleCards') visibleBlocks: number = 5;
  @Input('orientation') orientation: string = "horizontal";
  @Input('component') component: number = 0;
  @Input('dataType') dataType: string = 'text';

  /*Card Style properties*/
  @Input('cardHeight') heightOfBox: string = "250px";
  @Input('cardWidth') widthOfBox: string = "300px";
  @Input('tbCardStyle') tbStyle: { [key: string]: string; };
  property: string[] = [];
  values: string[] = [];

  /*Container properties */
  @Input('containerHeight') containerHeight = "0px";
  @Input('containerWidth') containerWidth = "0px";
  @Input('tbTransition') tbTransition = "left 1s, transform 1s, top 1s";

  /*Image properties */
  @Input('tbImageStyle') tbImageStyle;

  /**Navigation arrow properties */
  @Input('arrowHeight') arrowHeight = "45px";
  @Input('arrowColor') arrowColor = "black";
  @Input('arrowColorChange') arrowColor2 = "rgb(100, 99, 100)";
  arrowWidth = "30px";
  arrowTopMargin = "-22px";
  arrowColorTemp = this.arrowColor;
  arrowBorder;
  arrowColorTemp1 = this.arrowColor;
  arrowBorder1;
  showNav: string = "block";
  @Input('navArrowOpacity') navArrowOpacity = 0.5;
  @Input('showNavArrow') showNavArrow: boolean = true;

  /**Methods*/

  @ViewChildren('customComponent', { read: ViewContainerRef }) public widgetTargets: QueryList<ViewContainerRef>;
  @ViewChildren('commonCard', { read: ElementRef }) commonCard: QueryList<ElementRef>;
  constructor(private resolver: ComponentFactoryResolver,
    private compGenFactoryService: ComponentGenFactoryService, public utility: UtilitiesService,
    private changeDetector: ChangeDetectorRef,
    private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {

    for (let i = 0; i < this.commonCard.toArray().length; i++) {
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
        let compGenService: ComponentGenService = this.compGenFactoryService.
          createComponentGenServiceObject(this.component);
        for (let i = 0; i < this.widgetTargets.toArray().length; i++) {
          compGenService.createComponent(this.widgetTargets.toArray()[i], this.componentRef, this.data[i]);
        }
        this.changeDetector.detectChanges();
      } catch (error) {
        console.error("No componenet is defined in TbCarouselLibModule.forRoot([]) please add the component needed and pass on the index of component as property bind e.g. component='1'.");
      }

    }

  }

  destroyComponent() {
    this.componentRef.destroy();
  }

  ngOnInit(): void {

    this.autoRotate = setInterval(() => { if (document.hasFocus()) { this.moveNext(); } }, this.timeInterval);

    if (this.showNavArrow) {
      this.showNav = "block";
    } else {
      this.showNav = "none";
    }

    this.visibleBlocks = this.data.length < this.visibleBlocks ? this.data.length : this.visibleBlocks;

    if (this.orientation == "horizontal") {
      this.centerPosition = 50;
      this.marginLeft = "-" + Math.floor(this.utility.getNumberAndUnit(this.widthOfBox).value / 2) +
        this.utility.getNumberAndUnit(this.widthOfBox).unit;
    } else {
      this.centerPosition = 0;
      this.marginLeft = (this.utility.getNumberAndUnit(this.widthOfBox).value * 0.1) +
        this.utility.getNumberAndUnit(this.widthOfBox).unit;
    }

    if (this.orientation == "vertical") {
      this.centerPositionVertical = 50;
      this.marginTop = "-" + Math.floor(this.utility.getNumberAndUnit(this.heightOfBox).value / 2) +
        this.utility.getNumberAndUnit(this.heightOfBox).unit;
    } else {
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

  generatePositions() {
    for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
      if (this.orientation == "horizontal") {
        this.arrayOfPosFirstHalf.push((this.centerPosition + (i * 10)));
        this.arrayOfPosLastHalf.push((this.centerPosition - (i * 10)));
      } else {
        this.arrayOfPosFirstHalf.push(0);
        this.arrayOfPosLastHalf.push(0);
      }
    }
    this.arrayOfPosLastHalf.reverse();
  }

  generatePositionsVertical() {
    for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
      if (this.orientation == "vertical") {
        this.arrayOfPosFirstHalfVertical.push((this.centerPositionVertical + (i * 15)));
        this.arrayOfPosLastHalfVertical.push((this.centerPositionVertical - (i * 15)));
      } else {
        this.arrayOfPosFirstHalfVertical.push(0);
        this.arrayOfPosLastHalfVertical.push(0);
      }
    }
    this.arrayOfPosLastHalfVertical.reverse();
  }

  generateSize() {
    for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
      this.arrayOfCardSizeHalf.push((1 - (0.1 * i)));
    }
  }

  generateSizeReverse() {
    for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
      this.arrayOfCardSizeHalfReverse.push((1 - (0.1 * i)));
    }
    this.arrayOfCardSizeHalfReverse.reverse();
  }

  generateZIndex() {
    for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
      this.arrayOfZIndexes.push((this.highestZIndex - (i)));
    }
  }

  generateZIndexReverse() {
    for (let i = 1; i <= Math.floor(this.visibleBlocks / 2); i++) {
      this.arrayOfZIndexesReverse.push((this.highestZIndex - (i)));
    }
    this.arrayOfZIndexesReverse.reverse();
  }

  getScale(x: number, y: number, z: number): string {
    return "scale3d(" + x + ", " + y + ", " + z + ")";
  }

  getZIndex(index: number): number {
    return index;
  }

  getLeft(margin: number): string {
    return margin + "%";
  }

  getTop(margin: number): string {
    return margin + "%";
  }

  getDisplay(display: string): string {
    return display;
  }

  generateCssStyles() {
    let start: number = Math.floor(this.visibleBlocks / 2);
    let end: number = this.data.length - Math.floor(this.visibleBlocks / 2);

    for (let i = 0; i < this.data.length; i++) {
      if (i == 0) {
        this.cssStylesArray.push(new CardCSS(this.getZIndex(this.highestZIndex),
          this.getLeft(this.centerPosition), this.getScale(1, 1, 1), this.getDisplay("block"),
          this.getTop(this.centerPositionVertical)));
      }
      else if (i != 0 && i <= start) {
        this.cssStylesArray.push(new CardCSS(this.getZIndex(this.arrayOfZIndexes[i - 1]),
          this.getLeft(this.arrayOfPosFirstHalf[i - 1]),
          this.getScale(this.arrayOfCardSizeHalf[i - 1], this.arrayOfCardSizeHalf[i - 1], this.arrayOfCardSizeHalf[i - 1]),
          this.getDisplay("block"), this.getTop(this.arrayOfPosFirstHalfVertical[i - 1])));
      }
      else if (i != 0 && i >= end) {
        this.cssStylesArray.push(new CardCSS(this.getZIndex(this.arrayOfZIndexesReverse[i - end]),
          this.getLeft(this.arrayOfPosLastHalf[i - end]),
          this.getScale(this.arrayOfCardSizeHalfReverse[i - end], this.arrayOfCardSizeHalfReverse[i - end],
            this.arrayOfCardSizeHalfReverse[i - end]),
          this.getDisplay("block"), this.getTop(this.arrayOfPosLastHalfVertical[i - end])));
      }
      else if (i != 0 && i > start && i < end) {
        this.cssStylesArray.push(new CardCSS(this.getZIndex(0),
          this.getLeft(this.centerPosition), this.getScale(0, 0, 0), this.getDisplay("none"),
          this.getTop(this.centerPositionVertical)));
      }
    }
  }

  moveNext() {
    this.utility.shiftRight(this.cssStylesArray);
  }

  movePrevious() {
    this.utility.shiftLeft(this.cssStylesArray);
  }

  changeArrowColor() {
    this.arrowColorTemp = this.arrowColor2;
    this.arrowBorder = "1px solid " + this.arrowColor2;
  }

  changeArrowColorOut() {
    this.arrowColorTemp = this.arrowColor;
    this.arrowBorder = "1px solid " + this.arrowColor;
  }

  changeArrowColor1() {
    this.arrowColorTemp1 = this.arrowColor2;
    this.arrowBorder1 = "1px solid " + this.arrowColor2;
  }

  changeArrowColorOut1() {
    this.arrowColorTemp1 = this.arrowColor;
    this.arrowBorder1 = "1px solid " + this.arrowColor;
  }

  pauseMethod() {
    if (this.stopScrollOnHover) {
      clearInterval(this.autoRotate);
    }
  }

  resumeMethod() {
    if (this.stopScrollOnHover) {
      this.autoRotate = setInterval(() => { if (document.hasFocus()) { this.moveNext(); } }, this.timeInterval);
    }
  }

}