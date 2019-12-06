/**
 * Complete date:
 * https://dev.to/thepracticaldev/daily-challenge-110-love-vs-friendship-20b
 */
export function wordsToMarks(val: string): number {
  // Convert to character by character, map to values, accumulate sum
  let arr = Array.from(val.toLowerCase()).map((character) => { return character.charAt(0) - "a".charAt(0); });
  return arr.reduce((acc, o) => acc + o);
}