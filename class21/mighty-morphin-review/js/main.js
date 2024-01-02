// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
const holiday = "CHRISTMAS"
console.log(holiday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
const temp = "abcde"
console.log(temp.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function difference(n1, n2, n3, n4, n5) {
	let res = 100
	res -= n1 + n2 + n3 + n4 + n5
	return Math.abs(res)
}
console.log(difference(1, 2, 3, 4, 5))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowHigh(n1, n2, n3) {
	const arr = [n1, n2, n3]
	arr.sort((a, b) => a - b)

	return `${arr[0]}, and ${arr[arr.length - 1]}`
}
console.log(lowHigh(1, 2, 3))

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function coinFlip() {
	const randomIndex = Math.random()
	return randomIndex > 0.5 ? "heads" : "tails"
}
console.log(coinFlip())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function something(num) {
	for (let i = 0; i < num; i++) {
		console.log(coinFlip())
	}
}
something(5)
