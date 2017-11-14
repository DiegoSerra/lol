import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { SharedModule } from '../../core/modules/shared.module';
import { MatchlistComponent } from './matchlist/matchlist.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [ContentComponent, MatchlistComponent]
})
export class ContentModule { }
