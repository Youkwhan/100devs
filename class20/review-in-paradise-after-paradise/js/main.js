// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function comp(array) {
	if (array[0] < array[array.length - 1]) {
		return "Hi"
	} else if (array[0] > array[array.length - 1]) {
		return "Bye"
	} else {
		return "We close in an hour"
	}
}

console.log(comp([1, 2, 3]))
