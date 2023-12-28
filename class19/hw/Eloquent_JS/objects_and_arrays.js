// Chapter 4 Data Structures: Objects and Arrays
// Exercises

// THE SUM OF A RANGE
function range(start, end, step = 1) {
	const res = []
	if (step > 0) {
		// incre
		for (let i = start; i <= end; i += step) {
			res.push(i)
		}
	} else {
		// decrem
		for (let i = start; i >= end; i += step) {
			res.push(i)
		}
	}
	return res
}

function sum(nums) {
	return nums.reduce((total, cur) => total + cur, 0)
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)))
// → 55

// REVERSING AN ARRAY
function reverseArray(array) {
	// return new array
	const res = []
	for (element of array) {
		res.unshift(element)
	}
	return res
}

function reverseArrayInPlace(arr) {
	const n = arr.length
	const MID = Math.floor(n / 2)

	for (let i = 0; i <= MID; i++) {
		;[arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]]
	}
}

console.log(reverseArray(["A", "B", "C"]))
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]

// A LIST
// build a nest structure / nested objects
function arrayToList(list) {
	let res = null
	for (let i = list.length - 1; i >= 0; i--) {
		res = { value: list[i], rest: res }
	}
	return res
}

function listToArray(list) {
	const res = []
	for (let node = list; node; node = node.rest) {
		res.push(node.value)
	}
	return res
}

const prepend = (element, list) => {
	return { value: element, rest: list }
}

const nth = (list, num) => {
	if (!list) undefined
	if (num === 0) return list.value
	return nth(list.rest, num - 1)
}
console.log(arrayToList([10, 20]))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])))
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1))
// → 20

// DEEP COMPARISON

function deepEqual(a, b) {
	// if either is not an object or null
	if (
		typeof a !== "object" ||
		a === null ||
		typeof b !== "object" ||
		b === null
	) {
		return false
	}

	// if same obj ref equal
	if (a === b) {
		return true
	}

	// get both keys
	const keysA = Object.keys(a)
	const keysB = Object.keys(b)

	if (keysA.length != keysB.length) {
		return false
	}

	for (let k of keysA) {
		if (!keysB.includes(k) || !deepEqual(a[k], b[k])) {
			return false
		}
	}
}

let obj = { here: { is: "an" }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }))
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))
// → true
