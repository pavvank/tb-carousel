import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TbCarouselLibModule, TbCarouselLibComponent } from 'projects/tb-carousel-lib/src/public_api';
import { TestComponent } from './text.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    TbCarouselLibModule.forRoot([{userDefinedComp : TestComponent},{userDefinedComp : TbCarouselLibComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TbCarouselLibComponent, TestComponent]
})
export class AppModule { }
