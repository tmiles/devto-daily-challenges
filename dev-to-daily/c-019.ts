
/**
 * https://dev.to/thepracticaldev/daily-challenge-19-turn-numbers-into-words-1bie
 */
export function numToWord(value: number) : string {
  let ret = "";
  if(value < 0) {
    ret += "negative ";
    value = -1 * value;
  }
  
  // Number thirty or more
  let digits = `${value}`.split(""); // get all the digits

  switch(digits.length) {
    case 9: // x00,000,000
    case 8: // x0,000,000

    case 7: // x,000,000

    case 6: // x00,000


    case 5: // x0,000



    case 4: // x,000
      ret += `${wordMap[digits[0]]} thousand `;
      digits.shift(); // remove top number
    case 3: // x00
      ret += `${wordMap[digits[0]]} hundred `;
      digits.shift(); // remove top number
    default: 

  }

  if(value <= 20) {
    return ret + wordMap[`${value}`];
  }
  return ret;
}

const wordMap = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three', 
  '4': 'four', 
  '5': 'five', 
  '6': 'six', 
  '7': 'seven', 
  '8': 'eight', 
  '9': 'nine', 
  '10': 'ten', 
  '11': 'eleven', 
  '12': 'twelve', 
  '13': 'thirteen', 
  '14': 'fourteen', 
  '15': 'fifteen', 
  '16': 'sixteen', 
  '17': 'seventeen', 
  '18': 'eighteen', 
  '19': 'nineteen', 
  '20': 'twenty', 
  '30': 'thirty', 
  '40': 'fourty', 
  '50': 'fifty', 
  '60': 'sixty', 
  '70': 'seventy', 
  '80': 'eighty', 
  '90': 'ninety', 
}