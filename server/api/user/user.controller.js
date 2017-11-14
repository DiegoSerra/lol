'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var user_dao_1 = require("./user.dao");
var riot_conf_1 = require("../../config/riot.conf");
var UserController = (function () {
    function UserController() {
    }
    UserController.getUser = function (req, res) {
        user_dao_1.default.getOneByQuery({ name: req.params.userName })
            .then(function (users) { return res.status(200).json(users); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    UserController.createNew = function (req, res, next) {
        riot_conf_1.RiotConfig.api.Summoner.by.name(req.body.summonerName).region(req.body.region)
            .then(function (user) {
            req.user = user;
            req.region = req.body.region;
            user.password = req.body.password;
            user.role = req.body.role;
            user.region = req.body.region;
            user_dao_1.default.updateOne(user)
                .then(function (user) {
                // res.status(200).json(user)
                next();
            })
                .catch(function (error) { return res.status(400).json(error); });
        })
            .catch(function (error) { return res.status(404).json(error); });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map