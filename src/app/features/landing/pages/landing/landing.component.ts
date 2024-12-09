import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  menu = [
    {
      path: 'bubble-sort',
      label: 'Bubble Sort',
    },
    {
      path: 'selection-sort',
      label: 'Selection Sort',
    },
    {
      path: 'insertion-sort',
      label: 'Insertion Sort',
    }
  ]
}
