export interface ISortTrack {}

export interface ISort<T extends ISortTrack> {
  sort(arr: number[]): number[];
  track(arr: number[]): { sortedArray: number[]; steps: T[] };
  mutateSort(array: number[]): number[];
  mutateSortAsync(arr: number[], speed: number, mutr?: number[]): Promise<number[]>;
}
