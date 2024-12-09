import { Component } from '@angular/core';
import { MathtexDirective } from '../../../../shared/directives/mathtex.directive';
import { SelectionSortStepperComponent } from '../../components/selection-sort-stepper/selection-sort-stepper.component';
import { SelectionSortVisualizerComponent } from '../../components/selection-sort-visualizer/selection-sort-visualizer.component';

@Component({
  selector: 'app-selection-sort-detail',
  imports: [
    MathtexDirective,
    SelectionSortStepperComponent,
    SelectionSortVisualizerComponent,
  ],
  templateUrl: './selection-sort-detail.component.html',
  styleUrl: './selection-sort-detail.component.css',
})
export class SelectionSortDetailComponent {}
