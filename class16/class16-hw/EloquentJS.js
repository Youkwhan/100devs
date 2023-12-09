// Chapter 2 Program structure

// Exercise: Looping a Triangle
/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/
function loopingTriangle(height) {
  console.log("Triangle:")
	for (let i = 0; i <= height; i++) {
		let level = ""
		for (let j = 0; j < i; j++) {
			level += "#"
		}
		console.log(level)
	}
}
loopingTriangle(7)

// Chessboard
// 8x8 grid, space or #, form a chessboard
function chessboard(size) {
  console.log("CHESSBOARD:\n")
	grid = ""
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if ((i + j) % 2 === 0) {
				grid += " "
			} else {
				grid += "#"
			}
		}
		grid += "\n" // Add a new line after each row
	}

	console.log(grid)
}
chessboard(8)

// Chapter 3 Functions
function min(a, b) {
  return a < b ? a : b;
}

console.log(min(0, 10));    // Output: 0
console.log(min(0, -10));   // Output: -10


function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    // To handle negative numbers, we can convert them to positive
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));  // Output: true
console.log(isEven(75));  // Output: false
console.log(isEven(-1));  // Output: false


function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));        // Output: 2
console.log(countChar("kakkerlak", "k"));  // Output: 4
