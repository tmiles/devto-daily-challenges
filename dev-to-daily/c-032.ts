/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-32-hide-phone-numbers-ham
 */
export function hideNumber(phoneNumber: string) : string {
  // check validity
  let arr = phoneNumber.split("");

  let numbers = arr.filter((el) => { return parseInt(el) >= 0});
  if(numbers.length != 10 && numbers.length != 12) { return null; }
  let count = 0;
  
  for(let i = 0; i < phoneNumber.length ; i++) {
    if(parseInt(phoneNumber[i])) {
      if(count === 3) {
        count = i;
        break;
      }
      count++;
    }
  }
  return phoneNumber.substr(0, count) + phoneNumber.substr(count + 1, phoneNumber.length - 1).replace(/[0-9]/g, "X");
}