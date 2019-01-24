import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { TbCarouselLibComponent } from './carousel-lib.component';
import { TbCarouselStackedCardComponent } from './carousel-stacked-card/carousel-stacked-card.component';
import { CommonModule } from '@angular/common';
import { ComponentGenService, ComponentGenServiceConfig } from './util/component-gen.service';
import { UtilitiesService } from './util/utilities.service';

@NgModule({
  declarations: [
    TbCarouselLibComponent,  
    TbCarouselStackedCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TbCarouselLibComponent,
    TbCarouselStackedCardComponent
  ],
  providers: [
    ComponentGenService,
    UtilitiesService
  ]
})
export class TbCarouselLibModule { 

  constructor (@Optional() @SkipSelf() parentModule: TbCarouselLibModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: ComponentGenServiceConfig[]): ModuleWithProviders {
    return {
      ngModule: TbCarouselLibModule,
      providers: [
        {provide: ComponentGenServiceConfig, useValue: config }
      ]
    };
  }

}
