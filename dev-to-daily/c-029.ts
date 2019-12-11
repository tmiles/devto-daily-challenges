/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-29-xs-and-os-12mj
 */
export function sameChars(str: string, char1: string  = "x", char2 : string = "o"): boolean {
  let arr = str.toLowerCase().split("");
  return (arr.filter((el) => el === char1).length === arr.filter((el) => el === char2).length);
}