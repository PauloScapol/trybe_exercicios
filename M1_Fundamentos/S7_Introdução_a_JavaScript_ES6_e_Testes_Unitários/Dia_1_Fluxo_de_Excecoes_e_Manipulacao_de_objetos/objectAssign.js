// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

// -------------------------------------- //

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone);
// console.log(person);
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone);
// console.log(person);

// ----------------------------------------------- //

const pessoa = {
  firstName:'Roberto',
};

const surname = {
  surname: 'Silva',
};

const newPerson = Object.assign({},pessoa,surname);
newPerson.firstName = 'Gilberto';
console.log('Pesoa: ');
console.log(pessoa);
console.log('Pessoa Nova: ')
console.log(newPerson);
