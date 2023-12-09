// HW: The JS Way

// chapter01: 3, 2, 1... Code
// - Presentation:
console.log(`Youkwhan\n${23}`)
// - Minmalistic calculator
function calculator() {
	console.log(`Adding 6 by 3\n${6 + 3}`)
	console.log(`Subtracting 6 by 3\n${6 - 3}`)
	console.log(`multiplying 6 by 3\n${6 * 3}`)
	console.log(`dividng 6 by 3\n${6 / 3}`)
}
calculator()
/* Values prediction
- 9
- 4 + 5
- 45
*/
console.log(4 + 5)
console.log("4 + 5")
console.log("4" + "5")

// chapter02: Play with variables
// Improved hello
// prompt() function is specific to browser enviornoment and isnt available in jode or terminal based js
// const firstName = prompt("What is your first name >:(")
// const lastName = prompt("Give me your last name now!")
// console.log(`Boo ${firstName} ${lastName}`)

// Final hello
let a = 2
a -= 1
a++
let b = 8
b += 2
const c = a + b * b
const d = a * b + b
const e = a * (b + b)
const f = (a * b) / a
const g = (b / a) * a
console.log(a, b, c, d, e, f, g)
// 2, 10, 102, 30, 40, 10, 10

// VATcalculation
// const rawPrice = prompt("What is your raw price:")
// console.log(`The final price is ${rawPrice * 1.206})

// CElsius ot Fahrenheit
// const temperatureC = prompt("What is the temperature in celcius")
// console.log(`The temperatuire in Fahrenheit is ${temperatureC*(9/5)+32})

// Variable swapping
let number1 = 5
let number2 = 3

// TODO: type your code here (and nowhere else!)
const temp = number1
number1 = number2
number2 = temp
console.log(number1) // Should show 3
console.log(number2) // Should show 5

// chapter03: Add conditions
// Following day
// const day = prompt("what is todays day:")
const day = "monday"
switch (day) {
	case "monday":
		console.log("Ugh it's monday")
		break
	case "tuesday":
		console.log("yeay it's tuesday")
		break
	case "wednesday":
		console.log("yeay it's wednesday")
		break
	case "thursday":
		console.log("yeay it's thursday")
		break
	case "friday":
		console.log("yeay it's friday")
		break
	case "saturday":
		console.log("yeay it's saturday")
		break
	default:
		console.log("yeay it's sunday")
}

// Number comparison
// let num1 = parseInt(prompt("Enter the first number: "))
// let num2 = parseInt(prompt("Enter the second number: "))

// if (num1 > num2) {
// 	console.log(num1 + " is greater than " + num2)
// } else if (num2 > num1) {
// 	console.log(num2 + " is greater than " + num1)
// } else {
// 	console.log(num1 + " and " + num2 + " are equal")
// }

// Final values
/*let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

INPUT:
nb1=nb2=nb3=4 
nb1=4,nb2=3,nb3=2 
nb1=2,nb2=4,nb3=0
OUTPUT:
0 4 12
6 3 2
15 4 0
*/

// Number of days in a month
// let monthNum = parseInt(prompt("Enter a month number (between 1 and 12): "));
const monthNum = 2
const daysInMonths = {
	1: 31, // January
	2: 28, // February
	3: 31, // March
	4: 30, // April
	5: 31, // May
	6: 30, // June
	7: 31, // July
	8: 31, // August
	9: 30, // September
	10: 31, // October
	11: 30, // November
	12: 31, // December
}

const days = daysInMonths[monthNum]

if (days !== null) {
	console.log(`Number of days in month ${monthNum} is ${days}.`)
} else {
	console.log("Invalid input. Please enter a month number between 1 and 12.")
}

// Following second
// show time one second after
function timeAfterOneSec(time) {
	let [hr, min, sec] = time
	sec++
	if (sec >= 60) {
		sec = 0
		min++
	}
	if (min >= 60) {
		min = 0
		hr++
	}
	if (hr >= 24) {
		hr = 0
	}
	return `${hr}h${min}m${sec}s`
}

