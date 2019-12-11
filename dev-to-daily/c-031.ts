/**
 * Complete date: 12/11/19
 * https://dev.to/thepracticaldev/daily-challenge-31-count-ipv4-addresses-487j
 */
export function countIP4(ip1: string, ip2: string) {
  let arr1 = ip1.split(".");
  let arr2 = ip2.split(".");
  let inc1 = 0;
  let inc2 = 0;
  for(let i = 0; i < 4; i++) {
    inc1 += parseInt(arr1[i]) * Math.pow(256, 3 - i);
    inc2 += parseInt(arr2[i]) * Math.pow(256, 3 - i);
  }
  return inc2 - inc1;
}