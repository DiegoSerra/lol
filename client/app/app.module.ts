import { SharedModule } from './core/modules/shared.module';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './landing-page/landing-page.module#LandingPageModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
