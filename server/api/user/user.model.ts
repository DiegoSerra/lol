'use strict';

import * as mongoose from 'mongoose';
import {validateEmptyPassword} from './user.validations';
import * as crypto from 'crypto';


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
  role: {
    type: String,
    default: 'user'
  },
  region: String,
  hashedPassword: {
    type: String,
    validate: [
      {validator: validateEmptyPassword, msg: 'Password cannot be blank'}
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

  const validatePresenceOf = (value) => {
    return value && value.length;
  };
  
  UserSchema.method('authenticate', function (plainText: string): boolean {
    return this.encryptPassword(plainText) === this.hashedPassword;
  });
  
  UserSchema.method('makeSalt', function (): string {
    return crypto.randomBytes(16).toString('base64');
  });
  
  UserSchema.method('encryptPassword', function (password: string): string {
    if (!password || !this.salt) {
      return '';
    }
    const salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('base64');
  });
  
UserSchema
  .pre('save', function (next) {
    if (!this.isNew) {
      return next();
    }

    if (this.hashedPassword && !validatePresenceOf(this.hashedPassword)) {
      next(new Error('Invalid password'));
    } else {
      next();
    }
  });
  

export default (UserSchema);