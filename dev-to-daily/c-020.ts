
/**
 * Complete date: Pending testing
 * https://dev.to/thepracticaldev/daily-challenge-post-20-number-check-4782
 */
export function numDetails(num: number): boolean[] {
  return [isPrime(num), (num % 2 == 0), (num % 10 === 0)];
}

function isPrime(num: number): boolean {
  for(let i = 2; i < num; i++) {
    for(let j = 2; j < num; j++) {
      if(i * j === num) {
        return true;
      }
    }
  }
  return false;
}