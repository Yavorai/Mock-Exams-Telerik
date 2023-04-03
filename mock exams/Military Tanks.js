// chat bot solution
const moves = 'RLDULLR'; // replace with input string

let x = 0, y = 0;
for (let i = 0; i < moves.length; i++) {
  if (moves[i] === 'R') {
    x++;
  } else if (moves[i] === 'L') {
    x--;
  } else if (moves[i] === 'U') {
    y++;
  } else if (moves[i] === 'D') {
    y--;
  }
}

console.log(`(${x}, ${y})`);


//===========================================

function demo(input){
    let x = 0
    let y = 0

    for (let i = 0; i < input.length; i++) {
        
        if (input[i] === "R"){
            x++
        } else if (input[i] === 'L') {
            x--
        } else if (input[i] === 'U') {
            y++
        } else if (input[i] === 'D'){
            y--
        }
    }
    console.log(`(${x},${y})`);
}
demo('DU')
console.log('----------');
demo('LLRD')

//=========================================

// let input = gets()
// let x = 0
// let y = 0

// for (let i = 0; i < input.length; i++) {
    
//     if (input[i] === "R"){
//         x++
//     } else if (input[i] === 'L') {
//         x--
//     } else if (input[i] === 'U') {
//         y++
//     } else if (input[i] === 'D'){
//         y--
//     }
// }
// print(`(${x},${y})`);

// //=========================================

// let input = ["LLRD"]

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// let letter = gets();

// let x = 0;
// let y = 0;


// for (let i = 0; i < letter.length; i++){

//     switch(letter[i]){
//         case "D": y--; break;
//         case "U": y++; break;
//         case "R": x++; break;
//         case "L": x--; break;
//     }

// }

// print(`(${x}, ${y})`)