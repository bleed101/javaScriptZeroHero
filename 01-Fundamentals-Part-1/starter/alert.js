let js = 'javaScript';
if(js==='javaScript') alert('This is the alert rasied by Js when if condition is met!!');
40+7+8-10; //this won't work this way like we can just execute in console of browser if we want this to work we have to log it to console explicitly.
console.log(40+7+8-10); //check in console it would have printed the output.

// 'new' and 'name' are reserved variables
// Always start with smalecase letter in javascript var, for real constant you can use capilat letter 
let PI=3.124

//every value is object/primitive when it's not an object then it is primitive data type.
//7 data types
let age=23; //Number
let name1='tipu'; //String
let dead = true; //Boolean
let moreHistory; //Undefined
//Null empty value.
//Symbol(ES2015) unique cannot be changed.
//BigInt(ES2020) Larger integer than the Number type can hold.
//Js is dynamic typing we do not have to specificaly difine the type.

console.log(typeof age);
console.log(typeof name1);
console.log(typeof dead);
console.log(typeof moreHistory);
moreHistory = 'Exists'
console.log(moreHistory);//it changed from undefined to string Dynamic typing

const birthYear=1990;//itcan never be changed.
var varString = 'function scoped and let is block scoped'; //it was used before ES6

propertVar = 'this is not created under current scope'; //this has been created propety on global scope.

//Math operators
const now = 2023;
const ageRam = now - 1995;
const ageKara = now - 2000;
console.log(ageRam, ageKara);

console.log(ageRam*2, ageRam/10, ageRam**2); // performing some operation on age of Ram.

const nameRam = 'Ram';
const nameKara = 'Kara';

console.log(nameRam + ' Weds ' + nameKara);

let x = 10+5;
x+=10;
x*=4;
x++;
x--;
console.log(x);

console.log(ageRam>ageKara);
console.log(ageKara >= 18);

let y;
x = y = 25 - 10 - 5;//right-to-left
console.log(x,y); 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript
