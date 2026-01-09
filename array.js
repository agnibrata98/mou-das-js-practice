let arr = [1,2,3,4,5];

// index
// start from 0 to array.length-1
// console.log(arr[3]);

// array methods
// push -> add element at last
// arr.push("mou");
// console.log(arr);

// pop -> remove element from last
// arr.pop();
// console.log(arr);

// unshift -> add element at beginning
// arr.unshift("start");
// console.log(arr);

// shift -> remove element from beginning
// arr.shift();
// console.log(arr);

let arr2 = [6,7,8,9,10,11];
// slice -> return a portion of an array
// let newArr = arr2.slice(2,6); // start index , end position number
// console.log(newArr);
// console.log(arr2);

// splice -> add / remove elements from an array
// let splicedArr = arr2.splice(2,3,"a","b","c","d"); // start index, number of elements to be removed, elements to be added
// console.log(splicedArr); // removed elements
// console.log(arr2); // modified original array

let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];
// concat -> merge two or more arrays
// first process ----
// let mergedArr = num1.concat(num2);
// console.log(mergedArr);
// second process ---- [spread operator]
// console.log(...num1);
// let mergedArr = [...num1, ...num2];
// console.log(mergedArr);


let num3 = [1,2,3,4,5];
// filter -> create a new array with all elements that pass the test implemented by the provided function
let filteredArr = num3.filter((value) => {
    return value % 2 === 0;
});
// console.log(filteredArr);

// find method -> return the value of the first element that passes a test
let foundValue = num3.find((value) => {
    return value > 3;
});
// console.log(foundValue);


// map method -> create a new array with the results of calling a provided function on every element in the calling array
let mappedArr = num3.map((value) => {
    return value;
}); 
// console.log(mappedArr);

// foreach loop -> executes a provided function once for each array element
// num3.forEach((value) => {
//     console.log(value);
// });

let nums = [10,20,30,40,50];
// for loop 
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     // console.log(i);
// }

// for of loop
// for (let value of nums) {
//     console.log(value * 2);
// }

// for in loop
// for (let index in nums) {
//     console.log(index);
// }

let nums1 = [10,20,30,40,50];

// reduce method -> executes a reducer function on each element of the array, resulting in a single output value
// let sum = nums.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(sum);

// rest parameter - allows a function to accept an indefinite number of arguments as an array
function sumAll(...nums) {
    console.log(nums);
    return nums.reduce((acc, val) => {
        return acc + val;
    });
}

// console.log(sumAll(1,2,3,4,5,6,7,8,9,10,12));

// array methods remaining to cover
// some, every, flat, flatMap, sort, reverse, includes, indexOf, join, toString

// tostring method
// let strArr = nums1.toString();
// console.log(strArr);
// console.log(typeof(strArr));

// // join method
// let joinedStr = nums1.join(" ");
// console.log(joinedStr);

// sort method
// let sortedArray = nums1.sort((a,b) => b-a); // descending order
// console.log(sortedArray);

// reverse method
// let reversedArray = nums1.reverse();
// console.log(reversedArray);


// 1d array vs 2d array
let twoDArr = [[1,2,3], [4,5,6], [7,8,9]];
// flat method -> create a new array with all sub-array elements concatenated into it recursively up to the specified depth
// let flatArr = twoDArr.flat();
// console.log(flatArr);