"use strict";

// select element with class container
const container = document.querySelector(".container");
// create a 16*16 grid of square divs
const allDivs = doucment.createElement("div");
// add class
allDivs.classList.add("content");
// place the new element into the DOM
container.appendChild(allDivs);

const pContainer = document.querySelector(".container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

pContainer.appendChild(paragraph);