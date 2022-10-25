let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let higherNumber = numbers[0];
let oddNumber = 0;
let lowestNumber = numbers[0];
let newNumbers = [0];

for (index = 1; index < 26; index += 1) {
    newNumbers.push(index);
}

console.log(newNumbers);




// for (index = 0; index < numbers.length; index += 1) {
//     if (lowestNumber > numbers[index]) {
//         lowestNumber = numbers[index];
//     }
// }

// console.log(lowestNumber);




// for (index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         oddNumber += 1;
//     }
// }

// if (oddNumber > 0) {
//     console.log(oddNumber);
// }
// else {
//     console.log("Nenhum valor ímpar encontrado");
// }




// for (index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > higherNumber) {
//         higherNumber = numbers[index]
//     }
// }

// console.log(higherNumber);




// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// average = soma/numbers.length;

// if (average > 20) {
//     console.log("Valor maior que 20");
// }
// else {
//     console.log("Valor menor que 20");
// }