let sum = 0;

while (true) {
    let number = gets();
    let firstDigit = Number(number[0]);
    let secondDigit = Number(number[1]);
    let thirdDigit = Number(number[2]);

    if (firstDigit + thirdDigit === secondDigit) {
        sum += Number(number);
    } else {
        break;
    }

}
print(sum);
//===============================
// let numbers = [];
// numbers[0] = gets();
// let sum = 0;

// for (let i = 0; i < numbers.length; i++){
//     if((+numbers[i].charAt(0) + +numbers[i].charAt(2)) === +numbers[i].charAt(1)){
//         sum += +numbers[i];
//         numbers[i + 1] = gets();
//     }
    
// }
// print(sum);
// //=================================
// let sum = 0;

// while (true) {
//     let N = gets();
//     if (isNaN(N)){
//         break;
//     }
//     let a = Number(N[0]);
//     let b = Number(N[1]);
//     let c = Number(N[2]);

//     if (a + c === b) {
//         sum += Number(N);
//     } else {
//         break;

//     }
// } print(sum);
// //==========================

// let input=[
//     '275',
//     '693',
//     '112',
//     '242',
//     ];
    
// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// let number;
// let arr=[];

// while(number=+gets()){
//     arr.push(number);
// }

// let n=[];
// let s=0;

// for (j=0; j<arr.length;j++){ 
// n=(arr[j]).toString().split('').map(Number);
// let a=n[0];
// let b=n[1];
// let c=n[2];

// if(a + c== b){
//     s+=arr[j];
// } else{break;}