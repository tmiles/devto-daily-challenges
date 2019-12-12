/**
 * https://dev.to/thepracticaldev/daily-challenge-49-dollars-and-cents-3en
 */
export function formatMoney(num: number) : string {
  return `${Math.floor(num)}.${Math.round((num - Math.floor(num)) * 100)}`;
}