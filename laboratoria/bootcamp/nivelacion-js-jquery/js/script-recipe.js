$(document).ready(function(){
	console.log('Recipe HTML is ready');
		$('.js-show-recipe').on('click', function(){
			$(this).addClass('active');
			$('#principal-div').removeClass('make');
			$('.js-show-make').removeClass('active');
	});
	$('.js-show-make').on('click', function(){
		$(this).addClass('active');
		$('.js-show-recipe').removeClass('active');
		$('#principal-div').addClass('make');
	});
});