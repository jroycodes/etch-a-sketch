"use strict";

function defaultGrid() {
  // select element with class container
  const container = document.querySelector("#container");

  // create a 16*16 grid of square divs
  for (let i = 0; i < 16 * 16; i++) {
    const allDivs = document.createElement("div");
    allDivs.style.height = "1rem";
    allDivs.style.width = "1rem";
    allDivs.style.border = "1px solid black";
    allDivs.addEventListener("mouseenter", () => {
      allDivs.style.backgroundColor = "yellow";
    });
    // change BC to blueViolet when mouse leaves div
    allDivs.addEventListener("mouseleave", () => {
      allDivs.style.backgroundColor = "blueViolet";
    });
    container.appendChild(allDivs);
  }
}

// Change Grid
const gridChanger = document.getElementById("square_num");
gridChanger.style.backgroundColor = "black";
gridChanger.style.color = "yellow";
gridChanger.addEventListener("click", () => {
  let column = prompt("Insert number of squares for new grid");
  if (column > 0 && column <= 100) {
    // Clear existing grid
    container.innerHTML = "";
    customGrid(column);
  } else alert("Number must be between 0 - 100");
});

function customGrid(column) {
  // select element with class container
  const container = document.querySelector("#container");

  for (let i = 0; i < column * column; i++) {
    const allDivs = document.createElement("div");
    allDivs.style.height = "1rem";
    allDivs.style.width = "1rem";
    allDivs.style.border = "1px solid black";
    allDivs.addEventListener("mouseenter", () => {
      allDivs.style.backgroundColor = "yellow";
    });
    // change BC to blueViolet when mouse leaves div
    allDivs.addEventListener("mouseleave", () => {
      allDivs.style.backgroundColor = "blueViolet";
    });
    container.appendChild(allDivs);
  }
}
defaultGrid();
