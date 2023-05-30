// this object is represented as a tuple below
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// the elements in the below array can be swapped and the data model breaks down
const pepsi: (string | number | boolean)[] = ['brown', true, 40];

// so the tuple is an array-like that will always have a consistent order of the elements inside of it
const sprite: [string, boolean, number] = ['clear', true, 40];
sprite[0] = 10; // it can't be a number now

// 'Drink' is a type alias (like a variable)
type Drink = [string, boolean, number];
const tea: Drink = ['brown', false, 0];
