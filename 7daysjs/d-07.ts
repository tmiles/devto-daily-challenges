/**
 * Complete date: 12/10/19
 * https://dev.to/lautarolobo/7daysjs-primes-until-n-c7h
 */
export function primes(num: number) : number[] {
  let vals: number[] = [];
  if(num === 1) { 
    vals.push(1);
  } else if(num === 2) { vals.push(1); vals.push(2); }
  else if(num > 2) {
    for(let i = 2; i < num - 1; i++) {
      if(isPrime(i)) { vals.push(i); }
    }
  }
  return vals;
}

export function isPrime(num: number) : boolean {
  for(let i = 2; i <= num - 1; i++) {
    if(num % i == 0) {
      return false;
    }
  }
  return true;
}

