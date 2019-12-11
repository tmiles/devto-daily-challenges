/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-27-unlucky-days-3n90
 */
export function countUnlucky(year: number) : number {
  let count = 0;
  for(let i = 0; i <= 12; i++) {
    count += (new Date(year, i, 13 - 1).getDay() === 5) ? 1: 0;
  }
  return count;
}