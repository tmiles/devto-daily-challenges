/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-46-17fb
 */
export function removePunctuation(str: string) : string {
  return str.replace(/[?]/g, "");
}