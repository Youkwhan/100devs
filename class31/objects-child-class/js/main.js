//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} made a loud sound!`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    console.log("Meeeooowwwww");
  }
}

let simba = new Dog("Simba", "Shepard");
