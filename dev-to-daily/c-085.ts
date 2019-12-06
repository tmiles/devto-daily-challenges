/**
 * Complete date: 12/6/19
 * https://dev.to/thepracticaldev/daily-challenge-85-unwanted-dollars-39ll
 */
export function currencyPipe(str: string) : string {
  let num: number = parseFloat(str.toLowerCase().replace(/[^0-9.]/g, ""));
  return (!num) ? "0.0": `$${num}`;
}