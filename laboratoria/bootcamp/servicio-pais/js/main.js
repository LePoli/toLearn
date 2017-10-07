$('.tab a').on('click', function(ev){
	// aca coloco la reaccion de hacer click en un a
	ev.preventDefault();

	$(this).parent().addClass('active');
	$(this).parent().siblings().removeClass('active');

	var href_pulsada = $(this).attr('href');

	$('.tab-content > div').not(href_pulsada).hide();
	$(href_pulsada).fadeIn('slow');
});

$(document).ready(function(){
		$(".confirm").on( "click", function() {
			alert("Se enviará un email para restrablecer la contraseña")
		 });
	});

