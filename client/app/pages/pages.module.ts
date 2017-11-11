import { SharedModule } from '../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class PagesModule { }
