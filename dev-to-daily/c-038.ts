/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-38-middle-name-45ie
 */
export function initializeMiddle(name: string) : string {
  let arr = name.trim().split(" ");
  for(let i = 1; i < arr.length - 1; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + ".";
  }
  return arr.join(" ");
}