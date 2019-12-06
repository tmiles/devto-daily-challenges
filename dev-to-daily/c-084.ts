/**
 * Complete date: 12/6/19
 * https://dev.to/thepracticaldev/daily-challenge-84-third-angle-of-a-triangle-3agk
 */
export function thirdAngle(ang1: number, ang2: number): number {
  return (ang1 < 0 || ang2 < 0 || ang1 + ang2 > 180) ? -1  : 180 - (ang1+ang2);
}