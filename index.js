// Query the DOM elements
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const calcFunctions = document.querySelectorAll(".function");
const compute = document.querySelector(".compute");
const clear = document.querySelector(".clear-btn");

// Mathmatical Functions
function addition(a, b) {
  return a + b;
}

let divide = function (a, b) {
  return a / b;
};

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

// Array that displays all numbers
let displayValue = [];

//Array that holds numbers for computation
let calculateValue = [];

// Running the forEach function on the number buttons
numbers.forEach(function (number) {
  number.addEventListener("click", function input(e) {
    // for displayValue array
    let clickNumberDisplay = e.currentTarget.textContent;
    displayValue.push(clickNumberDisplay);
    display.innerHTML = `${displayValue.join("")}`;

    // for calculateValue array A
    let clickNumberCalculate = e.currentTarget.textContent;
    calculateValue.push(clickNumberCalculate);

    console.log(calculateValue);

    // Running the forEach function on the number buttons
    calcFunctions.forEach(function (calcFunction) {
      calcFunction.addEventListener("click", function (e) {
        let clickFunction = e.currentTarget.textContent;

        if (clickFunction == "Divide") {
          displayValue.push("/");
          display.innerHTML = `${displayValue.join("")}`;
        } else if (clickFunction == "Add") {
          displayValue.push("+");
          display.innerHTML = `${displayValue.join("")}`;
        } else if (clickFunction == "Subtract") {
          displayValue.push("-");
          display.innerHTML = `${displayValue.join("")}`;
        } else if (clickFunction == "Multiply") {
          displayValue.push("*");
          display.innerHTML = `${displayValue.join("")}`;
        }
      });
    });

    compute.addEventListener("click", function () {
      let a = calculateValue[0];
      let b = calculateValue[1];
      if (displayValue.includes("/")) {
        display.innerHTML = `${divide(a, b)}`;
      } else if (displayValue.includes("*")) {
        display.innerHTML = `${multiply(a, b)}`;
      } else if (displayValue.includes("+")) {
        display.innerHTML = `${addition(a, b)}`;
      } else if (displayValue.includes("-")) {
        display.innerHTML = `${subtract(a, b)}`;
      }
    });

    clear.addEventListener("click", function (calculateValue, displayValue) {
      display.innerHTML = ``;
    });
  });
});

// function thats calls operator functions
