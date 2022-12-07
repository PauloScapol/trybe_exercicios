const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// --------------------------------------------------------------------------- //

const primeNumbers = [17, 23, 37];

const [first, second, third] = primeNumbers;

const sum = (a, b) => console.log(a +b);
sum(first, third);

// --------------------------------------------------------------------------- //

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida);

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

// --------------------------------------------------------------------------- //

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares]= numerosPares;

console.log(numerosPares);