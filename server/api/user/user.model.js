'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
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
    summonerLevel: Number,
    accountId: Number,
    revisionDate: Number,
}, {
    versionKey: false
});
exports.default = (UserSchema);
//# sourceMappingURL=user.model.js.map