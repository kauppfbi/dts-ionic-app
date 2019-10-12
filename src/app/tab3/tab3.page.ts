
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private loadingController: LoadingController) {}
  imageNeuerUrl = '/assets/persons/neuer.jpg';

  leaders: any[] = [
    {
      imageUrl: '/assets/persons/musterfrau2.jpg',
      name: 'Jovana Morgan',
      description: 'Munich',
      time: '00:48:37',
    },
    {
      imageUrl: '/assets/persons/mustermann.jpg',
      name: 'Simon Scott',
      description: 'Berlin',
      time: '00:49:21',
    },
    {
      imageUrl: '/assets/persons/musterfrau.jpg',
      name: 'Lisa Serana',
      description: 'Nuremberg',
      time: '01:01:10',
    },
  ];

}
