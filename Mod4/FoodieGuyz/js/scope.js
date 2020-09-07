/*
let person = "Lee";

function greeting() {
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

greeting(); //Meg
alert (`Hi, ${person}`); //Lee
greeting();//Meg again

*/

//vs.
//Can’t access variables INSIDE a function from OUTSIDE that function
/*
let person2 = "Billy Bob";

function greeting2() {
  let person2 = 'Mary Sue';
  let brother2 = "Bubba Ray";
  alert(`Hi, ${person2}!`);
  alert(`Hey, ${brother2}!`);
}

greeting2(); //Mary Sue - Local Scope
alert (`Hi, ${person2}`); //Billy Bob - Global Scope
alert (`Hi, ${brother2}`); //Uncaught ReferenceError: brother2 is not defined
greeting2();//Mary Sue again - Local Scope


//vs.
// Functions CAN change a global variable from inside the function, though


let person3 = "Billy Bob";
alert (`YO ${person3}`);//Billy Bob

function greeting3() {
  person3 = 'Mary Sue';
  let brother2 = "Bubba Ray";
  alert(`Hello, ${person3}!`); // Mary Sue, not Billy Bob
  alert(`Hey, ${brother2}!`);
}

greeting3(); //Mary Sue - Local Scope
alert (`Hi, ${person3}`); //Mary Sue - Global Scope (but changed by function)

*/
//vs.
// Declaring global variable with Const is one safeguard


const person4 = "Billy Bob";
alert (`YO ${person4}`);//Billy Bob

function greeting4() {
  person3 = 'Mary Sue';
  let brother2 = "Bubba Ray";
  alert(`Hello, ${person4}!`); //Billy Bob
  alert(`Hey, ${brother2}!`);
}

greeting4();
alert (`Hi, ${person4}`); //Billy Bob
