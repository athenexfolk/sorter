import { ISort, SortOptions } from '../abstracts/sort';

export class MergeSort implements ISort {
  sort(array: number[], options: SortOptions): void {
    mergeSort(array, options);
  }
  async sortAsync(array: number[], options: SortOptions): Promise<void> {
    await mergeSortAsync(array, options);
  }
  immutateSort(array: number[], options: SortOptions): number[] {
    return immutateMergeSort(array, options);
  }
  async immutateSortAsync(
    array: number[],
    options: SortOptions
  ): Promise<number[]> {
    return await immutateMergeSortAsync(array, options);
  }
}

export function mergeSort(
  array: number[],
  { reverse }: SortOptions = { reverse: false },
  start = 0,
  end = array.length
): void {
  if (end - start <= 1) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(array, { reverse }, start, mid);
  mergeSort(array, { reverse }, mid, end);

  merge(array, { reverse }, start, mid, end);
}

export async function mergeSortAsync(
  array: number[],
  { reverse, runner, delay }: SortOptions = { reverse: false, delay: 10 },
  start = 0,
  end = array.length
): Promise<void> {
  if (end - start <= 1) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  await mergeSortAsync(array, { reverse, runner, delay }, start, mid);
  await mergeSortAsync(array, { reverse, runner, delay }, mid, end);

  await mergeAsync(array, { reverse, runner, delay }, start, mid, end);
}

export function immutateMergeSort(
  source: number[],
  options?: SortOptions
): number[] {
  const array = [...source];
  mergeSort(array, options);
  return array;
}

export async function immutateMergeSortAsync(
  source: number[],
  { reverse, delay, runner }: SortOptions
): Promise<number[]> {
  const array = [...source];
  await mergeSortAsync(array, { reverse, delay, runner });
  return array;
}

function merge(
  array: number[],
  { reverse }: SortOptions,
  start: number,
  mid: number,
  end: number
) {
  let [left, right] = [start, mid];
  let result: number[] = [];

  while (left < mid && right < end) {
    if (array[left] < array[right]) {
      result.push(array[left++]);
    } else {
      result.push(array[right++]);
    }
  }

  while (left < mid) {
    result.push(array[left++]);
  }

  while (right < end) {
    result.push(array[right++]);
  }

  for (let i = 0; i < result.length; i++) {
    array[start + i] = result[i];
  }
}

async function mergeAsync(
  array: number[],
  { reverse, delay }: SortOptions,
  start: number,
  mid: number,
  end: number
) {
  let [left, right] = [start, mid];
  let result: number[] = [];

  while (left < mid && right < end) {
    if (array[left] < array[right] !== reverse) {
      result.push(array[left++]);
    } else {
      result.push(array[right++]);
    }
  }

  while (left < mid) {
    result.push(array[left++]);
  }

  while (right < end) {
    result.push(array[right++]);
  }

  for (let i = 0; i < result.length; i++) {
    array[start + i] = result[i];
    if (delay && delay > 0)
      await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
