function  pegarCorBotao(el){

    var botao1 = document.getElementById(el).id;
 
    var res = document.getElementById("res");

if (botao1 == "verde" ) {
    res.innerHTML = "motoristas podem avançar o sinal";
    res.style.color = "#00FF00";
}  
else if (botao1 == "amarelo") 
{
    res.innerHTML = "Reduza a velocidade";
    res.style.color = "#FFD700";
} 
else if(botao1 == "vermelho") 
{
    res.innerHTML = "Deve parar imediatamente";
    res.style.color = "#FF0000";
}else
{
    res.innerHTML = "FAVOR DIGIGAR UMA DAS OPÇÕES (VERDE,AMARELO,VERMELHO)";
    res.style.color = "#A020F0";
}   

}

function Oque_fazer(){

    var corSinal = document.getElementById("n1").value;
    
    var res = document.getElementById("res");
    
    if (corSinal == "verde" ) {
        res.innerHTML = "motoristas podem avançar o sinal";
        res.style.color = "#00FF00";
    }  
    else if (corSinal == "amarelo") 
    {
        res.innerHTML = "Reduza a velocidade";
        res.style.color = "#FFD700";
    } 
    else if(corSinal == "vermelho") 
    {
        res.innerHTML = "Deve parar imediatamente";
        res.style.color = "#FF0000";
    }else
    {
        res.innerHTML = "FAVOR DIGIGAR UMA DAS OPÇÕES (VERDE,AMARELO,VERMELHO)";
        res.style.color = "#A020F0";
    }   
    
    
    }
