/**
 * Complete date: 12/05/19
 * https://dev.to/thepracticaldev/daily-challenge-131-remove-anchor-from-url-2b6
 */
export function remove_url_anchor(str: string): string {
  return str.split['#'][0];
}