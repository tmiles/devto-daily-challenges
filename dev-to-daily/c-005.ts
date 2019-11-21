/**
 * Finish date: 11/20/19
 * https://dev.to/thepracticaldev/daily-challenge-5-ten-minute-walk-1188
 */
export function guidedWalk(iterations: number, directions?: string[] | ['n', 's', 'w', 'e']): string {
  if(iterations < 0) {
    return null;
  }
  let path: string = '';
  for(let i = 0; i < iterations; i++) {
    path += directions[Math.floor(Math.random() * directions.length)];
  }
  return path;
}