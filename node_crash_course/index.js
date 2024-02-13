// WHY NOT:
// import Person from './person'; // ES6
// BCZ node has not implemented this as of yet (otherwise need to use babel to compile it to ES6)

const Person = require('./person'); // common.js

const person1 = new Person('John Doe', 30);
console.log(person1);
