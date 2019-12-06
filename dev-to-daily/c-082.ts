/**
 * https://dev.to/thepracticaldev/daily-challenge-82-english-beggars-om9
 */
export function englishBeggers(arr: number[], beggerCount: number): number[] {
  let beggers = {}
  for(let i = 0; i < arr.length; i++) {
    beggers[i % beggerCount] = (beggers[i % beggerCount]) ? beggers[i % beggerCount] + arr[i] : arr[i]; 
  }
  return Object.keys(beggers).map(key => beggers[key]);
}