// calculator.ts

// Function to perform addition
function add(a: number, b: number): number {
  return a + b;
}

// Function to perform subtraction
function subtract(a: number, b: number): number {
  return a - b;
}

// Function to perform multiplication
function multiply(a: number, b: number): number {
  return a * b;
}

// Function to perform division
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

const num1: number = 10;
const num2: number = 5;

const addResult = add(num1, num2);
console.log(`${num1} + ${num2} = ${addResult}`);

const subtractResult = subtract(num1, num2);
console.log(`${num1} - ${num2} = ${subtractResult}`);

const multiplyResult = multiply(num1, num2);
console.log(`${num1} * ${num2} = ${multiplyResult}`);

const divideResult = divide(num1, num2);
console.log(`${num1} / ${num2} = ${divideResult}`);
