// Há um par entre nós
// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
    // Bonus: use somente um if.

const a = 10;
const b = 11;
const c = 13;

let par = false;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    par = true;
}
    console.log(par);