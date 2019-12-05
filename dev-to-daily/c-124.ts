/**
 * Complete date: 12/05/19
 * https://dev.to/thepracticaldev/daily-challenge-124-middle-me-461g
 */
export function middleMe(char: string, occurance: number, middle: string): string {
  return (occurance % 2 === 1) ? middle : (char.repeat(occurance/2) + middle + char.repeat(occurance/2));
}