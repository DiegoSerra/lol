"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var landing_page_component_1 = require("./landing-page.component");
var shared_module_1 = require("../core/modules/shared.module");
var pages_module_1 = require("../pages/pages.module");
var routes = [
    {
        path: '',
        component: landing_page_component_1.LandingPageComponent
    }
];
var LandingPageModule = (function () {
    function LandingPageModule() {
    }
    return LandingPageModule;
}());
LandingPageModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(routes),
            pages_module_1.PagesModule
        ],
        declarations: [
            landing_page_component_1.LandingPageComponent
        ],
    })
], LandingPageModule);
exports.LandingPageModule = LandingPageModule;
//# sourceMappingURL=landing-page.module.js.map