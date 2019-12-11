/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-37-name-swap-4hg5
 * @bug assumes 1 - 3 letter names, hyphens are okay
 */
export function nameShuffler(name: string): string {
  return name.trim().split(" ").reverse().join(" ");
}