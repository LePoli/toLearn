/*document.getElementByClassName("btn").onclick = validateForm();*/

var arrId = ["name", "lastname", "input-email", "input-password", 'select'];
var arrClass = ['name-container', 'lastname-container', 'email-container', 'form-group']

function validateForm(){
	camposVacios();	
	seleccion();
	
}

function camposVacios(){	
	for(i=0; i < arrId.length-1; i++){
		var valor = document.getElementById(arrId[i]).value;
		if(  valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
			var campo = document.getElementsByClassName(arrClass[i])[0];
			var elementoSpan = document.createElement('span');
			var textoNodo = document.createTextNode('Este campo es obligatorio.');
			elementoSpan.appendChild(textoNodo);
			campo.appendChild(elementoSpan);
		}else {
			caracteresValidos();
			verificarContraseña();
			verificarCorreo();
		}
	}
}

function caracteresValidos(){
	/*var arrId = ["name", "lastname"]*/;
	var contador = 0;
	for(i=0; i < 2; i++){
		var valor = document.getElementById(arrId[i]).value;
		if (/^[a-zA-Z]*$/.test(valor) == false){
			var campo = document.getElementsByClassName(arrClass[i])[0];
			var elementoSpan = document.createElement('span');
			var textoNodo = document.createTextNode('Debe ingresar caracteres validos.');
			elementoSpan.appendChild(textoNodo);
			campo.appendChild(elementoSpan);
		}else{
			mayuscula();
		}
	}
}

function mayuscula(){
	/*var arrId = ["name", "lastname"];*/
	var contador = 0;
	for(i=0; i < 2; i++){
		var valor = document.getElementById(arrId[i]).value;
		if(valor.charAt(0).toLowerCase() == valor.charAt(0)){
			var campo = document.getElementsByClassName(arrClass[i])[0];
			var elementoSpan = document.createElement('span');
			var textoNodo = document.createTextNode('La priemra letra debe ser mayuscula.');
			elementoSpan.appendChild(textoNodo);
			campo.appendChild(elementoSpan);
		}
	}
}

function verificarCorreo(){
	/*var arrId = ["input-email"];*/
	var contador = 0;
	var valor = document.getElementById(arrId[2]).value;
	if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor) != true){
		var campo = document.getElementsByClassName(arrClass[2])[0];
		var elementoSpan = document.createElement('span');
		var textoNodo = document.createTextNode('Ingrese un correo valido.');
		elementoSpan.appendChild(textoNodo);
		campo.appendChild(elementoSpan);
	}
}

function verificarContraseña(){
	/*var arrId = ["input-password"];*/
	var contador = 0;
	var cadena = "";
	var valor = document.getElementById(arrId[3]).value;
	if (valor.length < 6){
		var campo = document.getElementsByClassName(arrClass[3])[0];
		var elementoSpan = document.createElement('span');
		var textoNodo = document.createTextNode('Contraseña debe tener almenos 6 caracteres.');
		elementoSpan.appendChild(textoNodo);
		campo.appendChild(elementoSpan);
	}else if(valor == "123456" || valor == "098754"){
		var campo = document.getElementsByClassName(arrClass[3])[0];
		var elementoSpan = document.createElement('span');
		var textoNodo = document.createTextNode('Contraseña debil.\n(Evita combinaciones como 123456 o 098754.)');
		elementoSpan.appendChild(textoNodo);
		campo.appendChild(elementoSpan);
	}
}

function seleccion(){
	var valor = document.querySelector(arrId[4]).selectedIndex;
	if( valor == null || valor == 0 ){
  		var campo = document.getElementsByClassName(arrClass[3])[1];
		var elementoSpan = document.createElement('span');
		var textoNodo = document.createTextNode('Debes seleccionar un tipo.');
		elementoSpan.appendChild(textoNodo);
		campo.appendChild(elementoSpan);
	}
}
