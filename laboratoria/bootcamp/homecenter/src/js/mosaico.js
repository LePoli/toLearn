var items = {};
	var skuArray = [];
	//var skuArray = new Array();
	var arr = [];
	var ajaxProducts = function(sku){
		console.log("skdjlf");
		$.ajax({
			url: 'http://api-car.azurewebsites.net:80/Categories/CL/66/cat360045',
			type: 'GET',
			datatype: "json",
			data : {
				q : sku
			}
		})
		.done(function(response){
			console.log(response);
			items = response;
			poblarArray();
		})
		.fail(function(){
			console.log("error");
		});
	};

	var poblarArray = function(){
		console.log("poblar");
		var skuArray = items.products;
		arr = $.makeArray( skuArray );
		pintarPagina();
	};
	function pintarPagina(){
		console.log("pintar");
		for(i = 0 ; i < arr.length ; i++){
			$('.cont-cuadricula').append('<div class="col-sm-12 col-lg-4 col-md-4 caja-container" id="' + i + '"><div class="row"><div class="col-sm-12 col-lg-12 col-md-12"><input type="checkbox"> Comparar</div><div class="row"><div class="col-sm-6 col-lg-12 col-md-12"><img src="'+arr[i].multimedia[0].url+'"></div><div class="col-sm-6 col-lg-12 col-md-12"><div class="row"><div class="col-sm-12 col-lg-12 col-md-12"><p>'+arr[i].brand.name+'</p></div><div class="col-sm-12 col-lg-12 col-md-12"><p>'+arr[i].shortName+'</p></div><div class="col-sm-12 col-lg-12 col-md-12"><p>SKU: '+arr[i].sku+'</p></div><div class="col-sm-12 col-lg-12 col-md-12"><p>precio normal: '+arr[i].price.normal+' '+arr[i].unit+'</p></div></div></div></div></div><a href="" class="btn btn-danger btn-block">Agregar al Carro</a></div>');
		}
	}
	function butonCompare(){
	console.log("buton");
	var divFp = null;
	var checked = $("input[type='checkbox']:checked");
	if(checked.length > 2){
		alert('NO!');
	}else if(checked.length == 2){
		divFp = checked.parents().filter('.caja-container');
		console.log(divFp);
		//diva = divFp[0].html();
		/*divb = String(divFp[1].html());*/
		swal({
			title: '<h3>Comparativa</h3>',
			html: divFp,
			showCloseButton: true,
			confirmButtonText: '<div class="btn btn-block">Gracias!</div>'
		});
	}
	return divFp;
}
$(document).ready(function(){
	ajaxProducts('products');
	$('.botonComparar').on('click', function(){
		butonCompare();
	});
});