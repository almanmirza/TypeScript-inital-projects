//Q1:
console.log("Hello World");
//Q2:
var temperature;
temperature = 50;
if (temperature < 20) {
    console.log("Its cold");
}
else {
    console.log("Its Hot");
}
//Q3:
var you = 10;
var apple = you - 3;
console.log(apple, "Apples");
//Q4:
var firstName = "Alman";
var lastName = "Ahmad";
var fullName = firstName + " " + lastName;
console.log(fullName);
//Q5:
var n1 = 5;
var n2 = 3;
if (n1 > n2) {
    console.log("Yes");
}
else {
    console.log("No");
}
//Q6:
function calculateArea(r) {
    var area = 3.14 * r * r;
    return area;
}
console.log("Area", calculateArea(2));
//Q7:
for (var i = 1; i < 50; i++) {
    if (i % 3 == 0) {
        console.log(i, " Fizz");
    }
    if (i % 5 == 0) {
        console.log(i, "Buzz");
    }
}
//Q8:
var temperatures = [20, 30, 70, 60, 50];
var high = temperatures[0];
for (var i = 0; i < 5; i++) {
    if (high < temperatures[i]) {
        high = temperatures[i];
    }
}
console.log("Highest", high);
//Q9:
var age = 20;
if (age < 18) {
    console.log("Minor");
}
else {
    console.log("Adult");
}
//Q10:
function positive(n) {
    var count = 0;
    for (var i = 0; i < n.length; i++) {
        if (n[i] >= 0) {
            count++;
        }
    }
    return count;
}
var arr = [1, 2, 0, -4, -1];
console.log("Count: ", positive(arr));
//Q11:
function words(name1) {
    var j = 0;
    var arr = [""];
    for (var i = 0; i < name1.length; i++) {
        var temp = name1[i];
        if (temp[0] == "a" || temp[0] == "A") {
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}
var name1 = ["alman", "ahmad", "wasay"];
console.log("Name: ", words(name1));
//Q13:
function square(no) {
    var arra = [1];
    for (var i = 0; i < no.length; i++) {
        arra[i] = no[i] * no[i];
    }
    return arra;
}
var num = [1, 2, 3, 4, 5];
console.log("Squared array: ", square(num));
