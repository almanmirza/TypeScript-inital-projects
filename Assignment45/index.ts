// Custom Message
let user: string = "Alice";
console.log(`Hey ${user}, ready to explore some Python today?`);

// Case Transformations
let namee: string = "Alice";
console.log(namee.toLowerCase());
console.log(namee.toUpperCase());
console.log(namee[0].toUpperCase() + namee.slice(1).toLowerCase());

// Inspiring Quote
console.log(`Albert Einstein once said, “Imagination is more important than knowledge.”`);

// Inspiring Quote 2
let thinker: string = "Albert Einstein";
let citation: string = `${thinker} once said, “Imagination is more important than knowledge.”`;
console.log(citation);

// Trimming Whitespace
let spacedName: string = "\t\n Alice \n\t";
console.log(spacedName);
console.log(spacedName.trim());

// Number Eight
console.log(6 + 2); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(32 / 4); // Division

// Lucky Number
let luckyNumber: number = 7;
console.log(`My lucky number is ${luckyNumber}`);

// Code Comments
// This script displays a personalized message, formats names in different cases,
// includes a famous quote, removes whitespace from strings, performs basic arithmetic,
// and shares a lucky number.

// Friends Array and Greetings
let friends: string[] = ["Anna", "Ben", "Charlie"];
friends.forEach(friend => console.log(friend));

friends.forEach(friend => console.log(`Hello ${friend}, nice to see you!`));

// Favorite Things Array
let favoriteThings: string[] = ["bicycle", "motorcycle", "rollerblades"];
favoriteThings.forEach(item => console.log(`I would love to own a ${item}.`));

// Dinner Invitation List
let invitees: string[] = ["Mahatma Gandhi", "Socrates", "Albert Einstein"];
invitees.forEach(invitee => console.log(`Dear ${invitee}, you're invited to dinner.`));

// Updating Invitation List
console.log(`Unfortunately, ${invitees[1]} can't make it to the dinner.`);
invitees[1] = "Marie Curie";
invitees.forEach(invitee => console.log(`Dear ${invitee}, you're invited to dinner.`));

// Expanding Guest List
console.log("Great news! We found a larger table!");
invitees.unshift("Leonardo da Vinci");
invitees.splice(2, 0, "Charles Darwin");
invitees.push("Nikola Tesla");
invitees.forEach(invitee => console.log(`Dear ${invitee}, you're invited to dinner.`));

// Reducing Guest List
console.log("Apologies, we can only host two guests.");
invitees.forEach(invitee => console.log(`Dear ${invitee}, you're still on the list.`));
invitees.length = 0;
console.log(invitees); // Should print an empty array

// Travel Destinations
let travelDestinations: string[] = ["Paris", "New Zealand", "Japan", "Canada", "Iceland"];
console.log(travelDestinations);
console.log([...travelDestinations].sort());
console.log(travelDestinations);
console.log([...travelDestinations].sort().reverse());
console.log(travelDestinations);
travelDestinations.reverse();
console.log(travelDestinations);
travelDestinations.reverse();
console.log(travelDestinations);
travelDestinations.sort();
console.log(travelDestinations);
travelDestinations.sort((a, b) => (a > b ? -1 : 1));
console.log(travelDestinations);

// Total Dinner Guests
console.log(`The total number of guests invited is ${invitees.length}.`);

// Language List
let languages: string[] = ["Spanish", "Russian", "Mandarin", "Hindi", "Arabic"];
console.log(languages);

// Mountain Peaks Object
interface Mountain {
  name: string;
  elevation: number;
}

let mountains: Mountain[] = [
  { name: "Denali", elevation: 6190 },
  { name: "Kilimanjaro", elevation: 5895 },
  { name: "Aconcagua", elevation: 6960 }
];
console.log(mountains);

// Intentional Error
let scores: number[] = [70, 80, 90, 100];
console.log(scores[3]); // Correct index for existing elements
// console.log(scores[4]); // Index out of bounds, commented out

// Comparison Tests
let automobile: string = 'tesla';
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
console.log(5 == 5 );
console.log(5 == 5 );
console.log([1, 2, 3].includes(2));
console.log(![1, 2, 3].includes(4));

// Alien Colors #1
let alienColor: string = 'green';
if (alienColor === 'green') {
  console.log("You earned 5 points.");
}

// Alien Colors #2
alienColor = 'red';
if (alienColor === 'green') {
  console.log("You earned 5 points.");
} else {
  console.log("You earned 10 points.");
}

// Alien Colors #3
alienColor = 'yellow';
if (alienColor === 'green') {
  console.log("You earned 5 points.");
} else if (alienColor === 'red') {
  console.log("You earned 10 points.");
} else if (alienColor === 'yellow') {
  console.log("You earned 15 points.");
}

// Life Stages
let age: number = 45;
if (age < 2) {
  console.log("This person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("This person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("This person is a child.");
} else if (age >= 13 && age < 20) {
  console.log("This person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("This person is an adult.");
} else {
  console.log("This person is a senior.");
}

// Preferred Fruits
let favoriteFruits: string[] = ["apple", "banana", "strawberry"];
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
let accountUsers: string[] = ["superadmin", "Anna", "Ben", "Charlie", "Diana"];
if (accountUsers.length === 0) {
  console.log("We need more users!");
} else {
  accountUsers.forEach(user => {
    if (user === 'superadmin') {
      console.log("Hello superadmin, do you want to see the system report?");
    } else {
      console.log(`Hello ${user}, glad to have you back!`);
    }
  });
}

// No Users Scenario
accountUsers = [];
if (accountUsers.length === 0) {
  console.log("We need more users!");
}

// Username Availability Check
let currentUsers: string[] = ["John", "Mike", "Anna", "Lisa", "Diana"];
let newUsers: string[] = ["john", "Paul", "ANNA", "Laura", "Eric"];
newUsers.forEach(newUser => {
  if (currentUsers.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
    console.log(`${newUser} is already taken, please choose a different username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});

// Ordinal Numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(num => {
  if (num === 1) {
    console.log(`${num}st`);
  } else if (num === 2) {
    console.log(`${num}nd`);
  } else if (num === 3) {
    console.log(`${num}rd`);
  } else {
    console.log(`${num}th`);
  }
});

// Favorite Pizzas
let topPizzas: string[] = ["Pepperoni", "Margarita", "BBQ Chicken"];
topPizzas.forEach(pizza => console.log(`I enjoy ${pizza} pizza.`));
console.log("I truly love pizza!");

// Pets
let animals: string[] = ["Dog", "Cat", "Rabbit"];
animals.forEach(animal => console.log(`A ${animal} would be a wonderful pet.`));
console.log("Any of these animals would make great pets!");

// T-Shirt Function
function makeShirt(size: string, message: string): void {
  console.log(`The shirt size is ${size} and the message is: "$);
  }
