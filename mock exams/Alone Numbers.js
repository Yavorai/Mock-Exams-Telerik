function demo(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        
        if(element === target && (arr[i] !== arr[i + 1]) && (arr[i] !== arr[i - 1])){

            if(arr[i - 1]  > arr[i + 1] ){
                arr[i] = arr[i - 1] 
            }else if (arr[i - 1]  < arr[i + 1]){
                arr[i] = arr[i + 1] 
            }
        }
    }
    console.log(arr);
}
demo([1, 2, 3], 2);
console.log("-------------");
demo([1, 2, 3, 2, 5, 2], 2);

//===========================================

const arr = gets().split(', ');
let target = gets();

for (let i = 1; i < arr.length - 1; i++) {
    if ((arr[i] === target) && (arr[i] !== arr[i + 1]) && (arr[i] !== arr[i - 1])) {
        if (arr[i - 1] > arr[i + 1]) {
        arr[i] = arr[i - 1];
        } else {
        arr[i] = arr[i + 1];
        };
    };
};
print(`[${arr}]`);