// Input.
let input = [
    '10'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let numbers = +gets();
let isPrime = true;
let output = '';

for (let isItPrime = 1; isItPrime <= numbers; isItPrime++) {
    isPrime = true;
    for (let divider = 2; divider <= Math.sqrt(isItPrime); divider++) {
        if (isItPrime % divider === 0) {
         isPrime = false;
            break;
        } 
    }
    if(isPrime){
        output += '1';
        print(output);
    }else {
        output += '0';
    }
}
//===========================
// const n = +gets();
// let line = '1';
// print(line);
// for (let number = 2; number < n + 1; number += 1) {
//     let isPrime = true;
//     const maxDivisor = Math.sqrt(number);;
//     for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
//         if (number % divisor === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         line += '1';
//         print(line);
//     } else line += '0';
// }
// //===================================
// let line = '';
// let N = +gets();
// for (i = 1; i <= N; i++) {
//     let maybePrime = i
//     let isPrime = true
//     for (let divider = 2; divider < maybePrime; divider++) {
//         if (maybePrime % divider === 0) {
//             isPrime = false;
//             break;
//         }

//     }
//     if (isPrime) {
//         line += '1'
//         print(line);
//     } else {
//         line += '0'
//     } 
// }