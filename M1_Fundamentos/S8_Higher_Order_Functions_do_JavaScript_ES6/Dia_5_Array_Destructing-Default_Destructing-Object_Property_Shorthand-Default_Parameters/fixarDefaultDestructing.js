const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

// --------------------------------------------------------------------------- //

const position2D = [1.0, 2.0];
const [x, y, z = 0] = position2D;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// --------------------------------------------------------------------------- //

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const pessoa = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(pessoa));