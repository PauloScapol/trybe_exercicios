// -------------- SEM PROPERTY SHORTHAND ------------------ //
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// ------------- COM PROPERTY SHORTHAND ---------------------- //
const novoUsuario = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(novoUsuario(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// ------------------------------------------------------------------------- //

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});

console.log(getPosition(-19.8157, -43.9542));