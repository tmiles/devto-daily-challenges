/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-44-mexican-wave-kk4
 */
export function makeWave(str: string) : string[] {
  str = str.toLowerCase().trim();
  let arr = new Array(str.length).fill(str);
  for(let i = 0; i < arr.length; i++) {
    arr[i] = ((i === 0) ? "" : arr[i].substr(0, i)) + arr[i].charAt(i).toUpperCase() + ((i === arr.length - 1) ? "" : arr[i].substr(i + 1, arr.length - 1));
  }
  return arr;
}