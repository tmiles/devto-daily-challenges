/**
 * Complete date
 * https://dev.to/thepracticaldev/daily-challenge-111-99-bottles-of-beer-4l5h
 */
export function bottleReducer(startNumber: number, endNumber: number) : any {
  let ops = Math.floor((-1 + Math.sqrt(1 + 8 * (startNumber - endNumber)))/2); /* Can't be negative number of times */
  return {ops: ops, n: startNumber - ((ops + 1)* (ops + 2))/2};
  
}

// Pretty sure it's a quadratic solution, remove 1, 2, 3 -> n = n(n+1)/2. Instead of do the quadratic calculation with floor, then find out how many remaining 