// //Решение 1
 
// let number = gets();
 
// let s = number.toString();
// let result = 0;
// let mtplyIndex = [];
// let addIndex = [];
 
// for (let i = 0; i < s.length; i++) {
//   if (s[i] != '0' && s[i] != '1') {
//     mtplyIndex.push(Number(s[i]));
//   } else {
//     addIndex.push(Number(s[i]));
//   }
// }
 
// if (mtplyIndex.length > 0) {
//   result = mtplyIndex[0];
//   for (let i = 1; i < mtplyIndex.length; i++) {
//     result*=mtplyIndex[i];
 
//   }
// }
// for (let i = 0; i < addIndex.length; i++) {
//   result = result + addIndex[i];
 
// }
 
// print(result)
//=====================================================================
// //Решение 2
// let number = gets();
 
// let s = number.toString();
// let result = 0;
// let mtplyIndex = [];
// let addIndex = [];
 
// let arr = [];
// arr.push(parseInt(s[0])*parseInt(s[1])*parseInt(s[2]));
// arr.push(parseInt(s[0])+parseInt(s[1])+parseInt(s[2]));
// arr.push(parseInt(s[0])*parseInt(s[1])+parseInt(s[2]));
// arr.push(parseInt(s[0])+parseInt(s[1])*parseInt(s[2]));
 
// arr.push(parseInt(s[0])*parseInt(s[2])*parseInt(s[1]));
// arr.push(parseInt(s[0])+parseInt(s[2])+parseInt(s[1]));
// arr.push(parseInt(s[0])*parseInt(s[2])+parseInt(s[1]));
// arr.push(parseInt(s[0])+parseInt(s[2])*parseInt(s[1]));
 
// arr.push(parseInt(s[1])*parseInt(s[0])*parseInt(s[2]));
// arr.push(parseInt(s[1])+parseInt(s[0])+parseInt(s[2]));
// arr.push(parseInt(s[1])*parseInt(s[0])+parseInt(s[2]));
// arr.push(parseInt(s[1])+parseInt(s[0])*parseInt(s[2]));
 
// arr.push(parseInt(s[1])*parseInt(s[2])*parseInt(s[0]));
// arr.push(parseInt(s[1])+parseInt(s[2])+parseInt(s[0]));
// arr.push(parseInt(s[1])*parseInt(s[2])+parseInt(s[0]));
// arr.push(parseInt(s[1])+parseInt(s[2])*parseInt(s[0]));
 
// arr.push(parseInt(s[2])*parseInt(s[0])*parseInt(s[1]));
// arr.push(parseInt(s[2])+parseInt(s[0])+parseInt(s[1]));
// arr.push(parseInt(s[2])*parseInt(s[0])+parseInt(s[1]));
// arr.push(parseInt(s[2])+parseInt(s[0])*parseInt(s[1]));
 
// arr.push(parseInt(s[2])*parseInt(s[1])*parseInt(s[0]));
// arr.push(parseInt(s[2])+parseInt(s[1])+parseInt(s[0]));
// arr.push(parseInt(s[2])*parseInt(s[1])+parseInt(s[0]));
// arr.push(parseInt(s[2])+parseInt(s[1])*parseInt(s[0]));
 
// arr.sort((a, b) => a - b);
// print(arr[23])

//==========================================================================
// const input = gets();
// const first = +input[0];
// const second = +input[1];
// const third = +input[2];
 
// let largest = 0;
 
// if (first + second + third > largest) {
//     largest = first + second + third;
// }
// if (first + second * third > largest) {
//     largest = first + second * third;
// }
// if (first * second + third > largest) {
//     largest = first * second + third;
// }
// if (first * second * third > largest) {
//     largest = first * second * third;
// }
 
// print(largest);

//========================================================

function demo(input){
    let [a,b,c] = input.toString()
    let biggest = 0
    a = Number(a)
    b = Number(b)
    c = Number(c)
    if (a + b + c > biggest) {
        biggest = a + b + c;
    }
    if (a + b * c > biggest) {
        biggest = a + b * c;
    }
    if (a * b + c > biggest) {
        biggest = a * b + c;
    }
    if (a * b * c > biggest) {
        biggest = a * b * c;
    }

    console.log(biggest)
}
demo(185)
console.log('-------------------------------------');
demo(111)

//==================================
//TELERIK 

let input = gets()
let [a,b,c] = input.toString()
    let biggest = 0
    a = Number(a)
    b = Number(b)
    c = Number(c)
    if (a + b + c > biggest) {
        biggest = a + b + c;
    }
    if (a + b * c > biggest) {
        biggest = a + b * c;
    }
    if (a * b + c > biggest) {
        biggest = a * b + c;
    }
    if (a * b * c > biggest) {
        biggest = a * b * c;
    }
print(biggest)

//===================================
// let number = gets();
// let a = Number(number[0]);
// let b = Number(number[1]);
// let c = Number(number[2]);




// let maximum = Math.max(
//         a + b + c,
//         a * b * c,
//         a + b * c,
//         a + b * c
//     );
// print(maximum);