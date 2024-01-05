//Create a mouse object that has four properties and three methods
function Mouse(brand, color, model, wireless) {
	this.brand = brand
	this.color = color
	this.model = model
	this.wireless = wireless

	this.leftClick = function () {
		console.log("left click")
	}
	this.rightClick = function () {
		console.log("right click")
	}
	this.scroll = function () {
		console.log("scrollll")
	}
}

const mouse = new Mouse("logictech", "black", "Ergo", true)
const mouse2 = new Mouse("apple", "silver", "track", true)

// A prototype is another object that is used as a fallback Inheritance!
// Mouse does not have a weight so, we check the object itself, then constructor, then it's global object prototype
Mouse.prototype.weight = "heavy"