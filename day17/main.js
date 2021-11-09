//Sample variable declaration
let person = "Jose Rizal"; //string type "Jose Rizal"
let age = 30; //this is example of number, if put quotation it will be string
let birthplace = "Laguna"; //another string
//how to display
console.log (person); //console.log will display output in dev tools console
//alert (person); //will display outut in pop-up
document.write ("Name: " +person +"<br>"); //document.write will display in browser, using "+" to concatinate, add space using "<br>"
document.write (`Age: ${age} <br>`); //conctinating using the backtick "``" and dollar sign
document.write (`Birthplace: ${birthplace}`);
console.log (age);
console.log (birthplace);

//Sample of data type
var fname = "Juan"; //string with quotes
var grade = 100; //number data type without quote
var ave = 90.5; //number data type
let haspassed = true; //boolean data type sample, true or false value only
let val = null //null data type

console.log (fname);
console.log (typeof fname) //will check the data type of variable
console.log (grade);
console.log (typeof grade)

//Sample Operators
let x = 20;
let y = 10;
let sum = x + y;//+ for additiion
alert(sum); //will display the sum in alert
//increment or decrement the sum
//alert (++sum); one way to increment
sum++
alert(sum); //another way to increment
 let a = 8; //x is already assigned to 20 and cannot be redeclared or used
 let b = 6;
 let product = a * b;

 alert (product);
 product--
 alert (product);
//operator using var declartion
 var c = 12;
 var d = 3;
 var quotient = c/d;

 alert (quotient);
//using var declaration name can be reused
var diff = c-d;
alert (diff);
