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
var password_validation_1 = require("../services/password-validation");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_service_1 = require("../../core/services/user.service");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
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
        this.registerFormErrors = {
            summonerName: {},
            password: {},
            passwordConfirm: {}
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            summonerName: ['', forms_1.Validators.required],
            region: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            passwordConfirm: ['', forms_1.Validators.required],
        }, {
            validator: password_validation_1.PasswordValidation.PasswordRequirements
        });
        this.registerForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    RegisterComponent.prototype.onRegisterFormValuesChanged = function () {
        for (var field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.registerFormErrors[field] = {};
            // Get the control
            var control = this.registerForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.create(this.registerForm.value).subscribe(function () {
            _this.userService.me();
            _this.router.navigate(['/', 'app']);
        }, function (error) {
            // console.log(error);
        });
    };
    RegisterComponent.prototype.displayRequeriments = function (str) {
        return password_validation_1.PasswordValidation.displayRequeriments(str);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['../authentication.component.scss', './register.component.scss']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        user_service_1.UserService,
        router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map