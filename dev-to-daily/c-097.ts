/**
 * Complete date: 12/6/19
 * https://dev.to/thepracticaldev/daily-challenge-97-greed-is-good-1829
 */
export function countGreed(vals: [number, number, number, number, number]): number {
  let count = 0;
  let obj = {};
  // Remove duplicates and count frequency
  vals.forEach((val) => {
      obj[val] = (obj[val]) ? obj[val] + 1: 1;
  });
  Object.keys(obj).forEach((key) => {
    count += calcPoints(obj[key], parseInt(key));
  })
  return count;
}

function calcPoints(freq: number, val: number): number {
  if(val > 6) { return 0; }
  switch(freq) {
    case 5:
      return calcPoints(3, val) + calcPoints(2, val);
    case 4:
      return calcPoints(3, val) + calcPoints(1, val);
    case 3:
      if(val === 1) {
        return 1000;
      }
      return val * 100;
    case 2:
      return 2 * calcPoints(1, val);
    case 1:
      if(val === 1) {
        return 100;
      } else if(val === 5) {
        return 50;
      }
      return 0;
  }
}