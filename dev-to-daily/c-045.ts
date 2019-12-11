/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-45-change-machine-414i
 */
let MAPPING = {
  25: 0,
  10: 0,
  5: 0,
  1: 0
}
export function calculateChange(value: number, mapping: any) : any {
  if(value < 0) { return null};
  Object.keys(mapping).sort((a, b) => parseInt(b)-parseInt(a)).forEach((key) => {
    mapping[key] = Math.floor(value/parseInt(key));
    value %= parseInt(key);
  })
  return mapping;
}