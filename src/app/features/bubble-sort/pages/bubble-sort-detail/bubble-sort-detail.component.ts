import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { BubbleSortService } from '../../services/bubble-sort.service';
import { StepControllerComponent } from '../../../../shared/components/step-controller/step-controller.component';
import { NgClass } from '@angular/common';
import { MathtexDirective } from '../../../../shared/directives/mathtex.directive';

@Component({
  selector: 'app-bubble-sort-detail',
  imports: [StepControllerComponent, NgClass, MathtexDirective],
  templateUrl: './bubble-sort-detail.component.html',
  styleUrl: './bubble-sort-detail.component.css',
})
export class BubbleSortDetailComponent {
  private readonly bubbleSort = inject(BubbleSortService);

  @ViewChild('article', { static: true }) article!: ElementRef<HTMLElement>;

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

  vzPreset = [
    11, 17, 19, 22, 35, 3, 25, 33, 40, 47, 15, 46, 28, 30, 23, 26, 13, 21, 16,
    7, 37, 39, 4, 2, 12, 38, 6, 5, 29, 20, 24, 10, 34, 43, 32, 41, 1, 42, 44,
    48, 45, 18, 14, 27, 9, 36, 50, 8, 49, 31,
  ];
  vzArray = [...this.vzPreset];
  isRunning = false;

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

  runVz = async () => {
    this.isRunning = true;
    await this.bubbleSort.mutateSortAsync(this.vzArray);
    this.isRunning = false;
  };

  resetVz() {
    if (this.isRunning) {
      return;
    }
    this.vzArray = [...this.vzPreset];
  }
}
