import { Component, inject } from '@angular/core';
import {
  BubbleSortService,
  BubbleSortTrack,
} from '../../services/bubble-sort.service';
import { Visualizer } from '../../../../core/abstracts/visualizer';
import { SortVisualizerComponent } from '../../../../shared/components/sort-visualizer/sort-visualizer.component';

@Component({
  selector: 'app-bubble-sort-visualizer',
  imports: [SortVisualizerComponent],
  templateUrl: './bubble-sort-visualizer.component.html',
  styleUrl: './bubble-sort-visualizer.component.css',
})
export class BubbleSortVisualizerComponent extends Visualizer<BubbleSortTrack> {
  protected override sorter = inject(BubbleSortService);
}
