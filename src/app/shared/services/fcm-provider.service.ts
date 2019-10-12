import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@Injectable({
  providedIn: 'root',
})
export class FcmProviderService {
  constructor(
    public firebase: FirebaseX,
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
    return this.firebase.onMessageReceived();
  }
}
