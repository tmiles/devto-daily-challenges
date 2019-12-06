/**
 * Complete date: 12/6/19
 * https://dev.to/thepracticaldev/daily-challenge-88-recursive-ninjas-42jb
 */
export function recursiveString(str: string, specCharacter: string, freq: number) : string {
  if(freq <= 0) { return ""; }
  return (freq === 1) ? `${str}`: `${str}${specCharacter}` + recursiveString(str, specCharacter, freq - 1);
}