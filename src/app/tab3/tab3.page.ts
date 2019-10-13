import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}
  imageNeuerUrl = '/assets/persons/cacau.png';

  leaders: any[] = [
    {
      imageUrl: '/assets/persons/musterfrau2.jpg',
      name: 'Kim Jones',
      description: 'scored at 16:15',
      time: '99 km/h',
    },
    {
      imageUrl: '/assets/persons/mustermann.jpg',
      name: 'Simon Scott',
      description: 'scored at 11:30',
      time: '96 km/h',
    },
    {
      imageUrl: '/assets/persons/kroos.jpg',
      name: 'Toni Kroos',
      description: 'scored at 12:15',
      time: '95 km/h',
    },
  ];
}
