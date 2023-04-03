let n = gets().split('');
let newArr = [];

for(let i = 0; i < n.length; i++){
    if(n[i] !== '0' && n[i] !== '1' && n[i] !== '2' && n[i] !== '3' && n[i] !== '4' && n[i] !== '5' && n[i] !== '6' && n[i] !== '7' && n[i] !== '8' && n[i] !== '9'){
        continue;
    }
    else{
        newArr.push(n[i]);
    }
}

let nArr = newArr.map(Number);
let sum = 0;
let length = nArr.length;

for(let i = 0; i < length; i++){
    sum += nArr[i];
    if(i === length - 1 && sum > 9){
        nArr = sum.toString().split('').map(Number);;
        length = nArr.length;
        i = -1;
        sum = 0;
    }
}
print(sum);
//=================================================
// let N = gets();

// while(true){
//     let sum = 0;
//     for (let i = 0; i < N.length; i++) {
//         let currentDigit = Number(N[i]);
//         if(isNaN(currentDigit)){
//             continue;
//         }
//         sum += currentDigit;
//     }
//     N = String(sum);
//     if(sum <= 9){
//         break;
//     }
// }
// print(N)
//=================================================
// // Input.
// let input = [
//     '-1020340567.89'

// ];

// // Custom implementation of read and print. Do not touch : )
// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// // Solution

// let num = gets().split('');

// let arrOfNum = [];

// for (let i = 0; i < num.length; i++) {

//     if (num[i] !== '-' && num[i] !== '.') {
//         arrOfNum.push(num[i]);
//     }
// }
// //print(arrOfNum);

// let sum = 0; 
// for (let i = 0; i < arrOfNum.length; i++) {
//     let el = +arrOfNum[i];
//     sum += el;

//     if (sum > 9 && i === arrOfNum.length - 1) {

//         arrOfNum = sum.toString().split('');
//         sum = 0;
//         i = -1;
//     }
// }
// print(sum);