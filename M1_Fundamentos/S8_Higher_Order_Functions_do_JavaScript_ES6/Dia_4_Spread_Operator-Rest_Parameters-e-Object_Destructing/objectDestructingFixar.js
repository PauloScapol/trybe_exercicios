const product = {
    nome: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const { nome, seller } = product;
console.log(nome);
console.log(seller);

const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoçao! ${nome} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetails(product);

// ----------------------------------------------- //

const character = {
    name: 'Luke Skywalker',
    age: '53',
    description: {
        specieName: 'Human',
        jedi: true,
    },
    homeWorld: {
        name: 'Tatooine',
        population: '200000',
    },
};
// EXTRAIR NOME DO PERSONAGEM, IDADE, NOME DO PLANETA E VERIFICAR SE È UM JEDI //
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'è um Jedi' : 'nao é um Jedi'}.`);

// ---------------------------------------------------------------------------- //

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays);
console.log(weekend);

const weekDays = [...workDays, ...weekend];
console.log(weekDays);

// ---------------------------------------------------------------------------- //

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};

const { a: nombre, b: classAssigned, c: subject } = student;

console.log(nombre);
console.log(classAssigned);
console.log(subject);

// ---------------------------------------------------------------------------- //

const user = {
    person: 'Maria',
    idade: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInnitials: 'RLL',
};

const { person, idade, nationality } = user;
const { profession, squad, squadInnitials } = jobInfos;
console.log(`Hi, my name is ${person}, I'm ${idade} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInnitials}-${squad}`);