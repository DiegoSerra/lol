'use strict';

import * as express from 'express';
import UserDao from '../api/user/user.dao';


export class AuthService {

  static needAuthenticate(req: any, res: express.Response, next: express.NextFunction) {

    const name = req.cookies.name || req.body.name || req.query.name || req.headers['x-access-name'];
    const accountId = req.cookies.accountId || req.body.accountId || req.query.accountId || req.headers['x-access-accountId'];
    const id = req.cookies.id || req.body.id || req.query.id || req.headers['x-access-id'];
    const region = req.cookies.region || req.body.region || req.query.region || req.headers['x-access-region'];

    // Important summoner info to use it on next calls
    if (name && accountId && id && region) {
      req.name = name;
      req.accountId = accountId;
      req.id = id;
      req.region = name;
      next();
    } else {

      // if there is no token
      // return an error
      return res.status(200).send({
        success: false,
        noToken: true,
        message: 'No token provided.'
      });

    }
  }

  static me(req: any, res: express.Response, next: express.NextFunction) {
    return res.json(req.user);
  }

  static setTokenCookie(req: any, res: express.Response) {
    if (!req.user) {
      return res.status(404).json({message: 'Something went wrong, please try again.'});
    }
    const user = req.user;
    res.cookie('name', user.name );
    res.cookie('accountId', user.accountId );
    res.cookie('id', user.id );
    res.cookie('region', req.region );

    if (req['redirect']) {
      return res.status(200).redirect(req['redirectUrl'] ? req['redirectUrl'] : '/');
    }

    if (req['redirectUrl']) {
      return res.status(200).json({
        redirectPath: req['redirectUrl'],
        user
      });
    }

    return res.status(200).json({user});
  }

}
