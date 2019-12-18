/**
 * Complete date: 12/18/19 https://dev.to/thepracticaldev/daily-challenge-138-do-i-get-a-bonus-55i3
 */
export function calcBonus(salary: number, bonus: boolean) : string {
  return `$${(bonus) ? salary * 10: salary}`;
}