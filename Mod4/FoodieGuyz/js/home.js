
  switch (new Date().getDay()) {
    //switch (4) {
        case 0:
            var special = "Sorry, we're closed";
            break;
        case 1:
            var special = "Sorry, we're closed";
            break;
        case 2:
            var special = 'Taco Tuesday with Chips and Salsa';
            break;
        case 3:
            var special = "Wacky Wednesday Buffalo Wings";
            break;
        case 4:
            var special = "Mom's Meatloaf";
            break;
        case 5:
            var special = 'Freaky Fully Loaded Pizza';
            break;
        case 6:
            var special = 'Steak Night';
            break;
        default:
            var special = "You have to provide me with a number. No Daily specials for You!";
    }
    document.write("\nToday is day "+ new Date().getDay() + " in the range 0-6");
    document.write ("<h2>Daily Chef Special:</h2>");
    document.write (special);


    function applyStandardTip() {
      let numPeople = parseInt(prompt("How many people in the party?: "));
      let total = parseFloat(prompt("What is the bill total?: "))
      if (numPeople > 7){
        let tipAmt = .18;
        let totalAmt = total * tipAmt + total;
        alert ("Their total bill is: $" + totalAmt);
        } else {
        alert ("Their total bill is: $" + total);
      }
    }

applyStandardTip();

function square(){
  i = prompt("gimme a number: ");
  result = i*i;
  console.log(result);
  return result;
  console.log(result*2);
}

square();

function isFieldEmpty(){
  const field = document.querySelector('#info');
  console.log(field);

  if (!field.value) { //shorthand for below code statement
  //if (field.value ==='') {
    return true;
    //return ("This field is empty.");
  } else {
    return false;
    //return ("The value is: " + field);
  }
}

const fieldTest = isFieldEmpty();

if (fieldTest) { //shorthand for below code statement
//if (fieldTest === true) {
  alert ("Enter a value, fool!")
}
