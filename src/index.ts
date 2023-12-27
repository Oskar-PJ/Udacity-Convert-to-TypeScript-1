// NOTE: This code has not been converted to TypeScript yet

// const arrays = require('./utilities/arrays.ts');
import arrays from './utilities/arrays.js'
// const numbers = require('./utilities/numbers.ts');
import numbers from './utilities/numbers.js'
// const strings = require('./utilities/strings.ts');
import strings from './utilities/strings.js'


const numArr : number[] = [3, 4, 5, 6];
const wordArr : string[]= ['cat', 'dog', 'rabbit', 'bird'];
const arrSum : number = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum : number = ('15' as unknown) as number % 2;
const five = ('5' as any) as number

// results of function calls
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply(five, 8));
console.log(arrays.lgNum(mixArr));
