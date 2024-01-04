//Create a stopwatch object that has four properties and three methods
const stopwatch = {
	time: 0,
	color: "black",
	increment: 1,
	shape: "round",

	start: function () {
		this.interval = setInterval(
			function () {
				this.time -= this.increment
				console.log(`Time: ${this.time}`)
			}.bind(this),
			1000
		)
	},

	reset: function () {
		this.time = 0
	},
	setTime: function (newTime) {
		this.time = newTime
	},
}

stopwatch.setTime(10)
stopwatch.start()
