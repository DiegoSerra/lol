"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var StaticDispatcher = (function () {
    function StaticDispatcher() {
    }
    StaticDispatcher.sendIndex = function (req, res) {
        var _root = process.cwd();
        var _env = process.env.NODE_ENV;
        res.type('.html');
        if (_env === 'production' || _env === 'staging' || _env === 'test') {
            fs.createReadStream(path.join(_root + "/dist/index.html")).pipe(res);
        }
        else {
            fs.createReadStream(path.join(_root + "/client/index.html")).pipe(res);
        }
    };
    return StaticDispatcher;
}());
exports.StaticDispatcher = StaticDispatcher;
//# sourceMappingURL=index.js.map