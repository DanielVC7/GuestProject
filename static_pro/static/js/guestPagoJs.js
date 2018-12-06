$( document ).ready(function() {
	var diasInstancia = $('#diasInstancia').val();
	var costoNoche = $('#costoNoche').val();

	var costoTotalDias = Number(diasInstancia)*Number(costoNoche);

	$('#costoDiasTotal').val(costoTotalDias);
	$('#totalInstacia').val(costoTotalDias);

	$('#descuenAplicar').on('click',function(){
		var formularioValidador = true;
		var descuentoCodigo = $('#descuentoCodigo').val();
		var idReserva = $(this).attr("name");

		if(descuentoCodigo==""){
			formularioValidador = false;
			alert("Debes ingresar un código de descuento.")
		};

		if(formularioValidador==true){
			$.ajax({
		    	url:"/guest/pagoAjax/ajax",
		        type: "POST",
		        data:{
		        	'codigoDescuento': descuentoCodigo,
		        	'costoTotalInstancia': $('#totalInstacia').val(),
		        	'descuentoAplicar': 1,
		        	'idReserva': idReserva,
		        	'idRecindecia': $('#idRecidencia').val(),
		        },
		        success: function(data) {
		        	actualizarCampos(data,descuento);
		        },
		        error: function(){
		          alert("No existe este Código.")
		        }
		    });
		};
	});

	$('#pagarReserva').on('click',function(){
		data={mensaje:"Se a realizado el cobro con exito, se te enviara un email con los datos de contacto y el pago de la reserva. Gracias",url:"/"};
		mensajeErrorSuccess(data);
	});
	
	$('#cancelarReserva').on('click',function(){
		$.ajax({
		    	url:"/guest/cancelarPagoAjax/ajax",
		        type: "POST",
		        data:{
		        	'idRecidencia': $('#idRecidencia').val(),
		        },
		        success: function(data) {
		        	location.href=""+data.url+"";
		        },
		    });
	});	
//-----------------------------Funciones------------------------------------------
	function actualizarCampos(data,descuento){
		$("#descuento1").val("");
		$("#descuento2").val("");
		for(i in data.descuento){
			$("#descuento1").val(data.descuento[i].fields.descuento_porcentaje);
			$("#descuento2").val(data.descuento[i].fields.descuento_porcentaje);
		}
		$("#total1").val("");
		$("#total2").val("");
		for(x in data.data){
			$("#total1").val(data.data[x].fields.reserva_total_pago);
			$("#total2").val(data.data[x].fields.reserva_total_pago);
		}
	};

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