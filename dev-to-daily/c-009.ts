
/**
 * Complete date: 11/20/19
 * https://dev.to/thepracticaldev/daily-challenge-9-what-s-your-number-3707
 */
export function numberFormatter(numbers: number[]): string {
  if(numbers.length != 10) {
    return null;
  }
  let n = numbers;
  return 
  `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;

}