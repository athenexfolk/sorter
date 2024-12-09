import { Component, input } from '@angular/core';
import { Detail } from '../../models/detail';
import { MathtexDirective } from '../../directives/mathtex.directive';

@Component({
  selector: 'app-detail',
  imports: [MathtexDirective],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  detail = input.required<Detail>();
}
