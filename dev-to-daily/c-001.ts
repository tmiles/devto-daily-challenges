/**
 * Complete date: 11/20
 */
export function stringPeeler(input: string): string {
  if(input.length <= 2) {
    return null;
  }
  return input.slice(1, input.length);
}