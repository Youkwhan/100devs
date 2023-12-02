//--- Easy
//create a variable and assign it a number
let number = 12
//minus 10 from that number
number -= 10
//print that number to the console
console.log(number)

//--- Medium
// //add 25 to that number
// let contain = Number(input) + 25
// //alert that number
// alert(contain)

//--- Hard
//create a variable that holds the h1
const h1Element = document.querySelector("h1")
//add an event listener to that element that console logs the sum of the two previous variables
h1Element.addEventListener("click", sum)

function sum() {
  //create a variable that holds a value from the input
  const contain = document.querySelector("#danceDanceRevolution").value
	console.log(number + contain)
}
