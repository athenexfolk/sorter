export function getUniqueRandomizedArray(min: number, max: number): number[] {
  const array = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
