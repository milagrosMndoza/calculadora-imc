var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.onclick = function(){
    var estatura = document.getElementById("estatura");
    var peso = document.getElementById("peso");
    estatura = parseInt(estatura.value);
    peso = parseInt(peso.value);
    var imc = (peso / estatura / estatura) * 10000;
    imc = imc.toFixed(2);
    alert("Tu IMC es: " + imc);
}