// get all the buttons/elements from the layout
const keys = document.querySelectorAll(".key");
const operands = document.querySelectorAll('[data-type="operand"]');
const operators = document.querySelectorAll('[data-type="operators"]');
const clearBtn = document.querySelector('[data-type="clear"]');
const decimalBtn = document.querySelector('[data-type="decimal"]');
const moduloBtn = document.querySelector('[data-type="modulo"]');
const signBtn = document.querySelector('[data-type="sign"]');
const display = document.querySelector(".display");
console.log(operands);
console.log(clearBtn);
console.log(decimalBtn);
console.log(moduloBtn);
console.log(signBtn);

keys.forEach((key) =>
  key.addEventListener("click", () => {
    console.log(key.innerHTML);
  })
);

// keep separate "number-buttons" and "operator-buttons"

// when a button is pressed, show its value on the screen (keep previous values)

// a calcaulator operation consist of a number, an operator, and another number.
// create 3 variables, one for each part of the operation

// create operate function which takes in a number, an operator and another number

// given the operator, perform a sum/subtract/multipy/divide operation

// display the result, and round the long decimals

// if the user add another operator after the result, the result will become the new first number of the next operation
// if the user input two or more consecutive operators, keep the last one

// if a new digit is add after the result, clear the result and start from the new digit

// show an error if the user try to divides a number by 0

// create the clear function
function clearDisplay() {
  display.textContent = "";
}

// create the change sign function

// create the percentage function

// add listeners to buttons
clearBtn.addEventListener("click", clearDisplay);
