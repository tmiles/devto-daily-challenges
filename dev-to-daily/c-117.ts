/**
 * Complete date: 12/5/19
 * https://dev.to/thepracticaldev/daily-challenge-117-minminmax-2kmn
 */
export function MinMinMax(numbers: number[]) : [ number, number, number] {
  let arr = numbers.sort((a,b) => a-b); // numerical
  for(let i = 1; i < arr.length; i++) {
    if(arr[i-1]-arr[i] > 1) {
      return [ arr[0], arr[i] + 1, arr[arr.length - 1]];
    }
  }
  return [ arr[0], null, arr[arr.length - 1]];
}