const numbers = [1, 32, 44, 2, 3];

// -------- COM O FOR -------- //
let sumNumbers = 20;
for (let index = 0; index < numbers.length; index += 1) {
    sumNumbers += numbers[index];
};
console.log(sumNumbers);

// -------- COM O REDUCE -------- //
const totalSum = numbers.reduce((acc, cur) => acc + cur, 20); // 20 É O VALOR INICIAL
console.log(`O valor final do acc é ${totalSum}`);

// -------- COM O REDUCE, CRIANDO UMA FUNÇÃO EXTERNA -------- //
const somaNumeros = (acc, cur) => acc + cur;
const somaTotal = numbers.reduce(somaNumeros, 20);
console.log(`O valor final do acc é ${somaTotal}`);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------- //
const numeros = [50, 85, -30, 3, 15];

// ----- BUSCAR O MAIOR NÚMERO DENTRO DO ARRAY ----- //
const funcaoMaiorNumero = (bigger, number) => ((bigger > number) ? bigger : number);
const maiorNumero = numeros.reduce(funcaoMaiorNumero);
console.log(maiorNumero);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------- //
const nombers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// ----- SOMAR TODOS OS NÚMEROS PARES DO ARRAY ----- //
const funcaoPares = (acc, number) => ((number % 2 === 0) ? acc + number : acc);
const somaPares = nombers.reduce(funcaoPares);
console.log(somaPares);