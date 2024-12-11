import { ISort, SortOptions } from '../abstracts/sort';

export class InsertionSort implements ISort {
  sort(array: number[], options: SortOptions): void {
    insertionSort(array, options);
  }
  async sortAsync(array: number[], options: SortOptions): Promise<void> {
    await insertionSortAsync(array, options);
  }
  immutateSort(array: number[], options: SortOptions): number[] {
    return immutateInsertionSort(array, options);
  }
  async immutateSortAsync(
    array: number[],
    options: SortOptions
  ): Promise<number[]> {
    return await immutateInsertionSortAsync(array, options);
  }
}

export function insertionSort(
  array: number[],
  { reverse }: SortOptions = { reverse: false }
): void {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && (reverse ? array[j] < key : array[j] > key)) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
}

export async function insertionSortAsync(
  array: number[],
  { reverse, runner, delay }: SortOptions = { reverse: false, delay: 10 }
): Promise<void> {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && (reverse ? array[j] < key : array[j] > key)) {
      if (runner) runner.index = j;

      array[j + 1] = array[j];
      j--;

      if (delay && delay > 0)
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
    array[j + 1] = key;
    if (delay && delay > 0)
      await new Promise((resolve) => setTimeout(resolve, delay));
  }

  if (runner) runner.index = null;
}

export function immutateInsertionSort(
  source: number[],
  { reverse }: SortOptions
): number[] {
  const array = [...source];
  insertionSort(array, { reverse });
  return array;
}

export async function immutateInsertionSortAsync(
  source: number[],
  { reverse, delay, runner }: SortOptions
): Promise<number[]> {
  const array = [...source];
  await insertionSortAsync(array, { reverse, delay, runner });
  return array;
}
