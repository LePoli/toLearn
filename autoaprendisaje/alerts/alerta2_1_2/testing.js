$(document).ready(function()
{
	$('#confirmar').click(function()
		{
			/*$.alert({
				theme: 'osa',
				title: 'ERROR',
				content: 'Usuario y/o Contraseña invalidas'
			});*/

			$.confirm({
				theme: 'osa',
				title: 'DESMARCAR RUTINA',
				content: 'Desea desmarcar la rutina: <strong>"Realizar la reunión respetando la guía de reunión de apertura definida centralmente."</strong>',
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
			})
		})
});