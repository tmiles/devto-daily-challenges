/**
 * Complete date: 07.10.20
 * https://dev.to/thepracticaldev/daily-challenge-141-two-sum-4nb8
 */
export function targetNumber(values: number[], target: number): any {
  if (values.length === 0) {
    return null;
  }
  let index = 0;
  let valMap = {};
  values.forEach((el) => {
    if (!valMap[el]) {
      valMap[el] = [];
    }
    valMap[el].push(index);
    index++;
  });
  let retPairs = [];
  let mapLength = Object.keys(valMap).length;
  for (let i = 0; i < mapLength; i++) {
    let valA = parseInt(Object.keys(valMap)[i]);
    // Skip if there's only one number, don't add yourself twice. Only applicable if duplicates i.e. [2,2]
    for (let j = valMap[valA].length === 1 ? i + 1 : i; j < mapLength; j++) {
      let valB = parseInt(Object.keys(valMap)[j]);
      if (valA + valB === target) {
        retPairs.push([valMap[valA], valMap[valB]]);
        break;
      }
    }
  }
  return retPairs.length == 0 ? null : retPairs;
}

export function testTargetNumber() {
  console.log(targetNumber([1234, 5678, 9012, 9012, 9011, 5679], 14690));
  console.log(targetNumber([1, 2, 3], 4));
  console.log(targetNumber([2, 2, 3], 4));
  console.log(targetNumber([5, 10, 15, 20, 25, 30], 50));
}
testTargetNumber();
