calculo1=(nota1=9,nota2=4,nota3=6,nota4=8,nota5=2)=>{
    return nota1+nota2+nota3+nota4+nota5/5; 
    }
    
calculo2=(nota1=9,nota2=4,nota3=6,nota4=8,nota5=2)=>{
    return nota1+nota2+nota3+nota4+nota5; 
    }
    console.log('A media das 5 notas é: '+calculo1())
    console.log('A soma das 5 notas é: '+calculo2())
    

    var PI = 3.14159;
    var raio = 2.0

    var area = PI * Math.pow(raio,2)
    console.log ("Area= "+area)

futuro=(ano=2025,dataDeNascimento=1979)=>{
        return ano-dataDeNascimento
        }
        console.log("Voce tera em 2025 : "+futuro()+' anos')