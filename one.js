// js data types
// js version - ES6 module(echma script 6)
// 1. Primitive data types
// example- 
// number, string, null, undefined, bigInt, symbol, boolean
// 2. Non Primitive Data Types
// example - 
// array, object

// typeOf operator
// console.log(typeof(null));



// variable
// types of variable declaration
// 1. var (oldest way)  // bad approach
// 2. let
// 3. const


let x;  // variable declaration
x=10;   // variable assign
// console.log(x);

let a = 5;
a=100
// console.log(a);
// let a = 500;
// console.log(a);

const num = 12;
// const num = 20;
// console.log(num);

var str = 'hello';
// var str = 'mou';
// console.log(str);



// hoisting in js[TDZ (temporal dead zone)]
// console.log(num1);
let num1 = 1;


// operator [mathematical operator, logical operator, comparison operator]
// logical operator
// && -> and operator 
// || -> or operator

// comparison operator
// > -> greater than 
// < -> less than 
// >= -> greater than equal
// =< -> less than equal

// '==' and '==='
let num2 = 2;
let num3 = '2';
// console.log(num2===num3);


// type coercion
let add = 2;
let add1 = '3';

const a1 = add1 / add;
// console.log(a1);












// function greet(name){
//     console.log("Hello " + name);
// }

// function processuser(callback){
//     callback("mou");
// }
// processuser(greet);