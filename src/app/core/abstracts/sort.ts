export type Runner = {
  index: number | null;
};

export type SortOptions = {
  reverse: boolean;
  delay?: number;
  runner?: Runner;
};

export interface ISort {
  sort(array: number[], options: SortOptions, ...extend: any): void;
  sortAsync(
    array: number[],
    options: SortOptions,
    ...extend: any
  ): Promise<void>;
  immutateSort(array: number[], options: SortOptions, ...extend: any): number[];
  immutateSortAsync(
    array: number[],
    options: SortOptions,
    ...extend: any
  ): Promise<number[]>;
}
