document.querySelector("button").addEventListener("click", kanyeQuote);

function kanyeQuote() {
  text = document.querySelector("p");

  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      text.innerText = data.quote;
    })
    .catch((err) => console.log(`err: ${err.message}`));
}
