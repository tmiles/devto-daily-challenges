/**
 * complete date: 11/21/19
 * https://dev.to/thepracticaldev/daily-challenge-21-human-readable-time-31pf
 */
export function timeWords(num: number): string {

  if(num < 0) { return null; }
  else if(num === 0) { return 'now'; }
  let str = "";
  Object.keys(seconds).forEach((unit) => {
    let factor = Math.floor(num/seconds[unit]);
    if(factor > 1) { // to put the (s) in
      unit += "s";
    }
    if(factor > 0) {
      str += `${factor} ${unit} `;
    }
    num = num % seconds[unit]; // make smaller
  });
  // in seconds now
  if(num == 0) {
    return str.substring(0, str.length - 2); // remove the trailing space
  }
  return str + `${num} second${ num > 0 ?  's' : ''}`;
}

const seconds = {
  'year': 31556952,
  'month': 2629746,
  'week': 604800,
  'day': 86400,
  'hour': 3600,
  'min': 60,
};