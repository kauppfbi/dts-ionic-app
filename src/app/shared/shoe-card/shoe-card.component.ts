import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.scss'],
})
export class ShoeCardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() progress: string;
}
