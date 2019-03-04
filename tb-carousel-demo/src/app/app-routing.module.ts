import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicImageComponent } from './basic-image/basic-image.component';
import { BasicTextComponent } from './basic-text/basic-text.component';
import { BasicCustomComponent } from './basic-custom/basic-custom.component';
import { BasicComponent } from './basic/basic.component';
import { StackedCardComponent } from './stacked-card/stacked-card.component';
import { StackedCardImageComponent } from './stacked-card-image/stacked-card-image.component';
import { StackedCardTextComponent } from './stacked-card-text/stacked-card-text.component';
import { StackedCardCustomComponent } from './stacked-card-custom/stacked-card-custom.component';
import { ThreeDComponent } from './three-d/three-d.component';
import { ThreeDImageComponent } from './three-d-image/three-d-image.component';
import { ThreeDTextComponent } from './three-d-text/three-d-text.component';
import { ThreeDCustomComponent } from './three-d-custom/three-d-custom.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {
    path: "basic", component: BasicComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: "image" },
      { path: "image", component: BasicImageComponent },
      { path: 'text', component: BasicTextComponent },
      { path: 'custom-component', component: BasicCustomComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'basic' },
  {
    path: "stacked-card", component: StackedCardComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: "image" },
      { path: "image", component: StackedCardImageComponent },
      { path: 'text', component: StackedCardTextComponent },
      { path: 'custom-component', component: StackedCardCustomComponent }
    ]
  },
  {
    path: "3d", component: ThreeDComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: "image" },
      { path: "image", component: ThreeDImageComponent },
      { path: 'text', component: ThreeDTextComponent },
      { path: 'custom-component', component: ThreeDCustomComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
