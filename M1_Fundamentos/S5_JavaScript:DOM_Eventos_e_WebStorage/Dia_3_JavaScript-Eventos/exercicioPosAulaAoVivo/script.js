const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
// Parte 1
// * Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.
// Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// * A tag <ul> deve conter o id 'days';
// * Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. 
//   Ex: <li class="day">3</li>;
// * Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. 
//   Ex: <li class="day holiday">24</li>;
// * Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. 
//   Ex: <li class="day friday">4</li>.

const decemberDaysList = ['', '', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const calendarioDinamico = () => {
    let buscarListaDias = document.querySelector('#days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        let dia = decemberDaysList[index];
        let itemDia = document.createElement('li');
        itemDia.innerHTML = dia;

        if (dia === 24 || dia === 31) {
            itemDia.className = 'day holiday';
            buscarListaDias.appendChild(itemDia);
        } else if (dia === 4 || dia === 11 || dia === 18) {
            itemDia.className = 'day friday';
            buscarListaDias.appendChild(itemDia);
        } else if (dia === 25) {
            itemDia.className = 'day holiday friday';
            buscarListaDias.appendChild(itemDia);
        }
        else {
            dia.className = 'day';
            buscarListaDias.appendChild(itemDia);
        }

    }
}
calendarioDinamico();

// Parte 2
// * Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
//  * Sua função deve receber um parâmetro com a string 'Feriados'.
//  * Adicione a este botão a ID "btn-holiday".
//  * Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
const criarBotaoFeriados = (nomeBotao) => {
    let chamarBotao = document.querySelector('.buttons-container');
    let botaoFeriados = document.createElement('button');
    let botaoFeriadosID = 'btn-holiday';

    botaoFeriados.innerHTML = nomeBotao;
    botaoFeriados.id = botaoFeriadosID;

    chamarBotao.appendChild(botaoFeriados);
}
criarBotaoFeriados('Feriados');

// Parte 3
// * Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
//  * Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
const highlightHolidays = () => {
    let chamarBotaoFeriados = document.querySelector('#btn-holiday');
    let chamarFeriados = document.getElementsByClassName('holiday');
    let backgroundColor = 'rgb(238, 238, 238)';
    let newBackgroundColor = 'green';
    
    const mudarCorBotao = () => {
        for (let index = 0; index < chamarFeriados.length; index += 1) {
            if (chamarFeriados[index].style.backgroundColor === newBackgroundColor) {
                chamarFeriados[index].style.backgroundColor = backgroundColor;
                chamarFeriados[index].style.color = 'rgb(119, 119, 119)';
            } else {
                chamarFeriados[index].style.backgroundColor = newBackgroundColor;
                chamarFeriados[index].style.color = 'white';
            }
        }
    }
    chamarBotaoFeriados.addEventListener('click', mudarCorBotao);
}
highlightHolidays();