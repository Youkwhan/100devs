//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getCockTail);
h2NameElement = document.querySelector("h2");
imageElement = document.querySelector("img");
h3InstructionElement = document.querySelector("h3");

function getCockTail() {
  let userCock = document.querySelector("input").value;

  // let userCock = prompt("Enter a cocktail: ")
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userCock}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let cocktail = data.drinks[0];
      h2NameElement.innerText = cocktail.strDrink;
      imageElement.src = cocktail.strDrinkThumb;
      h3InstructionElement.innerText = cocktail.strInstructions;
    })
    .catch((err) => console.log(`error: ${err}`));
}
