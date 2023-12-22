//Create an array of movie titles. Loop through the array and each element to the h2.
const movieTitles = [
	"absd",
	"dskofjnds",
	"dsfgkn ds",
	"sdkl fldsmf lsjf",
	"fdvkl",
]
const h2Element = document.querySelector("h2")

movieTitles.forEach((movie) => (h2Element.innerText += `${movie},`))

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const numArray = [1, 443, 6457, 4, 2, 42, 3, 13]

numArray.forEach((num) => num + 3)

//Find the average of all the numbers from question three
let average = numArray.reduce((total, num) => total + num) / numArray.length
console.log(average)
