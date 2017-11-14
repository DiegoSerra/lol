'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var passport_local_1 = require("passport-local");
var user_dao_1 = require("../../user/user.dao");
var LocalAuthController = (function () {
    function LocalAuthController() {
    }
    LocalAuthController.setup = function () {
        passport.use(new passport_local_1.Strategy({
            usernameField: 'name',
            passwordField: 'password' // this is the virtual field on the model
        }, function (name, password, done) {
            user_dao_1.default.findOne({
                name: name
            }, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, { message: 'This name is not registered.', name: true });
                }
                if (!user.authenticate(password)) {
                    return done(null, false, { message: 'This password is not correct.', password: true });
                }
                return done(null, user);
            });
        }));
    };
    LocalAuthController.callback = function (req, res, next) {
        req['redirect'] = false;
        req.user = req.user._doc;
        next();
    };
    return LocalAuthController;
}());
exports.LocalAuthController = LocalAuthController;
//# sourceMappingURL=local-auth.controller.js.map