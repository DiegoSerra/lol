import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../core/modules/shared.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      // {
      //   path: 'matchlist',
      //   component: MatchlistComponent
      // },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'app/matchlist'
      // }

      {
        path: '',
        loadChildren: './content/content.module#ContentModule'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
