$(document).ready(function(){
	$('#confirmar').click(function(){
		$.confirm({
			theme: 'osa',
			title: 'AGREGAR TAREA',
    		content: $('#alert-checkbox')[0].innerText,
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
			}
		});
	})
});