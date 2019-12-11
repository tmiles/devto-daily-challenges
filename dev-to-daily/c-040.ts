/**
 * https://dev.to/thepracticaldev/daily-challenge-40-counting-sheep-6pc
 */
export function restlessTalker(count: number, text : string = "sheep"): string {
  return (count < 0) ? null : Array.from(Array(count).keys()).map((val) => (val + 1) + text).join("...");
}