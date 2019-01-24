import {
  Injectable,
  ComponentFactoryResolver,
  Optional
} from '@angular/core';
import { ComponentGenService, ComponentGenServiceConfig } from './component-gen.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentGenFactoryService {

  constructor(private resolver: ComponentFactoryResolver, @Optional() public config: ComponentGenServiceConfig) { }

  public createComponentGenServiceObject(componentId: number) {
    return new ComponentGenService(this.resolver, this.config, componentId);
  }

}
