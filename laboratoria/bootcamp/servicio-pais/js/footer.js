var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
	$("#enviar").click(function(){
		var nombre = $("#name").val();
		var correo = $("#email").val();
		var mensaje = $("#comment").val();
		if(nombre == ""){
			$("#pop1").fadeIn("slow");
			return false;
		}else{
			$("#pop1").fadeOut();
		}
		if(correo == "" || !expr.test(correo)){
			$("#pop2").fadeIn("slow");
			return false;
		}else{
			$("#pop2").fadeOut();
		}
		if(mensaje == ""){
			$("#pop3").fadeIn("slow");
			return false;
		}else{
			$("#pop3").fadeOut();
		}
	});
});
