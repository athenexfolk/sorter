import { Component } from '@angular/core';
import { MathtexDirective } from '../../../../shared/directives/mathtex.directive';
import { BubbleSortStepperComponent } from '../../components/bubble-sort-stepper/bubble-sort-stepper.component';
import { BubbleSortVisualizerComponent } from '../../components/bubble-sort-visualizer/bubble-sort-visualizer.component';

@Component({
  selector: 'app-bubble-sort-detail',
  imports: [
    MathtexDirective,
    BubbleSortStepperComponent,
    BubbleSortVisualizerComponent,
  ],
  templateUrl: './bubble-sort-detail.component.html',
  styleUrl: './bubble-sort-detail.component.css',
})
export class BubbleSortDetailComponent {}
