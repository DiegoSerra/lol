import { UserRoutes } from '../api/user/user.route';
import * as express from 'express';

import {StaticDispatcher} from '../commons/static/index';
import {ErrorHandler} from '../config/error-handler.config';

export class Routes {
  static init(app: express.Application, router: express.Router) {

    UserRoutes.init(router);

    ErrorHandler.notFound(router);

    router
      .route('*')
      .get(StaticDispatcher.sendIndex);

    app.use('/', router);
  }
}
