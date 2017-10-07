
function textoNuevo(){
	document.getElementById("form-signin-heading").textContent = "Por favor inicia sesión";
	document.getElementById("form-signin-heading").textContent = "Por favor inicia sesión";
	var input = document.getElementById ("inputEmail");
	input.placeholder = "Por favor ingresa tu email";
	var input2 = document.getElementById ("inputPassword");
	input.placeholder = "Contraseña";	
	document.querySelector ('span').innerHTML = "Recuerdame";
	document.querySelector ('button').innerHTML = "Inscibierse";	
}