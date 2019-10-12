import { FcmProviderService } from './shared/services/fcm-provider.service';
import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FcmProviderService,
    private toastController: ToastController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.preparePushNotifications();
    });
  }

  preparePushNotifications() {
    // Get a FCM token
    this.fcm.getToken();

    this.fcm
      .listenToNotifications()
      .pipe(
        tap(msg => {
          console.log(msg);
        }),
      )
      .subscribe();
  }
}
