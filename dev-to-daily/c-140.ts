/**
 * Complete date: 07.10.20
 * https://dev.to/thepracticaldev/daily-challenge-140-i-love-you-a-little-a-lot-passionately-not-at-all-52if
 */
export function loveFlower(n: number): string {
  if (n <= 0) {
    return null;
  }
  let prompts = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return prompts[n % prompts.length];
}
