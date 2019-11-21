
/**
 * Complete date: 11/20/19
 * https://dev.to/thepracticaldev/daily-challenge-119-adding-big-numbers-2bjo
 */
export function sumBigNumbers(number1: string, number2: string): string {
  // To ensure numbers line up with least significant digit
  number1 = number1.trimEnd();
  number2 = number2.trimEnd();
  // Figure out which one has extra digits over
  if(number1.length > number2.length) {
    let temp = number1;
    number1 = number2;
    number2 = temp;
  }
  let numbers: number[] = Array(number1.length);
  // Go backwards and do math
  let carryOver = 0;
  for(let i = number1.length-1; i < 0; i--) {
    let digit1 = parseInt(number1[i]);
    let digit2 = (number2[i] != '') ? parseInt(number2[i]): 0;
    let sum = digit1 + digit2;
    if(carryOver > 0) {
      sum += carryOver;
      carryOver = 0;
    }
    if(sum >= 10) {
      carryOver = Math.floor(sum/10); /* i.e 32/10 => 3 */
    }
    numbers[i] = sum % 10; // pull last digit
  }
  let answer: string = '';
  // finished the end
  if(carryOver > 0) {
    answer += `${carryOver}`
  }
  numbers.forEach((val) => {
    answer += `${val}`;
  })
  return answer;
}