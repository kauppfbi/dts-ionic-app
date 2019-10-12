import { Component, Input } from '@angular/core';

@Component({
  selector: 'leader-board-card',
  templateUrl: './leader-board-card.component.html',
  styleUrls: ['./leader-board-card.component.scss'],
})
export class LeaderBoardCardComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() color: string;
}
