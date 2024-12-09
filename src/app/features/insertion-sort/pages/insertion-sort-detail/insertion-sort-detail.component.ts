import { Component } from '@angular/core';
import { MathtexDirective } from '../../../../shared/directives/mathtex.directive';
import { InsertionSortStepperComponent } from '../../components/insertion-sort-stepper/insertion-sort-stepper.component';
import { InsertionSortVisualizerComponent } from '../../components/insertion-sort-visualizer/insertion-sort-visualizer.component';

@Component({
  selector: 'app-insertion-sort-detail',
  imports: [
    MathtexDirective,
    InsertionSortStepperComponent,
    InsertionSortVisualizerComponent,
  ],
  templateUrl: './insertion-sort-detail.component.html',
  styleUrl: './insertion-sort-detail.component.css',
})
export class InsertionSortDetailComponent {}
