var Imposto = {};

Imposto.calcula = function(valor, imposto, taxa){
	return ((valor * imposto) + taxa);
}

Imposto.bigNumber = function(valor, imposto, taxa){
	var valorComImposto = new BigNumber(valor).multiply(imposto);
	return Number(new BigNumber(taxa).add(valorComImposto));
}