import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TbCarouselLibComponent } from './../carousel-lib.component';
export declare class ComponentGenServiceConfig {
    userDefinedComp: any;
}
export declare class ComponentGenService {
    private resolver;
    _userDefinedComp: typeof TbCarouselLibComponent;
    constructor(componentId: number, resolver: ComponentFactoryResolver, config: ComponentGenServiceConfig);
    createComponent(e: ViewContainerRef, componentRef: any, modelObject: any): void;
}
