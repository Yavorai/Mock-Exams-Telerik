let input = ['peshoishere', '3', 'eho', 'piere', 'telerik'];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let arr = gets().split('');
let num = Number(gets());
 
 
for (let i = 0; i < num; i++) {
    let arrMatch = gets().split('');
    let arrTemp = [...arr];
    let limiter = 0;
 
    for (let k = 0; k < arrMatch.length; k++) {
        if (arrTemp.indexOf(arrMatch[k]) > -1) {
            arrTemp[(arrTemp.slice(limiter).indexOf(arrMatch[k]) + limiter)] = ' '; 
            limiter = arrTemp.lastIndexOf(' ');
        }
    }
    
    arrTemp = arrTemp.join('').split(' ').join('');
 
    if (arrTemp.length === arr.length - arrMatch.length) {
        arr = arrTemp.split('')
        print(arrTemp);
    } else {
        print('No such title found!')
    }
}
