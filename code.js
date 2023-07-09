/*
@todo: refactor ui
*/

let section = document.createElement("section");

document.body.appendChild(section);
let numberOfSquares = 16;
let numberOfSquaresBtn = document.getElementById("numberOfSquares");

createGrid(numberOfSquares);

numberOfSquaresBtn.addEventListener("click", () => {
  numberOfRows = prompt("how many squares would you like your canves to have?");

  if (numberOfRows > 100) {
    numberOfRows = prompt(
      "how many squares would you like your canves to have?"
    );
  }

  section.innerHTML = "";
  createGrid(numberOfRows);
});

function calculateWidth(numberOfRows) {
  return `100 / ${numberOfRows}%`;
}

function createGrid(numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
    const column = document.createElement("div");
    section.appendChild(column);
    column.classList.add("column");
    for (let j = 0; j < numberOfSquares; j++) {
      const square = document.createElement("div");
      column.appendChild(square);
      square.classList.add("square");

      square.addEventListener("click", () => {
        console.log("is good i been clicked");
        square.style.backgroundColor = "green";
      });

      square.addEventListener("mouseover", () => {
        console.log("is good i been clicked");
        square.style.backgroundColor = "green";
      });
    }
  }
}
