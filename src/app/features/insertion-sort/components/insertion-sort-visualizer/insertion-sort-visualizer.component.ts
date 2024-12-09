import { Component, inject } from '@angular/core';
import { InsertionSortService } from '../../services/insertion-sort.service';
import { getRandomizedRange } from '../../../../shared/utils/random-array';

@Component({
  selector: 'app-insertion-sort-visualizer',
  imports: [],
  templateUrl: './insertion-sort-visualizer.component.html',
  styleUrl: './insertion-sort-visualizer.component.css'
})
export class InsertionSortVisualizerComponent {
  private readonly insertionSort = inject(InsertionSortService);

  preset = [
    11, 17, 19, 22, 35, 3, 25, 33, 40, 47, 15, 46, 28, 30, 23, 26, 13, 21, 16,
    7, 37, 39, 4, 2, 12, 38, 6, 5, 29, 20, 24, 10, 34, 43, 32, 41, 1, 42, 44,
    48, 45, 18, 14, 27, 9, 36, 50, 8, 49, 31,
  ];
  array = [...this.preset];
  isRunning = false;
  running = [0];

  async run() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    await this.insertionSort.mutateSortAsync(this.array, 10, this.running);
    this.isRunning = false;
  }

  reset() {
    if (this.isRunning) {
      return;
    }
    this.running = [0];
    this.array = [...this.preset];
  }

  random() {
    if (this.isRunning) {
      return;
    }
    this.array = getRandomizedRange(1, 50);
  }
}
