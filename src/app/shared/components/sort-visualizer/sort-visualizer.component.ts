import { Component, input, Input, InputSignal } from '@angular/core';
import { ISort } from '../../../core/abstracts/sort';
import { Visualizer } from '../../../core/abstracts/visualization';
import { BubbleSort } from '../../../core/algorithms/bubble-sort';
import { InsertionSort } from '../../../core/algorithms/insertion-sort';
import { MergeSort } from '../../../core/algorithms/merge-sort';
import { SelectionSort } from '../../../core/algorithms/selection-sort';
import { SortVisualizerControllerComponent } from '../sort-visualizer-controller/sort-visualizer-controller.component';
import { SortType } from '../../../core/types/sort-type';

@Component({
  selector: 'app-sort-visualizer',
  imports: [SortVisualizerControllerComponent],
  templateUrl: './sort-visualizer.component.html',
  styleUrl: './sort-visualizer.component.css',
})
export class SortVisualizerComponent extends Visualizer {
  @Input({ required: true }) token!: SortType;
  override sorter!: ISort;

  controller = input(false);

  ngOnInit() {
    this.sorter = this.sortFactory(this.token);
  }

  sortFactory(token: SortType) {
    switch (token) {
      case 'bubble-sort':
        return new BubbleSort();
      case 'selection-sort':
        return new SelectionSort();
      case 'insertion-sort':
        return new InsertionSort();
      case 'merge-sort':
        return new MergeSort();
      default:
        throw new Error(`Invalid sort token: ${token}`);
    }
  }
}
