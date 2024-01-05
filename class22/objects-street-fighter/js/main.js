//Create a street fighter constructor that makes fighting game characters
// with 4 properties and 3 methods

function StreetFighter(name, attack, catchPhrase, specialMove) {
	this.name = name
	this.attack = attack
	this.catchPhrase = catchPhrase
	this.specialMove = specialMove

	this.haduken = function () {
		console.log("HAAADUKEN")
	}

	this.winning = function () {
		console.log(`Show your move, ${this.catchPhrase}`)
	}

	this.taunt = function () {
		console.log(`ultimate ${this.speicalMove}!`)
	}
}

let ryu = new StreetFighter("ryu", "high punch", "Get over here", "HADUKEN")
