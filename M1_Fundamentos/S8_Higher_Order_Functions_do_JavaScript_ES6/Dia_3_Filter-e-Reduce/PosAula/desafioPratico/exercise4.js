const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// ---------- RETORNAR A QUANTIDADE DE VEZES QUE A LETRA 'a' MAIÚSCULA OU MINÚSCULA APARECE NO ARRAY DE NOMES ---------- //

const lettersArray = names.join('').toLowerCase().split('');

const countA = lettersArray.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0);

console.log(countA);