function fibonacci(upperLimit) {
 if(!isNaN(upperLimit) && upperLimit>0){
  	var num1=0;
  	var num2=1;
  	var num3=0;
  	var fibonacci = "";
  	for(i=0; i<upperLimit;i++){
    	fibonacci = fibonacci + (num1 + "");
    	num3 = num1 + num2;
    	num1 = num2;
    	num2 = num3;
  	}
  	return fibonacci.split("").map(Number);
 }else{
 	return "Error";
 }
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
