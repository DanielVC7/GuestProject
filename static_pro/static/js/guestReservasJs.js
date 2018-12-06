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
			alert("Exede el número de huespedes que permitido.");
			hacerCalculos = false;
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
			debugger;
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
			alert("Exede el número de huespedes que permitido.");
			hacerCalculos = false;
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
			debugger;
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
			alert("Exede el número de huespedes que permitido.");
			hacerCalculos = false;
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
			debugger;
			$('#total').val(total);
		}
	});

	$('#reservar').on('click',function(){
		var formularioValidar = true;
		var fechaEntrada = $('#fechaEntrada').val();
		var fechaSalida = $('#fechaSalida').val();
		var huespedes =	$('#numHuespedes').val();
		var telefono = $('#telefono').val();
		data={mensaje:"Llene todo lso campos."}

		if(fechaEntrada==""){
			formularioValidar = false;
			alert(data.mensaje)
		}else{
			if(fechaSalida==""){
				formularioValidar = false;
				alert(data.mensaje)
			}else{
				if(huespedes==""){
					formularioValidar = false;
					alert(data.mensaje)
				}else{
					if(telefono==""){
						formularioValidar = false;
						alert(data.mensaje)
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
		        	'fecha': $('#fechaEntrada').val(),
		        },
		        success: function(data) {
		          
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
});