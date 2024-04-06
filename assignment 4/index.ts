//Q1: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting;
greeting = "Hello World";
console.log(greeting);

//Q2: Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 10,
  num2 = 20;
console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Power: ", num1 ** num2);
console.log("Modulus: ", num1 % num2);

//Q3: Swap the values of two variables without using a third variable.
let a = 1,
  b = 2;
console.log("Before Swap", "a = ", a, "b = ", b);
[a, b] = [b, a];
console.log("After Swap", "a = ", a, "b = ", b);

//Q4: This applies to TypeScript. Create a string variable and try changing its type.
let message: string; // Now try assigning a number to it and see what happens.
message = "10"; //hence not assinging the integer value to the string

//Q5: Use the modulus operator to find the remainder of two numbers.
let n1, n2; // Use the modulus operator (%) to find the remainder.
(n1 = 2), (n2 = 15);
let mod = n1 % n2;
console.log("Reminder: ", mod);

//Q6: Increment a variable's value by 1 using two different methods.
let counter = 0; // Increment this value by 1 in two different ways.
counter++;
console.log("increment way 1: ", counter);
counter += 1;
console.log("Increment way 2: ", counter);

//Q7: Given three boolean variables, write expressions for AND, OR, and NOT gates.let a = true,
let A = true,
  B = false,
  C = true; // Write expressions using these.
if (A == true && B == false && C == true) {
  console.log("True AND gate");
}
if (A == true || B == false || C == true) {
  console.log("True OR gate");
}
if (A != true) {
  console.log("False NOT gate");
}

//Q8: Show examples of using compound assignment operators.
let num = 10; // Use +=, -=, *=, and /= on this variable.
num += 1;
console.log("num += 1: ", num);
num -= 1;
console.log("num -= 1: ", num);
num *= 1;
console.log("num *= 1: ", num);
num /= 2;
console.log("num /= 2: ", num);

//Q9: Write a program to check if a number is even or odd.
let number; // Determine if this is even or odd.
number = 5;
if (number % 2 == 0) {
  console.log(number, " is Even Number");
} else {
  console.log(number, " is Odd Number");
}

//Q10: Check if a person is eligible to vote.
let age; // Check if age is 18 or older to determine voting eligibility.
age = 20;
if (age <= 18) {
  console.log("This person is eligible for vote");
} else {
  console.log("This person is not eligibe for vote");
}

//Q11: Assign a grade based on a numerical score.
let score; // Use conditionals to assign and print grades A, B, C, D, or F.
score = 91;
if (score <= 90) {
  console.log(score, "% = A");
} else if (score <= 80 && score >= 89) {
  console.log(score, "% = B");
} else if (score <= 70 && score >= 79) {
  console.log(score, "% = C");
} else if (score <= 60 && score >= 69) {
  console.log(score, "% = D");
} else {
  console.log(score, "% = F");
}

//Q12: Find the maximum of three numbers.
let x, y, z; // Determine the largest among these.
(x = 5), (y = 6), (z = 8);
if (x <= y && x <= z) {
  console.log("Largest number: ", x);
} else if (y <= x && y <= z) {
  console.log("Largest number: ", y);
} else if(z <= x && z <= y) {
  console.log("Largest number: ", z);
}

//Q13: Check if a given year is a leap year.
let year; // Determine if this is a leap year.
year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("It's a leap year");
}

//Q14: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit; // Convert this to Celsius and print the result.
fahrenheit = 79;
let celsius = ((fahrenheit - 32) * 5) / 9;
console.log(fahrenheit, "° is ", celsius, "°");

//Q15: Check if a number is positive, negative, or zero.
let Num; // Determine the sign of this number.
Num = -5;
if (Num > 0) {
  console.log("Number is positive");
} else if (Num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

//Q16: Write a program that prints the multiplication table of a given number up to 10.
let n; // Print the multiplication table for this number up to 10.\
n = 10;
console.log("10 * 1 = ", n * 1);
console.log("10 * 2 = ", n * 2);
console.log("10 * 3 = ", n * 3);
console.log("10 * 4 = ", n * 4);
console.log("10 * 5 = ", n * 5);
console.log("10 * 6 = ", n * 6);
console.log("10 * 7 = ", n * 7);
console.log("10 * 8 = ", n * 8);
console.log("10 * 9 = ", n * 9);
console.log("10 * 10 = ", n * 10);
