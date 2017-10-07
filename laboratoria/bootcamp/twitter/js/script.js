function agregarTarea(){
  var Txtarea = document.getElementById("cajatareas").value;

  var contieneTareas = document.createElement("div");
  var dCheck = document.createElement("div");
  var lbl = document.createElement("label");
  var box = document.createElement("input");
  var tarea = document.createElement("span");
  var icono = document.createElement("div");
  var iconoT = document.createElement("div");
  var iconoH = document.createElement("div");
  var trash = document.createElement("i");
  var heart = document.createElement("i");

  contieneTareas.setAttribute('class', 'row');
  dCheck.setAttribute('class', 'col-md-offset-1 col-md-7');
  box.setAttribute('type', 'checkbox');
  box.setAttribute('name', 'done');
  icono.setAttribute('class', 'icono col-md-4');
  iconoT.setAttribute('class', 'trash');
  iconoH
  trash.setAttribute('class', 'fa fa-trash');
  trash.setAttribute('aria-hidden', 'true');
  heart.setAttribute('class', 'fa fa-heart');
  heart.setAttribute('aria-hidden', 'true');

  var nodoTextoTarea = document.createTexNode(Txtarea);

  
  nodoTextoTarea.appendChild(tarea);
  box.appendChild(lbl);
  tarea.appendChild(lbl);
  lbl.appendChild(dCheck);
  trash.appendChild(icono);
  heart.appendChild(icono),



}