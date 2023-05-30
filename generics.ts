class ArrayOfNumbers {
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // one line
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  // one line
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// T is used as a variable to define the type
class ArrayOfAnything <T> {
  // one line
  constructor(public collection: T []) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything <string> (['a', 'b', 'c']); // do not put < string [] >, it would be then a 2D array of strings ( string [] [] )

// type inference around class generics - TS recognizes it is an array of strings
const arr = new ArrayOfAnything (['a', 'b', 'c']);





// type inference around function generics
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything <T> (arr: T []): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything <string> (['a', 'b', 'c']);



// Genric Constraints - they limit the types that we can pass for 'T'

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

// extends - we promise that the Type we will use here is going to have all the properties that the 'Printable' interface has
function printHousesOrCars <T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// ERROR - there is no built-in print() function for numbers
printHousesOrCars([1, 2, 3])

// the class House (or Car) has a method 'print', so it satisfies the interface
printHousesOrCars<House>([new House(), new House()]);

printHousesOrCars<Car>([new Car(), new Car()]);
