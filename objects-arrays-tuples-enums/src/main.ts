// Arrays
let stringArr = ["one", "two", "three"];

let guitars = ["Start", "Les Paul", 1999];

let mixedData = ["Harry", 1988, true];

// stringArr[0] = 45
stringArr[0] = "Harsh";
stringArr.push("two");

// guitars[0] = true
guitars[0] = 1984;
guitars.unshift("END");

// stringArr = guitars
// guitars = stringArr

let test = [];
let bands: string[] = [];
bands.push("Linkin Park");

// Tuples
let myTuple: [string, number, boolean] = ["Harsh", 23, true];

let mixed = ["Harry", 12, false];

// mixed = myTuple
// myTuple = mixed
// myTuple[3] = 32
myTuple[1] = 32;

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
// myObj = bands
myObj = {};

const exampleObj = {
  prop1: "Harsh",
  prop2: true,
};

// exampleObj.prop1 = 23
exampleObj.prop1 = "Harry";

// type Actors = {
//   name: string;
//   active?: boolean;   // ? means the property is optional
//   films: (string | number)[];
// };

interface Actors {
  name?: string,
  active?: boolean,
  films: (string | number)[],
}

let emma: Actors = {
  name: 'Hermoine',
  active: true,
  films: ['Harry Potter', 1983, 'Little women']
}

let tom: Actors = {
  // name: 'Ethan Hunt',
  active: true,
  films: ['Mission Impossible', 'Edge of Tommorrow']
}

// emma = tom
// emma.age  ------- not possible 

const greetActor = (actor: Actors) => {
  if (actor.name) {
    return `Hello ${actor.name.toUpperCase()}!`
  }
  return 'Hello!'
}

console.log(greetActor(tom))

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime"

enum Grade {
  E = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.E)