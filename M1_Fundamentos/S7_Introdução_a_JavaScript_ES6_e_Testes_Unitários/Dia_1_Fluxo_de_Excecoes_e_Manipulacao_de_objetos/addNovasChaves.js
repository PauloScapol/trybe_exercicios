const pessoaEstudante = {};

let newKey = 'firstName';
const firstName = 'Paulo';

const addKey = (object, newProperty, value) => {
    object[newProperty] = value;
};

addKey(pessoaEstudante, newKey, firstName);
console.log(pessoaEstudante);

newKey = 'email';
const email = 'paulo.scapol2@hotmail.com';

addKey(pessoaEstudante, newKey, email);
console.log(pessoaEstudante);

newKey = 'telefone';
const telefone = '(24) 99277-8928';

addKey(pessoaEstudante, newKey, telefone);
console.log(pessoaEstudante);

newKey = 'github';
const github = 'PauloScapol';

addKey(pessoaEstudante, newKey, github);
console.log(pessoaEstudante);
