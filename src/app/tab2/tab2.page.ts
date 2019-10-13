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
      imageUrl: '/assets/persons/nuremberg.png',
      title: 'Shoot faster than Cacau',
      subtitle: 'Sunday, 13. October',
      location: 'Max-Morlock Stadium',
      category: 'Soccer',
      participants: '700',
      coins: 'get a card for Germany vs. Belgium on the 17.11.2019 in Freiburg',
      displayCoin: false,
      description: 'Try to beat Claudemir Jerônimo Barreto at the goal wall. Cacau was part of the German national team at the 2010 FIFA World Cup and played as a striker.',
    },
    {
      imageUrl: '/assets/persons/RunfortheOceans.png',
      title: 'Run for the Oceans – every kilometer matters!',
      subtitle: 'Saturday, 8. November 2019',
      coins: 'run and get 4000 adicoins',
      displayCoin: true,
      location: 'Everywhere',
      category: 'Running',
      participants: '10k',
      description: 'From 8 to 16 June you can join Run For The Oceans. Raise awareness of the pollution of the oceans by plastic!',
    },
    {
      imageUrl: '/assets/persons/AlexanderZverev.png',
      title: 'Turn up more often than Alexander Zverev',
      subtitle: 'Tuesday, 2nd October 2019 - Monday, 8th October 2019',
      coins: 'win and get 8000 adicoins',
      displayCoin: true,
      location: 'London',
      category: 'Running',
      participants: '200',
      description: 'From 2 to 8 October you can beat Alexander Zverev',
    },
    {
      subtitle: 'Friday, 26. Februrary 2020',
      title: 'reach 80% of the speed over 100m from Francis Obikwelu',
      description: 'Francis Obiorah Obikwelu (* 22. November 1978 in Onitsha) is a former Portuguese sprinter of Nigerian origin who has won numerous titles in his career and participated in Olympic Games',
      coins: 'beat Francis Obikwelu and get 1000 adicoins',
      location: 'Everywhere',
      displayCoin: true,
      category: 'Running',
      participants: '700',
      imageUrl:'/assets/persons/FrancisObikwelu.png'
    },
    {
      subtitle: 'Wednesday, 12. May 2020',
      title: 'Dunk like Jonas Mattisseck',
      description: 'if you ever dunk like Jonas Mattisseck, show us!',
      coins: 'be part of the Training @Alba Berlin',
      displayCoin: false,
      location: 'Berlin',
      category: 'Basketball',
      participants: '700',
      imageUrl:'/assets/persons/JonasMattisseck.png'
    },
    {
      subtitle: "Tuesday, 22. March 2020",
      title: "Run more than your average running time",
      description: "Try to run more than average this week!",
      coins: "beat this challenge and get 2000 adicoins",
      displayCoin: true,
      location: 'Everywhere',
      category: 'Running',
      participants: '200k',
      imageUrl:'/assets/persons/runmore.png'
    },
    {
      subtitle: "Friday, 13. July 2020",
      title: "Walk to work!",
      description: "walk to work a week every day! Push yourself",
      coins: "get a shop discount",
      displayCoin: false,
      location: 'Everywhere',
      category: 'Running',
      participants: '500k',
      imageUrl:'/assets/persons/walktowork.png'
    },
  
  ];
}