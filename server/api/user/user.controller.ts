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
    RiotConfig.api.Summoner.by.name(req.body.summonerName).region(req.body.region)
      .then(user => {
        req.user = user;
        req.region = req.body.region;
        UserDAO.updateOne(user)
          .then(user => {
            // res.status(200).json(user)
            next();
          })
          .catch(error => res.status(400).json(error));
      })
      .catch(error => res.status(404).json(error));

  }
}