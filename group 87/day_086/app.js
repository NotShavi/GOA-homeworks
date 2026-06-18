const Car = require("./car.js")

const camry = new Car("Toyota","Camry")
const corolla = new Car("Toyota","Corolla")

console.log(Car.compare(camry,corolla))