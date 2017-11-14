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
var http_1 = require("@angular/http");
var ngx_cookie_1 = require("ngx-cookie");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var _ = require("lodash");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this._userSubject = new BehaviorSubject_1.BehaviorSubject({});
        this.me();
    }
    UserService.prototype.me = function () {
        var _this = this;
        var token = this.cookieService.get('name');
        if (token) {
            this.http.get("api/user/" + token)
                .map(function (res) {
                _this.userDecoded = res.json();
            });
        }
        else {
            this.userDecoded = {};
        }
        this._userSubject.next(this.userDecoded);
    };
    UserService.prototype.create = function (user) {
        return this.http.post('api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.getUser = function (userName) {
        return this.http.get("api/user/" + userName)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.login = function (user) {
        return this.http.post("api/authenticate", user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.isSuperAdmin = function () {
        return _.toLower(this.userDecoded.role) === 'superadmin';
    };
    UserService.prototype.isLoggedIn = function () {
        var token = this.cookieService.get('name');
        if (token) {
            return token !== undefined;
        }
        return false;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, ngx_cookie_1.CookieService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map