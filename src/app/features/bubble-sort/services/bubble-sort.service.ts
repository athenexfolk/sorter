import { Injectable } from '@angular/core';
import { ISort, ISortTrack } from '../../../core/abstracts/sort';

export interface BubbleSortTrack extends ISortTrack {
  array: number[];
  highlight: number[];
  /* Action Definition
      Compare = Comparing two numbers
      Swap    = Swapping two numbers when first is more than second
      No Swap = No swaps are made in secondary loop
      Break   = Stopping the sorting process when no swaps are made in one primary loop */
  action: 'compare' | 'swap' | 'noswap' | 'break' | 'start' | 'end';
  memory?: {
    swapped: boolean;
  };
}

@Injectable({
  providedIn: 'root',
})
export class BubbleSortService implements ISort<BubbleSortTrack> {
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

  track(arr: number[]): {
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
          memory: {
            swapped,
          },
        });
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
          steps.push({
            array: [...array],
            highlight: [j, j + 1],
            action: 'swap',
            memory: {
              swapped,
            },
          });
        } else {
          steps.push({
            array: [...array],
            highlight: [j, j + 1],
            action: 'noswap',
            memory: {
              swapped,
            },
          });
        }
      }
      if (!swapped) {
        steps.push({
          array: [...array],
          highlight: [],
          action: 'break',
          memory: {
            swapped: false,
          },
        });
        break;
      }
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

  async mutateSortAsync(
    array: number[],
    speed: number = 10,
    mutr?: number[]
  ): Promise<number[]> {
    const n = array.length;
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (mutr && mutr[0] !== undefined) {
          mutr[0] = j;
        }
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }

        if (speed > 0)
          await new Promise((resolve) => setTimeout(resolve, speed));
      }
      if (!swapped) break;
    }
    return array;
  }
}
