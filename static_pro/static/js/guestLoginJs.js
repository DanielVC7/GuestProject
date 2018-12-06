$( document ).ready(function() {
	$("#submit").on('click',function(){
    //variables
    var formularioValidar = true;
		var username = $('#username').val();
    var password = $('#password').val();

    var data = {mensaje: "Debes llenar todos los campos."};
    if(username==""){
      formularioValidar = false;
      mensajeErrorDanger(data);
    }else{
      if(password==""){
        formularioValidar = false;
        mensajeErrorDanger(data);
      }
    }

		if(formularioValidar==true){
      $.ajax({
        url:"/guest/login/ajax",
        type: "POST",
        data:{
          'username':$("#username").val(),
          'password':$("#password").val(),
        },
        success: function(data) {
          if(Number(data.respuesta)==0){
            mensajeErrorWarning(data);
          }else if(Number(data.respuesta)==1){
            mensajeErrorSuccess(data);
          }
        },
      });
    }
	});

  $("#password").on('keypress', function (e) {
       if(e.which === 13){
          //variables
          var formularioValidar = true;
          var username = $('#username').val();
          var password = $('#password').val();

          var data = {mensaje: "Debes llenar todos los campos."};
          if(username==""){
            formularioValidar = false;
            mensajeErrorDanger(data);
          }else{
            if(password==""){
              formularioValidar = false;
              mensajeErrorDanger(data);
            }
          }

          if(formularioValidar==true){
              $.ajax({
                url:"/guest/login/ajax",
                type: "POST",
                data:{
                  'username':$("#username").val(),
                  'password':$("#password").val(),
                },
                success: function(data) {
                  if(Number(data.respuesta)==0){
                    mensajeErrorWarning(data);
                  }else if(Number(data.respuesta)==1){
                    mensajeErrorSuccess(data);
                  }
                },
              });
          }
       }
  });

  /*------------------------------------Funciones-----------------------------------*/
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

  function mensajeErrorSuccess(data){
    $("#mensajeError").empty();
    var mensajeErrorVentana="";
    mensajeErrorVentana+='<div class="alert alert-success alert-dismissible fade in">';
    mensajeErrorVentana+='  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
    mensajeErrorVentana+='  <strong>Exito!</strong> '+data.mensaje+'';
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