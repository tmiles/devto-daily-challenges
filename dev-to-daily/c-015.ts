/**
 * 
 * @bugs doesn't deal with puncutation for strings same or longer length than maxSize
 * https://dev.to/thepracticaldev/daily-challenge-15-stop-gninnips-my-sdrow-255j
 */
export function flipString(input: string, maxSize: number): string {
  if(input.length === 0 || maxSize <= 0) {
    return null;
  }
  let retString = "";
  let split = input.split(" "); // assumes spaced out
  split.forEach((str) => {
    if(str.length >= maxSize) { // run operation
      // check puncutation, get substring
      str = str.split("").reverse().join(""); // flip text
    }
    retString += `${str} `;
  });
  return retString.substring(0, retString.length - 2) // remove trailing space;
}