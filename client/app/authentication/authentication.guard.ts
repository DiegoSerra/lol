import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../core/services/user.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate() {
    if (this.userService.isLoggedIn()) {

      this.router.navigate(['/app']);
    }
    return true;
  }
}
