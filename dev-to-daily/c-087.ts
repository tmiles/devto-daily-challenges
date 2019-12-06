/**
 * Complete date: 12/6/19
 * https://dev.to/thepracticaldev/daily-challenge-87-pony-express-3i5d
 */

export function minRiders(stops: number[], maxDistance: number) : number {
  if(stops.length === 0) { return 0; }
  let sum = 0;
  let distances = [];
  for(let i = 0; i < stops.length; i++) {
    if((sum + stops[i]) > maxDistance) {
      distances.push(sum + stops[i])
      sum = stops[i];
    }else {
      sum += stops[i];
    }
  }
  distances.push(sum);
  return distances.length;
}