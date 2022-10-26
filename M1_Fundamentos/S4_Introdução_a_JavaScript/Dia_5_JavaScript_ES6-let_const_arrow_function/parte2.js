// Crie uma função que ligue e desligue um motor de um carro //

let motor = 'desligado';

const ligarDesligarMotor = () => (motor === 'desligado' ? motor = 'ligado' : motor = 'desligado');

console.log(`O motor está ${ligarDesligarMotor()}`);
console.log(`O motor está ${ligarDesligarMotor()}`);
console.log(`O motor está ${ligarDesligarMotor()}`);
console.log(`O motor está ${ligarDesligarMotor()}`);
console.log(`O motor está ${ligarDesligarMotor()}`);
console.log(`O motor está ${ligarDesligarMotor()}`);

// ------------------------------------------------------------------------------------------- //

// Crie uma função que calcule a área de um círculo //

// const circleArea = raio => {
//     const pi = 3.1415;    
//     let area = raio * raio * pi;
//     return console.log(`Essa é a área do círculo: ${area}`);
// }
// circleArea(3);

const pi = 3.1415;

const circleArea = raio => raio * raio * pi;
console.log(`Essa é a área do círculo: ${circleArea(3)}`);

// ------------------------------------------------------------------------------------------- //

// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase //

const longestWord = frase => frase.split(' ').sort((palavraA, palavraB) => palavraB.length - palavraA.length)[0];

console.log(longestWord(`Antonio foi ao banheiro e não sabemos o que aconteceu`));