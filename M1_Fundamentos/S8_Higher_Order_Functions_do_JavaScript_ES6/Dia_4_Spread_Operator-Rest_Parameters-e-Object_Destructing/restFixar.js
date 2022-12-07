const countParams = (...args) => {
    console.log('parametros:', args);
    return `Voce passou ${args.length} parametros para a funçao`;
}

console.log(countParams(0, 1, 2));
console.log(countParams('string', null, [1, 2, 3], { }));

// ----- SOMAR A QUANTIDADE DE PRODUTOS EM UM CARRINHO DE COMPRAS ----- //
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(4, 7, 8, 9, 60));