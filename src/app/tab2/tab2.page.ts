import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  challenges: any[] = [
    {
      imageUrl: '/assets/ultraboost.jpg',
      title: 'Berlin Run 4 Climate',
      subtitle: 'Berlin 12.10.19',
      coins: '100',
      description: 'Join the Run 4 Climate in Berlin and contribute to the global C02 reduction',
    },
    {
      imageUrl: '/assets/ultraboost.jpg',
      title: 'London Marathon VI',
      subtitle: 'London 13.09.19',
      coins: '80',
      description: 'The sixth big marathon in London is taking place in Ocotober. 42 km through the city center of the capital city of the UK',
    },
    {
      imageUrl: '/assets/ultraboost.jpg',
      title: 'Run for the Oceans 2k19',
      subtitle: 'Herzogenaurach 22.10.19',
      coins: '250',
      description: 'Join the yearly Run for the Oceans event at the adidas HQ in beautiful Herzogenaurach',
    },
  ];

}
