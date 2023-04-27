let cars: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let vehicle: Car = new Car(); // vehicle is an instance of the Car class (v : C = )

// Object literal
let point: { x: number; y: number } = {
  // semicolon in the annotation { x ; y }
  // comas in the object
  x: 10,
  y: 20,
};

// Function
//   const logNumber = (i) => { console.log(i) };
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Annotations to be used when:

// 1) a function returns the 'any' type

const jsonstring = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(jsonstring);
const coordinates: { x: number; y: number } = JSON.parse(jsonstring);
console.log(coordinates); // {x: 10, y: 20};

// 2) a variable is declared on one line and initalized later

let words = ['red', 'green', 'blue'];
// let foundWord; // declaration
let foundWord: boolean; // declaration

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true; // initialization
  }
}

// 3) the type of a variable cannot be inferred correctly

// (the LOGIC: if a number is more than 0, then assign it, if not assign 'false')

let numbers = [-10, -1, 12];
// let numberAboveZero = false;
let numberAboveZero: boolean | number = false; // initialized as boolean but numbers can be assign too

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
