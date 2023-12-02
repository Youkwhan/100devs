//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const snacksInputElement = document.querySelector("input")
const snacksButtonElement = document
	.querySelector("#help")
	.addEventListener("click", helpStopSnacking)
const stopElement = document.querySelector("#stops")

function helpStopSnacking() {
	const numOfSnacks = Number(snacksInputElement.value)
  stopElement.innerHTML = ""
	for (let i = 0; i < numOfSnacks; i++) {
		stopElement.innerHTML += "PUT THAT BACK! "
	}
}
