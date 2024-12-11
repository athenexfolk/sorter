import { Component, input } from '@angular/core';
import { getUniqueRandomizedArray } from '../../shared/utils/random-array';
import { ISort, Runner } from './sort';

@Component({
  template: '',
})
export abstract class Visualizer {
  abstract sorter: ISort;

  config = input({
    reverse: false,
    delay: 10,
  });

  preset = [
    11, 17, 19, 22, 35, 3, 25, 33, 40, 47, 15, 46, 28, 30, 23, 26, 13, 21, 16,
    7, 37, 39, 4, 2, 12, 38, 6, 5, 29, 20, 24, 10, 34, 43, 32, 41, 1, 42, 44,
    48, 45, 18, 14, 27, 9, 36, 50, 8, 49, 31,
  ];

  array = [...this.preset];

  isRunning = false;
  runner: Runner = {
    index: null,
  };

  async run() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    await this.sorter.sortAsync(this.array, {
      reverse: this.config().reverse,
      delay: this.config().delay,
      runner: this.runner,
    });
    this.isRunning = false;
  }

  reset() {
    if (this.isRunning) {
      return;
    }
    this.runner.index = null;
    this.array = [...this.preset];
  }

  random() {
    if (this.isRunning) {
      return;
    }
    this.array = getUniqueRandomizedArray(1, 50);
  }
}
