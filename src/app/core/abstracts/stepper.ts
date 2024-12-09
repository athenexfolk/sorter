import { Component, computed, signal } from '@angular/core';
import { ISort, ISortTrack } from './sort';
import { getRandomizedRange } from '../../shared/utils/random-array';

@Component({
  template: '',
})
export abstract class Stepper<T extends ISortTrack> {
  protected sorter!: ISort<T>;

  presets = [
    {
      label: 'Worst',
      array: [5, 4, 3, 2, 1],
    },
    {
      label: 'Average',
      array: [2, 4, 5, 1, 3],
    },
    {
      label: 'Best',
      array: [1, 2, 3, 4, 5],
    },
  ];

  array = signal(this.presets[1].array);
  tracker = computed(() => this.sorter.track(this.array()));
  sortedArray = computed(() => this.tracker().sortedArray);
  steps = computed(() => this.tracker().steps);
  currentIndex = signal(0);
  currentStep = computed(() => this.steps()[this.currentIndex()]);

  next() {
    if (this.currentIndex() === this.steps().length - 1) {
      return;
    }
    this.currentIndex.update((i) => i + 1);
  }

  prev() {
    if (this.currentIndex() === 0) {
      return;
    }
    this.currentIndex.update((i) => i - 1);
  }

  first() {
    this.currentIndex.set(0);
  }

  last() {
    this.currentIndex.set(this.steps().length - 1);
  }

  setArrayWith(array: number[]) {
    this.array.set(array);
    this.currentIndex.set(0);
  }

  random() {
    return getRandomizedRange(1, 5);
  }

  abstract assignClass(index: number): string;
}
