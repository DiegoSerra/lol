'use strict';

import * as express from 'express';
import {UserController} from './user.controller';

export class UserRoutes {
  static init(router: express.Router) {
    router
      .route('/api/user')
      .post(UserController.createNew);
      
    router
      .route('/api/user/:userName')
      .get(UserController.getUser)
  }
}