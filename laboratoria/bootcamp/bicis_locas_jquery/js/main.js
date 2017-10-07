function validateForm(){
	var caracteres = /^[A-Za-z\_\-\.\s\xF1\xD]+$/;
	function validarNombrtre(){		
		var nombre = $('#name').val();
		if(nombre.length == 0){
			var mensajeError = "Este campo no debe queda vacío";
			var span = $('#name').parent().append('<span> '+ mensajeError+'</span>');
		}
		if(!caracteres.test(nombre)){
			var mensajeError = "Debe escribir caracteres validos";
			var span = $('#name').parent().append('<span> '+ mensajeError+'</span>');
		}
	}

	function validarApellido(){
		var apellido = $('#lastname').val();
		if(apellido.length == 0){
			var mensajeError = "Este campo no debe queda vacío";
			var span = $('#lastname').parent().append('<span> '+ mensajeError+'</span>');
		}
		if(!caracteres.test(apellido)){
			var mensajeError = "Debe escribir caracteres validos";
			var span = $('#lastname').parent().append('<span> '+ mensajeError+'</span>');
		}
	}

	function validaMayuscula (){
		var nombre= $("#name").val();
		var apellido= $("#lastname").val();

		if(nombre.charAt(0) !== nombre.charAt(0).toUpperCase()){

			var mensajeError = "Primera letra debe se en mayuscula";
			var span = $('#name').parent().append('<span> '+ mensajeError+'</span>');
		}

		if(apellido.charAt(0) !== apellido.charAt(0).toUpperCase()){

			var mensajeError = "Primera letra debe se en mayuscula";
			var span = $('#lastname').parent().append('<span> '+ mensajeError+'</span>');
		}

	}

	function validarCorreo(){
		var valideMail= /\w+@\w+\.+[a-z]/; 
		var correo=$('#input-email').val();
		if(correo.length==0){
			var mensajeError = "Ingrese correo valido";
			var span = $('#input-email').parent().append('<span> '+ mensajeError+'</span>');
		}
		if (!valideMail.test(correo)){
			var mensajeError = "Ingrese correo valido";
			var span = $('#input-email').parent().append('<span> '+ mensajeError+'</span>');
		}
	}
	


	function validarContrasena(){
		var contrasena=$('#input-password').val();
		if(contrasena.length==0){
			var mensajeError = "Ingrese contraseña valida";
			var span = $('#input-password').parent().append('<span> '+ mensajeError+'</span>');
		}if(contrasena==="123456" ||  contrasena==="098754" || contrasena==="password" && contrasena.length<6){

			var mensajeError = "Ingrese contraseña valida";
			var span = $('#input-password').parent().append('<span> '+ mensajeError+'</span>');
		}

	}


	function validarSeleccion(){
		var seleccion=$('select').val();
		if(seleccion ==0){
			var mensajeError = "Debe escoger un tipo de bicicleta";
			var span = $('select').parent().append('<span> '+ mensajeError+'</span>');
		}

	}
	validarSeleccion();
	validarNombrtre();
	validarApellido();
	validarCorreo();
	validarContrasena();
}