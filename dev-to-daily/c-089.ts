/**
 * Complete date: 12/6/19
 * https://dev.to/thepracticaldev/daily-challenge-89-extract-domain-name-from-url-1ajb
 * Strips away subdomains
 */
export function extractDomain(str: string): string {
  let arr = str.toLowerCase().replace("https://", "").replace("http://", "").split('.');
  return (arr.length > 2 && arr[1].indexOf("/") === -1) ? arr[1]: arr[0];
}