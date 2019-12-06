/**
 * Complete date: 12/6/19
 * https://dev.to/thepracticaldev/daily-challenge-95-camelcase-method-4lmm
 */
export function camelCase(str: string): string {
  return str.split(" ").map((word) => word.replace(/^./, word[0].toUpperCase())).join("");
}