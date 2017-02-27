function suma (sum1,sum2) {
	//Retornar ERROR si uno o ambos números son indefinidos.
  	if (sum1 == undefined || sum2 == undefined) {
    	return "Error";
  	}
  	//Validar que sean números y no string
  	var n1 = parseInt(sum1);
 	var n2 = parseInt(sum2);	
  	return n1 + n2 ;
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.suma = suma;
}



























