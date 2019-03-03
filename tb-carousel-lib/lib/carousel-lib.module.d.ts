import { ModuleWithProviders } from '@angular/core';
import { ComponentGenServiceConfig } from './util/component-gen.service';
export declare class TbCarouselLibModule {
    constructor(parentModule: TbCarouselLibModule);
    static forRoot(config: ComponentGenServiceConfig[]): ModuleWithProviders;
}
