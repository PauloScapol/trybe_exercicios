const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20); // 18
idades.find((idade) => idade > 50); // 73
idades.find((idade) => idade === 33); // undefined

// -------------------------------------------------------------------------- //

const numbers = [19, 21, 30, 3, 45, 22, 15];
numbers.find((tresCinco) => tresCinco % 3 === 0 && tresCinco % 5 === 0);

const names = ['João', 'Irene', 'Fernando', 'Maria'];
names.find((cincoLetras) => cincoLetras.length === 5);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
musicas.find((musica) => musica.id === '31031685');