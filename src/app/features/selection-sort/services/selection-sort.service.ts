import { Injectable } from '@angular/core';
import { ISort, ISortTrack } from '../../../core/abstracts/sort';

export interface SelectionSortTrack extends ISortTrack {
  array: number[];
  highlight: number[];
  /* Action Definition
      Def     = Defined minimum value
      Compare = Comparing minimum value with current value
      Min     = Found new minimum value
      Swap    = Swapping old minimum value with new minimum value */
  action: 'def' | 'compare' | 'min' | 'swap' | 'start' | 'end';
  oldMin: number;
  min: number;
  memory?: {
    minIndex: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class SelectionSortService implements ISort<SelectionSortTrack> {
  mutateSort(array: number[]): number[] {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
    return array;
  }

  async mutateSortAsync(
    array: number[],
    ms: number = 10,
    mutr?: number[]
  ): Promise<number[]> {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (mutr && mutr[0] !== undefined) {
          mutr[0] = j;
        }
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
        if (ms > 0) await new Promise((resolve) => setTimeout(resolve, ms));
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
    return array;
  }

  sort(arr: number[]): number[] {
    let n = arr.length;
    const array = [...arr];
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
    return array;
  }

  track(arr: number[]): {
    sortedArray: number[];
    steps: SelectionSortTrack[];
  } {
    let n = arr.length;
    const array = [...arr];
    const steps: SelectionSortTrack[] = [];

    steps.push({
      array: [...array],
      highlight: [],
      action: 'start',
      min: 0,
      oldMin: 0,
    });

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      steps.push({
        array: [...array],
        highlight: [],
        action: 'def',
        min: minIndex,
        oldMin: i,
        memory: {
          minIndex,
        },
      });
      for (let j = i + 1; j < n; j++) {
        steps.push({
          array: [...array],
          highlight: [j],
          action: 'compare',
          min: minIndex,
          oldMin: i,
          memory: {
            minIndex,
          },
        });
        if (array[j] < array[minIndex]) {
          steps.push({
            array: [...array],
            highlight: [minIndex, j],
            action: 'min',
            min: j,
            oldMin: i,
            memory: {
              minIndex,
            },
          });
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        steps.push({
          array: [...array],
          highlight: [i, minIndex],
          action: 'swap',
          min: minIndex,
          oldMin: i,
          memory: {
            minIndex,
          },
        });
      }
    }

    steps.push({
      array: [...array],
      highlight: [],
      action: 'end',
      min: 0,
      oldMin: 0,
    });

    return {
      sortedArray: array,
      steps,
    };
  }
}