console.log(`Time after 14h17m59s is ${timeAfterOneSec([14, 17, 59])} `) //14h18m0s
console.log(`Time after 14h17m59s is ${timeAfterOneSec([6, 59, 59])}`) // 7h0m0s
console.log(`Time after 14h17m59s is ${timeAfterOneSec([23, 59, 59])}`) // 0h0m0s (midnight)

// chapter04 Repeatstatements
// Caarousel
const numOfTurns = 10
let i = 0
while (i < numOfTurns) {
	console.log(`while loop ${i}`)
	i++
}
for (let i = 0; i < numOfTurns; i++) {
	console.log(`for loop ${i}`)
}

// parity
// improve so only odd numbners
const userGivenNum = 1
for (let i = userGivenNum; i <= 10; i++) {
	if (i % 2 != 0) {
		console.log(`${i} is odd`)
	}
}
// Input validation
function inputVal(num) {
	// const num = Number(prompt("Hey give me a number between 50 and 100"))
	while (num > 100 || num < 50) {
		console.log("wrong number try agfain")
		//num = Number(prompt("Hey give me a number between 50 and 100"))
		inputVal(num)
	}
}

//Multiplication table
function multiplicationtable() {
	// Ask the user for a number
	let number = Number(prompt("Enter a number between 2 and 9:"))

	// Check if the number is between 2 and 9
	if (number >= 2 && number <= 9) {
		console.log(`Multiplication table for ${number}:`)

		// Display the multiplication table
		for (let i = 1; i <= 10; i++) {
			console.log(`${number} * ${i} = ${number * i}`)
		}
	} else {
		console.log("Please enter a valid number between 2 and 9.")
	}
}

// neither yes or no
function YesNo() {
	let userInput
	while (true) {
		userInput = prompt("Enter text (neither yes nor no to continue):")

		if (userInput && userInput.toLowerCase() === "yes") {
			alert("Game over!")
			break
		} else if (userInput && userInput.toLowerCase() === "no") {
			alert("Game over!")
			break
		}
	}
}

// FIzzBuzz
function fizzBuzz() {
	for (let i = 0; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz")
		else if (i % 3 == 0) console.log("Fizz")
		else if (i % 5 == 0) console.log("Buzz")
		else console.log(i)
	}
}
// fizzBuzz()

// chapter05 - Write functions
// improved hello
// Say hello to the user
function sayHello(firstName, lastName) {
	const message = `Hello, ${firstName} ${lastName}!`
	return message
}

// TODO: ask user for first and last name
// let first = prompt("first name")
// let last = prompt("lastname")
// TODO: call sayHello() and show its result
// console.log(sayHello(first,last))

// number squaring
// Square the given number x
function square1(x) {
	// TODO: complete the function code
	return x ** 2
}

// Square the given number x
const square2 = (x) => x ** 2
for (let i = 0; i <= 10; i++) {
	console.log(square1(i))
	console.log(square2(i))
}

// minimum of two numbers
// TODO: write the min() function
function min(n1, n2) {
	if (n1 <= n2) {
		return n1
	}
	return n2
}

console.log(min(4.5, 5)) // Must show 4.5
console.log(min(19, 9)) // Must show 9
console.log(min(1, 1)) // Must show 1

// calculator
// TODO: complete program
const calcuulate = (operand1, operator, operand2) => {
	switch (operator) {
		case "+":
			return operand1 + operand2
		case "-":
			return operand1 - operand2
		case "*":
			return operand1 * operand2
		case "/":
			if (operand2 === 0) {
				return "Infinity"
			} else {
				return operand1 / operand2
			}
		default:
			return "Invalid operator"
	}
}

console.log(calculate(4, "+", 6)) // Must show 10
console.log(calculate(4, "-", 6)) // Must show -2
console.log(calculate(2, "*", 0)) // Must show 0
console.log(calculate(12, "/", 0)) // Must show Infinity

// circumference and area of a circle
function circumference(r) {
	return 2 * Math.PI * r
}

function areaOfCircle(r) {
	return Math.PI * r ** 2
}
