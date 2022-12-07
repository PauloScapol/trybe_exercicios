// ----- SPREAD EM ARRAYS ----- //
const items = ["Camiseta", "Carregador", "Chinelo"];

const newItems = [...items, "Meia"];
console.log(newItems);


const primavera = ["Outubro", "Novembro", "Dezembro"];
const verao = ["Janeiro", "Fevereiro", "Março"];
const outono = ["Abril", "Maio", "Junho"];
const inverno = ["Julho", "Agosto", "Setembro"];

const meses = [...verao, ...outono, ...inverno, ...primavera];
console.log(meses);

// ----- SPREAD EM OBJETOS ----- //
const produto = {
    id: 1,
    name: "Camiseta",
};

const newProduto = { ...produto, price: 23 };
console.log(newProduto);


const product = {
    id: 1,
    name: "Camiseta",
};

const productPrice = {
    price: 23
};

const newProduct = { ...product, ...productPrice };
console.log(newProduct);

// ----- SALADA DE FRUTAS ----- //
const specialFruit = ["Morango", "Manga", "Pera"];
const additionalItens = ["Coco", "Caldo de Cana", "Pastel de Feira"];

const fruitSalad = (fruit, additional) => {
    return [...specialFruit, ...additionalItens];
};
console.log(fruitSalad(specialFruit, additionalItens));