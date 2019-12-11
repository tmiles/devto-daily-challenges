/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-39-virus-4jkj
 */
export function textVirusRemover(text: string) : string {
  text = text.toLowerCase().trim().split("ie").join("ei");
  return text.split(" ").map((el) =>  `${el.charAt(0).toUpperCase()}${el.substr(1, el.length - 1)}`).join(" ");
}