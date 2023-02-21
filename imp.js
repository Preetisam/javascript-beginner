

const sum = eval("10*10+5");
console.log(sum);
console.log(typeof typeof 1);
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
console.log(3 + 4 + "5");
console.log("I enrolled to the pw Fsd course"[0]);
const name5 = "Pw skills";
console.log(name5());
const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);

var x = 2;
var y = "2";
console.log(x === y);

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
let nu = 23 / 0;
console.log(nu);

const name = "preeti samuel";

console.log(!typeof name === "object");
console.log(!typeof name === "string");

for (var i = 0; i < 5; i++) {
  console.log(i);
}

var x = 0;
while (x < 5) {
  console.log(x);
  x++;
}
var x = 1;
do {
  console.log(x);
  x++;
} while (x < 5);

for (var i = 2; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

for (var i = 2; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
var a = [1, 2, 3, 4, 5];
for (var i in a) {
  if (a[i] % 2 === 0) {
    console.log(a[i]);
  }
}

var day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  default:
    console.log("Today is not Monday or Tuseday");
}

var x = 20;
switch (x) {
  case x < 20:
    console.log("x is less tha 20");
    break;
  case x > 20:
    console.log("x is greater than 20");
    break;
  default:
    console.log("x is equal to 20");
}

var x = 20;
switch (x) {
  case 20:
    console.log("x is equal to 20 ");
    break;
  default:
    console.log("x is not equal to 20");
}

var x = 20;
var y =
  x > 10
    ? x < 30
    : "x is not greater than eaqual 10 and not less than equal tp 30";
console.log(y);

var x = (10 > 5) ? "x is greater than 5"
console.log(x); // synatx error

var x = 10;
var y = "10";
var z = x === y ? "equal" : "notequal";
console.log(z);

let x = 5;
while (x < 6) {
  console.log(x);
}

let a1 = 3;
let b = new Number(3);
let c = 3;
console.log(a1 == b);
console.log(a1 === b);
console.log(b === c);

let greeting;
greetign = {};
console.log(greetign);

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

const sum1 = eval("10*10+5");
console.log(sum1);

var num1 = 8;
var num1 = 10;
console.log(num1);
