// 1. Hello, object:
// Write the code, one line for each action:

// Create an empty object user.
const user = {};
// Add the property name with the value John.
user.name = "John";
// Add the property surname with the value Smith.
user.surname = "Smith";
// Change the value of the name to Pete.
user.name = "Pete";
// Remove the property name from the object.
delete user.name;

// 2. Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
  return Object.keys(obj).length === 0 ? true : false;
}
let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

// 3. Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let sum = Object.values(salaries).reduce((total, salary) => total + salary, 0);
console.log(sum);

// 4. Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.table(menu);
