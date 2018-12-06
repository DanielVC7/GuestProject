$( document ).ready(function() {
	$('#recoveryPassword').on('click',function(){
		var validarFormulario = true;
		var exprEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
		var exprEmailExt = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+\.([a-zA-Z]{2,4})+$/;
		var email = $('#email').val();

		if(email==""){
			validarFormulario = false;
			data = {mensaje:"Debes introducir un correo electrónico."};
			mensajeErrorDanger(data);
		}

		if(validarFormulario == true){
			if(!exprEmail.test(email) && !exprEmailExt.test(email)){
				validarFormulario = false;
				data = {mensaje:"Debes introducir un correo electrónico."};
				mensajeErrorDanger(data);
			}
		}
		if(validarFormulario == true){
			$.ajax({
	          url:"/guest/recoveryUser/ajax",
	          type: "POST",
	          data:{
	            'email':$("#email").val(),
	          },
	          success: function(data) {
	            if(Number(data.respuesta)==1){
	            	location.href="/guest/recoveryUser/send";
	            }else if(Number(data.respuesta)==0){
	            	mensajeErrorWarning(data);
	            }
	          },
	        });
		}
	});

	//---------------------------------------Funciones----------------------------------------
	function mensajeErrorDanger(data){
    $("#mensajeError").empty();
	    var mensajeErrorVentana="";
	    mensajeErrorVentana+='<div class="alert alert-danger alert-dismissible fade in">';
	    mensajeErrorVentana+='  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
	    mensajeErrorVentana+='  <strong>Precaución!</strong>'+data.mensaje+'';
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
    var mensajeErrorVentana="";
    mensajeErrorVentana+='<div class="alert alert-warning alert-dismissible fade in">';
    mensajeErrorVentana+='  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
    mensajeErrorVentana+='  <strong>Precaución!</strong>'+data.mensaje+'.';
    mensajeErrorVentana+='</div>';
    $("#mensajeError").append(mensajeErrorVentana);
    location.href="#mensajeError";
    setTimeout(function() {
          $("#mensajeError").fadeOut(3000);
      },5000);
    $("#mensajeError").fadeIn();
  };
});