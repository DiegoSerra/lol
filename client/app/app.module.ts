import { SharedModule } from './core/modules/shared.module';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SplashScreenService} from './core/services/splash-screen.service';
import {AuthenticationGuard} from './authentication/authentication.guard';
import {ContentGuard} from './main/content/content.guard';

import { AppComponent } from './app.component';
import { UserService } from './core/services/user.service';
import 'hammerjs';
import { CookieModule } from 'ngx-cookie';

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: '',
    loadChildren: './landing-page/landing-page.module#LandingPageModule'
  },
  {
    path: 'app',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '**',
    redirectTo: 'app/matchlist'
  }
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
    CookieModule.forRoot(),
  ],
  providers: [
    UserService,
    SplashScreenService,
    AuthenticationGuard,
    ContentGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
