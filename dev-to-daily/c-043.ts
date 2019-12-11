/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-43-boardgame-fight-resolver-53e3
 */
export function gameResolver(attacker: string, defender: string, characters: any) {
  return characters[attacker] === characters[defender] ? true: characters[attacker] < characters[defender];
}

const MAP = {
  "archers": 1,
  "swordsmen": 2,
  "pikeman": 3,
  "cavalry": 4,
};