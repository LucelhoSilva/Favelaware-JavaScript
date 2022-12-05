let numero = 16

if (numero <15){console.log('O pagamento esta adiantado')
}else if (numero =15 && numero <=20){console.log('O pagamento esta em dia')
}else if (numero=20 && numero <=30){console.log('O pagamento esta atrasado')
}else{console.log('Nao e um numero')}
    
function pagamento(){

    var data = document.getElementById("n1").value;
    
    var res = document.getElementById("res");
    
    if (data >= 1 && data <15 ) {
        res.innerHTML = "O pagamento esta adiantado";
        res.style.color = "#00FF00";

    }
    else if (data <=0)
    {
        res.innerHTML = "Cliente nao cadastrado";
        res.style.color = "#A020F0";
    }
    else if (data = 15 && data <=20)
    {
        res.innerHTML = "O pagamento esta em dia";
        res.style.color = "#FFD700";
    } 
    else if(data = 20 && data <=30) 
    {
        res.innerHTML = "O pagamento esta atrasado";
        res.style.color = "#FF0000";
    }

}



