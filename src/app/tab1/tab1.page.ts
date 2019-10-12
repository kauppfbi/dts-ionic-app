import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private loadingController: LoadingController) {}

  shoes: any[] = [
    {
      imageUrl: '/assets/ultraboost.jpg',
      title: 'Ultraboost 19 Shoe',
      subtitle: 'Bought 10.01.19',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/ultraboost.jpg',
      title: 'Ultraboost 19 Shoe',
      subtitle: 'Bought 13.09.19',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/ultraboost.jpg',
      title: 'Ultraboost 19 Shoe',
      subtitle: 'Bought 10.10.19',
      description: 'lorem ipsum',
    },
  ];

  async registerShoe() {
    const loading = await this.loadingController.create({
      duration: 3000,
      message: 'Registering your new Shoe...',
      translucent: true,
      spinner: 'circular',
    });
    return await loading.present();
  }
}
