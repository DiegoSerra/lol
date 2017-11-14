import {Component, Input, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {UserService} from '../../core/services/user.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authentication.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormErrors: any;

  constructor(
              private formBuilder: FormBuilder,
              private userService: UserService,
              private snackBar: MatSnackBar) {
    this.loginFormErrors = {
      summonerName: {},
      region: {},
      password: {}
    };
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      summonerName: ['', Validators.required],
      region: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }

  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }

  login() {
    this.userService.login(this.loginForm.value)
      .subscribe(
        (result) => {
          window.location.href = result.redirectPath || '/app';
        },
        (error) => {
          this.snackBar.open('Usuario o contraseña incorrecto', '', {duration: 5000});
        });
  }

}
