import { Component, OnInit } from '@angular/core'
import { LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-stars',
  templateUrl: './stars.page.html',
  styleUrls: ['./stars.page.scss']
})
export class StarsPage implements OnInit {
  constructor(private loadingController: LoadingController) {}

  imageNeuerUrl = '/assets/persons/neuer.jpg'

  athlets: any[] = [
    {
      name: 'Manuel Neuer',
      imageUrl: '/assets/persons/neuer.jpg',
      sport: 'Football',
      shoes: [
        { name: 'adidas Predator 19.3', img: '/assets/ultraboost.jpg' },
        {
          name: 'adidas Original JEANS',
          img: '/assets/ultraboost.jpg'
        },
        { name: 'adidas adicolor tech hoodie', img: '/assets/ultraboost.jpg' }
      ]
    },
    {
      name: 'Manuel Neuer',
      imageUrl: '/assets/persons/neuer.jpg',
      sport: 'Football',
      shoes: [
        { name: 'adidas Predator 19.3', img: '' },
        { name: 'adidas Original JEANS', img: '' },
        { name: 'adidas adicolor tech hoodie', img: '' }
      ]
    }
  ]

  ngOnInit() {}
}

/*{
   "name": "Manuel Neuer",
   "sport": "Football",
   "shoes": [
     { "name": "adidas Predator 19.3", "img": "" },
     { "name": "adidas Original JEANS", "img": "" },
     { "name": "adidas adicolor tech hoodie", "img": "" }
   ]
 },
 */
