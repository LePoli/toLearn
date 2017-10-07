$(document).ready(function(){
	$('#confirmar').click(function(){
		var jc = $.confirm({
			theme: 'osa',
			title: 'AGREGAR TAREA',
		content: $('#alert-form')[0].innerText,
		buttons: {
				ACEPTAR: {
					btnClass: 'btn-blue',
					function () {
					},
				},
				CANCELAR: {
					btnClass: 'btn-dark',
					function () {
					},
				},
			},
			onContentReady: function(){
				$('#more').on('click', function(){
					$('#show-more').hide();
					$('#show-less').show();
					$('#more-options').show();
				});
				$('#less').on('click', function(){
					$('#show-more').show();
					$('#show-less').hide();
					$('#more-options').hide();
				});
			}
		});
	})
});