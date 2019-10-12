import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirebaseConnectorPage } from './firebase-connector.page';
import { BLE } from '@ionic-native/ble/ngx';

const routes: Routes = [
  {
    path: '',
    component: FirebaseConnectorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [ BLE ],
  declarations: [FirebaseConnectorPage]
})
export class FirebaseConnectorPageModule {}
