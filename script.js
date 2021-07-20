const { clear } = require("node:console");

const input = process.argv;

console.log("this ithe the process argv", process.argv);

const firstNumber = Number(input[2]);
const operator = input[3];
const secondNumber = Number(input[4]);

function calculator(firstNumber, operator, secondNumber) {
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
