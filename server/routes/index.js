"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_route_1 = require("../api/user/user.route");
var index_1 = require("../commons/static/index");
var error_handler_config_1 = require("../config/error-handler.config");
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        user_route_1.UserRoutes.init(router);
        error_handler_config_1.ErrorHandler.notFound(router);
        router
            .route('*')
            .get(index_1.StaticDispatcher.sendIndex);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map