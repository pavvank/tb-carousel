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
import { ComponentGenService } from '../util/component-gen.service';
import { UtilitiesService } from '../util/utilities.service';
import { ComponentGenFactoryService } from '../util/component-gen-factory.service';

@Component({
  selector: 'tb-carousel-three-d',
  templateUrl: './carousel-three-d.component.html',
  styleUrls: ['./carousel-three-d.component.css']
})
export class CarouselThreeDComponent implements OnInit {

  selectedIndex = 0;

  cssTransformStyleArr: any[] = [];
  autoRotate;
  radius;
  sceneHeight = "300px";
  sceneWidth = "300px";
  tbCarouselTransform;
  cardHeight;
  cardWidth;
  cardTop;
  cardLeft;
  rotateFn;
  inclinedAngle;
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

    this.autoRotate = setInterval(() => { if (document.hasFocus()) { this.moveNext(); } }, this.timeInterval);

    if (this.showNavArrow) {
      this.showNav = "block";
    } else {
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

  getTransformValue(angle: number, zTranslate: number): string {
    return this.orientation == "horizontal" ?
      "rotateY(" + angle + "deg) translateZ(" + zTranslate + "px)" :
      "rotateX(" + angle + "deg) translateZ(" + zTranslate + "px)";
  }

  generateTransformStyleArr() {
    for (let i = 0; i < this.data.length; i++) {
      this.cssTransformStyleArr.push(this.getTransformValue(i * this.inclinedAngle, this.radius));
    }
  }

  rotateCarousel() {
    let rotationAngle = this.inclinedAngle * -1 * this.selectedIndex;
    this.tbCarouselTransform =
      "translateZ(-" + this.radius + this.utility.getNumberAndUnit(this.widthOfBox).unit + ")" +
      this.rotateFn + "(" + rotationAngle + "deg)";
  }

  moveNext() {
    this.selectedIndex++;
    this.rotateCarousel();
  }

  movePrevious() {
    this.selectedIndex--;
    this.rotateCarousel();
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