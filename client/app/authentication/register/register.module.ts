import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RegisterComponent} from './register.component';
import {SharedModule} from '../../core/modules/shared.module';
import {AuthenticationGuard} from '../authentication.guard';

const routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    component: RegisterComponent,
  }
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class RegisterModule {

}
