/**
 * Complete date: 12/5/19
 * https://dev.to/thepracticaldev/daily-challenge-129-clay-pigeon-shooting-1l4b
 */

export function shoot(val: ShootingScore[]): string {
  let P1 = 0;
  let P2 = 0;
  val.forEach((score: ShootingScore) => {
    P1 += ((score.P1).split("X").length - 1) * (score.score ? 2: 1);
    P2 += ((score.P2).split("X").length - 1) * (score.score ? 2: 1);
  });
  if (P1 == P2) { return 'Draw'; }
  return (P1 > P2)? 'Pete Wins!': 'Paul Wins!';
}


interface ShootingScore {
  P1: string;
  P2: string;
  score: boolean; // true = 2 points
}

[[{P1:'XX', P2:'XO'}, true], [{P1:'OX', P2:'OO'}, false], [{P1:'XX', P2:'OX'}, true]]