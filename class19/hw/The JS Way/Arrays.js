// Musketeers
function musketeers() {
	const musketeers = ["Athos", "Porthos", "Aramis"]

	// for loop 3 elem,ents
	for (let i = 0; i < musketeers.length; i++) {
		console.log(musketeers[i])
	}

	// add an element and loop 3
	musketeers.push("D'Artagnan")
	musketeers.forEach((entity) => console.log(entity))

	// remove an element and loop 3
	const aramisIndex = musketeers.indexOf("Aramis")
	musketeers.splice(aramisIndex, 1)
	for (m of musketeers) console.log(m)
}
musketeers()

// Sum of Values
function sumOfValues() {
	const values = [3, 11, 7, 2, 9, 10]
	let sum = 0
	// return values.reduce((total, cur) => total + cur)
	for (let i = 0; i < values.length; i++) {
		sum += values[i]
	}
	return sum
}
console.log(sumOfValues())

// Array maximum
function arrayMaxVal() {
	const values = [3, 11, 7, 2, 9, 10]
	let maxVal = -Infinity
	for (const num of values) {
		maxVal = Math.max(maxVal, num)
	}
	console.log(maxVal)
}
arrayMaxVal()

// List of words
function listOfWords() {
	const userWord = ""
	while (userWord != "stop") {
		userWord = prompt('Please type a word... "stop" to stop')
		console.log(userWord)
	}
}
listOfWords()
