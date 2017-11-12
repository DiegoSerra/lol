'use strict';

import * as express from 'express';
import UserDAO from './user.dao';
import { RiotConfig } from '../../config/riot.conf';

export class UserController {

  static getUser(req: any, res: express.Response) {
    UserDAO.getOneByQuery({name: req.params.userName})
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req: any, res: express.Response, next: express.NextFunction) {
    RiotConfig.kayn.Summoner.by.name(req.body.userName).region('euw')
      .then(user => {
        UserDAO.updateOne(user)
          .then(user => res.status(200).json(user))
          .catch(error => res.status(400).json(error));
      })
      .catch(err => console.error(err));

  }
}