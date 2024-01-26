//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  let choice = document.querySelector("input").value;
  choice = choice.split(" ").join("-");
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.name;
      document.querySelector("h3").innerHTML = data.classes
        .map((unit) => unit.name)
        .join(", ");
      const subClasses = document.querySelector("ul");
      subClasses.innerHTML = "";
      if (data.subclasses && data.subclasses.length > 0) {
        data.subclasses.forEach((sub) => {
          const listItem = document.createElement("li");
          listItem.textContent = sub.name;
          subClasses.appendChild(listItem);
        });
      } else {
        subClasses.innerHTML = "<li>No subclasses available</li>";
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
