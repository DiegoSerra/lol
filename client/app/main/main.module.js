"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var main_component_1 = require("./main.component");
var matchlist_component_1 = require("./matchlist/matchlist.component");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        component: main_component_1.MainComponent,
        children: [
            {
                path: 'matchlist',
                component: matchlist_component_1.MatchlistComponent
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'app/matchlist'
            }
        ]
    }
];
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        declarations: [main_component_1.MainComponent, matchlist_component_1.MatchlistComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map