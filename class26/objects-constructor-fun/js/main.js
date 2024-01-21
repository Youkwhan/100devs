//Create a pizza object that has four properties and three methods
class Pizza {
  constructor(size, name, crust) {
    this.size = size;
    this.toppings = [];
    this.name = name;
    this.crust = crust;

    this.addToppings = function (topping) {
      this.toppings.push(topping);
    };

    this.estimatedDeliveryTime = function () {
      console.log("Calculating...");
    };

    this.frisbee = function () {
      console.log("Your pizza has been yeeted");
    };
  }
}

let pizzaDough = new Pizza(24, "Doughman", "Thicc");
pizzaDough.addToppings(["cheese", "bacon", "pepperoni"]);
console.log(pizzaDough);

// global prototype / prototype chaining
Pizza.prototype.bluetooth = true;
// good to save memory, So instead of having multiple versions of said method/property we could just have one copy for all in the global prototype

class Pizza {
  constructor(size, name, crust) {
    this.size = size;
    this.toppings = [];
    this.name = name;
    this.crust = crust;
  }

  addToppings(topping) {
    this.toppings.push(topping);
  }

  estimatedDeliveryTime() {
    console.log("Calculating...");
  }

  frisbee() {
    console.log("Your pizza has been yeeted");
  }
}
