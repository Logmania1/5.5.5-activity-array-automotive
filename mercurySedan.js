//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)
class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }
}

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends Vehicle {
    constructor(maxPassengers, passengers, numberOfWheels, maxSpeed, fuel, sheduleService){
        super(maxSpeed);
        this.maxPassengers = maxPassengers;
        this.passengers = 0;
        this.numberOfWheels = numberOfWheels;
        this.maxSpeed = maxSpeed;
        this.fuel = fuel;
        this.sheduleService = false;
    }
}

let mercurySedan = new Car(5, 0, 4, 160, 10, false)

console.log(mercurySedan)









//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
