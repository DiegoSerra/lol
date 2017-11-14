'use strict';

import * as express from 'express';
import * as passport from 'passport';

import {Strategy as LocalStrategy} from 'passport-local';

import User from '../../user/user.dao';

export class LocalAuthController {

  static setup() {
    passport.use(new LocalStrategy({
        usernameField: 'name',
        passwordField: 'password' // this is the virtual field on the model
      },
      (name, password, done) => {
        User.findOne({
          name: name
        }, (err, user) => {
          if (err) {
            return done(err);
          }

          if (!user) {
            return done(null, false, {message: 'This name is not registered.', name: true});
          }
          if (!user.authenticate(password)) {
            return done(null, false, {message: 'This password is not correct.', password: true});
          }

          return done(null, user);
        });
      }
    ));
  }

  static callback(req: any, res: express.Response, next: express.NextFunction) {
    req['redirect'] = false;
    req.user = req.user._doc;
    next();
  }

}
