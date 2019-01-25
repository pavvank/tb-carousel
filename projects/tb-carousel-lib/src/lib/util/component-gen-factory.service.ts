import {
  ComponentFactoryResolver,
  Optional
} from '@angular/core';
import { ComponentGenService, ComponentGenServiceConfig } from './component-gen.service';

export class ComponentGenFactoryService {

  constructor(private resolver: ComponentFactoryResolver, @Optional() private config: ComponentGenServiceConfig) { }

  public createComponentGenServiceObject(componentId: number) {
    return new ComponentGenService(componentId, this.resolver, this.config);
  }

}
