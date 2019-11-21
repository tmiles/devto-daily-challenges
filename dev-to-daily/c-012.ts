/**
 * Complete date: 11/21/19
 * https://dev.to/thepracticaldev/daily-challenge-12-next-larger-number-3f3o
 */
export function largestNum(num: number): number {
  let values: number[] = [];
  let str = `${num}`;
  for(let i = 0; i < str.length; i++) {
    values.push(parseInt(str[i]));
  }
  values = values.sort((a, b) => { return a-b; });
  let newNumber = 0;

  for(let i = 0; i < values.length; i++) {
    newNumber += (values[(values.length - i - 1)]) * Math.pow(10, i);
  }
  if(newNumber <= num) {
    return null;
  }
  return newNumber;
}
