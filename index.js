// Query the DOM elements
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");

// Mathmatical Functions
function addition() {
  let a = 1;
  let b = 2;
  return a + b;
}

function divide() {
  let a = "";
  let b = "";
  return a / b;
}

function multiply() {
  let a = "";
  let b = "";
  return a * b;
}

function subtract() {
  let a = "";
  let b = "";
  return a - b;
}

// function thats calls operator functions
function operate(input, a, b) {
  if (input() == addition(a, b)) {
    return addition();
  } else if (input() == divide(a, b)) {
    return divide();
  } else if (input() == multiply(a, b)) {
    return multiply();
  } else if (input() == subtract(a, b)) {
    return subtract();
  }
}

// main array that holds all numbers
let numberArray = [];

// Running the forEach function on the number buttons
numbers.forEach(function (number) {
  number.addEventListener("click", function input(e) {
    let clickNumber = e.currentTarget.textContent;
    numberArray.push(clickNumber);

    display.innerHTML = `${numberArray.join("")}`;
  });
});
