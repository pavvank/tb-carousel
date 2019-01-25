import {
  ViewContainerRef,
  ComponentFactoryResolver,
  Optional
} from '@angular/core';
import { TbCarouselLibComponent } from './../carousel-lib.component';

export class ComponentGenServiceConfig {
  userDefinedComp: any;
}


export class ComponentGenService {

  _userDefinedComp = TbCarouselLibComponent;

  constructor(componentId : number, private resolver: ComponentFactoryResolver, 
    @Optional() config: ComponentGenServiceConfig) {
    if (config) { this._userDefinedComp = config[componentId].userDefinedComp; }
  }

  createComponent(e: ViewContainerRef, componentRef: any, modelObject : any) {
    //this.entry.clear();
    let factory = this.resolver.resolveComponentFactory(this._userDefinedComp);
    componentRef = e.createComponent(factory);
    componentRef.instance._tbModelObject = modelObject;
  }

}

