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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_service_1 = require("../../core/services/user.service");
var material_1 = require("@angular/material");
var LoginComponent = (function () {
    function LoginComponent(formBuilder, userService, snackBar) {
        this.formBuilder = formBuilder;
        this.userService = userService;
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
        this.loginFormErrors = {
            summonerName: {},
            region: {},
            password: {}
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            summonerName: ['', forms_1.Validators.required],
            region: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.loginForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
    };
    LoginComponent.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.loginForm.value)
            .subscribe(function (result) {
            _this.userService.me();
            window.location.href = result.redirectPath || '/app';
        }, function (error) {
            _this.snackBar.open('Usuario o contraseña incorrecto', '', { duration: 5000 });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['../authentication.component.scss', './login.component.scss']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        user_service_1.UserService,
        material_1.MatSnackBar])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map