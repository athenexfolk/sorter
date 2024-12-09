import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sort-visualizer',
  imports: [],
  templateUrl: './sort-visualizer.component.html',
  styleUrl: './sort-visualizer.component.css',
})
export class SortVisualizerComponent {
  run = output();
  reset = output();
  random = output();

  array = input.required<number[]>();
  flag = input.required<boolean>();
  running = input.required<number[]>();
}
