"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var dbConst = require("../constants/" + process.env.NODE_ENV + "/db.json");
var DBConfig = /** @class */ (function () {
    function DBConfig() {
    }
    DBConfig.init = function () {
        var URL = dbConst.host;
        mongoose.Promise = Promise;
        mongoose.connect(URL, {
            useMongoClient: true,
            server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
            replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
        }).then(function () {
            console.log("Successfully connected to " + URL);
        });
        mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
    };
    return DBConfig;
}());
exports.DBConfig = DBConfig;
//# sourceMappingURL=db.conf.js.map