import { UserService } from '../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createUser(userName: string) {
    this.userService.create(userName)
      .subscribe(result => {
        window.location.href = result.redirectPath || '/app';
      })
  }

  findUser(userName: string) {
    this.userService.getUser(userName)
      .subscribe(user => {
        console.log(user);
      })
  }
}
