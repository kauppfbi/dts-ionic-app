import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { BLE } from '@ionic-native/ble/ngx';

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
  providers: [ BLE ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
