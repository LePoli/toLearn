$(document).ready(function(){

	//arreglo de objetos con categorías y sub categorías
	var ctg = [
		{
			name: "Aire Libre-Parrillas",
			img: "dist/img/airelibre_y_parrilla.png"
		},
		{
			name: "Automóvil",
			img: "dist/img/automovil.png"
		},
		{
			name: "Baño",
			img: "dist/img/bano.png"
		},
		{
			name: "Cocina",
			img: "dist/img/cocina.png"
		},
		{
			name: "Construcción",
			img: "dist/img/construccion.png"
		},
		{
			name: "Decohogar",
			img: "dist/img/decohogar.png"
		},
		{
			name: "Electro y Línea Blanca",
			img: "dist/img/electronica_lineablanca.png"
		},
		{
			name: "Ferretería",
			img: "dist/img/ferreteria.png"
		},
		{
			name: "Herramientas",
			img: "dist/img/herramientas.png"
		},
		{
			name: "Iluminación",
			img: "dist/img/iluminacion.png",
			subcategoria: [
				{
					name_sc: "Ampolletas y Fluorescencia",
					img_sc: "dist/img/ilu_amp_fluo.png",
					subsgtecategoria: [
					{
						name_ssc: "Ampolletas LED",
						img_ssc: "dist/img/ilu2_amp_led.png"
					},
					{
						name_ssc: "Ampolletas Ahorro de Energía",
						img_ssc: "dist/img/ilu2_ahorro.png"
					},
					{
						name_ssc: "Ampolletas Halógenas",
						img_ssc: "dist/img/ilu2_halogena.png"
					},
					{
						name_ssc: "Ampolletas Incandescentes",
						img_ssc: "dist/img/ilu2_incandecente.png"
					},
					{
						name_ssc: "Ampolletas Eco Halógenas",
						img_ssc: "dist/img/ilu2_ecohalogena.png"
					},
					{
						name_ssc: "Fluorescencia Compacta",
						img_ssc: "dist/img/ilu2_fluor_compac.png"
					},
					{
						name_ssc: "Fluorescentes Circulares",
						img_ssc: "dist/img/ilu2_fluor_circ.png"
					},
					{
						name_ssc: "Tubos Fluorescente",
						img_ssc: "dist/img/ilu2_fluor_tubo.png"
					}]
				},
				{
					name_sc: "Iluminación Exterior",
					img_sc: "dist/img/ilu_externa.png"
				},
				{
					name_sc: "Iluminación Interior",
					img_sc: "dist/img/ilu_interior.png"
				},
				{
					name_sc: "Iluminación LED",
					img_sc: "dist/img/ilu_led.png"
				},
				{
					name_sc: "Ventiladores de techo",
					img_sc: "dist/img/ilu_ventilador.png"
				},
				{
					name_sc: "Iluminación para tu negocio",
					img_sc: "dist/img/ilu_negocio.png"
				}
			]
		},
		{
			name: "Jardín y terrazas",
			img: "dist/img/jardin_terraza.png"
		},
		{
			name: "Muebles",
			img: "dist/img/muebles.png"
		},
		{
			name: "Pinturas",
			img: "dist/img/pinturas.png"
		},
		{
			name: "Pisos y cerámicas",
			img: "dist/img/pisos_ceramica.png"
		},
		{
			name: "Puertas y ventanas",
			img: "dist/img/puertas_ventanas.png"
		}
	];

	//agregar li con categorias desde la lista de objetos
	for (var i=0; i<ctg.length; ++i){
		$('.carrusel-ctg').append( '<div class="elementoCtg"><img src="' + ctg[i].img + '" alt="' + ctg[i].name + '"><h4>' + ctg[i].name + '</h4></div>' );
	}
	
});

//carrusel

$('#slider3 .item3').each(function(i){
  var $this = $(this),
      width = $this.width(),
      left = width * i,
      color = 25 * i;
  $this.css({ left: left })
  .find('.inset3').css({ backgroundColor: 'white' });
});
$('.trigger3').on('click',function(){
  var $this = $(this),
      width = $('.item3').width() * 1,
      speed = 500;
  if ( $this.hasClass('first3') ) {
    $('.frame3').animate({ scrollLeft: 0 },speed * 3);
  } else if ( $this.hasClass('last3') ) {
    $('.frame3').animate({ scrollLeft: $('.frame3')[0].scrollWidth },speed * 3);
  } else if ( $this.hasClass('prev3') ) {
    $('.frame3').animate({ scrollLeft: '-=' + width },speed);
  } else if ( $this.hasClass('next3') ) {
    $('.frame3').animate({ scrollLeft: '+=' + width },speed);
  }
});
$('#slider2 .item2').each(function(i){
  var $this = $(this),
      width = $this.width(),
      left = width * i,
      color = 25 * i;
  $this.css({ left: left })
  .find('.inset2').css({ backgroundColor: 'white' });
});
$('.trigger2').on('click',function(){
  var $this = $(this),
      width = $('.item2').width() * 1,
      speed = 500;
  if ( $this.hasClass('first2') ) {
    $('.frame2').animate({ scrollLeft: 0 },speed * 3);
  } else if ( $this.hasClass('last2') ) {
    $('.frame2').animate({ scrollLeft: $('.frame2')[0].scrollWidth },speed * 3);
  } else if ( $this.hasClass('prev2') ) {
    $('.frame2').animate({ scrollLeft: '-=' + width },speed);
  } else if ( $this.hasClass('next2') ) {
    $('.frame2').animate({ scrollLeft: '+=' + width },speed);
  }
});
$('#slider1 .item1').each(function(i){
  var $this = $(this),
      width = $this.width(),
      left = width * i,
      color = 25 * i;
  $this.css({ left: left })
  .find('.inset1').css({ backgroundColor: 'white' });
});
$('.trigger1').on('click',function(){
  var $this = $(this),
      width = $('.item1').width() * 1,
      speed = 500;
  if ( $this.hasClass('first1') ) {
    $('.frame1').animate({ scrollLeft: 0 },speed * 3);
  } else if ( $this.hasClass('last1') ) {
    $('.frame1').animate({ scrollLeft: $('.frame1')[0].scrollWidth },speed * 3);
  } else if ( $this.hasClass('prev1') ) {
    $('.frame1').animate({ scrollLeft: '-=' + width },speed);
  } else if ( $this.hasClass('next1') ) {
    $('.frame1').animate({ scrollLeft: '+=' + width },speed);
  }
});



$('.no_display1').hide();
$('.no_display2').hide();
$('.no_display3').hide();

$("#demo1").click(function(){
$('.no_display1').slideDown(500, function () {});
});

$("#demo2").click(function(){
$('.no_display2').slideDown(500, function () {});
});

$("#demo3").click(function(){
$('.no_display3').slideDown(500, function () {});
});