/**
 * Complete date: 11/21/19
 * https://dev.to/thepracticaldev/daily-challenge-16-number-of-people-on-the-bus-dik
 */
export function busOperator(stops: BusStop[]): number {
  let count = 0;
  for(let i = 0; i < stops.length; i++) {
    count = (count + stops[i].on) - (stops[i].off);
    if(count < 0 ) { return null; } // can't have negative people on Bus
  }
  return count;
}

interface BusStop {
  on: number;
  off: number;
}