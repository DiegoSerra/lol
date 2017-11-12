import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import * as _ from 'lodash';
import {User} from '../../models/user.model';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  create(user: any) {
    return this.http.post('api/user', user)
      .map((res: Response) => {
        return res.json();
      });
  }

  getUser(userName: string) {
    return this.http.get(`api/user/${userName}`)
      .map((res: Response) => {
        return res.json();
      });
  }

}
