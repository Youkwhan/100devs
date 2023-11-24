// Arrow functions, the basics

// prob would want function delcartion instead of function expression here though. "const ask"
const ask = (question, yes, no) => (confirm(question) ? yes() : no())

ask(
	"Do you agree?",
	() => alert("You agreed."),
	() => alert("You canceled the execution.")
)
