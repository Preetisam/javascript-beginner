//function without a parameter and return
// Syntax
//Implementation
//Function returning values
// syntax
// implementation

//parameter is the placeholder input value
//retrun is not given shows by default undefined
// when function is executing and if you hit return statement the function terminal then and their

//function Decleration
function functionName() {
  //Function Body
}
//Function Cslling or Inkoving

functionName();

// Implementation

function sayMessage() {
  console.log("i am happy ");
}
//calling a function
sayMessage(); //i am happy
sayMessage(); //i am happy
sayMessage(); //i am happy
sayMessage(); //i am happy

// Returning value

//Decleartion

// function functionName() {
//   return expression / value;
// }
// //Calling a function

// let return_value = functionName();
//the function would be executed and on executing the return statement the value / expression are stored in the return value

function passMessage() {
  return " i  am glad "; 
}
//calling a function
let message = passMessage();

// the function would be executed and on executing the return statement the returned statement  the returned message is stored is stored message is stored in the message variable

console.log(message); //i  am glad
let newMessage = message + " preeti";
console.log(newMessage); ///i  am glad  preeti

// function returning value
//declaration

function passMeaasge() {
  return " happy birthday";
}
//calling  a function

let message1 = passMessage();
console.log(message1);

function printName(name) {
  if (name == undefined) {
    return;
  }
  console.log(name);
}
printName();
printName("Elena grace"); //Elena grace

//Function returning value
//Declaration

function greetMessage() {
  return "hello how are you?";
}
//Calling a function
let message2 = greetMessage();
//the function would be executed and on executing the return statement the returned message is stored in the message variable

console.log(message2);
//hello how are you?

let msg = message2 + "Elena grace";

console.log(msg); //hello how are you?Elena grace
