//Write your pseduo code first!
// 0 -> 32
document.querySelector("#yell").addEventListener("click", convert)

// need the value that is in celcious
function convert() {
	const temp = document.querySelector("#firstName").value
	temp = (temp * 9) / 5 + 32
	document.querySelector("#placeToYell").innerText = temp
}
// conver from celsious to fahrenint

// show it
