const numeraisRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
};

function romanoAConvencional(numero) {
    numero = numero.toLowerCase();
    const tamanho = numero.length;
    let soma = numeraisRomanos[numero[tamanho - 1]];
    let atual = numeraisRomanos[numero[tamanho - 1]];

    for (let i = 2; i <= tamanho; i += 1) {
        const prox = numeraisRomanos[numero[tamanho - i]];

        if (atual <= prox) {
            soma += prox;
        }
        else {
            soma -= prox;
        }
        atual = prox;
    }
    return soma;
}

console.log(romanoAConvencional('XXVIII')); // 28
console.log(romanoAConvencional('III')); // 3
console.log(romanoAConvencional('MCMXCVIII')); // 1998