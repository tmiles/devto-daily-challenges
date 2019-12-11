/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-47-alphabets-4cbn
 */
export function alphaExtractor(strings: string) : number[] {
  return strings.toLowerCase().replace(/[^a-z]+/gi, "").split("").map((val) => (val.charCodeAt(0) - "a".charCodeAt(0) + 1));
}