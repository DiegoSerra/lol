'use strict';

import * as mongoose from 'mongoose';
import userSchema from './user.model';
import * as _ from 'lodash';

let User;

userSchema.static('createNew', (user) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(user)) {
      return reject(new TypeError('Is not a valid object.'));
    }

    const _something = new User(user);
    _something._id = mongoose.Types.ObjectId(user.id);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
});

userSchema.static('getOneByQuery', (query) => {
  return new Promise((resolve, reject) => {
    User
      .findOne(query)
      .lean()
      .exec((err, user) => {
        err ? reject(err) : resolve(user);
      });
    });
});

userSchema.static('updateOne', (user) => {
  return new Promise((resolve, reject) => {
    User
      .findOneAndUpdate(
        {id: user.id},
        {$set: user},
        {upsert: true}
      ).exec((err, updated) => {
        err ? reject(err) : resolve(updated);
      });
  });
})

User = mongoose.model('user', userSchema);

export default User;