// Base class that is inherited by Car and Motorcycle
class Vehicle {
  // Static variable for auto incrementing registration number
  static count = 0;

  constructor(make, model, year, color) {
    // Making our attributes protected as they can only be set once
    // And used by the child classes
    this._make = make;
    this._model = model;
    this._year = year;
    this.color = color;
    this._registrationNumber = ++Vehicle.count;
  }

  // Our getters for the protected attributes
  get make() {
    return this._make;
  }

  get model() {
    return this._model;
  }

  get year() {
    return this._year;
  }

  get registrationNumber() {
    return this._registrationNumber
  }

  start() {
    console.log(`${this.registrationNumber} ${this.year} ${this.make} ${this.model} is starting.!!!! \n`);
  }

  stop() {
    console.log(`${this.registrationNumber} ${this.year} ${this.make} ${this.model} is stopping. !!!! \n`);
  }

  getDetails() {
    return `${this.registrationNumber} ${this.year} ${this.make} ${this.model} in ${this.color}`;
  }

  test() {
    console.log('Hello')
  }
}

export default Vehicle;