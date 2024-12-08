import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { SelectionSortService } from '../../services/selection-sort.service';
import { NgClass } from '@angular/common';
import { StepControllerComponent } from '../../../../shared/components/step-controller/step-controller.component';
import { MathtexDirective } from '../../../../shared/directives/mathtex.directive';

@Component({
  selector: 'app-selection-sort-detail',
  imports: [StepControllerComponent, NgClass, MathtexDirective],
  templateUrl: './selection-sort-detail.component.html',
  styleUrl: './selection-sort-detail.component.css',
})
export class SelectionSortDetailComponent {
  private readonly selectionSort = inject(SelectionSortService);

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
  running = [0];

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

  runVz = async () => {
    this.isRunning = true;
    await this.selectionSort.mutateSortAsync(this.vzArray, 10, this.running);
    this.isRunning = false;
  };

  resetVz() {
    if (this.isRunning) {
      return;
    }
    this.running = [0];
    this.vzArray = [...this.vzPreset];
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
