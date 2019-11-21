/**
 * Complete date: Needs testing for edge cases
 * https://dev.to/thepracticaldev/daily-challenge-8-scrabble-word-calculator-41f6
 */
export function scrabbleScorer(word: string): Number {
  word = word.trim().toLowerCase();

  let wordMod = 1;

  // Determine the word modifier
  if (word.indexOf("d") > -1) {
    wordMod = 2;
  } else if (word.indexOf("t") > -1) {
    wordMod = 3;
  }
  let points = 0;
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    let next = word[i + 1];
    if (next) {
      if (next === "*") {
        let nextNext = word[i + 2];
        if (nextNext && nextNext === "*") {
          // Triple value
          points += values[letter] * 3;
          i++;
        } else {
          // double value
          points += values[letter] * 3;
          i++;
        }
      } else if (next === "^") {
        i++; // skip it 
      } else {
        // no special character next
        let newPoints = checkLetter(letter);
        points += newPoints ? newPoints : 0;
      }
    } else {
      let newPoints = checkLetter(letter);
      points += newPoints ? newPoints : 0;
    }
  }
  return points;
}

function checkLetter(letter: string): number {
  if (letter.length != 1) {
    return null;
  }

  return values[letter] ? values[letter] : null;
}

let values = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 1,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 2,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
};
