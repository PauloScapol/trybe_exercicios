//Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const a = 50;
const b = 650;
const c = 6580;

if (a > b && a > c) {
    console.log("O maior número é a constante 'a' = " + a + ".");
}
else if (b > a && b > c) {
    console.log("O maior número é a constante 'b' = " + b + ".");
}
else if (c > a && c > b) {
    console.log("O maior número é a constante 'c' = " + c + ".");
}