/* Dynamic Variables. The variable value can be changed as well as the type of the variable! so a string variable can become int variable just by assigning a string first and then an int
let age = 25
age = "this is kinda cool"
console.log(age) //outputs "this is kinda cool" 

Constant Variables
const salary = 8000
console.log(salary)

//strings and log parameters.
let name = "Giorgio";
let language = "Javascript";
let anotherString = `what?`;
console.log(name + language + anotherString); //outputs GiorgioJavascriptwhat?
console.log(name, language, anotherString); //outputs Giorgio Javascript what?

// undefined value
let result; //outputs "undefined". Undefined is an actual value that can be used when declaring variables: "let result = undefined"

//null value: to set a variable to have null value there is no automatic way like "undefined" so you have to type it yourself: "let result = null"
let result2 = null

//Object: creates an object called person that has three properties: first_name, last_name, and age.
let person = {
  first_name: "Bruce",
  last_name: "Wayne",
  age: 30,
};
console.log(person.first_name)

//Arrays: just like the other languages
const oddNumbers = [1, 3, 5, 7, 9]
console.log(oddNumbers[2])

*/
