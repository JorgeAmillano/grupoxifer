$(function(){
	
	var valor;
	var i = 0;
	
	$('#contactName').focus(function(){
		
		$('#resultado-nombre').remove();
		$('#validar-nombre').append('<p class="advertencia"><font color="#FFFFFF">* Obligatorio</font></p>');
		
	});
	
	$('#contactName').blur(function(){
		
		$('.advertencia').remove();
		
		valor = $('#contactName').val();
		
		if(valor != '') {
			$('<img src="imgs/accept.png" id="resultado-nombre" />').appendTo('#validar-nombre');
		}
		else {
			$('<img src="imgs/delete.png" id="resultado-nombre" />').appendTo('#validar-nombre');
		}
		
	});
	
	$('#contactEmail').focus(function(){
		
		$('#resultado-correo').remove();
		$('#validar-correo').append('<p class="advertencia"><font color="#FFFFFF">* Obligatorio</font></p>');
		
	});
	
	$('#contactEmail').blur(function(){
		
		$('.advertencia').remove();
		
		valor = $('#contactEmail').val();
		
		if(valor != '') {
			
			if(validaCorreo(valor)){
				
				$('<img src="imgs/accept.png" id="resultado-correo" />').appendTo('#validar-correo');
			
			}
			else {
				$('<span id="resultado-correo">Correo no válido</span>').appendTo("#validar-correo");
			}
		}
		else {
			$('<img src="imgs/delete.png" id="resultado-correo" />').appendTo('#validar-correo');
		}
		
	});
	
	$('#contactPhone').focus(function(){
		
		$('#resultado-tele').remove();
		$('#validar-tele').append('<p class="advertencia"><font color="#FFFFFF">* Obligatorio</font></p>');
		
	});
	
	$('#contactPhone').blur(function(){
		
		$('.advertencia').remove();
		
		valor = $('#contactPhone').val();
		
		if(valor != '') {
			$('<img src="imgs/accept.png" id="resultado-tele" />').appendTo('#validar-tele');
		}
		else {
			$('<img src="imgs/delete.png" id="resultado-tele" />').appendTo('#validar-tele');
		}
		
	});
	
	
		$('#contactSubject').focus(function(){
		
		$('#resultado-asunto').remove();
		$('#validar-asunto').append('<p class="advertencia"><font color="#FFFFFF">* Obligatorio</font></p>');
		
	});
	
	$('#contactSubject').blur(function(){
		
		$('.advertencia').remove();
		
		valor = $('#contactSubject').val();
		
		if(valor != '') {
			$('<img src="imgs/accept.png" id="resultado-asunto" />').appendTo('#validar-asunto');
		}
		else {
			$('<img src="imgs/delete.png" id="resultado-asunto" />').appendTo('#validar-asunto');
		}
		
	});
	
	
	
		$('#contactMessage').focus(function(){
		
		$('#resultado-mensaje').remove();
		$('#validar-mensaje').append('<p class="advertencia"><font color="#FFFFFF">* Obligatorio</font></p>');
		
	});
	
	$('#contactMessage').blur(function(){
		
		$('.advertencia').remove();
		
		valor = $('#contactMessage').val();
		
		if(valor != '') {
			$('<img src="imgs/accept.png" id="resultado-mensaje" />').appendTo('#validar-mensaje');
		}
		else {
			$('<img src="imgs/delete.png" id="resultado-mensaje" />').appendTo('#validar-mensaje');
		}
		
	});
	
	
	$('#enviar').click(function(){
		
		if($('#contactName').val()!= '' && $('#contactEmail').val()!='' && $('#contactPhone').val()!='' && $('#contactSubject').val()!='' && $('#contactMessage').val()!='') {
			
			$('.advertencia').remove();
			
			$('#envio').append('<img src="imgs/ajax-loader.gif" alt="Procesando envio" id="cargando" />');
			
			var nombre = $('#contactName').val();
			var correo = $('#contactEmail').val();
			var tele = $('#contactPhone').val();
			var asunto = $('#contactSubject').val();
			var mensaje = $('#contactMessage').val();
			
			$.ajax({
				url: 'contacto.php',
				type: 'POST',
				data: 'contactName=' + nombre + '&contactEmail=' + correo + '&contactPhone=' + tele + '&contactSubject=' + asunto + '&contactMessage=' + mensaje,
				
				success: function(resultado) {
					$('#respuesta').remove();
					$('#envio').append('<span id="respuesta">' + resultado + '</span>');
					$('#cargando').fadeOut(500, function() {
						$(this).remove();
					});
					
				}
			});
			
			return false;
		
			
		}
		else {
			$('#envio').append('<span class="advertencia"><font color="#FFFFFF">Debe completar los datos requeridos.</font></span>');
			return false;
		}
		
	});
	
	
});

function validaCorreo(correo) {
	
	var expresion = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return expresion.test(correo);

}