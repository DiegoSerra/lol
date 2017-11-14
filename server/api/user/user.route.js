'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("./user.controller");
var auth_service_1 = require("../auth/auth.service");
var UserRoutes = (function () {
    function UserRoutes() {
    }
    UserRoutes.init = function (router) {
        router
            .route('/api/user')
            .post(user_controller_1.UserController.createNew, auth_service_1.AuthService.setTokenCookie);
        router
            .route('/api/user/:userName')
            .get(user_controller_1.UserController.getUser);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user.route.js.map