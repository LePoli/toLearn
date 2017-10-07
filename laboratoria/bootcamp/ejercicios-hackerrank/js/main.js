function conversorHoraMilitar(hora){
	var arrHora = hora.split(":");
	var Hora = parseInt(arrHora[0]);
	var Min = arrHora[1];
	var Seg = arrHora[2].split("")[0].concat(arrHora[2].split("")[1]);
	var apm = arrHora[2].split("")[2];

	if(apm.toUpperCase() == "P"){
		if(Hora < 12){
			arrHora[0] = (Hora+12).toString();
		}
	}else{
		if(Hora == 12 || Hora == 0){
			arrHora[0] = "0";
		}
	}
	arrHora[2]= Seg;
	arrHora = arrHora.join(":");
	return arrHora;
}

function writeHAsh(n){
	var carr = "";
	for(j = 0; j < n; j++){
		for (i = 0; i < n; i++){
			if(i < n-j-1){
				carr +=" ";
			}else{
				carr += "#";
			}
		}
		console.log(carr);
		carr = "";
		i = 0;
	}
}

function getFunnyString(s, n){
	s = s.split("");
	n = n.split("");
	var cont = 0;
	for (var i = 1; i < s.length ; i++){
		var rests = Math.abs(s[i].charCodeAt()-s[i-1].charCodeAt());
		var restn = Math.abs(n[i].charCodeAt()-n[i-1].charCodeAt());
		if(rests == restn){
			cont++;
		}
	}
	i = i-1;
	if(cont == i){
		console.log("it's a funny string!");
	}else{
		console.log("sorry, Not a funny string");
	}
}