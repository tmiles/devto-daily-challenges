
/**
 * 
 * Complete date: 11/21/19
 * Alterations: Outputs the number of matches with the schema
 * https://dev.to/thepracticaldev/daily-challenge-18-triple-trouble-2cil
 */

export function tripleDouble(num1: number, num2: number) : number {
  
  // check if num1 has a 3 number regex
  let str1: string = `${num1}`;
  let str2: string = `${num2}`;
  if(str1.length < 3 || str2.length < 2) {
    return 0;
  }
  let cons1: string[] = [];
  let tmp = null;
  let count = 1;
  str1.split("").forEach((char) => {
    if(char === tmp) {
      // increment count
      count++;
      if(count === 3) {
        cons1.push(char);
      }
    } else {
      tmp = char;
      count = 1;
    }
  });
  // Resets
  count = 1;
  tmp = null;

  let cons2: string[] = [];
  str2.split("").forEach((char) => {
    if(char === tmp) {
      // increment count
      count++;
      if(count === 2) {
        cons2.push(char);
      }
    } else {
      tmp = char;
      count = 1;
    }
  });

  let matches = 0;
  // now check if they share same character
  for(let i = 0; i < cons1.length; i++) {
    if(cons2.indexOf(cons1[i])) {
      matches++; 
    }
  }
  return matches;
}