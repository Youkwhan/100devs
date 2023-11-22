// Functions

// is "else" required?
/* No, if the `else` is removed the function will still work correctly. They will both return the second statement when the if condition is false. */

// Rewrite the function using `?` or `||`
function checkAge(age) {
	return age > 18 ? true : confirm(`Did parents allow you?`)
}

function checkAge(age) {
	return age > 18 || confirm(`Did parents allow you?`)
}

// Function min(a,b)
function min(a, b) {
	if (a <= b) {
		return a
	}
	return b
}

// Function pow(x,n)
function pow(x, n) {
	return x ** n
}

let x = prompt("x value:", "")
let n = prompt("n vlaue", "")

if (n < 1) {
	alert("power needs  to be a positive number")
} else {
	alert(pow(x, n))
}
