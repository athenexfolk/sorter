export function getRandomizedRange(min: number, max: number): number[] {
  const range = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  for (let i = range.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [range[i], range[randomIndex]] = [range[randomIndex], range[i]];
  }

  return range;
}
