//console.log(getRandomNumber(6)); //this works, as you can call a function declaration before it's defined - function declarations load before ANY code is executed
//console.log(getRandomNumber2(6)); //Uncaught ReferenceError: Cannot access 'getRandomNumber2' before initialization
console.log(getRandomNumber3(6)); //Uncaught ReferenceError: Cannot access 'getRandomNumber2' before initialization


//Function declaration
function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}

// can become a function expression

const getRandomNumber2 = function (upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
};


//console.log(getRandomNumber(6));
//console.log(getRandomNumber2(6));


// vs. Arrow Functions

const getRandomNumber3 = (upper) => { // the => after the () replaces the function keyword
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

console.log("Normal declarative function")
console.log(getRandomNumber());

console.log("Function Expression")
console.log(getRandomNumber2());

console.log("Arrow function")
console.log(getRandomNumber3());

const square = (x) => {
  return x * x;
}

//even shorter syntax
const cube = x => { //can omit the () if there's only a single parameter
  return x * x * x;
}
console.log("Square");
console.log(square(10)); // 100


console.log("cube");
console.log(cube(5)); // 125

//can make the function more concise by omitting the return keyword and placing everything on one line - can omit the {} that contains what is returned as well, if omitting the return keyword:

const times4 = x =>  x * x * x * x ;

console.log("times4");
console.log(times4(5)); // 625

//single-line arrow function with no parameters requires parentheses before the arrow (=>) token, otherwise JavaScript produces a syntax error.

//const name = 'Sue Ellen';
//const greeting = => alert(`Greetings, ${name}!`);
//greeting(); // Uncaught SyntaxError: Unexpected token '=>'

//vs.
const name = 'Sue Ellen';
const greeting = () => console.log(`Greetings, ${name}!`);

//vs. old school way
const name2 = 'Mary Beth';
const greeting2 = function() {
  console.log(`Greetings, ${name2}!`);
}

greeting();
greeting2();

//Default parameter values
function sayGreeting(name) {
  console.log(`Good Morning, ${name}!`);
}

sayGreeting(); //returns Good Morning, undefined!

//vs.

function sayGreeting2(name = 'student') {
  //providing a default parameter with <paramname> = '<default value>'
  console.log(`Good afternoon, ${name}!`);
}

sayGreeting2(); //returns Good afternoon, student!
sayGreeting2('Billy'); //returns Good afternoon, Billy!

// Multiple parameters
function sayGreeting3(greeting = 'Greetings, and Salutations' , name = 'student') {
  //providing a default parameter with <paramname> = '<default value>'
  console.log(`${greeting}, ${name}!`);
}

sayGreeting3("Yo!, 'Sup?"); //returns Yo!, 'Sup?, student!
sayGreeting3("Yo!, 'Sup?", 'Bubba Ray'); //returns Yo!, 'Sup?, Bubba Ray!
sayGreeting3();// returns Greetings, and Salutations, student!

//only supplying the name, not the greeting
sayGreeting3('Mary Sue Bethany');// returns Mary Sue Bethany, student!
//sayGreeting3( ,'Mary Sue Bethany');// breaks the function with Uncaught SyntaxError: Unexpected token ','
sayGreeting3( '','Mary Sue Bethany');//returns , Mary Sue Bethany!

sayGreeting3( undefined,'Mary Sue Bethany'); // returns Greetings, and Salutations, Mary Sue Bethany!
//The above works


function getArea(width, length, unit = 'sq ft') {
  const area = width * length;
  return `${area} ${unit}`;
}

let myArea = getArea(10,20);
console.log(myArea); //displays 200 sq ft

/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

//const randomNumbers = (lower, upper) => Math.floor(Math.random() * (upper - lower + 1)) + 1;
const randomNumbers = (lower, upper) => Math.floor(Math.random() * (upper - lower + 1)) + lower;//better version

// Call the function and pass it different values


console.log(randomNumbers(13, 93));


function getRandomNumber(lower, upper) {
  if ( isNaN(lower) || (isNan(upper) ) { //This has an issue with the { , but I can't find it
  //console.log("please provide a number");
    throw Error('Please provide a number for each parameter.'); //better way
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;

}

console.log(getRandomNumber(4, 10));
console.log(getRandomNumber(4, 'ten'));
