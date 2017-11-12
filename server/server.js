'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var riot_conf_1 = require("./config/riot.conf");
if (process.env.NEW_RELIC_ENABLED === 'true')
    require('newrelic');
var PORT = process.env.PORT || 3333;
process.env.NODE_ENV = process.env.NODE_ENV || 'local';
var express = require("express");
var os = require("os");
var http = require("http");
var routes_conf_1 = require("./config/routes.conf");
var db_conf_1 = require("./config/db.conf");
var index_1 = require("./routes/index");
var app = express();
console.log("Environment: " + process.env.NODE_ENV);
app.get('*', function (req, res, next) {
    if (process.env.ONLY_HTTPS && req.headers['x-forwarded-proto'] != 'https') {
        res.redirect((process.env.HOSTURL || 'https://localhost:4200') + req.url);
    }
    else {
        next();
        /* Continue to other routes if we're not redirecting */
    }
});
routes_conf_1.RoutesConfig.init(app);
db_conf_1.DBConfig.init();
index_1.Routes.init(app, express.Router());
riot_conf_1.RiotConfig.init();
var server = http.createServer(app);
server.listen(PORT, function () {
    console.log("up and running: " + os.hostname() + " on PORT: " + PORT);
});
//# sourceMappingURL=server.js.map