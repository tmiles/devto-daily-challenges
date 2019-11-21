export function ranker(people: Person[]): Person[] {
  if(people.length == 0) { return people; }
  people = people.sort((a,b) => a.points - b.points);
  let rank = 1;
  let lastPoints = people[0].points;
  people.forEach((person) => {
    if(person.points < lastPoints) {
      rank++;
    }
    lastPoints = person.points;
    person.position = rank;
  });
  people = people.sort((a, b) => {
    if(a.position === b.position) {
      return (a.name > b.name) ? 1 : -1;
    }
    return a.position - b.position;
  })
  return people;
}


interface Person {
  name: string;
  points: number;
  position?: number;
}