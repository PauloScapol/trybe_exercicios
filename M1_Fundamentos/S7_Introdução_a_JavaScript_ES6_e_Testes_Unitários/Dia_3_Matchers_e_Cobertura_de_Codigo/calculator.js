const sum = (a,b) => {
  return a + b;
};

const sub = (a,b) => {
  return a - b;
};

const mult = (a,b) => {
  return a * b;
};

const div = (a,b) => {
  if (b === 0) {
    throw new Error('Divisão por zero!');
  }
  return a / b;
};

module.exports = {sum, sub, mult, div};