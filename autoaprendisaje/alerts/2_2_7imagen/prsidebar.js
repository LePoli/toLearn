$(document).ready(function(){
	$('#slide-out').hide('fast');
	$('#btn-collapss').on('click', function(){
		$('#slide-out').toggle('slow');
		$('#slide-out').css('display', 'inline')
	});
});