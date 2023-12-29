//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function even(arr) {
	const res = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) res.push(arr[i])
	}
	return res
}
console.table(even([14, 235, 3245, 3456, 6, 3546, 2413]))
