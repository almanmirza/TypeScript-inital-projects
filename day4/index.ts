//Q1:
console.log("Hello World");
//Q2:
let temperature;
temperature = 50;
if (temperature < 20) {
  console.log("Its cold");
} else {
  console.log("Its Hot");
}
//Q3:
let you = 10;
let apple = you - 3;
console.log(apple, "Apples");
//Q4:
let firstName = "Alman";
let lastName = "Ahmad";
let fullName = firstName + " " + lastName;
console.log(fullName);
//Q5:
let n1 = 5;
let n2 = 3;
if (n1 > n2) {
  console.log("Yes");
} else {
  console.log("No");
}
//Q6:
function calculateArea(r: number) {
  let area = 3.14 * r * r;
  return area;
}
console.log("Area", calculateArea(2));
//Q7:
for (let i = 1; i < 50; i++) {
  if (i % 3 == 0) {
    console.log(i, " Fizz");
  }
  if (i % 5 == 0) {
    console.log(i, "Buzz");
  }
}
//Q8:
let temperatures = [20, 30, 70, 60, 50];
let high = temperatures[0];
for (let i = 0; i < 5; i++) {
  if (high < temperatures[i]) {
    high = temperatures[i];
  }
}
console.log("Highest", high);
//Q9:
let age = 20;
if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}
//Q10:
function positive(n: any[]) {
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] >= 0) {
      count++;
    }
  }
  return count;
}
let arr = [1, 2, 0, -4, -1];
console.log("Count: ", positive(arr));
//Q11:

function words(name1: string[]) {
  let j = 0;
  let arr = [""];
  for (let i = 0; i < name1.length; i++) {
    let temp = name1[i];
    if (temp[0] == "a" || temp[0] == "A") {
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}
let name1: string[] = ["alman", "ahmad", "wasay"];
console.log("Name: ", words(name1));

//Q13:
function square(no: number[]) {
  let arra = [1];
  for (let i = 0; i < no.length; i++) {
    arra[i] = no[i] * no[i];
  }
  return arra;
}
let num: number[] = [1, 2, 3, 4, 5];
console.log("Squared array: ", square(num));
