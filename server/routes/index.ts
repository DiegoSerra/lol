import { UserRoutes } from '../api/user/user.route';
import * as express from 'express';

import {StaticDispatcher} from '../commons/static/index';
import {ErrorHandler} from '../config/error-handler.config';
import { AuthRoutes } from '../api/auth/auth.route';

export class Routes {
  static init(app: express.Application, router: express.Router) {

    AuthRoutes.init(router);

    UserRoutes.init(router);

    ErrorHandler.notFound(router);

    router
      .route('*')
      .get(StaticDispatcher.sendIndex);

    app.use('/', router);
  }
}
