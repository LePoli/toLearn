
function menorDeTres(n1, n2, n3){
	var menor = 0;
	if (n1 < n2 && n1 < n3) {
		menor = n1;
	}else if (n2 < n1 && n2 < n3) {
		menor = n2;
	}else if (n3 < n1 && n3 < n2) {
		menor = n3;
	}
	console.log("El menor de " + n1 + ", " + n2 + ", " + n3 + " es "+ menor);
	return menor;
}

function parOImpar(numero) {
	if (numero%2 == 0){
		console.log("El numero " + numero + " es par");
	}else{
		console.log("el numero " + numero + " es impar");
	}
}

function numerosOrdenados(numero1, numero2, numero3) {
	var numeros = [numero1, numero2, numero3];
	var ordenados = numeros.sort();
	for(i = 0; i<3; i++){
		console.log(ordenados[i]);
	}
}

function mayusculaMinuscula(cadena){
	if (cadena == cadena.toLowerCase()){
		console.log("Su cadena es: '" + cadena + "' y tiene solo minusculas");
	}else if(cadena == cadena.toUpperCase()){
		console.log("Su cadena es: " + cadena + " y tiene solo mayusculas");
	}else{
		console.log("Su cadena es: " + cadena + " y tiene minusculas y mayusculas");
	}
}

function esPalindromo(cadena){
	var contar = 0;
	cadena = cadena.split(" ");
	cadena = cadena.join();
	cadena = cadena.replace(/,/gi, "");
	cadena = cadena.replace( /[^-A-Za-z0-9]+/g, '-' ).toLowerCase();
	console.log(cadena);
	var largo = cadena.length;
	var itera = Math.floor(largo/2);
	console.log(largo);
	console.log(itera);

	for (i = 0; i < itera; i++){
		if (cadena[i] != cadena[largo-1-i]){
			console.log(cadena[i]);
			contar++;
			console.log(contar);
		}else{
			console.log(cadena[i]+ " y " + cadena[largo-1-i] );
			console.log(contar);
		}
	}
	if(contar == 0){
		console.log("Es palindrome! :D ");
	} else{
		console.log("No es palindrome :(  ")
	}
}

function cuadradoSuma(num1, num2){
	var resultado = Math.pow((num1 + num2), 2);
	console.log(resultado);
	return resultado;
}

function numeroPrimo(numero){
	var k = 0;
	for (i = 1; i <= numero; i++) {
		if(numero % i == 0){
			k++;
		}
	}
	if (k == 2){
		console.log("Su numero es primo!");
	}else{
		console.log("Su numero no es primo");
	}
}

function multiplos(numero){
	var parametro = "";
	for (i = 0; i <= 10; i++) {
		var multip = 1;
		multip = i*numero;
		console.log(multip);
		parametro = parametro + " " + multip.toString();
	}
	return parametro;
}

function cantidadDigitos(numero){
	var digitos = 0;
	while(numero > 0){
		numero = Math.floor(numero/10);
		digitos++;
	}
	console.log("su numero tiene "+ digitos + " digitos.")
	return digitos;
}
