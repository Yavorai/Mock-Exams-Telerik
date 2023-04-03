function demo(input){
    let sumEvenDigits = 0
    let sumOddDigits = 0
    let oddDigits = 0
    let evenDigits = 0
    for (let i = 0; i < input.length; i++){
        let digit = Number(input[i])
 
        if (digit % 2 === 0){
            sumEvenDigits += digit
            evenDigits++
        }else{
            sumOddDigits += digit
            oddDigits++
        }
    }
    if (sumEvenDigits > sumOddDigits){
        console.log(`${sumEvenDigits} energy drinks`);
    }else if (sumOddDigits > sumEvenDigits){
        console.log(`${sumOddDigits} cups of coffee`);
    }else if (sumEvenDigits === sumOddDigits){
        console.log(`${sumOddDigits} of both`);
    }
 
}
demo('10')
console.log('-----------------');
demo('3621')
console.log('-----------------');
demo('363')

//===========================================
let input = gets()
let sumEvenDigits = 0
let sumOddDigits = 0
let oddDigits = 0
let evenDigits = 0
for (let i = 0; i < input.length; i++){
    let digit = Number(input[i])

    if (digit % 2 === 0){
        sumEvenDigits += digit
        evenDigits++
    }else{
        sumOddDigits += digit
        oddDigits++
    }
}
if (sumEvenDigits > sumOddDigits){
    print(`${sumEvenDigits} energy drinks`);
}else if (sumOddDigits > sumEvenDigits){
    print(`${sumOddDigits} cups of coffee`);
}else if (sumEvenDigits === sumOddDigits){
    print(`${sumOddDigits} of both`);
}
