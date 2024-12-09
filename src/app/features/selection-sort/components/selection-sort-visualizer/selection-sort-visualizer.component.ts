import { Component, inject } from '@angular/core';
import {
  SelectionSortService,
  SelectionSortTrack,
} from '../../services/selection-sort.service';
import { Visualizer } from '../../../../core/abstracts/visualizer';
import { SortVisualizerComponent } from '../../../../shared/components/sort-visualizer/sort-visualizer.component';

@Component({
  selector: 'app-selection-sort-visualizer',
  imports: [SortVisualizerComponent],
  templateUrl: './selection-sort-visualizer.component.html',
  styleUrl: './selection-sort-visualizer.component.css',
})
export class SelectionSortVisualizerComponent extends Visualizer<SelectionSortTrack> {
  protected override sorter = inject(SelectionSortService);
}
