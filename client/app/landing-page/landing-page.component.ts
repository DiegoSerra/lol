import { UserService } from '../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
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

  mainForm: FormGroup;
  mainFormErrors: any;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private snackBar: MatSnackBar) { 
    this.mainFormErrors = {
      summonerName: {},
      region: {}
    };
  }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      summonerName: ['', Validators.required],
      region: ['', Validators.required]
    })

    this.mainForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }

  onLoginFormValuesChanged() {
    for (const field in this.mainFormErrors) {
      if (!this.mainFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.mainFormErrors[field] = {};

      // Get the control
      const control = this.mainForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.mainFormErrors[field] = control.errors;
      }
    }
  }

  createUser() {
    this.userService.create(this.mainForm.value)
      .subscribe(
        result => {
          window.location.href = result.redirectPath || '/app';
        },
        err => {
          this.snackBar.open('Nombre de invocador no encontrado', '', {duration: 5000});
        }
    )
  }

  findUser(userName: string) {
    this.userService.getUser(userName)
      .subscribe(user => {
        console.log(user);
      })
  }
}
