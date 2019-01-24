import {
  Injectable,
  ViewContainerRef,
  ComponentFactoryResolver,
  Optional
} from '@angular/core';
import { TbCarouselLibComponent } from './../carousel-lib.component';

export class ComponentGenServiceConfig {
  userDefinedComp: any;
}


@Injectable({
  providedIn: 'root'
})
export class ComponentGenService {

  _userDefinedComp = TbCarouselLibComponent;

  constructor(private resolver: ComponentFactoryResolver, @Optional() config: ComponentGenServiceConfig,
    componentId: number) {
    if (config) { this._userDefinedComp = config[componentId].userDefinedComp; }
  }

  createComponent(e: ViewContainerRef, componentRef: any) {
    //this.entry.clear();
    let factory = this.resolver.resolveComponentFactory(this._userDefinedComp);
    componentRef = e.createComponent(factory);
    //componentRef.instance.message = message;
  }

}
