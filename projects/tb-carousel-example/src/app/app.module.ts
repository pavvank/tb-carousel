import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TbCarouselLibModule, TbCarouselLibComponent } from 'projects/tb-carousel-lib/src/public_api';
import { TestComponent } from './text.component';
import { CustomComponent } from './image-card/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    TbCarouselLibModule.forRoot([{userDefinedComp : TestComponent},
      {userDefinedComp : TbCarouselLibComponent}, {userDefinedComp : CustomComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TbCarouselLibComponent, TestComponent, CustomComponent]
})
export class AppModule { }
