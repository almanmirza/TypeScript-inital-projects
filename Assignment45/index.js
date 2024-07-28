var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Custom Message
var user = "Alice";
console.log("Hey ".concat(user, ", ready to explore some Python today?"));
// Case Transformations
var namee = "Alice";
console.log(namee.toLowerCase());
console.log(namee.toUpperCase());
console.log(namee[0].toUpperCase() + namee.slice(1).toLowerCase());
// Inspiring Quote
console.log("Albert Einstein once said, \u201CImagination is more important than knowledge.\u201D");
// Inspiring Quote 2
var thinker = "Albert Einstein";
var citation = "".concat(thinker, " once said, \u201CImagination is more important than knowledge.\u201D");
console.log(citation);
// Trimming Whitespace
var spacedName = "\t\n Alice \n\t";
console.log(spacedName);
console.log(spacedName.trim());
// Number Eight
console.log(6 + 2); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(32 / 4); // Division
// Lucky Number
var luckyNumber = 7;
console.log("My lucky number is ".concat(luckyNumber));
// Code Comments
// This script displays a personalized message, formats names in different cases,
// includes a famous quote, removes whitespace from strings, performs basic arithmetic,
// and shares a lucky number.
// Friends Array and Greetings
var friends = ["Anna", "Ben", "Charlie"];
friends.forEach(function (friend) { return console.log(friend); });
friends.forEach(function (friend) { return console.log("Hello ".concat(friend, ", nice to see you!")); });
// Favorite Things Array
var favoriteThings = ["bicycle", "motorcycle", "rollerblades"];
favoriteThings.forEach(function (item) { return console.log("I would love to own a ".concat(item, ".")); });
// Dinner Invitation List
var invitees = ["Mahatma Gandhi", "Socrates", "Albert Einstein"];
invitees.forEach(function (invitee) { return console.log("Dear ".concat(invitee, ", you're invited to dinner.")); });
// Updating Invitation List
console.log("Unfortunately, ".concat(invitees[1], " can't make it to the dinner."));
invitees[1] = "Marie Curie";
invitees.forEach(function (invitee) { return console.log("Dear ".concat(invitee, ", you're invited to dinner.")); });
// Expanding Guest List
console.log("Great news! We found a larger table!");
invitees.unshift("Leonardo da Vinci");
invitees.splice(2, 0, "Charles Darwin");
invitees.push("Nikola Tesla");
invitees.forEach(function (invitee) { return console.log("Dear ".concat(invitee, ", you're invited to dinner.")); });
// Reducing Guest List
console.log("Apologies, we can only host two guests.");
invitees.forEach(function (invitee) { return console.log("Dear ".concat(invitee, ", you're still on the list.")); });
invitees.length = 0;
console.log(invitees); // Should print an empty array
// Travel Destinations
var travelDestinations = ["Paris", "New Zealand", "Japan", "Canada", "Iceland"];
console.log(travelDestinations);
console.log(__spreadArray([], travelDestinations, true).sort());
console.log(travelDestinations);
console.log(__spreadArray([], travelDestinations, true).sort().reverse());
console.log(travelDestinations);
travelDestinations.reverse();
console.log(travelDestinations);
travelDestinations.reverse();
console.log(travelDestinations);
travelDestinations.sort();
console.log(travelDestinations);
travelDestinations.sort(function (a, b) { return (a > b ? -1 : 1); });
console.log(travelDestinations);
// Total Dinner Guests
console.log("The total number of guests invited is ".concat(invitees.length, "."));
// Language List
var languages = ["Spanish", "Russian", "Mandarin", "Hindi", "Arabic"];
console.log(languages);
var mountains = [
    { name: "Denali", elevation: 6190 },
    { name: "Kilimanjaro", elevation: 5895 },
    { name: "Aconcagua", elevation: 6960 }
];
console.log(mountains);
// Intentional Error
var scores = [70, 80, 90, 100];
console.log(scores[3]); // Correct index for existing elements
// console.log(scores[4]); // Index out of bounds, commented out
// Comparison Tests
var automobile = 'tesla';
console.log("Is automobile == 'tesla'? I predict True.");
console.log(automobile == 'tesla');
console.log("Is automobile == 'Tesla'? I predict False.");
console.log(automobile == 'Tesla');
// Additional Comparison Tests
console.log(automobile != 'ford');
console.log(automobile.toLowerCase() == 'tesla');
console.log(10 > 5);
console.log(30 <= 50);
console.log(15 >= 15);
console.log(2 < 1);
console.log(5 == 5);
console.log(5 == 5);
console.log([1, 2, 3].includes(2));
console.log(![1, 2, 3].includes(4));
// Alien Colors #1
var alienColor = 'green';
if (alienColor === 'green') {
    console.log("You earned 5 points.");
}
// Alien Colors #2
alienColor = 'red';
if (alienColor === 'green') {
    console.log("You earned 5 points.");
}
else {
    console.log("You earned 10 points.");
}
// Alien Colors #3
alienColor = 'yellow';
if (alienColor === 'green') {
    console.log("You earned 5 points.");
}
else if (alienColor === 'red') {
    console.log("You earned 10 points.");
}
else if (alienColor === 'yellow') {
    console.log("You earned 15 points.");
}
// Life Stages
var age = 45;
if (age < 2) {
    console.log("This person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("This person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("This person is a child.");
}
else if (age >= 13 && age < 20) {
    console.log("This person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("This person is an adult.");
}
else {
    console.log("This person is a senior.");
}
// Preferred Fruits
var favoriteFruits = ["apple", "banana", "strawberry"];
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favoriteFruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favoriteFruits.includes("pineapple")) {
    console.log("You really like pineapples!");
}
// Greetings for Admin and Users
var accountUsers = ["superadmin", "Anna", "Ben", "Charlie", "Diana"];
if (accountUsers.length === 0) {
    console.log("We need more users!");
}
else {
    accountUsers.forEach(function (user) {
        if (user === 'superadmin') {
            console.log("Hello superadmin, do you want to see the system report?");
        }
        else {
            console.log("Hello ".concat(user, ", glad to have you back!"));
        }
    });
}
// No Users Scenario
accountUsers = [];
if (accountUsers.length === 0) {
    console.log("We need more users!");
}
// Username Availability Check
var currentUsers = ["John", "Mike", "Anna", "Lisa", "Diana"];
var newUsers = ["john", "Paul", "ANNA", "Laura", "Eric"];
newUsers.forEach(function (newUser) {
    if (currentUsers.map(function (user) { return user.toLowerCase(); }).includes(newUser.toLowerCase())) {
        console.log("".concat(newUser, " is already taken, please choose a different username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
// Ordinal Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (num) {
    if (num === 1) {
        console.log("".concat(num, "st"));
    }
    else if (num === 2) {
        console.log("".concat(num, "nd"));
    }
    else if (num === 3) {
        console.log("".concat(num, "rd"));
    }
    else {
        console.log("".concat(num, "th"));
    }
});
// Favorite Pizzas
var topPizzas = ["Pepperoni", "Margarita", "BBQ Chicken"];
topPizzas.forEach(function (pizza) { return console.log("I enjoy ".concat(pizza, " pizza.")); });
console.log("I truly love pizza!");
// Pets
var animals = ["Dog", "Cat", "Rabbit"];
animals.forEach(function (animal) { return console.log("A ".concat(animal, " would be a wonderful pet.")); });
console.log("Any of these animals would make great pets!");
// T-Shirt Function
function makeShirt(size, message) {
    console.log("The shirt size is ".concat(size, " and the message is: \"$);\n  }\n"));
}
