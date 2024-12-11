import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sort-visualizer-controller',
  imports: [],
  templateUrl: './sort-visualizer-controller.component.html',
  styleUrl: './sort-visualizer-controller.component.css',
})
export class SortVisualizerControllerComponent {
  isRunning = input.required<boolean>();

  run = output();
  reset = output();
  random = output();
}
