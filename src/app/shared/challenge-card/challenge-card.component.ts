import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss'],
})
export class ChallengeCardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() coins: string;
  @Input() imageUrl: string;
  @Input() participants: string;
  @Input() location: string;
  @Input() category: string;
  @Input() displayCoin: boolean;

}