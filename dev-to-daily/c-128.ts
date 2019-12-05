/**
 * Complete date: 12/5/19
 * https://dev.to/thepracticaldev/daily-challenge-128-blackjack-scorer-4lhp
 */
export function blackjackScorer(scores: string[]): number {
  let sum: number = 0; 
  for(let i = 0; i < 5; i++) {
    let num = parseInt(scores[i]);
    sum += (num) ? num : 10;
    if(scores[i].toLowerCase() === 'a') { sum++; }
  }
  return (sum > 21) ? 0: sum;
}
