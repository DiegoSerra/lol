'use strict';

import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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

export default (UserSchema);