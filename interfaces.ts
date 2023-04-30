const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// so the function's argument must be an object that meets the specification provided by the interface 'Vehicle'
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

//
//
/////////////// a type can be a complex object (Date)
const oldCivic2 = {
  name: 'civic',
  year: new Date(),
  broken: true,
};

interface Vehicle2 {
  name: string;
  year: Date;
  broken: boolean;
}

const printVehicle2 = (vehicle: Vehicle2): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle2(oldCivic2);

//
//
////////////// and that also includes functions
const oldCivic3 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

interface Vehicle3 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // it has to be a function with no arguments that returns a string
}

const printVehicle3 = (vehicle: Vehicle3): void => {
  console.log(vehicle.summary());
};

printVehicle3(oldCivic3);

//
//
////////////////

interface Reportable {
  summary(): string;
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
