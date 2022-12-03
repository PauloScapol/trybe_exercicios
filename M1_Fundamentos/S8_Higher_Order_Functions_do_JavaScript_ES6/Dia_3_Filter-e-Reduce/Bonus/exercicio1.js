const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// ----- TRANSFORMAR A MATRIZ EM UM ARRAY ----- //

const flatten = arrays.reduce((acc, curr) => acc.concat(curr));
console.log(arrays);
console.log(flatten);