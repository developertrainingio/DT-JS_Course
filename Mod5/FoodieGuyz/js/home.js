
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