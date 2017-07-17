function calcularIMC (){
var peso = parseInt(prompt("Ingrese su peso"));
var altura = parseInt(prompt("Ingrese su altura  en centimetros"));

var alturaconv = altura/100;
var res = peso/(alturaconv*alturaconv);
var imc = res.toFixed(2);

alert("Tu índice de masa muscular es: "+imc);
}
calcularIMC()