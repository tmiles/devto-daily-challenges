/**
 * Complete date: 07.13.20
 * https://dev.to/thepracticaldev/daily-challenge-144-box-office-clerk-530i
 * TODO Work about complexities of different bills
 */

export function ticket(
  tickets: number[],
  ticketPrice: number = 25,
  bills: number[] = [25, 50, 100],
  debug: boolean = false
): boolean {
  if (tickets.length === 0) {
    return null;
  }
  let allBills = { total: 0 };
  bills.forEach((el) => {
    allBills[el] = 0;
  });

  //   let cashAmount = 0;
  for (let i = 0; i < tickets.length; i++) {
    let newAmount = tickets[i];
    allBills.total = allBills.total + newAmount; // Take the money
    allBills[newAmount]++;

    let change = newAmount - ticketPrice; // How much change to give
    allBills.total -= change;
    if (debug) {
      console.log("T: " + newAmount + " C: " + change, " B: " + allBills.total);
    }
    if (change > 0) {
      let newChange = change;
      for (let j = bills.length - 1; j >= 0; j--) {
        if (change >= bills[j]) {
          // subtrack one of each
          let div = Math.floor(change / bills[j]);
          if (div >= allBills[bills[j]]) {
            // not enough of the currency
            newChange -= allBills[bills[j]];
            allBills[bills[j]] = 0; // clear it out
          } else {
            allBills[bills[j]] -= div;
            newChange -= div * bills[j];
          }
        }
        console.log(bills[j], allBills);
      }
      // Still have leftovers can't return
      if (newChange > 0) {
        console.log("Had ungiven change");
        return false;
      }
    }

    if (change > allBills.total) {
      console.log(
        "Not supposed to happen, change more than the total amount left"
      );
      return false;
    }
    console.log(allBills);
  }
  return true;
}
let debug = true;
// console.log(ticket([25, 100], 25));
console.log(ticket([25, 25, 50, 50, 100], 25, [25, 50, 100], debug)); // should be false
