const inputNome = document.querySelector('#nome');
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
const calcular = document.querySelector('#calcular');
const res = document.querySelector('#res');


function calculaImc() {
    const nome = inputNome.value;
    const altura = parseFloat(inputAltura.value);
    const peso = parseFloat(inputPeso.value);
    const imc = peso / (altura *2);

    if (imc < 18.5) {
        res.textContent = `${nome}, o seu IMC é: ${imc.toFixed(2)}. E você esta abaixo do peso normal.`;
    } else if ( imc >= 18.5 && imc < 24.9) {
        res.textContent = `${nome}, o seu IMC é: ${imc.toFixed(2)}. E o seu peso está normal.`;
    } else if (imc > 25 && imc < 29.9) {
        res.textContent = `${nome}, o seu IMC é: ${imc.toFixed(2)}. E você está com excesso de peso.`;
    } else if (imc > 30 && imc < 34.9) {
        res.textContent = `${nome}, o seu IMC é: ${imc.toFixed(2)}. E você está na Classe de Obesidade 1`;
    } else if (imc > 35 && imc < 39.9) {
        res.textContent = `${nome}, o seu IMC é: ${imc.toFixed(2)}. E você está na Classe de Obesidade 2`;
    } else {
        res.textContent = `${nome}, o seu IMC é: ${imc.toFixed(2)}. E você está na Classe de Obesidade 3`;
    }

    limparCampos();

}

function limparCampos() {

    inputNome.value = '';
    inputAltura.value = '';
    inputPeso.value = '';
}

calcular.addEventListener('click', calculaImc);