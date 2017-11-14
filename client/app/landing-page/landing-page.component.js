"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../core/services/user.service");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(userService, formBuilder, snackBar) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.regions = [
            { name: 'BRASIL', value: 'br' },
            { name: 'EUROPA', value: 'eune' },
            { name: 'EUROPE OESTE', value: 'euw' },
            { name: 'KOREA', value: 'kr' },
            { name: 'NORTEAMERICA LATINA', value: 'lan' },
            { name: 'SUDAMERICA', value: 'las' },
            { name: 'NORTEAMERICA', value: 'na' },
            { name: 'OCEANIA', value: 'oce' },
            { name: 'RUSIA', value: 'ru' },
            { name: 'TURQUIA', value: 'tr' },
            { name: 'JAPON', value: 'jp' },
        ];
        this.mainFormErrors = {
            summonerName: {},
            region: {}
        };
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainForm = this.formBuilder.group({
            summonerName: ['', forms_1.Validators.required],
            region: ['', forms_1.Validators.required]
        });
        this.mainForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
    };
    LandingPageComponent.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.mainFormErrors) {
            if (!this.mainFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.mainFormErrors[field] = {};
            // Get the control
            var control = this.mainForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.mainFormErrors[field] = control.errors;
            }
        }
    };
    LandingPageComponent.prototype.createUser = function () {
        var _this = this;
        this.userService.create(this.mainForm.value)
            .subscribe(function (result) {
            window.location.href = result.redirectPath || '/app';
        }, function (err) {
            _this.snackBar.open('Nombre de invocador no encontrado', '', { duration: 5000 });
        });
    };
    LandingPageComponent.prototype.findUser = function (userName) {
        this.userService.getUser(userName)
            .subscribe(function (user) {
            console.log(user);
        });
    };
    LandingPageComponent = __decorate([
        core_1.Component({
            selector: 'app-landing-page',
            templateUrl: './landing-page.component.html',
            styleUrls: ['./landing-page.component.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, forms_1.FormBuilder, material_1.MatSnackBar])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
exports.LandingPageComponent = LandingPageComponent;
//# sourceMappingURL=landing-page.component.js.map