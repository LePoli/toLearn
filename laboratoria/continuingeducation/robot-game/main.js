
const leftb = 37; //recomendacion de Guga
const up = 38; //rGg
const right = 39; //rGg
const down = 40; //rGg
const game = document.getElementById('campField'); //rGg
let html = ""; //rGg
class Robots {
	constructor ()
  {
  	this.posicion_x = 0;
    this.posicion_y = 0;
  }
  
  up()
  {
  	if(this.posicion_y+1 == 1){
  		alert('Prueba para abajo');
  	}else{
  		this.posicion_y += 1;
  	}
  	//this.posicion_y += 1;
  }
  down()
  {
  	if(this.posicion_y-1 == -10){
  		alert('Prueba para arriba');
  	}else{
  		this.posicion_y -= 1;
  	}
  	//this.posicion_y -= 1;
  }
  right()
  {
  	if(this.posicion_x+1 == 10){
  		alert('prueba a la izquerda');
  	}else{
  		this.posicion_x += 1;
  	}
 		//this.posicion_x += 1;
  }
  left()
  {
  	if(this.posicion_x - 1 == -1){
  		alert('prueba a la derecha');
  	}else{
  		this.posicion_x -= 1;
  	}
 		//this.posicion_x -= 1;
  }
}

//crear tablero de nxn
var fieldmat = () => {
	let mat = [];
	for(let i = 0; i < 10; i++){
		var row = [];
		for(let j = 0; j < 10; j++){
			row.push('<div class="box"><i class="fa fa-tree" aria-hidden="true"></i></div>');
		}
		mat.push(row);
	}
	return mat;
};

var fieldMatrix = fieldmat();
var cont = 0;
var printGame = () =>{
	if(cont == 0){
		fieldMatrix[0][0] = '<div class="box"><i class="fa fa-android" aria-hidden="true"></i></div>';
	}
	cont++;
	html = "";
	game.innerHTML = html;
	for(element of fieldMatrix){
		for(rowElement of element){
			html += rowElement;
		}
		html += '<br>';
	}
	game.innerHTML = html;
};

function key(bot){
	document.addEventListener('keydown', function(e){
		let i = bot.posicion_x;
		let j = Math.abs(bot.posicion_y);
		fieldMatrix[j][i] = '<div class="box"><i class="fa fa-cubes" aria-hidden="true"></i></div>';
		printGame();
		if(e.keyCode == leftb){
			console.log('izquierda');
			bot.left();
			console.log(bot);
		}
		if(e.keyCode == up){ 
			console.log('arriba');
			bot.up();
			console.log(bot); 
		}
		if(e.keyCode == right){ 
			console.log('derecha');
			bot.right();
			console.log(bot); 
		}
		if(e.keyCode == down){ 
			console.log('abajo');
			bot.down(); 
			console.log(bot);
		}
		i = bot.posicion_x;
		j = Math.abs(bot.posicion_y);
		fieldMatrix[j][i] = '<div class="box"><i class="fa fa-android" aria-hidden="true"></i></div>';
		printGame();
	});
}

function startGame(){
	document.getElementById('botoniniciar').style.visibility = 'hidden';
	document.getElementById('campField').style.visibility = 'visible';
	var r2d2 = new Robots();
	printGame();
	key(r2d2);
};

//no es necesario colocar a tu robot en start game, pues como es solo uno lo puedes crear y utilizar liremente dentro de tus funciones. 








//ayudas Guga.

//reconocer key
//var key = () => {
	//onkeydown = onkeyup = e => {
        //this.map[e.keyCode] = e.type == 'keydown';
    //};
//}();

//revisa las clases en cdn firefox

// imprime una matris nxn

//update
//function update(){
	//console.log(map)
//}

//setea itervalo de ejecucion.
//setInterval(update, 1000/30);