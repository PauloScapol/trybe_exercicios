let word = "Alanzoka";
let reversedWord = "";

for (let index = 0; index < word.length; index += 1) {
    // reversedWord = reversedWord + word[word.length - 1 - index];
    reversedWord += word[word.length - 1 - index]
}

console.log(reversedWord);