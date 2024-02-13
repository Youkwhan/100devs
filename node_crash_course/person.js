// When we export a file using npm the file is wrapped around the Module Wrapper Function.
/*
(function (exports, require, module, __filename, __dirname) {
  EXPORT FILE...

}) */

console.log(__dirname, __filename);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeteing() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
