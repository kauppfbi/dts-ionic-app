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
      title: 'Shoot harder than Cacau',
      subtitle: 'Sunday, 13. October',
      location: 'Max-Morlock Stadium',
      category: 'Running',
      participants: '700',
      coins: 'get a card for DEUTSCHLAND vs. BELGIEN on the 17.11.2019 at Freiburg',
      description: 'Try to beat Claudemir Jerônimo Barreto at the goal wall',
    },
    {
      imageUrl: '/assets/persons/RunfortheOceans.png',
      title: 'Run for the Oceans – lauf mit uns gegen Meeresverschmutzung',
      subtitle: 'Saturday, 8. November 2019',
      coins: 'run and get 4000 adicoins',
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
      category: 'Running',
      participants: '700',
      imageUrl:'/assets/persons/FrancisObikwelu.png'
    },
    {
      subtitle: 'Wednesday, 12. May 2020',
      title: 'Dunk like Jonas Mattisseck',
      description: 'if you ever dunk like Jonas Mattisseck, show us!',
      coins: 'be part of the Training! Alba Berlin',
      location: 'Berlin',
      category: 'Basketball',
      participants: '700',
      imageUrl:'/assets/persons/JonasMattisseck.png'
    },
    {
      subtitle: "Tuesday, 22. March 2020",
      title: "Run more than your average running time",
      description: "Try to run more than average this week!",
      coins: "beat this challange and get 2000 adicoins",
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
      location: 'Everywhere',
      category: 'Running',
      participants: '500k',
      imageUrl:'/assets/persons/walktowork.png'
    },
  
  ];
}