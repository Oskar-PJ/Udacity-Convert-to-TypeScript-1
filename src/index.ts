// NOTE: This code has not been converted to TypeScript yet
const arrays = require('./utilities/arrays.ts');
const numbers = require('./utilities/numbers.ts');
const strings = require('./utilities/strings.ts');

const numArr : number[] = [3, 4, 5, 6];
const wordArr : string[]= ['cat', 'dog', 'rabbit', 'bird'];
const arrSum : number = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum : number = 15 % 2;

// results of function calls
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply('5', 8));
console.log(arrays.lgNum(mixArr));
