const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins'];

pessoasAprovadas.forEach((nome, index) => {
    pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase();
});

console.log(pessoasAprovadas);

// ---------------------------------------------------------------------------------------- //

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((element) => console.log(element * 2));

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiply = (element) => {
    console.log(element * 2);
};
numeros.forEach(multiply);

// ---------------------------------------------------------------------------------------- //

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
  
emailListInData.forEach((email) => console.log(`O email "${email}" está cadastrado em nosso banco de dados!`));