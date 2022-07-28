"use strict";

// select elements
const title = document.querySelector(".title-color");
const backgroundText = document.querySelector(".title");
const main = document.querySelector("main");
const value = document.querySelector(".value");
const btn = document.querySelector(".btn");

function randomColor(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function changeColor() {
  value.style.color = main.style.backgroundColor;
  title.style.color = main.style.backgroundColor;
  value.textContent = main.style.backgroundColor;
  backgroundText.style.color = main.style.backgroundColor;
}

btn.addEventListener("click", function () {
  main.style.backgroundColor = `rgb(${randomColor(0, 255)},${randomColor(
    0,
    255
  )}, ${randomColor(0, 255)})`;
  changeColor();
});
