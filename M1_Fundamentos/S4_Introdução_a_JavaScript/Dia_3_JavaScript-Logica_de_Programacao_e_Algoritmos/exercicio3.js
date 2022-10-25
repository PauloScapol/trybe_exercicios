let array = ['java', 'javascript', 'python', 'html', 'css'];
let largestWord = array[0];
let shortestWord = array[0];


for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > largestWord.length) {
        largestWord = array[index];
    }
}

for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2].length < shortestWord.length) {
        shortestWord = array[index2];
    }
}

console.log("A maior palavra é : " + largestWord);
console.log("A menor palavra é : " + shortestWord);