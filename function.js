// function types
// named function / normal function
function addTwoNumbers(a, b) {
    return a+b;
}

let a = addTwoNumbers(2, 3);
// console.log(a);

function greet(name) {
    return 'welcome ' + name;
}

let b = greet('mou');
// console.log(b);

// arrow function
const multiply = (a, b) => {
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

console.log(result); 


// callback function
// higher order function
// async function