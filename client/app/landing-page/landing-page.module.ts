import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from '../core/modules/shared.module';
import { PagesModule } from '../pages/pages.module';

const routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    PagesModule
  ],
  declarations: [
    LandingPageComponent
  ],
})
export class LandingPageModule { }
