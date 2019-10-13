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
      name: 'Cacau',
      imageUrl: '/assets/persons/cacau.png',
      sport: 'Soccer',
      shoes: [
        { name: 'adidas Predator 19.3', img: '' },
        { name: 'adidas Original JEANS', img: '' },
        { name: 'adidas adicolor tech hoodie', img: '' }
      ]
    },
    {
      name: 'Sara Däbritz',
      imageUrl: '/assets/persons/daebritz.jpg',
      sport: 'Soccer',
      shoes: [{ name: 'adidas Predator 19.3', img: '' }]
    },
    {
      name: 'Angelique Kerber',
      imageUrl: '/assets/persons/kerber.jpg',
      sport: 'Tennis',
      shoes: [
        { name: 'adidas Predator 19.3', img: '' },
        { name: 'adidas Original JEANS', img: '' },
        { name: 'adidas adicolor tech hoodie', img: '' }
      ]
    },
    {
      name: 'Toni Kroos',
      imageUrl: '/assets/persons/kroos.jpg',
      sport: 'Soccer',
      shoes: [
        { name: 'adidas Predator 19.3', img: '' },
        { name: 'adidas adicolor tech hoodie', img: '' }
      ]
    },
    {
      name: 'Manuel Neuer',
      imageUrl: '/assets/persons/neuer.jpg',
      sport: 'Soccer',
      shoes: [
        { name: 'adidas Predator 19.3', img: '/assets/gear/Predator_19.3.jpg' },
        {
          name: 'adidas Original JEANS',
          img:
            '/assets/gear/adidas-originals-jeans-footwear-white-collegiate-green-clear-brown.jpg'
        }
      ]
    },
    {
      name: 'Jonas Mattisseck',
      imageUrl: '/assets/persons/JonasMattisseck.png',
      sport: 'Basketball',
      shoes: [
        { name: 'adidas Predator 19.3', img: '' },
        { name: 'adidas Original JEANS', img: '' }
      ]
    },
    {
      name: 'Francis Obikwelu',
      imageUrl: '/assets/persons/FrancisObikwelu.png',
      sport: 'Sprinting',
      shoes: [{ name: 'adidas Predator 19.3', img: '' }]
    },
    {
      name: 'Aaron Rodgers',
      imageUrl: '/assets/persons/rodgers.jpg',
      sport: 'Football',
      shoes: [{ name: 'adidas Predator 19.3', img: '' }]
    },
    {
      name: 'Alexander Zvevrev',
      imageUrl: '/assets/persons/AlexanderZverev.png',
      sport: 'Tennis',
      shoes: [
        { name: 'adidas Predator 19.3', img: '' },
        { name: 'adidas Original JEANS', img: '' },
        { name: 'adidas adicolor tech hoodie', img: '' }
      ]
    }
  ]

  ngOnInit() {}
}
