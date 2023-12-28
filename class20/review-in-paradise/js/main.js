// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "pizza"
console.log(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let temp = "sadsad"
console.log(temp[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function product(n1, n2, n3) {
	return (n1 / n2) * n3
}

console.log(product(1, 2, 3))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num) {
	return Math.cbrt(num)
}

console.log(cubeRoot(8))

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function month(month) {
	if (month == "summer") return "YAY"
	else return "Boooo"
}

console.log(month("summer"))
console.log(month("fall"))

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function multiplesOfFive(n) {
	for (let i = 0; i <= n; i += 5) {
		console.log(i)
	}
}

multiplesOfFive(55)
