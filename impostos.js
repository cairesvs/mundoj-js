var Imposto = {};

Imposto.calcula = function(valor, imposto, taxa){
	var valorInteiro = valor.split(",")[0];
	var valorDecimal = valor.split(",")[1];
	var real = parseFloat((valorInteiro + "." + valorDecimal)).toFixed(2);
	var formatted = ((real * imposto) + taxa).toString().replace(".",",");
	return formatted;
}