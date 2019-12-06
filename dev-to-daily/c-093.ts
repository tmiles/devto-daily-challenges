/**
 * Complete date: 12/6/19
 * https://dev.to/thepracticaldev/daily-challenge-93-range-extraction-42hb
 */
export function rangeExtractor(numbers: number[]) : string[] {
  let ret: string[] = [];
  if(numbers.length > 0) { 
    let startIndex = 0;
    let endIndex = 0;
    let i = 0;
    for(; i < numbers.length-1; i++) {
      if(numbers[i + 1] - numbers[i] > 1) { // more than 1 apart (or end of sequence)
        if(startIndex) { // if on a run, record that run and then continue on
          if(i+1 - startIndex >= 3) {
            ret.push(`${numbers[startIndex]}-${numbers[i]}`);
          } else {
            ret.push(`${numbers[startIndex]}`);
            ret.push(`${numbers[i]}`);
          }
          startIndex = null;
        } else {
          ret.push(`${numbers[i]}`);
        }
      } else if(numbers[i + 1] - numbers[i] === 1) {
        if(!startIndex) { // start a new "run"
          startIndex = i;
        }
      }
    }
    // if still has a streak at the end
    if(startIndex) {
      ret.push(`${numbers[startIndex]}-${numbers[i]}`);
      startIndex = null;
    } else { // add last one if can't find one

      ret.push(`${numbers[i]}`);
    } 
  }
  return ret;
}