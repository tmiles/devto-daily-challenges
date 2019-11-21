/**
 * Complete date: -> almost done
 * https://dev.to/thepracticaldev/daily-challenge-3-vowel-counter-34ni
 */
export function vowelCounter(input: string, characters: string[]): number {
  input = input.toLowerCase().trim();
  let count = 0;
  characters.forEach((char) => {
    count += (input.match(`${char[0]}/g`) || []).length;
  })
  return count;
}