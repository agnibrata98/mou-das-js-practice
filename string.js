// string
let str1 = "hello";
let str2 = 'world';
let str3 = `welcome to js`;
let fullName = 'mou';

// string concatenation
// process 1
let result = str1 + ' ' + str2;
// console.log(result);
// process 2 [template literal]
let result1 = `Hello ${fullName}, ${str3}`;
// console.log(result1);

// string is immutable

// string methods
let sampleStr = "JavaScript String Methods";
// length
// console.log(sampleStr.length);
// toUpperCase()
// console.log(sampleStr.toUpperCase());
// toLowerCase()

// console.log(sampleStr.toLowerCase());
// trim() //-> removes whitespace from both ends of a string
// console.log(sampleStr.trim());
// slice() -> extracts a section of a string and returns it as a new string
let slicedStr = sampleStr.slice(2,16);
// console.log(slicedStr);
// replace() -> replaces a specified value with another value in a string
let replacedStr = sampleStr.replace('Methods', 'Functions');
// console.log(replacedStr);
// split() -> splits a string into an array of substrings
let splittedStr = sampleStr.split('').reverse().join('');
// console.log(splittedStr);

// reverse a string
// let reverseStr = '';
// for (let i = sampleStr.length - 1; i >= 0; i--) {
//     reverseStr += sampleStr[i];
// }
// console.log(reverseStr);