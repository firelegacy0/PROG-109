// Declare variables
// Total of 7 variables
var adjective_1;
var adjective_2;
var adjective_3;
var adjective_4;
var meat;
var verb_1;
var color;

// Prompts user for each input
adjective_1 = prompt("Enter adjective#1");
adjective_2 = prompt("Enter adjective#2");
adjective_3 = prompt("Enter adjective#3");
adjective_4 = prompt("Enter adjective#4");
meat = prompt("Enter a meat type");
verb_1 = prompt("Enter a verb#1");
color = prompt("Enter a color");


// Concatenates input variables into existing text of a short story
// Output text: document.write 
document.write("It was a " + adjective_1 + ", cold December day. I woke up to the " + adjective_2 +" smell of " + meat + " roasting downstairs in the kitchen. I happily " + verb_1 + " down the stairs. There is a " + color + " tree decorated with " + adjective_3 + " bells and " + adjective_4 + " gifts underneath. Oh, it's Christmas! ");