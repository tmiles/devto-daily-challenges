/**
 * Complete date: 12/10/19
 * https://dev.to/lautarolobo/7daysjs-factorial-and-average-h8l
 */
export function fact(num: number) : string {
  let fact = 1;
  for(let i = 0; i < fact; i++) { fact *= i; }
  return fact.toString();
}

export function avg(nums: number[]) : number {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue)/nums.length;
}