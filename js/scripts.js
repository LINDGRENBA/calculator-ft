function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2) {
  return number1 - number2;
};

function multiply(number1, number2) {
  return number1 * number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

let number1 = parseInt(prompt('Enter a number:'));
let number2 = parseInt(prompt('Enter another number:'));

alert(divide(number1, number2));