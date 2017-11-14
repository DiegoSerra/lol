"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_module_1 = require("./core/modules/shared.module");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var splash_screen_service_1 = require("./core/services/splash-screen.service");
var authentication_guard_1 = require("./authentication/authentication.guard");
var content_guard_1 = require("./main/content/content.guard");
var app_component_1 = require("./app.component");
var user_service_1 = require("./core/services/user.service");
require("hammerjs");
var ngx_cookie_1 = require("ngx-cookie");
var appRoutes = [
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
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_2.HttpModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(appRoutes),
                shared_module_1.SharedModule,
                ngx_cookie_1.CookieModule.forRoot(),
            ],
            providers: [
                user_service_1.UserService,
                splash_screen_service_1.SplashScreenService,
                authentication_guard_1.AuthenticationGuard,
                content_guard_1.ContentGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map