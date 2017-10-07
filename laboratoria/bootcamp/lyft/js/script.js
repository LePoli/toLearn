var obtenerPaisCodigo = (function () {
	var paisCodigo = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
   		// If first entry with this name
		if (typeof paisCodigo[pair[0]] === "undefined") {
   			paisCodigo[pair[0]] = decodeURIComponent(pair[1]);
   			// If second entry with this name
		} else if (typeof paisCodigo[pair[0]] === "string") {
   			var arr = [ paisCodigo[pair[0]],decodeURIComponent(pair[1]) ];
   			paisCodigo[pair[0]] = arr;
   			// If third or later entry with this name
		} else {
   			paisCodigo[pair[0]].push(decodeURIComponent(pair[1]));
		}
	} 
	return paisCodigo;
	})();
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
	$('#sign-up-title').hover(function(ev){
		$(this).css('color', 'purple');
		console.log('esta sobre letras');
	});
	$('.text-change').hover(function(ev){
		$(this).css('color', 'purple');
	});
	$('#codigo').html(obtenerPaisCodigo.numero);
	var img = '';
	if(obtenerPaisCodigo.pais==='Mexico'){
		img = 'img/paises/Mexico.ico';
	}else if(obtenerPaisCodigo.pais==='Chile'){
		img = 'img/paises/Chile.ico';
	}else if(obtenerPaisCodigo.pais==='Peru'){
		img = 'img/paises/Peru.ico';
	}else if(obtenerPaisCodigo.pais==='USA'){
		img = 'img/paises/United-States.ico';
	}else{
		img = 'img/paises/Chile.ico';
	}
	$('#img-countrie').attr('src', img);

	$('#send').click(function(){
		var name = $('#nombre').val();
		var lastname = $('#apellido').val();
		var email = $('#correo').val();
		var cont = 0;
		if(name == '' || name == 'undefined'){
			alert('UPS, campo Nombre vacio');
			return false;
		}else{
			cont++;
		}
		if(lastname == '' || lastname == 'undefined'){
			alert('UPS, campo Apellido vacio');
			return false;
		}else{
			cont++;
		}
		if(email == ''){
			alert('UPS, campo e-mail vacio')
			return false;
		}else{
			cont++;
		}
		if(!expr.test(email)){
			alert('UPS, algo anda mal con tu correo')
			return false;
		}else{
			cont++;
		}
		
	});
});
function archivo(evt) {
    var files = evt.target.files; // FileList object
    // Obtenemos la imagen del campo "file".
    for (var i = 0, f; f = files[i]; i++) {
    //Solo admitimos imágenes.
    if (!f.type.match('image.*')) {
        continue;
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
    return function(e) {
    	// Insertamos la imagen
    	document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
		};
	})(f);
	reader.readAsDataURL(f);
	}
}
document.getElementById('files').addEventListener('change', archivo, false);