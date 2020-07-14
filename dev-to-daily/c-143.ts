/**
 * Complete date:
 * https://dev.to/thepracticaldev/daily-challenge-143-big-arithmetic-l37
 */

function formatArrays(
  shortNumber: number[],
  longNumber: number[]
): { short: number[]; long: number[] } {
  let zeroIndex;
  if (longNumber[0] === 0) {
    console.log("Had to strip zeroes");
    for (zeroIndex = 0; zeroIndex < longNumber.length; zeroIndex++) {
      if (longNumber[zeroIndex] != 0) {
        break;
      }
    }

    longNumber = longNumber.slice(zeroIndex, longNumber.length);
    // console.log("Post stripped");
    // console.log(longNumberArray);
  }

  return shortNumber.length > longNumber.length
    ? { short: longNumber, long: shortNumber }
    : { short: shortNumber, long: longNumber };
}

export function bigAdd(
  value: number,
  longNumber: string,
  debug: boolean = false
): string {
  if (value === 0) {
    return longNumber;
  }
  if (value < 0) {
    return bigSub(longNumber, Math.abs(value));
  }
  let valueArr = `${value}`.split("").map((el) => parseInt(el));
  let longNumberArray = `${longNumber}`.split("").map((el) => parseInt(el));

  let res = formatArrays(valueArr, longNumberArray);
  valueArr = res.short;
  longNumberArray = res.long;
  let carry = 0;
  let j = 0;
  let i = 0;
  for (
    i = valueArr.length - 1, j = longNumberArray.length - 1;
    i >= 0 && j >= 0;
    i--, j--
  ) {
    let sum = valueArr[i] + longNumberArray[j] + carry;
    longNumberArray[j] = sum % 10; // strip away 10s digit
    carry = Math.floor(sum / 10); // get the tens digit
    if (carry === 0) {
      break;
    }
  }
  if (carry > 0) {
    if (j - 1 < 0) {
      longNumberArray = [carry, ...longNumberArray];
      //   console.log(longNumberArray);
      //   console.log("Post carry addition");
    } else {
      longNumberArray[j--] += carry;
    }
  }
  return debug
    ? `${value} + ${longNumber} = ` + longNumberArray.join("")
    : longNumberArray.join("");
}

export function bigSub(
  longNumber: string,
  value: number,
  debug: boolean = false
): string {
  if (value === 0) {
    return longNumber;
  }
  if (value < 0) {
    return bigAdd(Math.abs(value), longNumber);
  }
  let valueArr = `${value}`.split("").map((el) => parseInt(el));
  let longNumberArray = `${longNumber}`.split("").map((el) => parseInt(el));
  let res = formatArrays(valueArr, longNumberArray);
  valueArr = res.short;
  longNumberArray = res.long;
  // TODO check if values are the same
  if (valueArr.join("") === longNumberArray.join("")) {
    console.log("The same");
    return "0";
  }
  let carry = 0;
  let j = 0;
  let i = 0;
  let remaindered = false;
  for (
    i = valueArr.length - 1, j = longNumberArray.length - 1;
    i >= 0 && j >= 0;
    i--, j--
  ) {
    let diff = longNumberArray[j] - valueArr[i];
    if (diff < 0) {
      longNumberArray[j] = diff; // strip away 10s digit
    } else {
      remaindered = true;
      // check if can take carry bit from next one
      // iterate leftwards until can find one to strip. Then go back, where add back
      for (let k = i; k > 0; k--) {
        if (longNumberArray[k] > 0) {
          // found one
          longNumberArray[k]--; // minus one
          for (let l = k; l < i; l++) {
            longNumberArray[l] = 9; // change them all to nines
          }
          remaindered = false;
          break; // get out of there, and continue
        }
      }
      if (remaindered) {
        console.log("SHOULDN'T HAPPEN BECAUSE PRE CHECK GREATER THAN");
      } else {
        longNumberArray[j] = 10 + diff;
        console.log(longNumberArray[j]);
      }
    }
  }

  return debug
    ? `${longNumber} - ${value} = ` + longNumberArray.join("")
    : longNumberArray.join("");
}

function test() {
  let debug = true;
  console.log("BEGIN TESTING");
  // console.log(bigAdd(1, "09", debug));

  // console.log(bigAdd(201, "09", debug));
  // console.log(bigAdd(201, "00000009", debug));
  // console.log(bigAdd(201, "9992", debug));
  // console.log(bigAdd(1, "123456789012345678901234567890", debug)); // === "123456789012345678901234567891";
  console.log(bigSub("09", 201, debug));
  console.log(bigSub("201", 1, debug));
  console.log(bigSub("200", 200, debug));
  //   console.log(bigSub("123456789012345678901234567890", 1)); // === "123456789012345678901234567889";
  // console.log(bigSub("123", 1));
  console.log("END TESTING");
}
test();
