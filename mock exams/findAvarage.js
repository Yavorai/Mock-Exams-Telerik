let input = ['4','1','1','1','1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
 
let n = +gets();
let a= +gets(); // number of values
let b= +gets(); 
let c= +gets(); 
let d= +gets(); 
let sum = c; 
 
 
for ( let i= 0; i <= n; i++) {
  sum = a+b+c+d
}
print((sum/n).toFixed(2))

//=====================================

// let input = [
//     '3',
//     '2.5',
//     '1.25',
//     '3'
// ];

// let print = this.print || console.log;
// let gets = this.gets || ((arr, indenumOne) => () => arr[indenumOne++])(input, 0);

// let numsCount = Number(gets());
// let sum = 0;

// for (let i = 0; i < numsCount; i++) {
//     sum += Number(gets());
// }

// let average = sum / numsCount;
// print(average.toFixed(2));