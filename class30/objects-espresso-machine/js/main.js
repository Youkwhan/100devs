//Create an espresso machine class that makes machines with 4 properties and 3 methods
class Espresso {
  constructor(color, make, model, price) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
  }

  turnOn() {
    console.log("Good day, I am now on!");
  }
  steam() {
    console.log("steaming");
  }
  brew() {
    console.log("Good stuff coming your way");
  }
}

const machine = new Espresso("red", "gaggia", "classic pro", 400);
