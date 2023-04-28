// arrow function

// the arguments ALWAYS have to have type annotations (no type inference for args)
// variable = (argument type anns): what the function returns => {
const add = (a: number, b: number): number => {
  return a + b;
};

// we could ommit the annotation for what the function returns, but better never do it that way
const subtract = (a: number, b: number): number => {
  a - b; // 'return' is missing (otherwise it has to be 'void' not 'number')
};

// named function
// function name (arg) {}
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void - no return value from the function
const logger = (message: string): void => {
  console.log(message);
  // return null
  return undefined; // - technically it's still void
};

// never - the function will not return anything (we never reach the end of this function - throw an error and exit early)
const throwError1 = (message: string): never => {
  throw new Error(message);
};

// in this case it returns nothing (reaches the end), so it is 'void' and only when there is no message then it throws an error
const throwError2 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// destructuring with annotations (destructured object and annotations are separated by ":")
const weather = {
  date: new Date(),
  weather: 'sunny',
};
//      variable = object: {prop1: annot2 ; prop2: annot2}
// const logWeather = (todaysWeather: { date: Date; weather: string }): void => {
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(weather);
