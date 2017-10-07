
function callbackPromedio(n1, n2, n3, callback){
	var promedio = (n1+n2+n3)/3;
	var funcion = callback(promedio);
	return funcion;
}

var seg = 1;

function segundero(){
	document.getElementById("titulo").innerHTML = seg;
	seg++;
}

setInterval(segundero, 1000);
