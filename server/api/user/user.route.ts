'use strict';

import * as express from 'express';
import {UserController} from './user.controller';
import { AuthService } from '../../services/auth.service';

export class UserRoutes {
  static init(router: express.Router) {
    router
      .route('/api/user')
      .post(UserController.createNew, AuthService.setTokenCookie);
    router
      .route('/api/user/:userName')
      .get(UserController.getUser)
  }
}