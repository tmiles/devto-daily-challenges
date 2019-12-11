/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-35-find-the-outlier-31pe
 */
export function findOutlier(nums: number[]): number {
  if(nums.length < 3) { return null; }
  let odds = nums.filter((el) => (el % 2 === 1));
  return (odds.length > 0 && odds.length != nums.length) ? odds[0]: null;
}