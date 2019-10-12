import { LeaderBoardCardComponent } from './../shared/leader-board-card/leader-board-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Tab3Page } from './tab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Tab3Page
      }
    ])
  ],
  declarations: [Tab3Page, LeaderBoardCardComponent]
})
export class Tab3PageModule {}
