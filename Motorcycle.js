import Vehicle from "./Vehicle.js";
// Child Motorcycle class extending Vehicle
class Motorcycle extends Vehicle {
    constructor(make, model, year, color, engineType, hasSidecar) {
      super(make, model, year, color);
      this.engineType = engineType;
      this.hasSidecar = hasSidecar;
    }
  
    startEngine() {
      console.log(`Starting the engine of the ${this.year} ${this.make} ${this.model} motorcycle. \n`);
    }
  
    stopEngine() {
      console.log(`Stopping the engine of the ${this.year} ${this.make} ${this.model} motorcycle. \n`);
    }
    
    // Overriding base class methods
    start() {
      this.test()
      super.start()
      this.startEngine();
      console.log(`Motorcycle ${this.getDetails()} is starting. \n`)
    }

    stop() {
      super.stop()
      this.stopEngine();
      console.log(`Motorcycle ${this.getDetails()} is stopping. \n`)
    }

    getDetails() {
      const baseDetails = super.getDetails();
      const sidecarStatus = this.hasSidecar ? "with sidecar" : "without sidecar";
      return `${baseDetails}, ${this.engineType} engine, ${sidecarStatus}`;
    }
  }

export default Motorcycle;