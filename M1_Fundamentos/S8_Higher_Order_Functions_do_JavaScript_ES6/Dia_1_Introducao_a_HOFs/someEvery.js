// --------------- SOME ------------------------------------------------------ //

const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];
  
const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
const verificaCargo2 = pessoas.some((pessoa) => pessoa.cargo === 'Chefe');
console.log(verificaCargo); // true
console.log(verificaCargo2); // false

// --------------------------------------------------------------------------- //

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false

// --------------- EVERY ----------------------------------------------------- //

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};
  
const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false
console.log(verifyGrades); // false

// --------------------------------------------------------------------------- //

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name);
};
console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// --------------------------------------------------------------------------- //

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minAge) => {
  return arr.every((pessoa) => pessoa.age >= minAge);
}
console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));