
function validate(id,pos){

    if(arrProyectos.indexOf(id) === -1){
        return false;
    }

    if(arrEstados.indexOf(pos) === -1){
        return false;
    }

    return true;
}

//Agrega proyectos
function Add(){
  var x = document.getElementById("ProjectName").value;
  if(x!== ""){
    var nuevoProyecto = new Proyecto(x,4);
    arrProyectos.push(nuevoProyecto);
  }
  document.getElementById("add").innerHTML = `
            <td>` + x + `</td>
            <td>
              <div class="checkbox">
                <label style="font-size: 2em">
                  <input type="checkbox" id="Check4-1" onclick="changeStateProyect(4,1)">
                  <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                </label>
              </div>
            </td>
            <td>
              <div class="checkbox">
                <label style="font-size: 2em">
                  <input type="checkbox" id="Check4-2" onclick="changeStateProyect(4,2)">
                  <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                </label>
              </div>
            </td>
            <td>
              <div class="checkbox">
                <label style="font-size: 2em">
                  <input type="checkbox" id="Check4-3" onclick="changeStateProyect(4,3)">
                  <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                </label>
              </div>
            </td>
            <td>
              <div class="checkbox">
                <label style="font-size: 2em">
                  <input type="checkbox" id="Check4-4" onclick="changeStateProyect(4,4)">
                  <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                </label>
              </div>
            </td>`
}

function changeStateProyect(id, pos) {
    for (var i = 1;i <= 4; i++)
    {
        document.getElementById("Check"+id+"-" + i).checked = false;
    }
    var nameCheck = "Check"+id+"-"+ pos ;

    document.getElementById(nameCheck).checked = true;

    var pro = null;
    var nameState = "";
    for(var i=0;i< arrEstados.length;i++){
        if(arrEstados[i].id === pos){
            nameState = arrEstados[i].name;
        }
    }

    for(var i=0;i< arrProyectos.length;i++){
        if(arrProyectos[i].id === id){
            arrProyectos[i].estado = pos;
            swal(
            'El ' + arrProyectos[i].nombre + ' ha cambiado el estado a '+ nameState,
            '   ',
            'success'
)
            //alert("El " + arrProyectos[i].nombre + " ha cambiado al estado de "+ nameState );
        }
    }
    //addRow();
    /*var markup = "<tr><td>Proyecto1</td><td><div class='checkbox'><label style='font-size: 2em'><input type='checkbox' id='Check1-1' onclick='changeStateProyect(1,1)'><span class='cr'><i class='cr-icon fa fa-check'></i></span></label></div></td><td><div class='checkbox'><label style='font-size: 2em'><input type='checkbox' id='Check1-1' onclick='changeStateProyect(1,1)'><span class='cr'><i class='cr-icon fa fa-check'></i></span></label></div></td><td><div class='checkbox'><label style='font-size: 2em'><input type='checkbox' id='Check1-1' onclick='changeStateProyect(1,1)'><span class='cr'><i class='cr-icon fa fa-check'></i></span></label></div></td><td><div class='checkbox'><label style='font-size: 2em'><input type='checkbox' id='Check1-1' onclick='changeStateProyect(1,1)'><span class='cr'><i class='cr-icon fa fa-check'></i></span></label></div></td></tr>";
                    
    $("t1").append(markup);*/
    

}
//Prueba agregar row mejor innerHtml
function addRow() {
  // Get a reference to the table
  var tableRef = document.getElementById("t1");

  // Insert a row in the table at row index 0
  var newRow = tableRef.insertRow(arrProyectos.length+1);

  // Insert a cell in the row at index 0
  var newCell  = newRow.insertCell(0);
  var newCell1 = newRow.insertCell(1);
  var newCell2 = newRow.insertCell(2);
  var newCell3 = newRow.insertCell(3);
  var newCell4 = newRow.insertCell(4);
  // Append a text node to the cell
  var newCheck = document.createElement("input");
  newCheck.setAttribute('type', 'checkbox');
  newCheck.setAttribute('class', 'checkbox');
  newCell.appendChild(newCheck);
  //newCell1.appendChild(newText2);
  /*newCell.appendChild(newText);
  newCell.appendChild(newText);
  newCell.appendChild(newText);*/
}

class Proyecto {
    constructor(nombre,id){
        this.id = id;
        this.nombre = nombre;
        this.estado = 0;
    }
}
class Estado{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}   
//Creacion de Objetos Proyectos
var Proyecto1 = new Proyecto("Proyecto1",1);
var Proyecto2 = new Proyecto("Proyecto2",2);
var Proyecto3 = new Proyecto("Proyecto3",3);
//Crecion de Objetos Estados
var cero = new Estado(0,"inicial");
var vendido = new Estado(1,"Vendido");
var disinio = new Estado(2,"Diseño");
var armado = new Estado(3,"Armado");
var programacion = new Estado(4,"Programación");
var arrProyectos = [];
var arrEstados = [];
//agregar proyectos al array
arrProyectos.push(Proyecto1);
arrProyectos.push(Proyecto2);
arrProyectos.push(Proyecto3);
//agregar estados al array
arrEstados.push(cero);
arrEstados.push(vendido);
arrEstados.push(disinio);
arrEstados.push(armado);
arrEstados.push(programacion);







