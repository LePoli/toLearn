function mapaloaded(){
	document.getElementById("divmapa").style.background="url(img/chile.png)";
}
function mapa(r){
	var posmapa=-76*r
	document.getElementById("divmapa").style.background="url(img/chile.png) "+posmapa+"px";
	if(r==1) {
		dregion="XV Región";
		iregion="Arica";
		
	}
	if(r==2) {
		dregion="I Región";
		iregion="Iquique";
		
	}

	if(r==3) {
		dregion="II Región";
		iregion="Antofagasta";
		
	}
		
	if(r==4) {
		dregion="III Región";
		iregion="Copiapó";
		
	}
		
	if(r==5) {
		dregion="IV Región";
		iregion="La Serena";
		
	}
		
	if(r==6) {
		dregion="V Región";
		iregion="Valparaíso";
		
	}
		
	if(r==7) {
		dregion="VI Región";
		iregion="Rancagua";
		
	}
		
	if(r==8) {
		dregion="Región Metropolitana";
		iregion="Región Metropolitana";
		
	}
		
	if(r==9) {
		dregion="VII Región";
		iregion="Talca";
		
	}
		
	if(r==10) {
		dregion="VIII Región";
		iregion="Concepción";
		
	}
		
	if(r==11) {
		dregion="IX Región";
		iregion="Temuco";
		
	}
		
	if(r==12) {
		dregion="XIV Región";
		iregion="Valdivia";
		
	}
		
	if(r==13) {
		dregion="X Región";
		iregion="Puerto Montt";
		
	}
		
	if(r==14) {
		dregion="XI Región";
		iregion="Coyhaique";
		
	}
	
	if(r==15) {
		dregion="XII Región";
		iregion="Punta Arenas";
		
	}
		
	document.getElementById("divdatoreg").innerHTML=dregion;
	document.getElementById("divinfo").innerHTML=iregion;
}

	//$("#hide").click(function(){
    //$("p").hide();
	//});

	//$("#show").click(function(){
    //$("p").show();
//});


$(document).ready(function(){
	$('#lugares').hide();
	$('#div-gente').hide();
	$('#persona-sing').hide();
	$('#uno').on('click', function(ev){
		$('#lugares').show();
		$('#body-background').css('background-color', 'rgba(0, 0, 0, 0.2)')
	});
	$('#lugar-1').on('click', function(ev){
		$('#div-gente').show();
		$('#lugares').css('background-color', 'rgba(0, 0, 0, 0.2)')
	})
	$('#show').click(function(ev){
        $('.text1').show();
    });
	$('#persona').on('click', function(ev){
		$('#persona-sing').show();
		$('#div-gente').css('background-color', 'rgba(0, 0, 0, 0.6)')
	})
	$('#close-localidades').on('click', function(ev){
		$('#lugares').hide();
		$('#body-background').css('background-color', '#fff')
	})
	$('#close-gente').on('click', function(ev){
		$('#div-gente').hide();
		$('#lugares').css('background-color', '#fff')
	})
	$('#close-individual').on('click', function(ev){
		$('#persona-sing').hide();
		$('#div-gente').css('background-color', '#fff')
	})
    $('#hide').click(function(ev){
        $('.text1').hide();
    });
     $('#show2').click(function(ev){
        $('.text2').show();
    });

    $('#hide1').click(function(ev){
        $('.text2').hide();
    });
    
});



	







	


