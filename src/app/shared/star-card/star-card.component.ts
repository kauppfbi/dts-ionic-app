import { Component, Input } from '@angular/core'

@Component({
  selector: 'star-card',
  templateUrl: './star-card.component.html',
  styleUrls: ['./star-card.component.scss']
})
export class StarCardComponent {
  @Input() name: string
  @Input() sport: string
  @Input() imageUrl: string
  @Input() shoes: any[]
}
