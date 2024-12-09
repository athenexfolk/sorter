import { Injectable } from '@angular/core';

export type InsertionSortTrack = {
  array: number[];
  highlight: number[];
  action: 'def' | 'move' | 'insert' | 'start' | 'end';
  memory?: {
    key: number;
  };
};

@Injectable({
  providedIn: 'root',
})
export class InsertionSortService {
  mutateSort(array: number[]): number[] {
    const n = array.length;
    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
  }

  async mutateSortAsync(
    array: number[],
    ms: number = 10,
    mutr?: number[]
  ): Promise<number[]> {
    const n = array.length;
    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        if (mutr && mutr[0] !== undefined) {
          mutr[0] = j;
        }

        array[j + 1] = array[j];
        j--;

        if (ms > 0) await new Promise((resolve) => setTimeout(resolve, ms));
      }
      array[j + 1] = key;
    }
    return array;
  }

  sort(arr: number[]): number[] {
    const n = arr.length;
    const array = [...arr];
    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
  }

  trackSort(arr: number[]): {
    sortedArray: number[];
    steps: InsertionSortTrack[];
  } {
    const n = arr.length;
    const array = [...arr];
    const steps: InsertionSortTrack[] = [];

    steps.push({
      array: [...array],
      highlight: [],
      action: 'start',
    });

    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;

      steps.push({
        array: [...array],
        highlight: [i],
        action: 'def',
        memory: {
          key,
        },
      });

      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;

        steps.push({
          array: [...array],
          highlight: [j + 1, j + 2],
          action: 'move',
          memory: {
            key,
          },
        });

      }
      array[j + 1] = key;
      
      steps.push({
        array: [...array],
        highlight: [j + 1],
        action: 'insert',
        memory: {
          key,
        },
      });
    }

    steps.push({
      array: [...array],
      highlight: [],
      action: 'end',
    });

    return { sortedArray: array, steps };
  }
}
