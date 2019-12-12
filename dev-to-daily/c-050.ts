/**
 * https://dev.to/thepracticaldev/daily-challenge-50-number-neighbor-44jm
 */
export function numberNeighbor(phone: string): string {
  phone = parseInt(phone.replace(/[-]/gi, "")).toString();

  return phone;
} 