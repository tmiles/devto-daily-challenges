/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-48-facebook-likes-263l
 */
export function countLikes(likes: string[]) : string {
  switch (likes.length) {
    case 0:
      return "No one likes this";
    case 1:
      return `${likes[0]} likes this`;
    case 2:
      return `${likes[0]} and ${likes[1]} likes this`;
    case 3:
      return `${likes[0]}, ${likes[1]} and ${likes[2]} likes this`;
  }
  return `${likes[0]}, ${likes[1]} and ${likes.length -2} others like this`
}