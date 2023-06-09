//14th May, 2023
// Math Expressions - Task

//1. Write a program that take two numbers & add them in anew variable. Show the result in your browser.

var num1=5;
var num2=6;
var result;

result = num1 + num2;
document.write("sum of " + num1 + " & " + num2 + " is " + result);

//2. Repeat task1 for subtraction, multiplication, division &
//Subtraction

var num1=9;
var num2=6;
var result;

result = num1 - num2;
document.write("sum of " + num1 + " & " + num2 + " is " + result + "<br>");

//Multiplication

var num1=8;
var num2=3;
var result;

result = num1 * num2;
document.write("sum of " + num1 + " & " + num2 + " is " + result + "<br>");

// Division
var num1=8;
var num2=2;
var result;

result = num1 / num2;
document.write("sum of " + num1 + " & " + num2 + " is " + result + "<br>");

//3. Do the following using JS Mathematic Expressions

// a. Declare a variable
var myVariable;

// b. Show the value of the variable in the browser
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number
myVariable = 5;

// d. Show the value of the variable in the browser
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable
myVariable++;

// f. Show the value of the variable in the browser
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable
myVariable += 7;

// h. Show the value of the variable in the browser
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable
myVariable--;

// j. Show the value of the variable in the browser
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable's value by 3
var remainder = myVariable % 3;

// l. Output the remainder in the browser
document.write("The remainder is: " + remainder + "<br>");


/*4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5
tickets to a movie. Example output: */

var ticket = 600;
var qty = 5;
var total = ticket*qty;

document.write("Total cost to buy 5 movie tickets is : " + total +" PKR" + "<br>");

/* 5. Write a script to display multiplication table of any
number in your browser */

var number = 2;

for (var i=1;i<=10;i++){
    document.write(number + " x " + i + " = " + number * i + "<br>" );

}

/* 6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.
Conversion Formulae: */

