$(document).ready(function()
{
	$('#confirmar').click(function()
	{
		$.confirm({
			theme: 'osa',
			title: 'ELIMINAR TAREA',
			content: 'La tarea <strong>"Ordenar productos en ofertas en pasillos #13, #15, #18 y #22."</strong> sera eliminada.',
			buttons: {
				ELIMINAR: {
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