import { ISort, SortOptions } from '../abstracts/sort';

export class SelectionSort implements ISort {
  sort(array: number[], options: SortOptions): void {
    selectionSort(array, options);
  }
  async sortAsync(array: number[], options: SortOptions): Promise<void> {
    await selectionSortAsync(array, options);
  }
  immutateSort(array: number[], options: SortOptions): number[] {
    return immutateSelectionSort(array, options);
  }
  async immutateSortAsync(
    array: number[],
    options: SortOptions
  ): Promise<number[]> {
    return await immutateSelectionSortAsync(array, options);
  }
}

export function selectionSort(
  array: number[],
  { reverse }: SortOptions = { reverse: false }
): void {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (reverse ? array[j] > array[minIndex] : array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
}

export async function selectionSortAsync(
  array: number[],
  { reverse, runner, delay }: SortOptions = { reverse: false, delay: 10 }
): Promise<void> {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (runner) runner.index = j;

      if (reverse ? array[j] > array[minIndex] : array[j] < array[minIndex]) {
        minIndex = j;
      }

      if (delay && delay > 0)
        await new Promise((resolve) => setTimeout(resolve, delay));
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  if (runner) runner.index = null;
}

export function immutateSelectionSort(
  source: number[],
  { reverse }: SortOptions
): number[] {
  const array = [...source];
  selectionSort(array, { reverse });
  return array;
}

export async function immutateSelectionSortAsync(
  source: number[],
  { reverse, delay, runner }: SortOptions
): Promise<number[]> {
  const array = [...source];
  await selectionSortAsync(array, { reverse, delay, runner });
  return array;
}
