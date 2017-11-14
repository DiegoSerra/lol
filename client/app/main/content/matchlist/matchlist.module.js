"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var matchlist_component_1 = require("./matchlist.component");
var core_1 = require("@angular/core");
var shared_module_1 = require("../../core/modules/shared.module");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'app/matchlist'
            }
        ]
    }
];
var MatchlistModule = (function () {
    function MatchlistModule() {
    }
    return MatchlistModule;
}());
MatchlistModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild(routes)
        ],
        declarations: [
            matchlist_component_1.MatchlistComponent
        ]
    })
], MatchlistModule);
exports.MatchlistModule = MatchlistModule;
//# sourceMappingURL=matchlist.module.js.map