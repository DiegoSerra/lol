import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {CookieService} from 'ngx-cookie';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import * as _ from 'lodash';
import {User} from '../../models/user.model';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private _userSubject: BehaviorSubject<User | {}> = new BehaviorSubject<User | {}>({});
  private userDecoded;

  constructor(private http: Http, private cookieService: CookieService) {
    this.me()  
  }

  me(): void  {
    const token = this.cookieService.get('name');
    if (token) {
      this.http.get(`api/user/${token}`)
        .map((res: Response) => {
          this.userDecoded = res.json();
        });
    } else {
      this.userDecoded = {};
    }
    this._userSubject.next(this.userDecoded);
  }

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

  login(user: any): Observable<any> {
    return this.http.post(`api/authenticate`, user)
      .map((res: Response) => {
        return res.json();
      });
  }

  isSuperAdmin() {
      return _.toLower(this.userDecoded.role) === 'superadmin';
  }

  isLoggedIn() {
    const token = this.cookieService.get('name');
    if (token) {
      return token !== undefined;
    }
    return false;
  }
}
