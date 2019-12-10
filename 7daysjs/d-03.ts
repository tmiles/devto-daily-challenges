/**
 * Complete date: 12/10/19
 * https://dev.to/lautarolobo/7daysjs-read-my-sign-1b0n
 */
export function sumType(arr: number[]) : number[] {
  let pos = arr.filter((val) => val >= 0).reduce(reducer);
  let zero = arr.filter((val) => val === 0).reduce(reducer);
  return [pos, zero, arr.length - (pos + zero)];
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;