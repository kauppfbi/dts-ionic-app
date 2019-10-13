import { HeaderModule } from './../shared/header/header.module';
import { ShoeCardComponent } from './../shared/shoe-card/shoe-card.component';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    HeaderModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
  ],
  declarations: [Tab1Page, ShoeCardComponent],
})
export class Tab1PageModule {}
