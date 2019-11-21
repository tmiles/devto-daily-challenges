/**
 * Complete date: 11/20/19
 * https://dev.to/thepracticaldev/daily-challenge-120-growth-of-a-population-7a5
 */
export function popPosGrowth(initial: number, percent: number, immigrants: number, threshold: number) : number {
  if(threshold < initial) {
    return null;
  } else if(threshold === initial) {
    return 0; // 0 years
  } else if(percent < 0) {
    return null;
  }
  let current = initial;
  let maxCap = 2000; // 2000 year cap
  let years = 0;
  while(current < threshold) {
    if(years > maxCap) { return null; } // maxed out to prevent infinite loop
    years++;
    current = current + Math.floor(current * (percent / 100.00)) + immigrants;
  }
  return years;
}



export function popChange(initial: number, percent: number, immigrants: number, threshold: number) : number {
  if(threshold < initial) {
    return null;
  } else if(percent < 0) {
    return null;
  } else if(immigrants ) {}
  let current = initial;
  while(current < threshold) {

  }
  return null;
}