import Car from './Car.js';
import Motorcycle from './Motorcycle.js';
import Vehicle from './Vehicle.js';

const car = new Car("Toyota", "Passo", 2021, "Blue", 4, "V6");
const motorcycle = new Motorcycle("Honda", "CD-70", 2022, "Black", "V-Twin", true);

// car is instance of class Car, Vehicle from where it is inherited and Base class Object
console.log ( car instanceof Car, car instanceof Vehicle, car instanceof Object);
// Start and stop each vehicle
car.start();
car.openDoor();
car.closeDoor();
car.stop();

console.log(Car)
console.log(car)

console.log ( motorcycle instanceof Motorcycle, motorcycle instanceof Vehicle, motorcycle instanceof Object);
motorcycle.start();
motorcycle.stop();
console.log(Motorcycle)
console.log(motorcycle)