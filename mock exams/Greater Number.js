// function demo(arrOne, arrTwo) {
//     let firstLength = arrOne.length;
//     let secondLength = arrTwo.length;

//     let currOne;
//     let currTwo;
//     let index;
//     let result = [];

//     for (let i = 0; i < firstLength; i++) {
//         currOne = arrOne[i];

//         for (let k = 0; k < secondLength; k++) {
//             currTwo = arrTwo[k];

//             index = arrTwo.indexOf(currTwo);

//             if (currOne === currTwo && secondLength !== undefined) {
//                 if (currOne < arrTwo[index + 1]) {
//                     result.push(arrTwo[index + 1]);
//                 } else {
//                     result.push(-1);
//                 }
//                 break;
//             } else if (currOne < currTwo) {
//                 result.push(-1);
//                 break;
//             }
//         }
//     }
//     console.log(result.join(", "));
// }

// demo([4, 1, 2], [1, 3, 4, 2]);

// console.log("--------------");

// demo([2, 4], [1, 2, 3, 4]);
// //====================================================
// let input = [[2, 4], [1, 2, 3, 4]]
// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//     let arrOne = gets()
//     let arrTwo = gets()

//     let currOne;
//     let currTwo;
//     let index;
//     let result = [];

//     for (let i = 0; i < arrOne.length; i++) {
//         currOne = arrOne[i];

//         for (let k = 0; k < arrTwo.length; k++) {
//             currTwo = arrTwo[k];

//             index = arrTwo.indexOf(currTwo);

//             if (currOne === currTwo && arrTwo.length !== undefined) {
//                 if (currOne < arrTwo[index + 1]) {
//                     result.push(arrTwo[index + 1]);
//                 } else {
//                     result.push(-1);
//                 }
//                 break;
//             } else if (currOne < currTwo) {
//                 result.push(-1);
//                 break;
//             }
//         }
//     }
//     print(result.join(","));
//===============================================
// chat bot solution
function demo(firstArray, secondArray) {
 
    const result = [];
 
    for (let i = 0; i < firstArray.length; i++) {
      const current = firstArray[i];
 
      const startIndex = secondArray.indexOf(current);
 
      let nextGreater = -1;
      for (let j = startIndex; j < secondArray.length; j++) {
 
        if (secondArray[j] > current) {
          nextGreater = secondArray[j];
          break;
        }
      }
      result.push(nextGreater);
    }
    return result.join(',');
  }
 
  // Example usage:
  const firstArray = [4, 1, 2];
  const secondArray = [1, 3, 4, 2];
  const result = demo(firstArray, secondArray);
  console.log(result); // Output: "5,9,-1"


//===============================================
// telerik
 
//   let input = [[2,4], [1,2,3,4]]
//   let print = this.print || console.log;
//   let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
//   let firstArray = gets()
//   let secondArray = gets()
//   let result = []
//   for (let i = 0; i < firstArray.length; i++){
//     let current = firstArray[i]
//     let startIndex = secondArray.indexOf(current)
//     let nextGreater = -1;
//     for (let j = startIndex + 1; j < secondArray.length; j++) {
//       if (secondArray[j] > current) {
//         nextGreater = secondArray[j];
//         break;
//       }
//     }
//     result.push(nextGreater);
//   }
//   print(result.join(','));