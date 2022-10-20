// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    // Porcentagem >= 90 -> A
    // Porcentagem >= 80 -> B
    // Porcentagem >= 70 -> C
    // Porcentagem >= 60 -> D
    // Porcentagem >= 50 -> E
    // Porcentagem < 50 -> F
    // O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let notaPorcentagem = 100;

if (notaPorcentagem < 0 || notaPorcentagem > 100) {
    console.log("Nota inválida!");
}
else if (notaPorcentagem >= 90) {
    console.log("A");
}
else if (notaPorcentagem >= 80) {
    console.log("B");
}
else if (notaPorcentagem >= 70) {
    console.log("C");
}
else if (notaPorcentagem >= 60) {
    console.log("D");
}
else if (notaPorcentagem >= 50) {
    console.log("E");
}
else if (notaPorcentagem < 50) {
    console.log("F");
}