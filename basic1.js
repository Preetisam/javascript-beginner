// console.log("Hello world");

// // the variable values can be accessed from other variables.js file
// let firstName = "kamilla";
// let lastName = "samuel";
// country = "india";
// city = "delhi";
// age = 30;
// isMarried = true;

// console.log(firstName, lastName, country, city, age, isMarried);

// const gravity = 9.81;
//const boilingPoint = 100;
// const PI = 3.14;

// console.log(gravity, boilingPoint, PI);

// let name = "preeti";
// let job = "software developer";
// let live = "TamilNadu";
// console.log(name, job, live);

// let string = "javascript";
// let firstLetter = string[0];
// console.log(firstLetter);
// let secondLetter = string[1];
// console.log(secondLetter);
// let thridLetter = string[2];
// console.log(thridLetter);
// let lastLetter = string[9]; //t
// console.log(lastLetter);

// let lastIndex = string.length - 1;
// console.log(lastIndex); //9
// console.log(string[lastIndex]); //t

//chartAt(): takes index and it return the value at that index
//string.charAt(index)
// let string = "kamilla preeti samuel";
// console.log(string.charAt(1));
// console.log(string.charAt(2));
// console.log(string.charAt(0))
// let lastIndex = string.length - 1;
// console.log(string.charAt(lastIndex));

// charCodeAt(): Takes index and itt retuns char code(ASCII number ) of the value at that index

// string.charCodeAt(index);
// let string2 = "kamilla preeti samuel";
// console.log(string2.charCodeAt(3));
// let lastIndex1 = string2.length - 1;
// console.log(string2.charCodeAt(lastIndex1));

// //concat(): it takes many substring and createa concatenatation.
// // string.concat(substring,substring,substring)

// let string = "38";
// console.log(string.concat("Days", "Of", "Javascript"));
// let country = "fin";
// console.log(country.concat("land"));

// let str2 = "elena";
// console.log(str2.concat("grace", "is ", "Good", "girl"));
// let name = "jesus";
// console.log(name.concat("is my saviour"));

// //endswith: it takes a substring as an argument and it checks if the string starts with that specified substring . it returns a boolean (true or false).
// // string.endsWith(substring)
// let str = "love your neighabour as ourselves";
// console.log(str.endsWith("ourselves"));
// console.log(str.endsWith("love"));
// console.log(str.endsWith("neighabour as ourselves"));

// let onlineClass = "Relevel";
// console.log(onlineClass.endsWith("level"));
// console.log(onlineClass.endsWith("rel"));
// console.log(onlineClass.endsWith("Relevel"));

//includes(): It takes argumrent and it check if subs tring argument  exists in the string. includes() returns a boolean. it checks if a substring exits in a string and return true if it exists and false if it doesnt exist

// let str3 = " Certainly that the Lord was the lord was with thee";

// console.log(str3.includes("Lord"));
// console.log(str3.includes("was"));
// console.log(str3.includes("Thee"));
// console.log(str3.includes("Certainly"));
// console.log(str3.includes("cerTainly"));

// let jer = "I will answer thee";
// console.log(jer.includes("I"));
// console.log(jer.includes("will"));
// console.log(jer.includes("Will"));
// console.log(jer.includes("answer thee"));

//indexOf(): Takes a substring and if the substring and if the substring exists in a string it return the first position of the substring if does not exist it return -1

//string.indexOf(substring)

// let str = "Surely goodness and mercy shall follow me all the days of my life";
// console.log(str.indexOf("g"));
// console.log(str.indexOf("shall"));
// console.log(str.indexOf("follow"));
// console.log(str.indexOf("days"));
// console.log(str.indexOf("mercy"));
// console.log(str.indexOf("A"));

//lastIndexOf(): Takes a substring and if the substring exists in a string it retruns the lastPosition of the substring if it does not exist ir return -1

// let str = "For by thee i have run through a troop";
// console.log(str.lastIndexOf("run"));
// console.log(str.lastIndexOf("troop"));
// console.log(str.lastIndexOf("for"));
// console.log(str.lastIndexOf("F"));

//length: the string  method return the number of characters in a string inculded empty sapce

// let js = "JavaScript";
// console.log(js.length);
// let name = "kamilla";
// console.log(name.length);
// let firstName = "Preeti Samuel";
// console.log(firstName.length);

//match: it takes a substring or regular expression pattern as an argument and it return an array if there is match if not it return null. Let us see how a regular expression pattern looks like. it starts with / sign and ends with/sign

// str.match(substring);

