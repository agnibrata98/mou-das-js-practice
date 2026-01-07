// function types
// named function / normal function
function addTwoNumbers(a, b, c) {
    return a+b+c;
}

let a = addTwoNumbers(2, 3, 5);
console.log(a);

function greet(name) {
    return 'welcome ' + name;
}

let b = greet('mou');
// console.log(b);

// arrow function
let multiply = (a, b) => {
    return a*b;
}
let m = multiply(2,3)
// console.log(m);

// anonymous function

let show = function() {
    return 'Anonymous function';
};

// console.log(show());
// IIFE function
var result = (function() {
    var x = 10;
    var y = 20;
    return x + y;
})();

// console.log(result); 


// callback function

// A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function

// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

// A JavaScript callback is a function which is to be executed after another function has finished execution

function higherOrderFunction (callback) {
  callback ();
  // console.log(callback);
}

function callbackFunction () {
  console.log ('Callback function is executed.');
}

// higherOrderFunction (callbackFunction);
// higher order function
// async function