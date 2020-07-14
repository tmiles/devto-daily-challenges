/**
 * Complete date: 07.10.20
 * https://dev.to/thepracticaldev/daily-challenge-142-parts-of-a-whole-56mk
 */
export function partsOfWhole(value: number): number[] {
  if (value === 0) {
    return null;
  }
  let returnValues = [];
  let valueArray = `${Math.abs(value)}`.split("").map((el) => parseInt(el));

  let valueArrayLength = valueArray.length;
  for (let i = 0; i < valueArrayLength; i++) {
    let valA = valueArray[i];
    for (let j = i + 1; j < valueArrayLength; j++) {
      returnValues.push(valA + valueArray[j]);
    }
  }
  return returnValues;
}

export function testPartsOfWhole() {
  console.log("BEGIN TESTING");
  console.log(partsOfWhole(12345));
  console.log(partsOfWhole(-12345));
  console.log(partsOfWhole(156));
  console.log(partsOfWhole(81596));
  console.log(partsOfWhole(3852));
  console.log(partsOfWhole(3264128));
  console.log(partsOfWhole(999999));
  console.log("END TESTING");
}

testPartsOfWhole();
