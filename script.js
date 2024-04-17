"use strict";

// select element with class container
const container = document.querySelector("#container");

// create a 16*16 grid of square divs
let allDivs;
let divs = 16;

for (let i = 0; i < divs*divs; i++) {
  allDivs = document.createElement("div");
  allDivs.setAttribute("id", "theDiv");
  allDivs.style.height = "1rem";
  allDivs.style.width = "1rem";
  allDivs.style.border = "1px solid black";
//   allDivs.style.backgroundColor = "orangeRed";
  container.appendChild(allDivs);
}


// const btn = document.querySelector("#container");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);
