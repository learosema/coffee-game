import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resource-tile',
  standalone: true,
  imports: [],
  templateUrl: './resource-tile.component.html',
  styleUrl: './resource-tile.component.scss'
})
export class ResourceTileComponent {
  @Input() title: string = 'undefined';
  @Input() amount: number = NaN
}
