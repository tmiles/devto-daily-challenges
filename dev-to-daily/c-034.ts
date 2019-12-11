/**
 * Complete date: 12/11/19
 * https://dev.to/devteam/daily-challenge-34-weird-string-case-54bo
 */
export function stringCase(str: string) {
  let arr = str.toLowerCase().split("");
  for(let i = 0 ; i < str.length; i+=2) {
    arr[i] = arr[i].toUpperCase();
  }
  return arr.join("");
}