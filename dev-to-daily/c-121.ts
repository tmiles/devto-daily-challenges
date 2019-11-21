
/**
 * Complete date: 11/20/19
 * https://dev.to/thepracticaldev/daily-challenge-121-who-has-the-most-money-4h0g
 */
export function mostMoney(students: Student[]): string {
  if(!students || students.length == 0) {
    return null;
  } else if(students.length == 1){
    return students[0].name;
  }
  let amounts = students.map((s) => calcAmount(s));
  let highest = { id: 0, amount: calcAmount(students[0])};
  for(let i = 1; i < students.length; i++) { 
    // Either one person has the most, or everyone has the same amount
    if(highest.amount === amounts[i]) {
      return 'all';
    } else if(amounts[i] > highest.amount) {
      highest.id = i;
      highest.amount = amounts[i];
    }
  }
  return students[highest.id].name;
}

function calcAmount(student: Student): number {
  return (student.fives * 5) + (student.tens * 10) + (student.twenties * 20); 
}


interface Student {
  name: string; // the id
  fives: number;
  tens: number;
  twenties: number;
}