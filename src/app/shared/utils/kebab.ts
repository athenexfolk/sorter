export function kebabize(input: string): string {
  return input
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]+/g, '')
    .toLowerCase();
}
