'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.needAuthenticate = function (req, res, next) {
        var name = req.cookies.name || req.body.name || req.query.name || req.headers['x-access-name'];
        var accountId = req.cookies.accountId || req.body.accountId || req.query.accountId || req.headers['x-access-accountId'];
        var id = req.cookies.id || req.body.id || req.query.id || req.headers['x-access-id'];
        var region = req.cookies.region || req.body.region || req.query.region || req.headers['x-access-region'];
        // Important summoner info to use it on next calls
        if (name && accountId && id && region) {
            req.name = name;
            req.accountId = accountId;
            req.id = id;
            req.region = name;
            next();
        }
        else {
            // if there is no token
            // return an error
            return res.status(200).send({
                success: false,
                noToken: true,
                message: 'No token provided.'
            });
        }
    };
    AuthService.me = function (req, res, next) {
        return res.json(req.user);
    };
    AuthService.setTokenCookie = function (req, res) {
        if (!req.user) {
            return res.status(404).json({ message: 'Something went wrong, please try again.' });
        }
        var user = req.user;
        res.cookie('name', user.name);
        res.cookie('accountId', user.accountId);
        res.cookie('id', user.id);
        res.cookie('region', req.region);
        if (req['redirect']) {
            return res.status(200).redirect(req['redirectUrl'] ? req['redirectUrl'] : '/');
        }
        if (req['redirectUrl']) {
            return res.status(200).json({
                redirectPath: req['redirectUrl'],
                user: user
            });
        }
        return res.status(200).json({ user: user });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map