
let titulo = document.querySelector('h1');
titulo.innerHTML= 'Hora do Desafio';

function verificarConsole(){
    console.log('O botão foi clicado');
}

function verificarAlerta(){
    console.log('Eu amo JS');
}

function verificarPrompt(){
    let cidade = prompt('Digite uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function verificarSoma(){
    let num1 = parseInt(prompt('Digite um numero: '))
    let num2 = parseInt(prompt('Digite outro numero: '))
    resultado = num1 + num2
    alert(`O resultado é ${resultado}`)
}