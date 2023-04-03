function demo(input) {
    let [anagram, n, ...words] = input;
    anagram = anagram
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("");

    for (let i = 0; i < Number(n); i++) {
        let word = words[i]
            .split("")
            .sort((a, b) => a.localeCompare(b))
            .join("");
        if (anagram === word) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
demo(["anagram", "6", "gramana", "aaagrnm", "anagra", "margana", "abc", "xy"]);
//===========================
// let input = ['anagram',
//      '6',
//      'gramana',
//     'aaagrnm',
//      'anagra',
//      'margana',
//     'abc',
//      'xy']

// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// let [anagram, n, ...words] = gets();

// anagram = anagram
//     .split("")
//     .sort((a, b) => a.localeCompare(b))
//     .join("");

// for (let i = 0; i < Number(n); i++) {
//     let word = words[i]
//         .split("")
//         .sort((a, b) => a.localeCompare(b))
//         .join("");

//     if (anagram === word) {
//         print("Yes");
//     } else {
//         print("No");
//     }
// }
// //===========================
// TELERIK WORKING
let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);
let anagram = gets().split("").sort();
let n = +gets();

for (let i = 0; i < n; i++) {
    let word = gets().split("").sort();

    if (anagram.length !== word.length) {
        print("No");
    } else {
        let isAnagram = true;

        for (let j = 0; j < anagram.length; j++) {
            if (anagram[j] !== word[j]) {
                isAnagram = false;

                break;
            }
        }

        if (isAnagram) {
            print("Yes");
        } else {
            print("No");
        }
    }
}
