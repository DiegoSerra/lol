import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {LoginComponent} from './login.component';
import {SharedModule} from '../../core/modules/shared.module';
import {AuthenticationGuard} from '../authentication.guard';

const routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class LoginModule {

}
