import Vehicle from "./Vehicle.js";
// Child Car class extending Vehicle
class Car extends Vehicle {
    constructor(make, model, year, color, numberOfDoors, engineType) {
      super(make, model, year, color);
      this._numberOfDoors = numberOfDoors;
      this.engineType = engineType;
    }

    get numberOfDoors () {
      return this._numberOfDoors;
    }

    openDoor() {
      console.log(`Opening door of the ${this.year} ${this.make} ${this.model}. \n`);
    }
  
    closeDoor() {
      console.log(`Closing door of the ${this.year} ${this.make} ${this.model}. \n`);
    }

    // Overriding base class methods
    start () {
      console.log(`Car ${this.getDetails()} is starting. \n`)
    }

    stop () {
      console.log(`Car ${this.getDetails()} is stopping. \n`)
    }
  
    getDetails() {
      const baseDetails = super.getDetails();
      return `${baseDetails}, ${this.numberOfDoors} doors, ${this.engineType} engine`;
    }
  }

export default Car;