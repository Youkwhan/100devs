//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const nums = [1, 24, 5, 346, 3, 4]
console.log(
	nums.reduce((total, cur) => total + cur),
	0
)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(nums) {
	return nums.map((num) => num ** 2)
}
console.log(squared(nums))
//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str) {
	const res = str.split("").reverse().join("")
	// const res = str.split("").reduce((acc,cur) => cur + acc, "")
	console.log(res)
}
reverse("water")
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
	let left = 0,
		right = str.length - 1
	while (left < right) {
		while (left < right && !/[a-zA-Z]/.test(str[left])) {
			left++
		}
		while (left < right && !/[a-zA-Z]/.test(str[right])) {
			right--
		}

		if (str[left].toLowerCase() !== str[right].toLowerCase()) {
			return false
		}
		left += 1
		right -= 1
	}
	return true
}

console.log(palindrome("racecar"))
console.log(palindrome("helloleh"))
