$( document ).ready(function(){
	//Boton para guardar usuarios
	$("#submit").on('click',function(){
		//expresiones regulares
		var formularioValidar = true;
		var exprEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
		var exprEmailExt = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+\.([a-zA-Z]{2,4})+$/;
	    var exprPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
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
		var nombre = $("#first_name").val();
		var apellidos = $("#last_name").val();
		var username = $("#username").val();
		var correo = $("#email").val();
		var password = $("#password").val();
		var password_confirmation = $("#password_confirmation").val();
		var numTarjeta = $("#numTarjeta").val();
		var nombreTarjeta = $("#nombrePropetiario").val();
		var cvv = $("#cvv").val();

		//Comprobar que ningun campo obligatorio este vacio
		var data = {mensaje: "Debes llenar todos los campos."};
		if(nombre==""){
			formularioValidar = false;
			mensajeErrorDanger(data);
		}else{
			if(apellidos==""){
				formularioValidar = false;
				mensajeErrorDanger(data);
			}else{
				if(username==""){
					formularioValidar = false;
					mensajeErrorDanger(data);
				}else{
					if(correo==""){
						formularioValidar = false;
						mensajeErrorDanger(data);
					}else{
						if(password==""){
							formularioValidar = false;
							mensajeErrorDanger(data);
						}else{
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
						}
					}
				}
			}
		}

		//Comprobar que la informacion del formulario sea correcta
		if(formularioValidar==true){
			if(!exprEmail.test(correo) && !exprEmailExt.test(correo)){
				formularioValidar=false;
				data = {mensaje: "Escriba un correo electrónico"};
				mensajeErrorWarning(data);
			}else{
				if(!exprPassword.test(password)){
					formularioValidar = false;
					var data ={mensaje:"La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Sin caracteres expeciales."};
					mensajeErrorWarning(data);
				}else{
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
				}
			}
		}
		//comprobar que no se ingrese un nombre de usuario ya registrado
		if(formularioValidar==true){
			if(username!=""){
				$.ajax({
					url:"/guest/username/ajax",
					type: "POST",
			        data:{
					   	'username': $("#username").val(),
					   	'password': $("#password").val(),
					},
					success: function(data){
						if(Number(data.respuesta)==1){
							formularioValidar=false;
							mensajeErrorInfo(data);
						}
					},
				});
			}
		}
		//Verifica que las contraseñas coinicdan
		if(formularioValidar==true){
			if(password!=password_confirmation){
				formularioValidar=false;
				var data ={mensaje:"Las contraseñas deben coinicidir."};
				mensajeErrorWarning(data)
			}
		};
		//Verifica si la tarjeta de credito ya expiro
		if(formularioValidar==true){
			if(Number(ano)<=Number(yearInt)){
				if(Number(ano)<Number(yearInt)){
					var data ={mensaje:"Tarjeta Expirada."};
						mensajeErrorInfo(data);
					formularioValidar = false;
				}else if(Number(mes)<Number(month)){
					var data ={mensaje:"Tarjeta Expirada."};
					mensajeErrorInfo(data);
					formularioValidar = false;
				}
			}
		}

		//Guardar registros de Usurios Nuevos
		if(formularioValidar==true){
			$.ajax({
			    url:"/guest/createUser/ajax",
			    type: "POST",
			    data:{
			      'nombre': $("#first_name").val(),
			      'apellidos': $("#last_name").val(),
			      'username': $("#username").val(),
			      'correo': $("#email").val(),
			      'password': $("#password").val(),
			      'password_confirmation': $("#password_confirmation").val(),
			      'numTarjeta': $("#numTarjeta").val(),
			      'month': $("#mm").val(),
			      'year': $("#yy").val(),
			      'nombreTarjeta': $("#nombrePropetiario").val(),
			      'cvv': $("#cvv").val(),
			    },
			    success: function(data){
			    	mensajeErrorSuccess(data);
			    },
		  	});
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