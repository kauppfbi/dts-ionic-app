import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { StarsPage } from './stars.page'

import { StarCardComponent } from './../shared/star-card/star-card.component'
import { HeaderModule } from './../shared/header/header.module'

const routes: Routes = [
  {
    path: '',
    component: StarsPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  declarations: [StarsPage, StarCardComponent]
})
export class StarsPageModule {}
