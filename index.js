// Comment
console.log("Hello World");

let name = "Seckin";
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen(-)
// Are case-sensitive

// let firstName = "Seckin";
// let lastName = "Tataroglu";


let interestRate = 0.3
interestRate = 1;
console.log(interestRate)


// let name = "Seckin"; // String Literal
// let age = 30; // Number Literal
let isApproved = true; // Boolean Literals
let firstName = undefined;
let selectedColour = null;


let person = {
    name: "Seckin",
    age: 30
};

// Dot Notation
person.name = "John";

// Bracket Notation
let selection = "name";
person[selection] = "Mary";


console.log(person.name);


let selectedColours = ["red", "blue"];
selectedColours[2] = 1;
console.log(selectedColours.length);



// Performing a Task
function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}


// Calculating a value
function square(number){
    return number * number;
}

greet("John", "Smith");
greet("Mary");

let number = square(2);
console.log(number);