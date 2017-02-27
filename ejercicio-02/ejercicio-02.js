function busquedaLinear (array,itemToSearch) {
//Retornar ERROR si falta el parametro itemToSearch.
	if(isNaN(itemToSearch)){
		return "Error";
	}
	if(array == undefined){
		return "Error";
	}
	if(array instanceof Array){
		var x = array.indexOf(itemToSearch);
 		//Retornar false si el item no se encuenta dentro del array.
 		if(x == -1){
 			return false;
 		}else{
 		//Retornar el indice de itemToSearch si este es encontrado.
 			return x;
 		}

	}else if(typeof(array) == "string" && Boolean(itemToSearch) === false){
		return "Error de dato";
	}
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
