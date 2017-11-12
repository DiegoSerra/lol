import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../core/modules/shared.module';
import { MatchlistComponent } from './matchlist/matchlist.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'matchlist',
        component: MatchlistComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app/matchlist'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [MainComponent, MatchlistComponent]
})
export class MainModule { }
