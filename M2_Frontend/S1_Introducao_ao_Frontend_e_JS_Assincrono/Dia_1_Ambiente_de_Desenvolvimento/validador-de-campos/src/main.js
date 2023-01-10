import validator from 'validator';
import './style.css';

const inputText = document.querySelector('#value');
const button = document.querySelector('#button');
const option = document.querySelector('#option');
const outputText = document.querySelector('#validation');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const options = {
        cpf: validator.isTaxID(inputText.value, 'pt-BR'),
        email: validator.isEmail(inputText.value),
        rgb: validator.isRgbColor(inputText.value),
        url: validator.isURL(inputText.value),
        upperCase: validator.isUppercase(inputText.value),
    };

    outputText.innerHTML = `A validação retornou ${options[option.value]}`;
});