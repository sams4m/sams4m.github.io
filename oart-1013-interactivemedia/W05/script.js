console.log("welcome to interactive media");

// this is a comment

/* ===========
this is a multi line comment 
...
============*/
/* ===========
let count = 10;
console.log(count);

// prompt("what is your name", name);
// console.log("Hello", name);

// camelCase example
const myName = "Sam";
const myCity = "melbourne";
console.log(myName, "lives in", myCity);

count = 20;
console.log(count);

// {
//   let b = 30;

//   // console needs to be within the same block to be accessed
//   console.log(b);
// }

let isItRaining = false;
console.log(isItRaining);

if (isItRaining === true){
console.log('Please bring an umbrella');
}
else {
    console.log('No need for an umbrella');
}


let isitOARTClass = true;
console.log(isitOARTClass);

const studentRecord = {
  name: "Sam",
  id: "1234",
  class: "OART1013",
  AmIScienceStudent: false,
  AmIDesignStudent: true,
};

if(studentRecord.AmIDesignStudent === true) {
    console.log('Welcome to the class');
} else {
    console.log(studentRecord.AmIDesignStudent === flase)
    console.log('sorry, youre in the wrog class');
}


console.log("Name is", studentRecord.name);
console.log(studentRecord.name, "is a", studentRecord.class, "student.");

console.log(`${studentRecord.name} is a ${studentRecord.class} student.`);

console.log(studentRecord.AmIDesignStudent);


let myGrade = 90;
if(myGrade >= 90) {
    console.log('You got a HD');
}else if (myGrade < 90 && myGrade >= 70){
    console.log('You got a D');
}
else if (myGrade < 70 && myGrade >=60) {
    console.log('You got a C');
}
else if (myGrade < 60 && myGrade >= 50){
    console.log('You got a P');
}
else {
    console.log('You Failed. womp womp');
}


let studentNames = ['Robert', 'Alice', 'Fran', 'Jenny'];
console.log(studentNames[0]);

let numArray = [2, 5, 6, 8, 10];
console.log(numArray);
============*/

console.log("Hello, Sarah");
console.log("Hello, Alice");
console.log("Hello, Fran");
console.log("Hello, Peter");
console.log("Hello, Rob");

let name = ["Sarah", "Alice", "Fran", "Peter", "Rob", "Jenny", "Mike"];
console.log(name.length);
for (let i = 0; i < name.length; i++) {
  console.log("Hello", name[i]);
}

// array containing objects
let shoppingCart = [
  { name: "T-Shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;
console.log("my shopping total", total);

// using a for loop
let sum = 0;
for (let i = 0; i < 4; i++) {
  sum = sum + shoppingCart[i].price;
}

console.log("my shopping total", sum);

shoppingCart.forEach(calculateTotal);
sum = 0;
function calculateTotal(item) {
  sum += item.price;
}

console.log("the shopping total", sum);
