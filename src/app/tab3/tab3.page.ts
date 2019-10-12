
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private loadingController: LoadingController) {}

  leaders: any[] = [
    {
      imageUrl: '/assets/persons/kerber.jpg',
      name: 'Angelique Kerber',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/persons/kroos.jpg',
      name: 'Toni Kroos',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/persons/daebritz.jpg',
      name: 'Sara Däbritz',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/persons/prescott.jpg',
      name: 'Dak Prescott',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/persons/musterfrau2.jpg',
      name: 'Jovana Morgan',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/persons/neuer.jpg',
      name: 'Manuel Neuer',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/persons/mustermann.jpg',
      name: 'Simon Scott',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/persons/musterfrau.jpg',
      name: 'Lisa Serana',
      description: 'lorem ipsum',
    },
  ];

}
