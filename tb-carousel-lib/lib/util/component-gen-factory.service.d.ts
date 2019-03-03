import { ComponentFactoryResolver } from '@angular/core';
import { ComponentGenService, ComponentGenServiceConfig } from './component-gen.service';
export declare class ComponentGenFactoryService {
    private resolver;
    private config;
    constructor(resolver: ComponentFactoryResolver, config: ComponentGenServiceConfig);
    createComponentGenServiceObject(componentId: number): ComponentGenService;
}
