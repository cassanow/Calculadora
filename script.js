var tela = document.getElementById("tela");
var numero = 0;
var oper;

function inserir(meuValor){
    tela.value = tela.value + meuValor;
}

function inserirPonto(){
    tela.value = tela.value + '.'
}

function operador(operador){
    numero = tela.value;
    oper = operador;
    apagar();
}

function calcular(){
    if (oper == '+') {
        tela.value = Number(numero) + Number(tela.value);
    }

    if (oper == '-') {
        tela.value = Number(numero) - Number(tela.value);
    }

    if (oper == 'x') {
        tela.value = Number(numero) * Number(tela.value);
    }

    if (oper == '/') {
        tela.value = Number(numero) / Number(tela.value);
    }

}

function apagar(){
    tela.value = '';
}