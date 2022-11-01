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

const novemberDaysList = [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const calendarioDinamico = () => {
    let buscarListaDias = document.querySelector('#days');

    for (let index = 0; index < novemberDaysList.length; index += 1) {
        let dia = novemberDaysList[index];
        let itemDia = document.createElement('li');
        itemDia.innerHTML = dia;

        if (dia === 2 || dia === 15) {
            itemDia.className = 'day holiday';
            buscarListaDias.appendChild(itemDia);
        } else if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
            itemDia.className = 'day friday';
            buscarListaDias.appendChild(itemDia);
        } else {
            itemDia.className = 'day';
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
    
    chamarBotaoFeriados.addEventListener('click', () => {
        for (let index = 0; index < chamarFeriados.length; index += 1) {
            if (chamarFeriados[index].style.backgroundColor === newBackgroundColor) {
                chamarFeriados[index].style.backgroundColor = backgroundColor;
                chamarFeriados[index].style.color = 'rgb(119, 119, 119)';
            } else {
                chamarFeriados[index].style.backgroundColor = newBackgroundColor;
                chamarFeriados[index].style.color = 'white';
            }
        }
    });
}
highlightHolidays();

// Parte 4
// * Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// * Sua função deve receber como parâmetro a string “Sexta-feira”;
// * Adicione a esse botão o ID "btn-friday";
// * Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".]
const criarBotaoSexta = (nomeBotao) => {
    let chamarBotao = document.querySelector('.buttons-container');
    let botaoSexta = document.createElement('button');
    let botaoSextaID = 'btn-friday';

    botaoSexta.innerHTML = nomeBotao;
    botaoSexta.id = botaoSextaID;

    chamarBotao.appendChild(botaoSexta);
}
criarBotaoFeriados('Sexta-feira');

// Parte 5
// * Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// * Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// const highlightFridays = (arraySextas) => {
//     let chamarBotaoSexta = document.querySelector('#btn-friday');
//     let chamarSexta = document.getElementsByClassName('friday');
//     let sextou = 'SEXTOU!!';

//     chamarBotaoSexta?.addEventListener('click', () => {
//         for (let index = 0; index < chamarSexta.length; index += 1) {
//             if (chamarSexta[index].innerHTML !== sextou) {
//                 chamarSexta[index].innerHTML = sextou;
//             } else {
//                 chamarSexta[index].innerHTML = arraySextas[index];
//             }
//         }
//     });
// }
// let sextasNovembro = [4, 11, 18, 25];
// highlightFridays(sextasNovembro);

// Parte 6
// * Implemente duas funções que criem um efeito de “zoom”;
// * Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o 
//   ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
const aumentarDia = () => {
    let dias = document.querySelector('#days');
    dias.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    });
}

const diminuirDia = () => {
    let dias = document.querySelector('#days');
    dias.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    });
}

aumentarDia();
diminuirDia();

// Parte 7
// * Implemente uma função que adicione uma tarefa personalizada ao calendário;
// * A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um 
//   elemento com a tag <span> contendo a tarefa;
// * O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
const addTarefa = (tarefa) => {
    let containerTarefa = document.querySelector('.my-tasks');
    let nomeTarefa = document.createElement('span');

    nomeTarefa.innerHTML = tarefa;
    containerTarefa.appendChild(nomeTarefa);
}

addTarefa('Projeto');

// Parte 8
// * Implemente uma função que adicione uma legenda com cor para a tarefa;
// * Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> 
//   com a classe task;
// * O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// * O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
const addLegenda = (color) => {
    let buscarTarefas = document.querySelector('.my-tasks');
    let novaTarefa = document.createElement('div');
    
    novaTarefa.className = 'task';
    novaTarefa.style.backgroundColor = color;

    buscarTarefas.appendChild(novaTarefa);
}

addLegenda('yellow');

// Parte 9
// * 