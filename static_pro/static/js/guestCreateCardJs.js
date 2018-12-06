$( document ).ready(function(){
	$("#guardarCardCreate").on('click',function(){
		//expresiones regulares
		var formularioValidar = true;
	    var expreTarjeta = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;
	    var expreAno = /^[0-9]{2}$/;
	    var expreMes = /^[0-9]{2}$/;
	    var expreCVV = /^[0-9]{3}$/;
	    //Obtener fecha de hoy
	    var dt = new Date();
	    var month = dt.getMonth()+1;
		var year = dt.getFullYear();
		var yearStr = year.toString();
		var yearSplit = yearStr.split("20");
		var yearInt = parseInt(yearSplit[1]);
		//variables
		var ano = $("#yy").val();
		var mes = $("#mm").val();
		var numTarjeta = $("#numTarjeta").val();
		var nombreTarjeta = $("#nombrePropetiario").val();
		var cvv = $("#cvv").val();
		

		//Comprobar que ningun campo obligatorio este vacio
		var data = {mensaje: "Debes llenar todos los campos."};
		if(numTarjeta==""){
			formularioValidar = false;
			mensajeErrorDanger(data);
		}else{
			if(ano==""){
				formularioValidar = false;
				mensajeErrorDanger(data);
			}else{
				if(mes==""){
					formularioValidar = false;
					mensajeErrorDanger(data);
				}else{
					if(cvv==""){
						formularioValidar = false;
						mensajeErrorDanger(data);
					}else{
						if(nombreTarjeta==""){
							formularioValidar = false;
							mensajeErrorDanger(data);
						}
					}
				}
			}
		}
		
		

		//Comprobar que la informacion del formulario sea correcta
		if(!expreTarjeta.test(numTarjeta)){							
			formularioValidar = false;
			var data ={mensaje:"El número de tarjeta, no contiene caracteres. Solo acepta Visa, Master Card y Discover."};
			mensajeErrorWarning(data);
		}else{
			if(!expreAno.test(ano)){
				formularioValidar = false;
				var data ={mensaje:"El año no lleva caracteres"};
				mensajeErrorWarning(data);
			}else{
				if(!expreMes.test(mes)){
					formularioValidar = false;
					var data ={mensaje:"El mes no lleva caracteres"};
					mensajeErrorWarning(data);
				}else{
					if(!expreCVV.test(cvv)){
						formularioValidar = false;
						var data ={mensaje:"El CVV no lleva caracteres"};
						mensajeErrorWarning(data);
					}
				}
			}
		}

		//comprobar que no se ingrese un nombre de usuario ya registrado
		if(formularioValidar==true){

		};
	});

	/*------------------------------------Funciones-----------------------------------*/
	function mensajeErrorDanger(data){
		$("#mensajeError").empty();
		var mensajeErrorVentana="";
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

	function mensajeErrorInfo(data){
		$("#mensajeError").empty();
		var mensajeErrorVentana="";
		mensajeErrorVentana+='<div class="alert alert-info alert-dismissible fade in">';
		mensajeErrorVentana+='	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
		mensajeErrorVentana+='	<strong>Información!</strong> '+data.mensaje+'.';
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
		var mensajeErrorVentana="";
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