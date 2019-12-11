/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-28-kill-the-monster-25d2
 */
export function killMonsters(health: number, numMonsters: number, monsterDamage: number) : string {
  if(health < 0 || numMonsters < 0 || monsterDamage < 0) { return null; }
  let hits = Math.floor((numMonsters - 1)/3);
  let dmg = hits * monsterDamage;
  let remainingHealth = health - dmg;
  return (remainingHealth < 0 ) ? "You died" : `hits: ${hits}, damage: ${dmg}, health: ${remainingHealth}`;
}