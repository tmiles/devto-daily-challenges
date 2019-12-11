/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-135-the-wide-mouthed-frog-ie9
 */
export function mouthSize(str: string) : string {
  return str.toLowerCase().trim() === 'alligator' ? 'small': 'wide';
}