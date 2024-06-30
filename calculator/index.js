// calculator.ts
// Function to perform addition
function add(a, b) {
    return a + b;
}
// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}
// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}
// Function to perform division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
var num1 = 10;
var num2 = 5;
var addResult = add(num1, num2);
console.log("".concat(num1, " + ").concat(num2, " = ").concat(addResult));
var subtractResult = subtract(num1, num2);
console.log("".concat(num1, " - ").concat(num2, " = ").concat(subtractResult));
var multiplyResult = multiply(num1, num2);
console.log("".concat(num1, " * ").concat(num2, " = ").concat(multiplyResult));
var divideResult = divide(num1, num2);
console.log("".concat(num1, " / ").concat(num2, " = ").concat(divideResult));
