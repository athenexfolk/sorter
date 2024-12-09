import { Component, computed, inject, signal } from '@angular/core';
import { StepControllerComponent } from '../../../../shared/components/step-controller/step-controller.component';
import { SelectionSortService } from '../../services/selection-sort.service';
import { NgClass } from '@angular/common';
import { getRandomizedRange } from '../../../../shared/utils/random-array';

@Component({
  selector: 'app-selection-sort-stepper',
  imports: [StepControllerComponent, NgClass],
  templateUrl: './selection-sort-stepper.component.html',
  styleUrl: './selection-sort-stepper.component.css',
})
export class SelectionSortStepperComponent {
  private readonly selectionSort = inject(SelectionSortService);
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
  tracker = computed(() => this.selectionSort.trackSort(this.array()));
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

  randomArray() {
    this.array.set(getRandomizedRange(1, 5));
    this.currentIndex.set(0);
  }

  assignClass(index: number) {
    const { action, highlight, min, oldMin } = this.currentStep();

    switch (action) {
      case 'end':
        return 'bg-green-200';
      case 'def':
        return min === index ? 'bg-purple-200' : 'bg-zinc-200';
      case 'compare':
        return min === index
          ? 'bg-purple-200'
          : oldMin === index
          ? 'bg-purple-50'
          : highlight.includes(index)
          ? 'bg-yellow-200'
          : 'bg-zinc-200';
      case 'min':
        return min === index
          ? 'bg-purple-200'
          : oldMin === index
          ? 'bg-purple-50'
          : 'bg-zinc-200';
      case 'swap':
        return highlight.includes(index) ? 'bg-blue-200' : 'bg-zinc-200';
      default:
        return 'bg-zinc-200';
    }
  }
}
