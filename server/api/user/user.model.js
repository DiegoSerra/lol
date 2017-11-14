'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var user_validations_1 = require("./user.validations");
var crypto = require("crypto");
var UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    profileIconId: Number,
    name: {
        type: String,
        index: true
    },
    role: {
        type: String,
        default: 'user'
    },
    hashedPassword: {
        type: String,
        validate: [
            { validator: user_validations_1.validateEmptyPassword, msg: 'Password cannot be blank' }
        ]
    },
    summonerLevel: Number,
    accountId: Number,
    revisionDate: Number,
}, {
    versionKey: false
});
UserSchema
    .virtual('password')
    .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
})
    .get(function () {
    return this._password;
});
var validatePresenceOf = function (value) {
    return value && value.length;
};
UserSchema.method('authenticate', function (plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword;
});
UserSchema.method('makeSalt', function () {
    return crypto.randomBytes(16).toString('base64');
});
UserSchema.method('encryptPassword', function (password) {
    if (!password || !this.salt) {
        return '';
    }
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('base64');
});
UserSchema
    .pre('save', function (next) {
    if (!this.isNew) {
        return next();
    }
    if (this.hashedPassword && !validatePresenceOf(this.hashedPassword)) {
        next(new Error('Invalid password'));
    }
    else {
        next();
    }
});
exports.default = (UserSchema);
//# sourceMappingURL=user.model.js.map