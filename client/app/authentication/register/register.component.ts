import { PasswordValidation } from '../services/password-validation';
import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../core/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../authentication.component.scss', './register.component.scss']
})
export class RegisterComponent implements OnInit {
  regions = [
    { name:'BRASIL', value: 'br'},
    { name:'EUROPA', value: 'eune'},
    { name:'EUROPE OESTE', value: 'euw'},
    { name:'KOREA', value: 'kr'},
    { name:'NORTEAMERICA LATINA', value: 'lan'},
    { name:'SUDAMERICA', value: 'las'},
    { name:'NORTEAMERICA', value: 'na'},
    { name:'OCEANIA', value: 'oce'},
    { name:'RUSIA', value: 'ru'},
    { name:'TURQUIA', value: 'tr'},
    { name:'JAPON', value: 'jp'},
  ];

  registerForm: FormGroup;
  registerFormErrors: any;

  constructor(
              private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {

    this.registerFormErrors = {
      summonerName: {},
      password: {},
      passwordConfirm: {}
    };
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      summonerName: ['', Validators.required],
      region: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    }, {
      validator: PasswordValidation.PasswordRequirements
    });

    this.registerForm.valueChanges.subscribe(() => {
      this.onRegisterFormValuesChanged();
    });
  }

  onRegisterFormValuesChanged() {
    for (const field in this.registerFormErrors) {
      if (!this.registerFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.registerFormErrors[field] = {};

      // Get the control
      const control = this.registerForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.registerFormErrors[field] = control.errors;
      }
    }
  }

  register() {
    this.userService.create(this.registerForm.value).subscribe(
      () => {
        this.userService.me();
        this.router.navigate(['/', 'app']);
      },
      (error) => {
        // console.log(error);
      });
  }

  displayRequeriments(str) {
    return PasswordValidation.displayRequeriments(str);
  }
}
