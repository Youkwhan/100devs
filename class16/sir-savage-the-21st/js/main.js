//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

const geth2Element = document.querySelector("#savageSays")
function savage21() {
	let savageSays = []
	for (let i = 0; i < 21; i++) {
		console.log("21")
		savageSays.push("21")
	}
	geth2Element.innerHTML = savageSays
}

savage21()
