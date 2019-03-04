import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChildren,
  QueryList,
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
  selector: 'tb-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent implements OnInit {

  cssStylesArray: CardCSS[] = [];
  arrayOfPosition: number[] = [];
  arrayOfVerticalPosition: number[] = [];
  autoRotate;
  rotateTransform;
  rotateFn;
  selectedIndex = 0;

  componentRef: any;

  /** */
  @Input('autoScrollInterval') timeInterval: number = 1000;
  @Input('stopScrollOnHover') stopScrollOnHover: boolean = true;

  /*Data and visible no. of cards */
  @Input('displayData') data: any[];
  @Input('orientation') orientation: string = "horizontal";
  @Input('component') component: number = 0;
  @Input('dataType') dataType: string = 'text';

  /*Card Style properties*/
  @Input('cardHeight') heightOfBox: string = "250px";
  @Input('cardWidth') widthOfBox: string = "300px";
  @Input('tbCardStyle') tbStyle: { [key: string]: string; };
  property: string[] = [];
  values: string[] = [];

  /*Image properties */
  @Input('tbImageStyle') tbImageStyle;

  /*Container properties */
  @Input('containerHeight') containerHeight;
  @Input('containerWidth') containerWidth;
  @Input('tbTransition') tbTransition = "transform 1s";
  tbTransitionInitial;

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
    private changeDetector: ChangeDetectorRef, private renderer: Renderer2) {
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

    this.tbTransitionInitial = this.tbTransition;

    this.rotateTransform = this.orientation == "horizontal" ? "translateX(0px)" : "translateY(0px)";

    this.rotateFn = this.orientation == "horizontal" ? "translateX" : "translateY";

    this.containerHeight = this.heightOfBox;
    this.containerWidth = this.widthOfBox;

    this.autoRotate = setInterval(() => { if (document.hasFocus()) { this.moveNext(); } }, this.timeInterval);

    if (this.showNavArrow) {
      this.showNav = "block";
    } else {
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

  generatePositions() {
    if (this.orientation == "horizontal") {
      if (this.data) {
        if (this.data.length > 0) {
          for (let i = 0; i < this.data.length; i++) {
            this.arrayOfPosition.push(
              this.utility.getNumberAndUnit(this.widthOfBox).value * i
            )
          }
        }
      }
    } else if (this.orientation == "vertical") {
      if (this.data) {
        if (this.data.length > 0) {
          for (let i = 0; i < this.data.length; i++) {
            this.arrayOfPosition.push(0)
          }
        }
      }
    }

  }

  generateVerticalPositions() {
    if (this.orientation == "vertical") {
      if (this.data) {
        if (this.data.length > 0) {
          for (let i = 0; i < this.data.length; i++) {
            this.arrayOfVerticalPosition.push(
              this.utility.getNumberAndUnit(this.heightOfBox).value * i
            )
          }
        }
      }
    } else if (this.orientation == "horizontal") {
      if (this.data) {
        if (this.data.length > 0) {
          for (let i = 0; i < this.data.length; i++) {
            this.arrayOfVerticalPosition.push(0)
          }
        }
      }
    }
  }

  getLeft(margin: number): string {
    return margin + this.utility.getNumberAndUnit(this.widthOfBox).unit;
  }

  getTop(margin: number): string {
    return margin + this.utility.getNumberAndUnit(this.heightOfBox).unit;
  }

  generateCssStyles() {
    for (let i = 0; i < this.data.length; i++) {
      this.cssStylesArray.push(new CardCSS(100,
        this.getLeft(this.arrayOfPosition[i]),
        "scale3d(1,1,1)", "block",
        this.getTop(this.arrayOfVerticalPosition[i])));
    }
  }

  rotate() {
    let multiplier = this.orientation == "horizontal" ?
      this.utility.getNumberAndUnit(this.widthOfBox).value : this.utility.getNumberAndUnit(this.heightOfBox).value;
    let unit = this.orientation == "horizontal" ?
      this.utility.getNumberAndUnit(this.widthOfBox).unit : this.utility.getNumberAndUnit(this.heightOfBox).unit;

    this.rotateTransform = this.rotateFn + "(" + this.selectedIndex * -1 *
      multiplier + unit + ")";
  }


  moveNext() {
    this.selectedIndex++;
    if (this.selectedIndex > this.data.length - 1) {
      this.selectedIndex = 0;
      this.tbTransition = "none";
    } else {
      this.tbTransition = this.tbTransitionInitial;
    }
    this.rotate();
  }

  movePrevious() {
    this.selectedIndex--;
    if (this.selectedIndex < 0) {
      this.selectedIndex = this.data.length - 1;
      this.tbTransition = "none";
    } else {
      this.tbTransition = this.tbTransitionInitial;
    }
    this.rotate();
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