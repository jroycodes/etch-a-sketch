"use strict";

// select element with class container
const container = document.querySelector("#container");

// create a 16*16 grid of square divs
let divs = 16;

for (let i = 0; i < divs * divs; i++) {
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

// // change BC to yellow whwn mouse enters div
// mouseTarget.addEventListener("mouseenter", () => {
//   mouseTarget.style.backgroundColor = "yellow";
// });
// // change BC to blueViolet when mouse leaves div
// mouseTarget.addEventListener("mouseleave", () => {
//   mouseTarget.style.backgroundColor = "blueViolet";
// });

// const btn = document.querySelector("#container");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBackground() {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// btn.addEventListener("click", changeBackground);
