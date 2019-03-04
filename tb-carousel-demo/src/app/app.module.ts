import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { BasicImageComponent } from './basic-image/basic-image.component';
import { BasicTextComponent } from './basic-text/basic-text.component';
import { BasicCustomComponent } from './basic-custom/basic-custom.component';
import { TbCarouselLibModule } from 'tb-carousel-lib';
import { BasicComponent } from './basic/basic.component';
import { StackedCardComponent } from './stacked-card/stacked-card.component';
import { StackedCardTextComponent } from './stacked-card-text/stacked-card-text.component';
import { StackedCardImageComponent } from './stacked-card-image/stacked-card-image.component';
import { StackedCardCustomComponent } from './stacked-card-custom/stacked-card-custom.component';
import { ThreeDComponent } from './three-d/three-d.component';
import { ThreeDImageComponent } from './three-d-image/three-d-image.component';
import { ThreeDTextComponent } from './three-d-text/three-d-text.component';
import { ThreeDCustomComponent } from './three-d-custom/three-d-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    BasicImageComponent,
    BasicTextComponent,
    BasicCustomComponent,
    BasicComponent,
    StackedCardComponent,
    StackedCardTextComponent,
    StackedCardImageComponent,
    StackedCardCustomComponent,
    ThreeDComponent,
    ThreeDImageComponent,
    ThreeDTextComponent,
    ThreeDCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TbCarouselLibModule.forRoot([{ userDefinedComp: CustomComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomComponent]
})
export class AppModule { }
