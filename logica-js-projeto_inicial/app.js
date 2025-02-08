/*
alert('Boas Vindas ao jogo do numero secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// é o operador de comentario


// enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}:`);
     // se o chute for igual ao numero secreto
     if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        }else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++
    }
}

//Operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce descobiur o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*
if(tentativas > 1){
    alert(`Isso ai! Voce descobiur o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else{
    alert(`Isso ai! Voce descobiur o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/


function olaMundo(){
    console.log('Ola Mundo');
}
olaMundo();


function olaNome(nome){
    console.log(`Ola ${nome}`);
}
olaNome('Jean');

/*
function dobro(numero){
    return alert(2 * numero);
}
dobro(5);
*/

/*
function media(num1, num2, num3){
    return alert(`A média arrendoda é ${parseInt((num1+num2+num3)/3)}`)
}

media(31,50,25);
*/

/*
function maiorNum(num1, num2){
    if (num1 > num2){
        return alert(`${num1} é o maior numero`)
    }else{
        if (num1 < num2){
            return alert(`${num2} é o maior numero`)
        }else{
            return alert(`${num1} e ${num2} são iguais`)
        }
    }
}

maiorNum(75,50)
*/

/*
function multEleMesmo(num){
    return alert(num * num);
}

multEleMesmo(25)
*/

/*
function imc(altura,peso){
    resultado = peso / altura**2;
    return alert(resultado);
}

imc(1.70, 85)
*/

/*
function fatorial(num){
    if (num == 0){
        return alert(1);
    } else{
        if (num < 0){
            return alert('O numero é menor que 0, nao existe fatorial')
        }else{
            resultado = num
            while(num > 1){                              
                resultado = resultado * (num - 1);
                num--;
            }
            alert(resultado);
        }
    }
}


fatorial(-2)
*/

/*
function dolar(){
    real = parseFloat(prompt('Digite o valor em reais: '))
    dolar = real * 4.8
    return alert(`R$${real} convertido em dolares é ${dolar}`)
}

dolar();
*/

/*
function area(){
    altura = parseFloat(prompt('Digite a altura: '));
    largura = parseFloat(prompt('Digite a largura: '));
    reusltado = altura * largura;
    return alert(`A area da sala é ${reusltado}`);

}

area();
*/

/*
function areaCirculo(){
    raio = parseFloat(prompt('Digite o raio: '));
    area = (raio**2) * 3.14;
    return alert(`A area da sala é ${area}`);
}

areaCirculo()
*/

/*
function tabuada(){
    num = parseFloat(prompt('Digite o numero que deseja saber a tabuada: '));
    num2 = 10;
    while (num2 > 0){
        alert(`${num} X ${num2}: ${num * num2}`);
        num2--
    }
}

tabuada();
*/


let listaGenerica = [];
let linguagensDeProgramação = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramação);


linguagensDeProgramação.push('Java','Ruby','GoLang');


let listaNomes = ['Jean', 'Claudia', 'Tayla'];
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[2]);