// let str = "love";
// let patternOne = /love/;
// let patternTwo = /love/gi;
// console.log(str.match("love")); //[ 'love', index: 0, input: 'love', groups: undefined ]
// let str1 = " love your neghibours as ourseleves";
// console.log(str1.match("love"));
// //  output  = [
// //   'love',
// //   index: 1,
// //   input: ' love your neghibours as ourseleves',
// //   groups: undefined
// // ]
// let pattern = /love/gi;
// console.log(str.match(pattern));
// //Let us extract numbers  from text using regular rxpresstion .This is not regular expression section, no panic.

// let txt = "the spirit search 518 all things deep think 784 of a man";
// let regEx = /\d/g; //d with escape character means d not a noraml d instead  acts a digit
//+means one or more digits number
// if ther is g after that it means golbal, search everwhere
// console.log(txt.match(regEx));
// console.log(txt.match(/\d+/g));

// repeat(): it takes a number argument and it returned the repeated version of the string.
//string.repeat(n)
// let string = "life";
// console.log(string.repeat(10));

//replace(): takes to parameter the old substring and new substring
//string.replace(oldstring, newstring)

// let string = "Power from on high";
// console.log(string.replace("Power", "Lord")); //Lord from on high

// let john = "Belive";
// console.log(john.replace("Be", "Trust")); // Trustlive

//search: it tskes aa substring as an argumrnt and it return the index of the first match

//string.search(substring)

// let string = "either shall i go from thee thou art their";
// console.log(string.search("shall")); //7

//split(): The split method splits a string at a specified places

// let string = "Blessed is the man  his delight in the lord of lord";
// console.log(string.split()); //[ 'Blessed is the man  his delight in the lord of lord' ]
// console.log(string.split(" "));
//[
//   'Blessed', 'is',
//   'the',     'man',
//   '',        'his',
//   'delight', 'in',
//   'the',     'lord',
//   'of',      'lord'
// ]

// let firstName = "Jacob"; //[ 'Jacob' ]
// // console.log(firstName.split());
// console.log(firstName.split("")); //["J", "a", "c", "o", "b"];

// let Things = "all,things, hold ,together";
// console.log(Things.split(",")); //[ 'all', 'things', ' hold ', 'together' ]
// console.log(Things.split(", ")); //[ 'all,things', 'hold ,together' ]

//startWith: ot takes a substring as an argument and it checks if the string starts with that specified substring. it returns a boolean(true or false).
//srting.startWith(substring)
// let str = "find strong proof jesus is the eternal king";
// console.log(str.startsWith("find")); //true
// console.log(str.startsWith("Find")); //false
// console.log(str.startsWith("king")); //false

// let lord = "Jesus";
// console.log(lord.startsWith("Jes")); //true
// console.log(lord.startsWith("jes")); //false
// console.log(lord.startsWith("sus")); //false

//substr(): It takes two arguments, the starting index and number of character to slice

// let str = "ElenaGrace";
// console.log(str.substr(5, 6)); //Grace

// let rest = "Jesus";
// console.log(rest.substr(3, 4)); //us

//substring(): It takes two aruguments, the strarting index and thr stopping index but it doesnt inculde the stopping index.

// let str = "JesusChrist";
// console.log(str.substring(0, 4)); //Jesu;
// console.log(str.substring(5, 11)); //christ
// console.log(str.substring(5)); //Christ

// let jesus = "SonofMost";
// console.log(jesus.substring(0, 3)); //Son
// console.log(jesus.substring(5, 9)); //Most
// console.log(jesus.substring(5)); //Most;

//toLowerCase(): this method changes the string to lowecase letters
// let str = "RighteousNess";
// console.log(str.toLowerCase()); //righteousness

// let umbrella = "FullStack";
// console.log(umbrella.toLowerCase()); //fullstack

// let spirit = "HolySprit";
// console.log(spirit.toLowerCase()); //holysprit

//toUpperCase(): this method changes the string to uppercase letter
// let str = "Kingdom";
// console.log(str.toUpperCase()); //KINGDOM
// let heaven = "Holysprit";
// console.log(heaven.toLocaleUpperCase()); //HOLYSPRIT
// let secondComing = "Jesus";
// console.log(secondComing.toLocaleUpperCase()); //JESUS

//trim(): REmoves tralling sapce in the beginning or the end of the string

let str = "  Let their be light";
console.log(str); // Let their be light
console.log(str.trim(" ")); //Let their be light

let twoGreat = "Light";
console.log(twoGreat); //Light
console.log(twoGreat.trim(" ")); //Lig ht
