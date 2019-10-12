
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
      imageUrl: '/assets/persons/neuer.jpg',
      name: 'Manuel Neuer',
      description: 'lorem ipsum',
      color: "#D4AF37",
    },
    {
      imageUrl: '/assets/persons/kroos.jpg',
      name: 'Toni Kroos',
      description: 'lorem ipsum',
    },
    {
      imageUrl: '/assets/persons/prescott.JPG',
      name: 'Dak Prescott',
      description: 'lorem ipsum',
    },
  ];

}
