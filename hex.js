"use strict";

// select elements
const title = document.querySelector(".title-color");
const backgroundText = document.querySelector(".title");
const main = document.querySelector("main");
const value = document.querySelector(".value");
const btn = document.querySelector(".btn");

const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomColor() {
  return Math.floor(Math.random() * hexArray.length);
}

function changeColor() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexArray[randomColor()];
  }
  main.style.backgroundColor = hex;
  value.style.color = hex;
  title.style.color = hex;
  value.textContent = hex;
  backgroundText.style.color = hex;
  btn.style.backgroundColor = hex;
}

btn.addEventListener("click", function () {
  changeColor();
});
