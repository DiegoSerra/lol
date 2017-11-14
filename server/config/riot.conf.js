"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var riotConst = require("../constants/" + process.env.NODE_ENV + "/riot.json");
var _a = require('kayn'), Kayn = _a.Kayn, REGIONS = _a.REGIONS, METHOD_NAMES = _a.METHOD_NAMES, BasicJSCache = _a.BasicJSCache, RedisCache = _a.RedisCache;
var RiotConfig = /** @class */ (function () {
    function RiotConfig() {
    }
    RiotConfig.init = function () {
        this.api = Kayn(riotConst.key)();
    };
    return RiotConfig;
}());
exports.RiotConfig = RiotConfig;
//# sourceMappingURL=riot.conf.js.map