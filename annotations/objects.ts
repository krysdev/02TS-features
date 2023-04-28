const profile = {
  person: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  // object's method - setAge(age)
  setAge(age: number): void {
    this.age = age;
  },
};

// destructiring the object - const age = profile.age

// const { age }: { age: number } = profile;
const { age, person }: { age: number; person: string } = profile;

const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;
