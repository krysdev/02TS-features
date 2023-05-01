/////////////////////// basic class methods

class Vehicle {
  drive(): void {
    console.log('driving');
  }
  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.drive(); // -> driving
vehicle.honk(); //  -> beep

//////////////// basic inheritance
// 'extends' - "copy" everything from Vehicle

class Car extends Vehicle {
  // the method is overridden
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();
car.drive(); // -> vroom
car.honk(); //  -> beep

////////////////////////////
// method modifiers:
// - public - by default
// - private - the method can be called by other methods in this class only (no other can use them)
// - protected - the method can be called by other methods in this class OR by methods in child classes
// we can't override the modifiers defined in the parent class

class Vehicle2 {
  protected honk(): void {
    console.log('beep');
  }
}

class Car2 extends Vehicle2 {
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive(); // -> vroom  // we can call a private method only within the class - no error
    this.honk(); //  -> beep   // we can call a protected method in the child class
  }
}

const vehicle2 = new Vehicle2();
vehicle2.honk(); // we can't use a protected (and pivate) method outside of the class itself - error

/////////////////////////////////////

class Vehicle3 {
  // initialize a new property/field like below
  // color: string = 'red'
  // or initialize like this and pass an argument to the constructor ('orange' below)

  // color: string;
  // constructor(color: string) { this.color = color }

  // the above two lines equal the below line:
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle3 = new Vehicle3('orange');
console.log(vehicle3.color); // -> orange

//////////////////////////////////////

class Vehicle4 {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle4 = new Vehicle4('orange');
console.log(vehicle4.color);

class Car4 extends Vehicle4 {
  // there is no 'public' before 'color', because we don't want to reasign or create a new field in Car4, we use the one from Vehicle4
  constructor(public wheels: number, color: string) {
    // the constructor in the parent requires 'color'
    // color is passed from the constructor to the 'super' throgh the arguments
    // super is a reference to the constructor method in the parent
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car4 = new Car4(4, 'red');
car4.startDrivingProcess();
