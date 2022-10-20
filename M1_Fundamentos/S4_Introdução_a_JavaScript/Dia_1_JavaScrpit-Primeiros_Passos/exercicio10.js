// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    // Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    // Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
    // Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    // Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = "RAinhA";
let pecaXadrezMinusculo = pecaXadrez.toLowerCase();

switch (pecaXadrezMinusculo) {
    case "peao":
        console.log("Peão -> Linha reta (Se for o primeiro movimento do peão, pode avançar uma ou duas casas) -> Ataca uma casa na diagonal (Sempre para frente)");
        break;

    case "bispo":
        console.log("Bispo -> Diagonal (Quantas casas quiser, desde que não seja bloqueada por outra peça)");
        break;

    case "cavalo":
        console.log("Cavalo -> Se move em 'L' (Ignorando qualquer peça em seu caminho) -> Ataca apenas a peça que estiver na casa onde ele parar, e não a peça que ele pular)");
        break;

    case "torre":
        console.log("Torre -> Linha reta (Quantas casas quiser, desde que não seja bloqueada por outra peça)");
        break;

    case "rainha":
        console.log("Rainha -> Linha reta e Diagonal (Quantas casas quiser, desde que não seja bloqueada por outra peça)");
        break;

    case "rei":
        console.log("Rei -> Linha reta e Diagonal (1 casa)");
        break;

    default:
        console.log("Peça inválida");
}