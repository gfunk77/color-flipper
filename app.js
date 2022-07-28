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
  let color = `rgb(${randomColor(0, 255)},${randomColor(0, 255)}, ${randomColor(
    0,
    255
  )})`;
  main.style.backgroundColor = color;
  value.style.color = color;
  title.style.color = color;
  value.textContent = color;
  backgroundText.style.color = color;
  btn.style.backgroundColor = color;
}

btn.addEventListener("click", function () {
  changeColor();
});
