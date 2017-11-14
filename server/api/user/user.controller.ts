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

  //TODO: merge jsons
  static createNew(req: any, res: express.Response, next: express.NextFunction) {
    const _user = req.body;
    RiotConfig.api.Summoner.by.name(_user.summonerName).region(_user.region)
      .then(user => {
        req.user = user;
        req.region = req.body.region;
        user.hashedPassword = req.body.password;
        user.role = req.body.role;
        user.region = req.body.region;
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