// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase //

const substituaX = nome => {
    const frase = `Tryber x aqui!`;
    const fraseDividida = frase.split(' ');
    for (let index = 0; index < fraseDividida.length; index += 1) {
        if (fraseDividida[index] === 'x') {
            fraseDividida[index] = nome;
        }
    }
    return fraseDividida.join(' ');
};

//console.log(substituaX('Paulo Scapol'));

// ----------------------------------------------------------------------------------------- //

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string //

const minhasSkills = (func) => {
    const skills = ['Html', 'CSS', 'JavaScript'];
    let nomeComSkills = `
    ${func}

    Minhas três principais habilidades são:`;
    for (let index = 0; index < skills.length; index += 1) {
        nomeComSkills = `${nomeComSkills}
        * ${skills[index]}`
    }
    return nomeComSkills;
};

console.log(minhasSkills(substituaX('Paulo Scapol')));