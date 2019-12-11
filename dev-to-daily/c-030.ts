/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-30-what-is-the-price-16ee
 */
export function discoverOriginalPrice(discountPrice: number, discount: number) : number {
  return (discount < 0 ) ? null : discountPrice / (1 - ((discount > 1) ? discount / 100: discount));
}