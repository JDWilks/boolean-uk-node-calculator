const { clear } = require("node:console");

const input = process.argv;

console.log("this is the process argv", process.argv);

// const divide = "/"
// const multiply = "*"
// const add = "+"
// const substract = "-"

const newInput = input.slice(2);

console.log("this is new array", newInput);

let divIndex = newInput.indexOf("/");
let divArray = newInput.splice(divIndex - 1, divIndex + 2);

// let multipyIndex = numbersArrayCalc.indexOf("*");
// let multipyArray = numbersArrayCalc.splice(divIndex -1, divIndex +2)

// let addIndex = numbersArrayCalc.indexOf("+");
// let addArray = numbersArrayCalc.splice(divIndex -1, divIndex +2)

// let subtractIndex = numbersArrayCalc.indexOf("/");
// let subtractArray = numbersArrayCalc.splice(divIndex -1, divIndex +2)

const firstNumber = Number(divArray[0]);
const operator = divArray[1];
const secondNumber = Number(divArray[2]);

function calculator(firstNumber, operator, secondNumber) {
  let result = 0;
  if (operator === "add" || operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "minus" || operator === "-") {
    result = firstNumber - secondNumber;
  } else if (
    operator === "divided" ||
    operator === "divide" ||
    operator === "/"
  ) {
    result = firstNumber / secondNumber;
  } else if (
    operator === "times" ||
    operator === "multiply" ||
    operator === "*"
  ) {
    result = firstNumber * secondNumber;
  }
  return result;
}

console.log("your result is:", calculator(firstNumber, operator, secondNumber));

// below is code that worked as a test

// function multiply(firstNumber, secondNumber) {
//     return firstNumber * secondNumber;
//   }

//   function add(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
//   }

//   function subtract(firstNumber, secondNumber) {
//     return firstNumber - secondNumber;
//   }

//   function divide(firstNumber, secondNumber) {
//     return firstNumber / secondNumber;
//   }

//   console.log(
//     "Your super multiply calculor came up with :",
//     multiply(firstNumber, secondNumber)
//   );

//   console.log(
//     "Your super addition calculor came up with :",
//     add(firstNumber, secondNumber)
//   );

//   console.log(
//     "Your super subtraction calculor came up with :",
//     subtract(firstNumber, secondNumber)
//   );

//   console.log(
//     "Your super division calculor came up with :",
//     divide(firstNumber, secondNumber)
//   );
