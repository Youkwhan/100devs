// 1. Two functions - one object
const one = {};
function A() {
  return one;
}
function B() {
  return one;
}

let a = new A();
let b = new B();

console.log(a == b); // true

// 2. Create new calculator
function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// 3. Create new Accumulator

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    let input = prompt("Give me a number ");
    this.value += input;
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
