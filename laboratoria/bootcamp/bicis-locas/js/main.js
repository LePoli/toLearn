document.getElementByClassName("btn").onclick = validateForm();

function validateForm(){
	camposVacios();
	caracteresValidos();
	mayuscula();
	verificarCorreo();
	verificarContraseña();
	seleccion();
	
}

function camposVacios(){
	var arrId = ["name", "lastname", "input-email", "input-password"];
	var contador = 0;
	for(i=0; i < arrId.length; i++){
		var valor = document.getElementById(arrId[i]).value;
		if(  valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
			contador++;
		}
	}

	if (contador>0){
		alert("Todos los campos son obligatorios.\nTienes "+contador+" campos vacios.\n");
	}
}

function caracteresValidos(){
	var arrId = ["name", "lastname"];
	var contador = 0;
	for(i=0; i < arrId.length; i++){
		var valor = document.getElementById(arrId[i]).value;
		if (/^[a-zA-Z]*$/.test(valor) == false){
			contador++;
		}
	}
	if (contador>0){
		alert("Debe ingresar caracteres validos para Nombre y Apellidos.");
	}
}

function mayuscula(){
	var arrId = ["name", "lastname"];
	var contador = 0;
	for(i=0; i < arrId.length; i++){
		var valor = document.getElementById(arrId[i]).value;
		if(valor.charAt(0).toLowerCase() == valor.charAt(0)){
			contador++;
		}
	}
	if (contador>0){
		alert("Los campos Nombre y Apellido deben tnener su primera letra Mayuscula.");
	}
}

function verificarCorreo(){
	var arrId = ["input-email"];
	var contador = 0;
	var valor = document.getElementById(arrId[0]).value;
	if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor) != true){
		contador++;
	}
	if (contador>0){
		alert("Debe ingresar un correo con el formato correcto.");
	}
}

function verificarContraseña(){
	var arrId = ["input-password"];
	var contador = 0;
	var cadena = "";
	var valor = document.getElementById(arrId[0]).value;
	if (valor.length < 6){
		cadena += "Contraseña debe tener almenos 6 caracteres.\n"
		contador++;
	}
	if(valor == "123456" || valor == "098754"){
		cadena += "Contraseña debil.\n(Evita combinaciones como 123456 o 098754)."
		contador++;
	}
	if (contador>0){
		alert(cadena);
	}
}

function seleccion(){
	var valor = document.querySelector('select').selectedIndex;
	if( valor == null || valor == 0 ){
  		alert("Debes seleccionar un tipo.");
	}
}
