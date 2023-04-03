function demo(input){
    let n = input[0]

    let numCounter = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
      };

      for (let i = 1; i <= n; i++){
        let currNum = input[i]
        numCounter[currNum]++
      }
      let mostFrequentNum = 1
      let mostFrequentNumberValue = numCounter[mostFrequentNum]

      for (let i = 2; i <= 10; i++){
        if(mostFrequentNumberValue < numCounter[i]) {
            mostFrequentNumberValue = numCounter[i]
            mostFrequentNum = i
      }
      }
      console.log(mostFrequentNum);
}
demo([1,6]) //6
console.log('---------------');
demo([4,1,3,3,7]) //3
console.log('---------------');
demo([5,1,2,3,1,2]) //1

//==========================
// let print = this.print || console.log;

// // Use gets() to receive one line of input (the input line is always a string)
// // Use "print" instead of "console.log" to print the result
// // Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5

// let input = [
//     '5',
//     '5',
//     '6',
//     '3',
//     '5',
//     '6'
//     ];
    

// let n = +gets();

// let repeatingCounters = [];

// for(let i=0; i<=10; i++){
//     repeatingCounters.push(0);
// }

// let maxCounter = 0;
// let maxRepeatNumber =0;

// for(let i =0; i<n; i++){
//     let currentNum = +gets();
//     repeatingCounters[currentNum]++;
//     let currentCounter = repeatingCounters[currentNum];

//     if(currentCounter>maxCounter){
//         maxCounter = currentCounter;
//         maxRepeatNumber = currentNum
//     }

// }
// print(maxRepeatNumber)
//===============================================
let input = ["4"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

//------------------------------

let numsCounter = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
};
let n = +gets();
for (let i = 0; i < n; i++) {
  num = +gets();
  numsCounter[num]++;
}
let mostFrequentNumber = 1;
let mostFrequentNumberValue = numsCounter[mostFrequentNumber];
for (let i = 2; i <= 10; i++) {
  if (mostFrequentNumberValue < numsCounter[i]) {
    mostFrequentNumberValue = numsCounter[i];
    mostFrequentNumber = i;
  }
}
print(mostFrequentNumber);
