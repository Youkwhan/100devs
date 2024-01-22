document.querySelector("button").addEventListener("click", getMoe);
const information = document.querySelector(".information");
const imageElement = document.querySelector("img");
const input = document.querySelector("input");

function getMoe() {
  fetch(
    `https://api.trace.moe/search?url=${encodeURIComponent(
      "https://w.wallhaven.cc/full/5w/wallhaven-5wqvp7.png"
    )}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.result[0]);
      information.innerText = `Episode ${data.result[0].episode}`;
      imageElement.src = data.result[0].image;
    })
    .catch((err) => console.log(`err: ${err.message}`));
}
