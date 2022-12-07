const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// --------------------------------------------------------------- //

const greetings = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greetings(); // Welcome pessoa usuária!

// ---------------------------------------------------------------- //

const saudacoes = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

saudacoes(); // // Welcome pessoa usuária!

// ---------------------------------------------------------------- //

const multiply = (number, value = 2) => number * value;

console.log(multiply(8));