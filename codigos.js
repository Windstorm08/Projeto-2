function ConverterRealtoDolar(){

var valorElemento = document.getElementById("valor").value;
var valorConvertido= document.getElementById("valorDolar");

if(valorElemento == ""){

    alert("DIGITE UM VALOR!!!")
    document.getElementById("valor").style.background = "orange"


}else{
valorConvertido.innerHTML = "Valor em Dolar: $ " + parseFloat(valorElemento) * 0.19;
}

console.log(valorConvertido);
}


function ConverterDolartoReal(){

    var valorElemento = document.getElementById("valor").value;
    var valorConvertido= document.getElementById("valorReal");
      
   if(valorElemento == ""){

    alert("DIGITE UM VALOR!!! ")
    document.getElementById("valor").style.backgroundColor = "red"
     
    
   }else {
    valorConvertido.innerHTML = "Valor em Real: R$ " + parseFloat(valorElemento) * 5.25;
   }
    
    
 console.log(valorConvertido);
}


function ResetColor(){

    document.getElementById("valor").style.backgroundColor = "white"
}