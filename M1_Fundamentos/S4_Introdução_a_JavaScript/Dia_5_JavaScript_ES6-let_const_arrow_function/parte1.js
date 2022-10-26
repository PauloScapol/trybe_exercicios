    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
    //   pessoa = {
    //     nome: 'Luna',
    //     idade: 19
    //   } // Altere essa estrutura para corrigir o erro.

    pessoa.nome = 'Luna';
    pessoa.idade = 19;

      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);

// ------------------------------------------------------------------------------------------- //

// Transforme a função numeroAleatorio em uma arrow function //
// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

// ------------------------------------------------------------------------------------------- //

// Transforme a função hello em uma arrow function //
// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));
                                        
const hello = nome => `Olá, ${nome}!`;
console.log(hello('Ivan'));

// ------------------------------------------------------------------------------------------- //

// Transforme a função nomeCompleto em uma arrow function //
// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
console.log(nomeCompleto('Ivan', 'Pires'));

// ------------------------------------------------------------------------------------------- //

// Altere a expressão if/else utilizando tenary operator
// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

let speed = 90;
const speedCar = (speed) => (speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`);
console.log(speedCar(speed));

// ------------------------------------------------------------------------------------------- //