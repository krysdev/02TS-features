const carMakers = ['ford', 'toyota', 'chevy']; // inference - const carMakers: string[]
const dates = [new Date(), new Date()]; // inference - const dates: Date[]

// array that contains array of strings, and it is already initialized (in one line), so in fact the annotation is not required
const carsByMake: string[][] = [['car1'], ['car2'], ['car3']];

// Arrays with annotations (in this example the inferred ones):
// 1) help with inference when extracting values
const car = carMakers[0]; // const car: string
const myCar = carMakers.pop(); // const myCar: string | undefined

// 2) prevent incompatible values
carMakers.push(100); // const carMakers: string[] and not a number

// 3) help with iterating (map, reduce, forEach etc.)
carMakers.map((car) => {
  // carMakers.map((car: string): string => {
  // so we can use the drop down list to choose methods for strings (after the '.')
  return car.toUpperCase();
});

// Flexible types (multiple types)
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
