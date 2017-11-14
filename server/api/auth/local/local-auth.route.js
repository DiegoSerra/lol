'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var local_auth_controller_1 = require("./local-auth.controller");
var auth_service_1 = require("../auth.service");
var LocalRoute = (function () {
    function LocalRoute() {
    }
    LocalRoute.init = function (router) {
        router
            .post('/api/authenticate', function (req, res, next) {
            passport.authenticate('local', function (err, user, info) {
                var error = err || info;
                if (error) {
                    return res.status(401).json(error);
                }
                if (!user) {
                    return res.status(404).json({ message: 'Something went wrong, please try again.' });
                }
                req.query.redirect = req.query.next || req.headers.referer + "/app";
                req.user = user;
                next();
            })(req, res, next);
        }, local_auth_controller_1.LocalAuthController.callback, auth_service_1.AuthService.setTokenCookie);
        return router;
    };
    return LocalRoute;
}());
exports.LocalRoute = LocalRoute;
//# sourceMappingURL=local-auth.route.js.map