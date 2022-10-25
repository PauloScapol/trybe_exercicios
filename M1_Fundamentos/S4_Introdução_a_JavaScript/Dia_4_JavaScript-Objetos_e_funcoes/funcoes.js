function verificaPalindrome(palavra){    
    const ultimaLetra = palavra.length - 1;
    for (let index = 0; index < palavra.length; index += 1){
        if (palavra[index] !== palavra[ultimaLetra - index]){ //palavra[index] = Letra analizada/ 
            return 'Infelizmente não sou um palíndromo!';     //palavra[ultimaLetra - index] = Vai analizando e comparando/
        }                                                     //da última até a primeira letra/
    }
    return 'Sim, sou um palíndromo!';
}

// 1
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('paralelepipedo'));

// 2
function indiceDoMaiorValor(numeros) {
    let indiceDoMaiorValor = 0;
    for (let indice in numeros) {
        if (numeros[indiceDoMaiorValor] < numeros[indice]) {
            indiceDoMaiorValor = indice;
        }
    }
    return indiceDoMaiorValor;
}

console.log(indiceDoMaiorValor([2, 3, 6, 7, 10, 1]));
console.log(indiceDoMaiorValor([100, 5, 2, 3, 6, 50]));

// 3
function indiceDoMenorValor(numeros) {
    let indiceDoMenorValor = 0;
    for (let indice in numeros) {
        if (numeros[indiceDoMenorValor] > numeros[indice]) {
            indiceDoMenorValor = indice;
        }
    }
    return indiceDoMenorValor;
}

console.log(indiceDoMenorValor([2, 3, 6, 7, 10, 1]));
console.log(indiceDoMenorValor([100, 5, 2, 3, 6, 50]));

// 4
function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
        if (palavras[indice].length > maiorPalavra.length) {
            maiorPalavra = palavras[indice];
        }
    }
    return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log(maiorPalavra(['Paralelepípedo', 'Popocatepétl', 'Querétaro', 'Resende']));

// 5
function maisRepetido(numeros) {
    let quantRepetido = 0;
    let indexRepetido = 0;
    let quantNumero = 0;

    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                quantNumero += 1;
            }
        }
        if (quantNumero > quantRepetido) {
            quantRepetido = quantNumero;
            indexRepetido = index;
        }
        quantNumero = 0;
    }
    return numeros[indexRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
console.log(maisRepetido([5, 5, 5, 8, 6, 9, 8, 9, 8, 9, 8, 5, 6, 3, 2, 4, 8]));

// 6
function somaNumeros(numero) {
    let total = 0;

    for (let index = 1; index <= numero; index += 1) {
        total += index;
    }
    return total;
}

console.log(somaNumeros(5));

// 7
function verificaFinalPalavra(palavra, finalPalavra) {
    palavra = palavra.split('');
    finalPalavra = finalPalavra.split('');
    let control = true;

    for (let index = 0; index < finalPalavra.length; index += 1) {
        if (palavra[palavra.length - finalPalavra.length + index] != finalPalavra[index]) {
            control = false;
        }
    }
    return control;
}

console.log(verificaFinalPalavra('trybe', 'be'));
console.log(verificaFinalPalavra('joafernando', 'fernan'));