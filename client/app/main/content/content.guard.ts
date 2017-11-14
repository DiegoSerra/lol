import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../../core/services/user.service';

@Injectable()
export class ContentGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate() {
    if (!this.userService.isLoggedIn()) {
      window.location.href = '/auth/login';
    } else {
      return true;
    }
    return true;
  }
}
