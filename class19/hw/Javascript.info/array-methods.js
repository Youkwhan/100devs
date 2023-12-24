// 1
// Translate border-left-width to borderLeftWidth
// “my-short-string” into camel-cased “myShortString”.
function camelize(str) {
	return str
		.split("-")
		.map((word, i) => (i > 0 ? word[0].toUpperCase() + word.slice(1) : word))
		.join("")
}
console.log(camelize("my-short-string"))

// 2
// Filter range
// looks for elements with values higher or rqual to a and lower or equal to b and return new array
function filterRange(arr, a, b) {
	return arr.filter((item) => item >= a && item <= b)
}
let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)
console.log(filtered) // 3,1 (matching values)
console.log(arr) // 5,3,8,1 (not modified)

// 3
// Filter range "in place"
// remove all values except those that are between a and b
// void:
function filterRangeInPlace(arr, a, b) {
	// modify in place
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1)
			i--
		}
	}
}
let arrs = [5, 3, 8, 1]
filterRangeInPlace(arrs, 1, 4) // removed the numbers except from 1 to 4
console.log(arrs) // [3, 1]

// 4
// Sort in decreasing order
let arrx = [5, 2, 1, -10, 8]

// ... your code to sort it in decreasing order
arrx.sort((a, b) => b - a)
console.log(arrx) // 8, 5, 2, 1, -10

// 5
// Copy and sort array
function copySorted(arr) {
	return arr.slice().sort((a, b) => a.localeCompare(b))
}
let arrv = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(arrv)
console.log(sorted) // CSS, HTML, JavaScript
console.log(arrv) // HTML, JavaScript, CSS (no changes)

// 6
// Create an extendable calculator
function Calculator() {
	;(this.operator = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
	}),
		(this.calculate = function (str) {
			const arr = str.split(" ")
			return this.operator[arr[1]](+arr[0], +arr[2])
		})

	this.addMethod = function (name, func) {
		this.operator[name] = func
	}
}

let calc = new Calculator()
console.log(calc.calculate("3 + 7")) // 10

let powerCalc = new Calculator()
powerCalc.addMethod("*", (a, b) => a * b)
powerCalc.addMethod("/", (a, b) => a / b)
powerCalc.addMethod("**", (a, b) => a ** b)

let result = powerCalc.calculate("2 ** 3")
console.log(result) // 8

// 7
// Map to names
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let users = [john, pete, mary]

let names = users.map((user) => user.name)

console.log(names) // John, Pete, Mary

// 8
// Map to objects
let johns = { name: "John", surname: "Smith", id: 1 }
let petes = { name: "Pete", surname: "Hunt", id: 2 }
let marys = { name: "Mary", surname: "Key", id: 3 }

let usersx = [johns, petes, marys]

// create an array of objects with id and fullname
let usersMapped = usersx.map((user) => ({
	fullName: `${user.name} ${user.surname}`,
	id: user.id,
}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith

// 9
// Sort users by age
function sortByAge(users) {
	// sort them by age, no need to  return
	arrc.sort((a, b) => a.age - b.age)
}
let johnc = { name: "John", age: 25 }
let petec = { name: "Pete", age: 30 }
let maryc = { name: "Mary", age: 28 }

let arrc = [petec, johnc, maryc]

sortByAge(arrc)

// now: [john, mary, pete]
console.log(arrc[0].name) // John
console.log(arrc[1].name) // Mary
console.log(arrc[2].name) // Pete

// 10
// Shuffle an array
function shuffle(array) {
	// for each index, pick a random index, and swap
	// for (let i =0; i<array.length; i++){
	//   const randomIndex = Math.floor(Math.random() * array.length)
	//   let temp = array[i]
	//   array[i] = array[randomIndex]
	//   array[randomIndex] = temp
	// }

	for (let i = array.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1))
		;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
	}
	return array
}
let arrg = [1, 2, 3]

shuffle(arrg)
console.log(arrg)
// arrg = [3, 2, 1]

shuffle(arrg)
console.log(arrg)
// arrg = [2, 1, 3]

shuffle(arrg)
console.log(arrg)
// arrg = [3, 1, 2]
// ...

// 11
// Get average age
function getAverageAge(users) {
	return users.reduce((total, user) => total + user.age, 0) / users.length
}
let johnt = { name: "John", age: 25 }
let petet = { name: "Pete", age: 30 }
let maryt = { name: "Mary", age: 29 }

let arrt = [johnt, petet, maryt]

console.log(getAverageAge(arrt)) // (25 + 30 + 29) / 3 = 28

// 12
// Filter unique array members
function unique(arr) {
	/* your code */
	const arrSet = new Set(arr)
	return [...arrSet]
}

let strings = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O",
]

console.log(unique(strings)) // Hare, Krishna, :-O

// 13
// create keyed object from array
function groupById(arr) {
	// reducing to an object ? but i thought they return arrays!!!!!!!! total can be an object not a number
	return arr.reduce((obj, cur) => {
		obj[cur.id] = cur
		return obj
	}, {})
}
let userss = [
	{ id: "john", name: "John Smith", age: 20 },
	{ id: "ann", name: "Ann Smith", age: 24 },
	{ id: "pete", name: "Pete Peterson", age: 31 },
]

let usersById = groupById(userss)
console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
