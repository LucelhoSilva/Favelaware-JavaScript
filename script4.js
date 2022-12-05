/*
Qual é o perador correto para calcular o restante ?

a) *
b) /
c) % (alternativo correta)
d) #

*/

console.log(5-3);

function subtracao(){
var num1 = document.getElementById("n1").value;
var num2 = document.getElementById("n2").value;
var rest  =document.getElementById("res");
num1 = parseInt(num1);
num2 = parseInt(num2);
rest.innerHTML = "Resultado da subtração é: "+(num1-num2);
}

/*

Qual o resultado exibido dado a expressão console.log(7*2/(-5+2)) ?

-4.666666666666667

*/ 