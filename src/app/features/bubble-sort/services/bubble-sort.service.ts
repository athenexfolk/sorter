import { Injectable } from '@angular/core';

export type BubbleSortTrack = {
  array: number[];
  highlight: number[];
  action: 'compare' | 'swap' | 'start' | 'end';
};

@Injectable({
  providedIn: 'root',
})
export class BubbleSortService {
  mutateSort(array: number[]): number[] {
    const n = array.length;
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    return array;
  }

  async mutateSortAsync(array: number[], ms: number = 10): Promise<number[]> {
    const n = array.length;
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }

        if (ms > 0) await new Promise((resolve) => setTimeout(resolve, ms));
      }
      if (!swapped) break;
    }
    return array;
  }

  sort(arr: number[]): number[] {
    const n = arr.length;
    const array = [...arr];
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    return array;
  }

  trackSort(arr: number[]): {
    sortedArray: number[];
    steps: BubbleSortTrack[];
  } {
    const n = arr.length;
    const array = [...arr];
    let swapped: boolean;
    const steps: BubbleSortTrack[] = [];

    steps.push({
      array: [...array],
      highlight: [],
      action: 'start',
    });

    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({
          array: [...array],
          highlight: [j, j + 1],
          action: 'compare',
        });
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
          steps.push({
            array: [...array],
            highlight: [j, j + 1],
            action: 'swap',
          });
        }
      }
      if (!swapped) break;
    }

    steps.push({
      array: [...array],
      highlight: [],
      action: 'end',
    });

    return {
      sortedArray: array,
      steps,
    };
  }
}
