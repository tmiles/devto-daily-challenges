/**
 * Complete date: 12/10/19
 * https://dev.to/lautarolobo/7-days-of-js-even-or-odd-5f2g
 */
export function sumOddEven(arr: number[]) : number[] {
  return [arr.filter((val) => val % 2 === 0).reduce(reducer), arr.filter((val) => val % 2 === 1).reduce(reducer)];
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;