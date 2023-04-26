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

// const logNumber = (i) => {
//   console.log(i);
// };

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
