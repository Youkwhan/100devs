//Create a button that adds 1 to a botScore stored in localStorage
!localStorage.getItem("botScore") && localStorage.setItem("botScore", 0);

document.querySelector("button").addEventListener("click", addAnotherOne);

function addAnotherOne() {
  localStorage.setItem(
    "botScore",
    Number(localStorage.getItem("botScore")) + 1
  );
}
