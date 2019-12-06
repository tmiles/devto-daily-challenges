/**
 * Complete date: 12/5/19
 * https://dev.to/thepracticaldev/daily-challenge-114-speed-control-3amb
 */
export function maxSpeed(numbers: number[], speed: number): number {
  if(numbers.length < 1) { return 0; }
  let speeds = [];
  for(let i = 0; i < numbers.length - 1; i++) {
    speeds[i] = 3600 * (numbers[i+1] - numbers[i])/speed;
  }
  return Math.floor(Math.max(...speeds));

}