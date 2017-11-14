'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.notFound = function (router) {
        router.all('/api/*', function (req, res, next) {
            res.status(404).send('Not Found');
        });
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error-handler.config.js.map