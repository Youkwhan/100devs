// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string,
// and print the value to the console
let drink = "water"
drink.trim()
console.log(drink)

// Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let stringWords = "sadl dsk fdslkm water doom mnerer"
console.log(stringWords.includes("water"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rps = () => {
	const randomPercentage = Math.random()
	if (randomPercentage <= 0.3) {
		return "rock"
	} else if (randomPercentage <= 0.6) {
		return "paper"
	} else {
		return "scissors"
	}
}

rps()
// *Conditionals*
// Create a function that takes in a choice (rock, paper, or scissors) and
// determines if they won a game of rock paper scissors against a bot using the above function
function rpsAI(userChoice) {
	const botChoice = rps()
	if (userChoice === botChoice) {
		return "It's a tie!"
	} else if (
		(userChoice === "rock" && botChoice === "scissors") ||
		(userChoice === "paper" && botChoice === "rock") ||
		(userChoice === "scissors" && botChoice === "paper")
	) {
		return "You win!"
	} else {
		return "You lose!"
	}
}

const userChoice = "rock" // Replace this with the user's choice
const result = rpsAI(userChoice)
console.log(result)

// *Loops*
// Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array.
//  Print the results of each game to the console.
function game(arr) {
	const n = arr.length
	let result
	for (let i = 0; i < n; i++) {
		const userChoice = arr[i]
		result = rpsAI(userChoice)
		console.log(result)
	}
}

game(["rock", "paper", "scissors"])
