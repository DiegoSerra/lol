'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = require("./auth.service");
var local_auth_route_1 = require("./local/local-auth.route");
var AuthRoutes = (function () {
    function AuthRoutes() {
    }
    AuthRoutes.init = function (router) {
        local_auth_route_1.LocalRoute.init(router);
        router
            .route('/api/user/me')
            .get(auth_service_1.AuthService.needAuthenticate, auth_service_1.AuthService.me);
    };
    return AuthRoutes;
}());
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=auth.route.js.map