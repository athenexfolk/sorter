import { Component, computed, inject, signal } from '@angular/core';
import { BubbleSortService } from '../../services/bubble-sort.service';
import { NgClass } from '@angular/common';
import { StepControllerComponent } from '../../../../shared/components/step-controller/step-controller.component';
import { getRandomizedRange } from '../../../../shared/utils/random-array';

@Component({
  selector: 'app-bubble-sort-stepper',
  imports: [StepControllerComponent, NgClass],
  templateUrl: './bubble-sort-stepper.component.html',
  styleUrl: './bubble-sort-stepper.component.css',
})
export class BubbleSortStepperComponent {
  private readonly bubbleSort = inject(BubbleSortService);

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
  tracker = computed(() => this.bubbleSort.trackSort(this.array()));
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
    const { action, highlight } = this.currentStep();

    switch (action) {
      case 'end':
        return 'bg-green-200';
      case 'compare':
        return highlight.includes(index) ? 'bg-yellow-200' : 'bg-zinc-200';
      case 'swap':
        return highlight.includes(index) ? 'bg-blue-200' : 'bg-zinc-200';
      default:
        return 'bg-zinc-200';
    }
  }
}
