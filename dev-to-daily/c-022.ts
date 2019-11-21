/**
 * Complete date: 11/21/19
 * https://dev.to/thepracticaldev/daily-challenge-22-simple-pig-latin-3ddl
 */
export function pigLatin(st: string) : string {
  let strs = st.split(" "); // words
  strs.forEach((str) => {
    str = str.substring(1, str.length - 1) + str[0] + "ay";
  });

  return strs.join(" ");
}