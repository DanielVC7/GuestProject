$( document ).ready(function(){
	$('.btnEnviarAyuda').on('click',function(){
		//expresiones regulares
		var formularioValidar = true;
		var exprEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
		var exprEmailExt = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+\.([a-zA-Z]{2,4})+$/;

		var nombreValidar = $('#nombre').val();
		var correoValidar = $('#correo').val();
		var comentarioValidar = $('#comentario').val();

		var data = {mensaje: "Debes llenar todos los campos."};
		if(nombreValidar==""){
			formularioValidar = false;
			mensajeErrorDanger(data);
		}else{
			if(correoValidar==""){
				formularioValidar = false;
				mensajeErrorDanger(data);
			}else{
				if(comentarioValidar==""){
					formularioValidar = false;
					mensajeErrorDanger(data);
				}
			}
		}

		if(formularioValidar==true){
			if(!exprEmail.test(correoValidar) && !exprEmailExt.test(correoValidar)){
				data = {mensaje: "Escriba un correo electrónico."};
				formularioValidar = false;
				mensajeErrorWarning(data);
			}
		}

		if(formularioValidar==true){
			data = {mensaje: "Se han enviado tus comentarios, te contestaremos pronto.",url:"/"};
			mensajeErrorSuccess(data);
		}
		/*------------------------------------Funciones-----------------------------------*/
		function mensajeErrorDanger(data){
			$("#mensajeError").empty();
			mensajeErrorVentana=""
			mensajeErrorVentana+='<div class="alert alert-danger alert-dismissible fade in">';
			mensajeErrorVentana+='	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
			mensajeErrorVentana+='	<strong>Precaución!</strong>'+data.mensaje+'';
			mensajeErrorVentana+='</div>';
			$("#mensajeError").append(mensajeErrorVentana);
			location.href="#mensajeError";
			setTimeout(function() {
		        $("#mensajeError").fadeOut(3000);
		    },5000);
			$("#mensajeError").fadeIn();
		};

		function mensajeErrorWarning(data){
			$("#mensajeError").empty();
			mensajeErrorVentana=""
			mensajeErrorVentana+='<div class="alert alert-warning alert-dismissible fade in">';
			mensajeErrorVentana+='	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
			mensajeErrorVentana+='	<strong>Precaución!</strong> '+data.mensaje+'.';
			mensajeErrorVentana+='</div>';
			$("#mensajeError").append(mensajeErrorVentana);
			location.href="#mensajeError";
			setTimeout(function() {
		        $("#mensajeError").fadeOut(3000);
		    },5000);
			$("#mensajeError").fadeIn();
		};

		function mensajeErrorSuccess(data){
			$("#mensajeError").empty();
			mensajeErrorVentana=""
			mensajeErrorVentana+='<div class="alert alert-success alert-dismissible fade in">';
			mensajeErrorVentana+='	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
			mensajeErrorVentana+='	<strong>Exito!</strong> '+data.mensaje+'';
			mensajeErrorVentana+='</div>';
			$("#mensajeError").append(mensajeErrorVentana);
			location.href="#mensajeError";
			setTimeout(function() {
		        $("#mensajeError").fadeOut(3000);
		        location.href=""+data.url+"";
		    },5000);
			$("#mensajeError").fadeIn();
		};
	});
});