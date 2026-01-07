// get all the buttons/elements from the layout
const keys = document.querySelectorAll(".key");
const operands = document.querySelectorAll('[data-type="operand"]');
const operators = document.querySelectorAll('[data-type="operator"]');
const clearBtn = document.querySelector('[data-type="clear"]');
const decimalBtn = document.querySelector('[data-type="decimal"]');
const percentageBtn = document.querySelector('[data-type="percentage"]');
const signBtn = document.querySelector('[data-type="sign"]');
const display = document.querySelector(".display");
console.log(operands);
console.log(clearBtn);
console.log(decimalBtn);
console.log(percentageBtn);
console.log(signBtn);

// a calcaulator operation consist of a number, an operator, and another number.
// create 3 variables, one for each part of the operationlet firstOperand;
let secondOperand;
let operator;
let result;
let checkFirstOperand = false;
let checkSecondOperand = false;
let checkOperator = false;
let checkResult = false;
const checkDecimal = false;

keys.forEach((key) =>
  key.addEventListener("click", () => {
    console.log(key.innerHTML);
    // console.log(
    //   `first number = ${firstOperand}, operator = ${operator}, second number = ${secondOperand}`
    // );
  })
);

// keep separate "number-buttons" and "operator-buttons"

// create operate function which takes in a number, an operator and another number
function operate(firstOperand, operator, secondOperand) {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);
  // given the operator, perform a sum/subtract/multipy/divide operation
  if (operator === "+") return firstOperand + secondOperand;
  if (operator === "-") return firstOperand - secondOperand;
  if (operator === "x") return firstOperand * secondOperand;
  if (operator === "/") {
    // show an error if the user try to divides a number by 0
    if (secondOperand == 0) {
      alert("cannot divide a number by zero!");
      return;
    }

    return firstOperand / secondOperand;
  }
}

// create the clear function
function clear() {
  firstOperand = "";
  secondOperand = "";
  operator = "";
  result = "";
  checkFirstOperand = false;
  checkOperator = false;
  checkSecondOperand = false;
  checkResult = false;
  display.textContent = "0";
}

// create the change sign function

// create the percentage function
function percentageCalc(firstOperand, operator, secondOperand) {
  // if there is only one operand, calculate its percentage (x * 1 / 100)
  if (!checkSecondOperand) {
    firstOperand = Number(firstOperand);
    return firstOperand / 100;
  } else {
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);
    console.log("first operand and second operand ok, calculate result");
    // if there are two operands, when:

    // 1 the operator is "+" or "-",  calculate the percentage of the first operand and sub
    // or sum from the first operand the result --> 25 - 10% = 25 - 25 * 10 / 100 = 22.5
    if (operator === "+") {
      console.log(
        `operator: ${operator}, first operand: ${firstOperand}, second operand: ${secondOperand}`
      );
      return firstOperand + (firstOperand * secondOperand) / 100;
    }
    if (operator === "-") {
      return firstOperand - (firstOperand * secondOperand) / 100;
    }

    // 2 the operator is "x" or "/", calculate the percentage of the operand and
    // multiply or divide the other operand with the result --> 25 x 10 % = 25 x 0.1 = 2.5
    if (operator === "x") {
      return firstOperand * (secondOperand / 100);
    }
    if (operator === "/") {
      return firstOperand / (secondOperand / 100);
    }
  }
}

// add listeners to buttons
clearBtn.addEventListener("click", clear);

operands.forEach((operand) =>
  operand.addEventListener("click", () => {
    if (!checkFirstOperand) {
      // if a new digit is add after the result, reset the result flag and start from the new digit
      checkResult = false;
      firstOperand = operand.innerHTML;
      display.textContent = firstOperand;
      checkFirstOperand = true;
      console.log(
        `first number = ${firstOperand}, operator = ${operator}, second number = ${secondOperand}`
      );
    } else if (checkFirstOperand && !checkOperator) {
      firstOperand += operand.innerHTML;
      display.textContent = firstOperand;
      console.log(
        `first number = ${firstOperand}, operator = ${operator}, second number = ${secondOperand}`
      );
    } else if (!checkSecondOperand) {
      secondOperand = operand.innerHTML;
      display.textContent = secondOperand;
      checkSecondOperand = true;
      console.log(
        `first number = ${firstOperand}, operator = ${operator}, second number = ${secondOperand}`
      );
    } else {
      secondOperand += operand.innerHTML;
      display.textContent = secondOperand;
      console.log(
        `first number = ${firstOperand}, operator = ${operator}, second number = ${secondOperand}`
      );
    }
  })
);

operators.forEach((operatorBtn) =>
  operatorBtn.addEventListener("click", () => {
    if (operatorBtn.innerHTML === "=") {
      result = operate(firstOperand, operator, secondOperand);
      console.log(result);
      // display the result, and round the long decimals
      display.textContent = result;
      checkResult = true;
      checkFirstOperand = false;
      checkSecondOperand = false;
      checkOperator = false;
      return;
    }

    // if the user add another operator after the result, the result will become the new first number of the next operation
    if (checkResult === true) {
      console.log(
        `RESULT MOVED TO first number = ${firstOperand}, operator = ${operator}, second number = ${secondOperand}`
      );
      firstOperand = result;
      checkFirstOperand = true;
      checkResult = false;
      checkSecondOperand = false;
      checkOperator = true;
      secondOperand = "";
      operator = "";
      console.log(
        `Situation at the end of the block = ${firstOperand}, operator = ${operator}, second number = ${secondOperand}`
      );
    }
    // if the user input two or more consecutive operators, keep the last one
    operator = operatorBtn.innerHTML;
    display.textContent = operator;
    checkOperator = true;
    console.log(
      `inside operators -> first number = ${firstOperand}, operator = ${operator}, second number = ${secondOperand}`
    );

    // if (checkFirstOperand && checkSecondOperand) {
    //   console.log(
    //     `ANOTHER OPERATOR. checkFirstOperand: ${checkFirstOperand}, checkSecondOperand: ${checkSecondOperand}`
    //   );
    //   result = operate(firstOperand, operator, secondOperand);
    //   display.textContent = result;
    //   checkFirstOperand = false;
    //   checkOperator = false;
    //   checkSecondOperand = false;
    //   checkResult = true;
    //   firstOperand = "";
    //   operator = "";
    //   secondOperand = "";

    //   console.table({
    //     checkFirstOperand,
    //     checkOperator,
    //     checkSecondOperand,
    //     checkResult,
    //     firstOperand,
    //     operator,
    //     secondOperand,
    //   });
    // }
  })
);

percentageBtn.addEventListener("click", () => {
  if (!checkFirstOperand) {
    console.log("first operand empty, invalid use");
    alert("Invalid format use");
    return;
  }

  console.log(
    `booleans situation: checkFirstOperand -> ${checkFirstOperand}, checkOperator -> ${checkOperator}, checkSecondOperand -> ${checkSecondOperand}`
  );

  if (checkFirstOperand && checkOperator && checkSecondOperand) {
    result = percentageCalc(firstOperand, operator, secondOperand);
    display.textContent = result;
    checkResult = true;
    checkFirstOperand = false;
    checkSecondOperand = false;
    checkOperator = false;
  } else if (checkFirstOperand) {
    result = percentageCalc(firstOperand);
    display.textContent = result;
    checkResult = true;
    checkFirstOperand = false;
  }
});

// TODO: implement an alternative calculation flow:
// display operands and operators in real time,
// evaluate the expression only on "=",
// and render the computed result
