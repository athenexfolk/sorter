import { ISort, SortOptions } from '../abstracts/sort';

export class BubbleSort implements ISort {
  sort(array: number[], options: SortOptions): void {
    bubbleSort(array, options);
  }
  async sortAsync(array: number[], options: SortOptions): Promise<void> {
    await bubbleSortAsync(array, options);
  }
  immutateSort(array: number[], options: SortOptions): number[] {
    return immutateBubbleSort(array, options);
  }
  async immutateSortAsync(
    array: number[],
    options: SortOptions
  ): Promise<number[]> {
    return await immutateBubbleSortAsync(array, options);
  }
}

export function bubbleSort(
  array: number[],
  { reverse }: SortOptions = { reverse: false }
): void {
  const n = array.length;
  let swapped: boolean;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (reverse ? array[j] < array[j + 1] : array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

export async function bubbleSortAsync(
  array: number[],
  { reverse, runner, delay }: SortOptions = { reverse: false, delay: 10 }
): Promise<void> {
  const n = array.length;
  let swapped: boolean;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (runner) {
        runner.index = j + 1;
      }

      if (reverse ? array[j] < array[j + 1] : array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }

      if (delay && delay > 0)
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
    if (!swapped) break;
  }
  if (runner) {
    runner.index = null;
  }
}

export function immutateBubbleSort(
  source: number[],
  { reverse }: SortOptions
): number[] {
  const array = [...source];
  bubbleSort(array, { reverse });
  return array;
}

export async function immutateBubbleSortAsync(
  source: number[],
  { reverse, delay, runner }: SortOptions
): Promise<number[]> {
  const array = [...source];
  await bubbleSortAsync(array, { reverse, delay, runner });
  return array;
}
