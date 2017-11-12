'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var user_model_1 = require("./user.model");
var _ = require("lodash");
var User;
user_model_1.default.static('createNew', function (user) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(user)) {
            return reject(new TypeError('Is not a valid object.'));
        }
        var _something = new User(user);
        _something._id = mongoose.Types.ObjectId(user.id);
        _something.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
user_model_1.default.static('getOneByQuery', function (query) {
    return new Promise(function (resolve, reject) {
        User
            .findOne(query)
            .lean()
            .exec(function (err, user) {
            err ? reject(err) : resolve(user);
        });
    });
});
user_model_1.default.static('updateOne', function (user) {
    return new Promise(function (resolve, reject) {
        User
            .findOneAndUpdate({ id: user.id }, { $set: user }, { upsert: true }).exec(function (err, updated) {
            err ? reject(err) : resolve(updated);
        });
    });
});
User = mongoose.model('user', user_model_1.default);
exports.default = User;
//# sourceMappingURL=user.dao.js.map