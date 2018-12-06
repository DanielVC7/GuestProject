$( document ).ready(function() {

	$('#fechaEntrada').on('change',function(){
		var hacerCalculos = true;
		var descuentoAplicado = $('#descuento').val();
		var fechaEntrada = $('#fechaEntrada').val();
		var fechaSalida = $('#fechaSalida').val();
		var huespedes =	$('#numHuespedes').val();
		var huespedesLimit = $('#pNumHuespedes').text();
		var arregloHuespedes = huespedesLimit.split(":");
		
		if(fechaEntrada==""){
			hacerCalculos = false;
		}else{
			if(fechaSalida==""){
				hacerCalculos = false;
			}else{
				if(huespedes==""){
					hacerCalculos = false;
				}
			}
		}

		if(Number(huespedes)>Number(arregloHuespedes[1])){
			data = {mensaje:"Excede el número de huespedes que permitido"}
			mensajeErrorInfo(data);
			hacerCalculos = false;
		}else{
			if(hacerCalculos==true){
				if(Number(huespedes)<=0){
				data = {mensaje:"No hse permiten cero huespedes o negativos"}
				mensajeErrorInfo(data);
				hacerCalculos = false;
				}
			}
		}

		if(hacerCalculos==true){
			formatoFechas(fechaEntrada,fechaSalida);
			var costoNoche = parseInt($('#costoNoche').val());
			var diasInstancia = parseInt($('#diasInstancia').val());
			var totalInstancia = diasInstancia*costoNoche
			$('#totalInstancia').val(totalInstancia);
			if(descuentoAplicado!=""){
				$('#totalInstancia').val(totalInstancia);
				var descuento = $('#descuento').val();
				var descuentoNumero = descuento.split("%");
				var descuentoNumeroInt = parseInt(descuentoNumero);
				var descuentoPorcentaje = descuentoNumeroInt/100;
				var totalDescuento = parseInt($('#totalInstancia').val())-(parseInt($('#totalInstancia').val())* descuentoPorcentaje)
			}else{
				var totalDescuento = parseInt($('#totalInstancia').val());
			}
			var IVA = $('#IVA').val();
			var IVANumero = IVA.split("%");
			var IVAPorcentaje = parseInt(IVANumero[0])/100;
			var total = totalDescuento + (totalDescuento * IVAPorcentaje)
			$('#total').val(total);
		}
	});

	$('#fechaSalida').on('change',function(){
		var hacerCalculos = true;
		var descuentoAplicado = $('#descuento').val();
		var fechaEntrada = $('#fechaEntrada').val();
		var fechaSalida = $('#fechaSalida').val();
		var huespedes =	$('#numHuespedes').val();
		var huespedesLimit = $('#pNumHuespedes').text();
		var arregloHuespedes = huespedesLimit.split(":");
		
		if(fechaEntrada==""){
			hacerCalculos = false;
		}else{
			if(fechaSalida==""){
				hacerCalculos = false;
			}else{
				if(huespedes==""){
					hacerCalculos = false;
				}
			}
		}

		if(Number(huespedes)>Number(arregloHuespedes[1])){
			data = {mensaje:"Excede el número de huespedes que permitido"}
			mensajeErrorInfo(data);
			hacerCalculos = false;
		}else{
			if(hacerCalculos==true){
				if(Number(huespedes)<=0){
				data = {mensaje:"No hse permiten cero huespedes o negativos"}
				mensajeErrorInfo(data);
				hacerCalculos = false;
				}
			}
		}

		if(hacerCalculos==true){
			formatoFechas(fechaEntrada,fechaSalida);
			var costoNoche = parseInt($('#costoNoche').val());
			var diasInstancia = parseInt($('#diasInstancia').val());
			var totalInstancia = diasInstancia*costoNoche
			$('#totalInstancia').val(totalInstancia);
			if(descuentoAplicado!=""){
				$('#totalInstancia').val(totalInstancia);
				var descuento = $('#descuento').val();
				var descuentoNumero = descuento.split("%");
				var descuentoNumeroInt = parseInt(descuentoNumero);
				var descuentoPorcentaje = descuentoNumeroInt/100;
				var totalDescuento = parseInt($('#totalInstancia').val())-(parseInt($('#totalInstancia').val())* descuentoPorcentaje)
			}else{
				var totalDescuento = parseInt($('#totalInstancia').val());
			}
			var IVA = $('#IVA').val();
			var IVANumero = IVA.split("%");
			var IVAPorcentaje = parseInt(IVANumero[0])/100;
			var total = totalDescuento + (totalDescuento * IVAPorcentaje)
			$('#total').val(total);
		}
	});

	$('#numHuespedes').on('change',function(){
		var hacerCalculos = true;
		var descuentoAplicado = $('#descuento').val();
		var fechaEntrada = $('#fechaEntrada').val();
		var fechaSalida = $('#fechaSalida').val();
		var huespedes =	$('#numHuespedes').val();
		var huespedesLimit = $('#pNumHuespedes').text();
		var arregloHuespedes = huespedesLimit.split(":");
		
		if(fechaEntrada==""){
			hacerCalculos = false;
		}else{
			if(fechaSalida==""){
				hacerCalculos = false;
			}else{
				if(huespedes==""){
					hacerCalculos = false;
				}
			}
		}

		if(Number(huespedes)>Number(arregloHuespedes[1])){
			data = {mensaje:"Excede el número de huespedes que permitido"}
			mensajeErrorInfo(data);
			hacerCalculos = false;
		}else{
			if(hacerCalculos==true){
				if(Number(huespedes)<=0){
				data = {mensaje:"No hse permiten cero huespedes o negativos"}
				mensajeErrorInfo(data);
				hacerCalculos = false;
				}
			}
		}

		if(hacerCalculos==true){
			formatoFechas(fechaEntrada,fechaSalida);
			var costoNoche = parseInt($('#costoNoche').val());
			var diasInstancia = parseInt($('#diasInstancia').val());
			var totalInstancia = diasInstancia*costoNoche
			$('#totalInstancia').val(totalInstancia);
			if(descuentoAplicado!=""){
				$('#totalInstancia').val(totalInstancia);
				var descuento = $('#descuento').val();
				var descuentoNumero = descuento.split("%");
				var descuentoNumeroInt = parseInt(descuentoNumero);
				var descuentoPorcentaje = descuentoNumeroInt/100;
				var totalDescuento = parseInt($('#totalInstancia').val())-(parseInt($('#totalInstancia').val())* descuentoPorcentaje)
			}else{
				var totalDescuento = parseInt($('#totalInstancia').val());
			}
			var IVA = $('#IVA').val();
			var IVANumero = IVA.split("%");
			var IVAPorcentaje = parseInt(IVANumero[0])/100;
			var total = totalDescuento + (totalDescuento * IVAPorcentaje)
			$('#total').val(total);
		}
	});

	$('#reservar').on('click',function(){
		var formularioValidar = true;
		var fechaEntrada = $('#fechaEntrada').val();
		var fechaSalida = $('#fechaSalida').val();
		var huespedes =	$('#numHuespedes').val();
		var telefono = $('#telefono').val();
		data={mensaje:"Llene todo los campos."}

		if(fechaEntrada==""){
			formularioValidar = false;
			mensajeErrorDanger(data);
		}else{
			if(fechaSalida==""){
				formularioValidar = false;
				mensajeErrorDanger(data);
			}else{
				if(huespedes==""){
					formularioValidar = false;
					mensajeErrorDanger(data);
				}else{
					if(telefono==""){
						formularioValidar = false;
						mensajeErrorDanger(data);
					}
				}
			}
		}

		if(formularioValidar==true){
			$.ajax({
		    	url:"/guest/reservaHouseAjax/ajax",
		        type: "POST",
		        data:{
		        	'fechaEntrada': $('#fechaEntrada').val(),
		        	'fechaSalida': $('#fechaSalida').val(),
		        	'numHuespedes': $('#numHuespedes').val(),
		        	'telefono': $('#telefono').val(),
		        	'dias': $('#diasInstancia').val(),
		        	'total': $('#total').val(),
		        	'idHouse': $('#idHouse').val(),
		        },
		        success: function(data) {
		        	if(Number(data.respuesta)==1){
		        		mensajeErrorSuccess(data);
		        	}else if(Number(data.respuesta)==0){
		        		mensajeErrorDanger(data);
		        	}
		        },
		        error: function(){
		          alert("Faltan campos por llenar.")
		        }
		    });
		};

	});
	//----------------------------funciones-------------------
	function formatoFechas(fechaEntrada,fechaSalida){
		var fechaInicio = new Date(fechaEntrada).getTime();
		var fechaFin    = new Date(fechaSalida).getTime();

		var diff = fechaFin - fechaInicio;
		var dias =	diff/(1000*60*60*24);
		if(dias>0){
			return $('#diasInstancia').val(dias);
		}else{
			alert("Error en las fechas");
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