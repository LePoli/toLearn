$(document).ready(function(){
	checkedBox();
	$('input#input_text, textarea#textarea1').characterCounter();
});


var obtenercheckBlue = (function () {
	var checkBlue = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
   		// If first entry with this name
		if (typeof checkBlue[pair[0]] === "undefined") {
   			checkBlue[pair[0]] = decodeURIComponent(pair[1]);
   			// If second entry with this name
		} else if (typeof checkBlue[pair[0]] === "string") {
   			var arr = [ checkBlue[pair[0]],decodeURIComponent(pair[1]) ];
   			checkBlue[pair[0]] = arr;
   			// If third or later entry with this name
		} else {
   			checkBlue[pair[0]].push(decodeURIComponent(pair[1]));
		}
	} 
	return checkBlue;
})();

function checkedBox(){
	$('#checked').html(obtenercheckBlue.step);
	if(obtenercheckBlue.step==='gestion'){
		$('#gest-blue-l').attr('class','blue-l');
		$('#gest-blue-c').attr('class', 'blue-c');
	}
}
