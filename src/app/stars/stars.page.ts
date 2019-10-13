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
        { name: 'adidas Predator 19.3', img: '/assets/gear/Predator_19.3.jpg' },
        {
          name: 'adidas Ultraboost 19 shoes',
          img: '/assets/gear/ultraboost.webp'
        }
      ]
    },
    {
      name: 'Angelique Kerber',
      imageUrl: '/assets/persons/kerber.jpg',
      sport: 'Tennis',
      shoes: [
        { name: 'adidas Sole Match Count', img: '/assets/gear/kerber.jpg' }
      ]
    },
    {
      name: 'Toni Kroos',
      imageUrl: '/assets/persons/kroos.jpg',
      sport: 'Soccer',
      shoes: [
        { name: 'adidas Predator 19.3', img: '/assets/gear/Predator_19.3.jpg' },
        {
          name: 'adidas adicolor tech hoodie',
          img: '/assets/gear/pullover.webp'
        }
      ]
    },
    {
      name: 'Manuel Neuer',
      imageUrl: '/assets/persons/neuer.jpg',
      sport: 'Soccer',
      shoes: [
        { name: 'adidas Predator 19.3', img: '/assets/gear/Predator_19.3.jpg' },
        { name: 'adidas Original JEANS', img: '/assets/gear/jeans.webp' },
        {
          name: 'adidas adicolor tech hoodie',
          img: '/assets/gear/pullover.webp'
        },
        { name: 'adidas Plore Tshirt', img: '/assets/gear/shirt.png' }
      ]
    },
    {
      name: 'Jonas Mattisseck',
      imageUrl: '/assets/persons/JonasMattisseck.png',
      sport: 'Basketball',
      shoes: [
        { name: 'adidas Predator 19.3', img: '/assets/gear/Predator_19.3.jpg' }
      ]
    },
    {
      name: 'Francis Obikwelu',
      imageUrl: '/assets/persons/FrancisObikwelu.png',
      sport: 'Sprinting',
      shoes: [
        {
          name: 'adidas Laufschuh adizero Prime',
          img: '/assets/gear/adizero.png'
        },
        { name: 'adidas NMD R1 Tokyo', img: '/assets/gear/nmd.png' }
      ]
    },
    {
      name: 'Aaron Rodgers',
      imageUrl: '/assets/persons/rodgers.jpg',
      sport: 'Football',
      shoes: [
        { name: 'Adidas Football 1', img: '/assets/gear/rodgersshue.jpeg' }
      ]
    },
    {
      name: 'Alexander Zvevrev',
      imageUrl: '/assets/persons/AlexanderZverev.png',
      sport: 'Tennis',
      shoes: [
        {
          name: 'adidas Solecourt Clay Schuh',
          img: '/assets/gear/solecurt.jpg'
        },
        {
          name: 'adidas Ultraboost 19 shoes',
          img: '/assets/gear/ultraboost.webp'
        },
        {
          name: 'adidas reveal your vocie wind',
          img: '/assets/gear/jacket.webp'
        }
      ]
    }
  ]

  ngOnInit() {}
}
