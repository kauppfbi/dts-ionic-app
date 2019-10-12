import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FcmProviderService {
  constructor(
    public firebase: Firebase,
    public angularFirestore: AngularFirestore,
    private platform: Platform,
  ) {}

  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.firebase.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      const perm = await this.firebase.grantPermission();
    }

    // Is not cordova == web PWA
    if (!this.platform.is('cordova')) {
      // TODO add PWA support with angularfire2
    }

    return this.saveTokenToFirestore(token);
  }

  private saveTokenToFirestore(token) {
    if (!token) {
      return;
    }
    const devicesRef = this.angularFirestore.collection('devices');

    const docData = {
      token,
      userId: 'dtsUser',
    };

    return devicesRef.doc(token).set(docData);
  }

  listenToNotifications() {
    return this.firebase.onNotificationOpen();
  }
}
