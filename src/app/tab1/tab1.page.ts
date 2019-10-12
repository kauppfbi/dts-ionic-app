import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

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
}
