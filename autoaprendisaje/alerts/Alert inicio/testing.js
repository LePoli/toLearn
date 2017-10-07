$(document).ready(function()
{
	$('#confirmar').click(function()
	{
		$.alert({
			theme: 'osa',
			title: 'ERROR',
			content: 'Usuario y/o Contraseña invalidas'
		});
	})
});