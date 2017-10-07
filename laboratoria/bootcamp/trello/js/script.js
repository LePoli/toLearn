var contUniversal = 0;

function anadirTareas(){
	var idd = "inicio"+ contUniversal.toString();
    var ide = "cont-post"+contUniversal.toString();
    // esta es la caja donde dejaremos
    var contenedorExistente = document.getElementById("agregarLista");
    // Esta es la caja donde irá mi input y mi boton
    var cajaInicioTarea = document.createElement('div');
    //Creamos input y boton
    var textcont =document.createElement('input');
    var boton =document.createElement('button');
    //Agregamos atributos a input y boton
    cajaInicioTarea.setAttribute("class", "contenedores-lista");
    cajaInicioTarea.setAttribute("id", ide);
    textcont.setAttribute("class", "form-control");
    boton.setAttribute("class", "btn");
    boton.setAttribute("onclick", "crearListaNueva()");

    //Creamos nodo de texto para el boton
    var textoBoton = document.createTextNode("Guardar");

    //Metemos texto en el boton
    boton.appendChild(textoBoton);

    //Ahora hay que poner todo dentro del div que inventamos 
    cajaInicioTarea.appendChild(textcont);
    cajaInicioTarea.appendChild(boton);

    contenedorExistente.appendChild(cajaInicioTarea);

    document.getElementById(idd).classList.add("hide");
}

function crearListaNueva(){
	contUniversal++;
	var idd = "inicio"+ contUniversal.toString();
    /*guardarL();*/
	var contenedorExistente = document.getElementById("agregarLista");
    // Esta es la caja donde irá mi input y mi boton
    var cajaAnadir = document.createElement('div');
    // Este es el nuevo form
    var cajaForm = document.createElement('form');
    //este label contiene al lelemnto clicleable
    var cajaLabel = document.createElement('div');
    //label
    var cajaTexto = document.createElement('label');
    //añado clase a div
    var spanIcon = document.createElement("span");
    var iIcono = document.createElement("i");

    cajaAnadir.setAttribute("class", "contenedores-lista");
    //añado id a div
    cajaAnadir.setAttribute("id", idd);
    //añado onclick
    cajaLabel.setAttribute("onclick", "anadirTareas()");
    iIcono.setAttribute("class", "fa fa-plus");
    iIcono.setAttribute("aria-hidden", "true");

    //creamos nodo de texto
    var textoClick = document.createTextNode("Añadir Lista");
    
    //Metemos texto
    spanIcon.appendChild(iIcono);
    cajaTexto.appendChild(spanIcon); 
    cajaTexto.appendChild(textoClick);
    cajaLabel.appendChild(cajaTexto);
    cajaForm.appendChild(cajaLabel);
    cajaAnadir.appendChild(cajaForm);
    contenedorExistente.appendChild(cajaAnadir);
    contenedorExistente.appendChild(cajaInicioTarea);
}

/*function guardarL(){
	var idd = "inicio"+ contUniversal.toString();
    var ide = "cont-post"+contUniversal.toString();

	var contenedorExistente = document.getElementById("agregarLista");
    var contenido = document.getElementById(ide).value;
    // Esta es la caja donde guardare la lsita especifica
    var lista = document.createElement('div');
    var parafo = document.createElement('p');

    var nodoTexto = document.createTextNode(contenido);

    parafo.appendChild(nodoTexto);
    lista.appendChild(parafo);
    contenedorExistente.appendChild(lista);
    //var contenido = docuemnt.    
}*/