const score = 5;
console.log(score);

//score += 5; //Uncaught TypeError: Assignment to constant variable.
console.log(score);
//var score2 = 25; //Uncaught SyntaxError: Identifier 'score2' has already been declared
console.log(score);

//vs. let
let score2 = 50;
console.log(score2);

score2 += 5; 
console.log(score2);
//let score2 = 25; //Uncaught SyntaxError: Identifier 'score2' has already been declared
console.log(score2);

//vs. var
var score3 = 100;
console.log(score3);

score3 += 5; 
console.log(score3);
var score3 = 250; //this works - score3 becomes 250 
console.log(score3);