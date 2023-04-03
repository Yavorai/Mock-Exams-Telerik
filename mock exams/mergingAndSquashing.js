// let input = [
//     '4',
//     '12',
//     '23',
//     '34',
//     '45'
// ];
// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// let n = Number(gets())
// let space = ''
// let space1 = ''
// let sum = 0
// let index = []
// for (let i = 1; i <= n; i++) {
//     let number = gets()
//     index.push(number)
// }
// for (let i = 0; i < n-1; i++) {
//     let num1 = Number(index[i] % 10)
//     let num2 = parseInt(index[i + 1] / 10)
//     space += num1 + ''
//     space +=num2 + ' '
// }
// for (let i = 0; i < n-1; i++) {
//     let num1 = Number(index[i] % 10)
//     let num2 = parseInt(index[i + 1] / 10)
//     let numstart = parseInt(index[i] / 10)
//     let numend = Number(index[i + 1] % 10)
//     sum = num1+num2
//     space1 += numstart
//     space1 += sum + ''
//     space1 += numend + ' '
// }
// print(space)
// print(space1)

//=============================================================
//if(start >= 0 && end < username.length){
//=============================================================
// function demo(inputArr){
//     let copyArr = [...inputArr]
//     let n = Number(copyArr.shift())
//     let sumM = []
//     let sumS = []
    
//     for (let i = 0; i < n - 1; i++) {
//         let merged = copyArr[i][1] + copyArr[i + 1][0] // Merging ab and cd produces bc
//         sumM.push(merged)

//         let squashed = copyArr[i][0] + (Number(copyArr[i][1]) + Number(copyArr[i + 1][0])) + copyArr[i + 1][1] // Squashing ab and cd produces a(b+c)d
//         if (squashed.length > 3){
//             squashed = squashed.substring(0,1) + squashed.substring(2)
//         }
//         sumS.push(squashed)
//     }
   
//     console.log(sumM.join(' '));
//     console.log(sumS.join(' '));
// }
// demo([
//     '4',
//     '12',
//     '23',
//     '34',
//     '45'
// ])
// console.log('-------------------------');
// demo(['5',
// '11',
// '22',
// '11',
// '22',
// '11'])
// console.log('-------------------------');
// demo(['11',
//     '44,',
//     '69',
//     '46',
//     '63',
//     '83',
//     '13',
//     '62',
//     '14',
//     '31',
//     '68',
//     '87'])
//===================================================
// TELERIK 
let input = [
         '4',
         '12',
         '23',
         '34',
         '45'
    ];
    // copy without the input
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


    let n = +gets()
    let arr = []
    let sumM = ''
    let sumS = ''
    for (let j = 0; j < n; j++){
        let number = gets()
        arr.push(number)
    }
    for (let i = 0; i < n - 1; i++) {
        
        let merged = arr[i][1] + arr[i + 1][0] // Merging ab and cd produces bc
        sumM += merged + ' '

        let squashed = arr[i][0] + (Number(arr[i][1]) + Number(arr[i + 1][0])) + arr[i + 1][1] // Squashing ab and cd produces a(b+c)d
        if (squashed.length > 3){
            squashed = squashed.substring(0,1) + squashed.substring(2)
        }
        sumS += squashed + ' '
    }
   
    print(sumM);
    print(sumS);