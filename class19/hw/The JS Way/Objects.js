// 1.
// ADDING CHARACTER EXPERIENCE
// TODO: create the character object here
const aurora = {
	name: "Aurora",
	health: 150,
	strength: 25,
	xp: 0,
	describe() {
		return `${this.name} has ${this.health} points, ${this.strength} as strength and ${this.xp} XP points`
	},
}
// Aurora is harmed by an arrow
aurora.health -= 20

// Aurora equips a strength necklace
aurora.strength += 10

// Aurora learn a new skill
aurora.xp += 15

console.log(aurora.describe())

// 2.
// MODELING A DOG
// TODO: create the dog object here
const dog = {
	name: "Fang",
	species: "boarhound",
	size: 75,
	bark() {
		return "Grrr! Grrr!"
	},
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`)
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`)

// 3.
// MODELING A CIRCLE
// const r = Number(prompt("Enter the circle radius:"))
const r = 10

// TODO: create the circle object here
const circle = {
	radius: r,

	circumference() {
		return 2 * Math.PI * this.radius
	},

	area() {
		return Math.PI * this.radius ** 2
	},
}

console.log(`Its circumference is ${circle.circumference()}`)
console.log(`Its area is ${circle.area()}`)

// 4.
// MODELING A BANK ACCOUNT
const account = {
	name: "Alex",
	balance: 0,

	credit(amount) {
		this.balance += amount
	},

	describe() {
		return `owner: ${this.name}, balance ${this.balance}`
	},
}

console.log(account.describe())
account.credit(250)
account.credit(-80)
console.log(account.describe())
