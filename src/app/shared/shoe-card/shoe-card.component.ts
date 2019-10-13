import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.scss'],
})
export class ShoeCardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: number;
  @Input() imageUrl: string;
  @Input() progress: number;

  defineColor(progress: number) {
    return progress < 0.3 ? 'danger' : progress < 0.7 ? 'warning' : 'success';
  }
}
