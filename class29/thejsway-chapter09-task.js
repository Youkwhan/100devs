// DOGS

// TODO: define the Dog class here
class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark() {
    if (this.size > 60) {
      return "Grrr! Grrr!";
    } else {
      return "Woof! Woof!";
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// Character inventory
/* 
Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

When a character slays another character, the victim's inventory goes to its vanquisher.
*/

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
    this.gold = 10;
    this.key = 1;
  }

  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.key} key(s)`
        );
        this.xp += bonusXP;
        this.gold += target.gold;
        this.key += target.key;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
  }
}

// Account list
/*
A name property.
A balance property, initially set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description.

Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. 
These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.
*/

class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  credit(val) {
    this.balance += val;
  }

  describe() {
    console.log(`owner: ${this.name}, balance: ${this.balance}`);
  }
}

const sean = new Account("Sean");
const brad = new Account("Brad");
const georges = new Account("Georges");
const accounts = new Array(sean, brad, georges);
accounts.forEach((user) => {
  user.credit(1000);
  user.describe();
});
