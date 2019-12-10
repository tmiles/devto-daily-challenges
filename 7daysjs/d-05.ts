/**
 * Complete date: 12/10/19
 * https://dev.to/lautarolobo/7daysjs-where-is-my-element-1gho
 */
export function arrFind(num: any, arr: any[]) : number {
  return arr.indexOf(num);
}

export function arrFindNaive(num: any, arr: any[]) : number {
  let index = -1;
  arr.forEach((el, i) => { if(el === num) { index = i;} });
  return index;
}