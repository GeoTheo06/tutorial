/* Dynamic Variables. The variable value can be changed as well as the type of the variable! so a string variable can become int variable just by assigning a string first and then an int
var age = 25

//or if you are a pervert, you can define variables using "var" keyword: 
let whatIsThis = 25

age = "dynamic typed languages are kinda cool"
console.log(age) //outputs "this is kinda cool" 

Constant Variables
const salary = 8000
console.log(salary)

//strings and log parameters: double quotes "", single quotes '', and whatever the fuck this is  ``  all do the same job in strings (i think)
var name = "Giorgio";
var language = "Javascript";
var anotherString = `what?`;
console.log(name + language + anotherString); //outputs GiorgioJavascriptwhat?
console.log(name, language, anotherString); //outputs Giorgio Javascript what?

// undefined value
var result; //outputs "undefined". Undefined is an actual value that can be used when declaring variables: "var result = undefined"

//null value: to set a variable to have null value there is no automatic way like "undefined" so you have to type it yourself: "var result = null"
var result2 = null

//Object: creates an object called person that has three properties: first_name, last_name, and age.
var person = {
  first_name: "Bruce",
  last_name: "Wayne",
  age: 30,
};
console.log(person.first_name)

//Arrays: just like the other languages
const oddNumbers = [1, 3, 5, 7, 9]
console.log(oddNumbers[2])


//comparison operators: double equals == checks if the value is the same. Triple equals === checks if the value AND the data type is the same. "not triple equals" would be !== XD
var x = 5;
var z = "5";
console.log(x == z); //true
console.log(x === z); //false

//ternary operators: ? (if) then, : else
var isEven = 10 % 2 ? "yes" : "no";
console.log(isEven); //no
//kinda cool

//explicit type conversion.
console.log(parseFloat("3.14"))
console.log(parseInt("3"))
console.log(String(543.123))
console.log((543.123).toString())

//functions
//normal function:
function sum(a, b) {
	return a + b;
} 
sumation = sum(5, 4)
console.log(sumation)

//arrow functions:
var arrowSum = (a, b) => {
	return a + b;
}
//there's also in-line arrow functions: var arrowSum = (a, b) => a + b
var arrowSumation = arrowSum(5, 4)
console.log(arrowSumation)
*/
