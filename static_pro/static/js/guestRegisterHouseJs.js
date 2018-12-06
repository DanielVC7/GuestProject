$( document ).ready(function(){
	$('#id_tipoResidencia').attr('class', 'form-control input-sm');
	$('#id_estado').attr('class', 'form-control input-sm');
	$('#id_municipio').attr('class', 'form-control input-sm');
	$('#serviciosOtrosDescrpcion').hide();

	var numHuespedes = $('#numHuespedesCasa').val();
	var cosotroNoche = $('#costoNoche').val();

	if( $('#serviciosOtros').prop('checked') ) {
    	$('#serviciosOtrosDescrpcion').show();
	}

	$('#serviciosOtros').on('change',function(){
		if(this.checked) {
			var test = $('#serviciosOtros').prop('checked');
			$('#serviciosOtrosDescrpcion').show();
		}else{
			$('#serviciosOtrosDescrpcion').hide();
		}
	});

	if((numHuespedes==0)&&(cosotroNoche==0)){
		$('#numHuespedesCasa').val("");
		$('#costoNoche').val("");
	}

	$('#resgitrarCasa').on('click', function(){
		var formularioValidar = true;
		var titulo = $('#tituloCasa').val();
		var descripcion = $('#descripcionCasa').val();
		var numHuespedes = $('#numHuespedesCasa').val();
		var tipoResidencia = $('#id_tipoResidencia').val();
		var numDormitorios = $('#serviciosNumDormitorios').val();
		var numCamas = $('#serviciosNumCamas').val();
		var numBanos = $('#serviciosNumBanos').val();
		var costoNoche = $('#costoNoche').val();
		var direccion = $('#direccionCasa').val();
		var numExtCasa = $('#numExteriorCasa').val();
		var estado = $('#id_estado').val();
		var municipio = $('#id_municipio').val();
		var colonia = $('#coloniaCasa').val();
		var CP = $('#CPCasa').val();

		var data = {mensaje: "Debes llenar todos los campos con *."};
		if(titulo==""){
			formularioValidar = true;
			mensajeErrorDanger(data);
		}else{
			if(descripcion==""){
				formularioValidar = true;
				mensajeErrorDanger(data);
			}else{
				if(numHuespedes==""){
					formularioValidar = true;
					mensajeErrorDanger(data);
				}else{
					if(tipoResidencia==""){
						formularioValidar = true;
						mensajeErrorDanger(data);
					}else{
						if(numDormitorios==""){
							formularioValidar = true;
							mensajeErrorDanger(data);
						}else{
							if(numCamas==""){
								formularioValidar = true;
								mensajeErrorDanger(data);
							}else{
								if(costoNoche==""){
									formularioValidar = true;
									mensajeErrorDanger(data);
								}else{
									if(direccion==""){
										formularioValidar = true;
										mensajeErrorDanger(data);
									}else{
										if(numExtCasa==""){
											formularioValidar = true;
											mensajeErrorDanger(data);
										}else{
											if(estado==""){
												formularioValidar = true;
												mensajeErrorDanger(data);
											}else{
												if(municipio==""){
													formularioValidar = true;
													mensajeErrorDanger(data);
												}else{
													if(colonia==""){
														formularioValidar = true;
														mensajeErrorDanger(data);
													}else{
														if(CP==""){
															formularioValidar = true;
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
				}
			}
		}

		if(formularioValidar==true){
			$.ajax({
	          url:"/guest/editHouse/ajax",
	          type: "POST",
	          data:{
				'idServicios': $('#idServicios').val(),
				'idRecidencia': $('#idRecidencia').val(),
	            'titulo': titulo,
				'descripcion': descripcion,
				'numHuespedes': numHuespedes,
				'tipoResidencia': tipoResidencia,
				'numDormitorios': numDormitorios,
				'numCamas': numCamas,
				'numBanos': numBanos,
				'costoNoche': costoNoche,
				'direccion': direccion,
				'numExtCasa': numExtCasa,
				'numIntCasa': $('#numInteriorCasa').val(),
				'municipio': municipio,
				'colonia': colonia,
				'CP': CP,
				'entreCalles': $('#entreCallesCasa').val(),
				'tvaCable': $('#serviciosTV').prop('checked'),
				'alberca': $('#serviciosAlberca').prop('checked'),
				'internet': $('#serviciosInternet').prop('checked'),
				'jacuzzi': $('#serviciosJacuzzi').prop('checked'),
				'otro': $('#serviciosOtros').prop('checked'),
				'otroDescripcion': $('#serviciosOtrosDescrpcion').val(),
	          },
	          success: function(data) {
	            if(Number(data.respuesta)==1){
	            	mensajeErrorSuccess(data);
	            }
	          },
	        });
		}
	});

	$('#guardarCasa').on('click', function(){
		var formularioValidar = true;
		var titulo = $('#tituloCasa').val();
		var descripcion = $('#descripcionCasa').val();
		var numHuespedes = $('#numHuespedesCasa').val();
		var tipoResidencia = $('#id_tipoResidencia').val();
		var numDormitorios = $('#serviciosNumDormitorios').val();
		var numCamas = $('#serviciosNumCamas').val();
		var numBanos = $('#serviciosNumBanos').val();
		var costoNoche = $('#costoNoche').val();
		var direccion = $('#direccionCasa').val();
		var numExtCasa = $('#numExteriorCasa').val();
		var estado = $('#id_estado').val();
		var municipio = $('#id_municipio').val();
		var colonia = $('#coloniaCasa').val();
		var CP = $('#CPCasa').val();

		var data = {mensaje: "Debes llenar todos los campos con *."};
		if(titulo==""){
			formularioValidar = true;
			mensajeErrorDanger(data);
		}else{
			if(descripcion==""){
				formularioValidar = true;
				mensajeErrorDanger(data);
			}else{
				if(numHuespedes==""){
					formularioValidar = true;
					mensajeErrorDanger(data);
				}else{
					if(tipoResidencia==""){
						formularioValidar = true;
						mensajeErrorDanger(data);
					}else{
						if(numDormitorios==""){
							formularioValidar = true;
							mensajeErrorDanger(data);
						}else{
							if(numCamas==""){
								formularioValidar = true;
								mensajeErrorDanger(data);
							}else{
								if(costoNoche==""){
									formularioValidar = true;
									mensajeErrorDanger(data);
								}else{
									if(direccion==""){
										formularioValidar = true;
										mensajeErrorDanger(data);
									}else{
										if(numExtCasa==""){
											formularioValidar = true;
											mensajeErrorDanger(data);
										}else{
											if(estado==""){
												formularioValidar = true;
												mensajeErrorDanger(data);
											}else{
												if(municipio==""){
													formularioValidar = true;
													mensajeErrorDanger(data);
												}else{
													if(colonia==""){
														formularioValidar = true;
														mensajeErrorDanger(data);
													}else{
														if(CP==""){
															formularioValidar = true;
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
				}
			}
		}

		if(formularioValidar==true){
			$.ajax({
	          url:"/guest/editHouse/ajax",
	          type: "POST",
	          data:{
				'idServicios': $('#idServicios').val(),
				'idRecidencia': $('#idRecidencia').val(),
	            'titulo': titulo,
				'descripcion': descripcion,
				'numHuespedes': numHuespedes,
				'tipoResidencia': tipoResidencia,
				'numDormitorios': numDormitorios,
				'numCamas': numCamas,
				'numBanos': numBanos,
				'costoNoche': costoNoche,
				'direccion': direccion,
				'numExtCasa': numExtCasa,
				'numIntCasa': $('#numInteriorCasa').val(),
				'municipio': municipio,
				'colonia': colonia,
				'CP': CP,
				'entreCalles': $('#entreCallesCasa').val(),
				'tvaCable': $('#serviciosTV').prop('checked'),
				'alberca': $('#serviciosAlberca').prop('checked'),
				'internet': $('#serviciosInternet').prop('checked'),
				'jacuzzi': $('#serviciosJacuzzi').prop('checked'),
				'otro': $('#serviciosOtros').prop('checked'),
				'otroDescripcion': $('#serviciosOtrosDescrpcion').val(),
	          },
	          success: function(data) {
	            if(Number(data.respuesta)==1){
	            	mensajeErrorSuccess(data);
	            }
	          },
	        });
		}
	});

	$('#cancelarCasa').on('click', function(){
		var idUser = $('#idUsario').val();
		location.href="/guest/user/"+idUser+"/";
	});

	$('#divFotoCasas').on('change','#subirFotoCasa',function(){
		var data = new FormData();
	    var foto = $('#subirFotoCasa')[0].files[0];
	    var id = $('#idRecidencia').val();
	    data.append('foto',foto);
	    data.append('idResidenci',id);
	    
	    $.ajax({
	        type:"POST",
	        url: "/guest/pictureHouseAjax/ajax",
	        processData : false,
	        contentType : false,
	        data: data,
	        success: function (data) {
	        	fotoCasa(data);
	        },
    	});
	});

	//-------------------------------Funciones----------------------------------
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

	function fotoCasa(data){
		$('#divInputFotos').empty();
		inputFoto = '';
		inputFoto += '	<input id="subirFotoCasa" type="file" onchange="readURL(this);" />';
		$('#divInputFotos').append(inputFoto);

		$('#divFotos').empty();
		for(i in data.data){
			fotos = '';
			fotos += '	<img id="'+data.data[i].pk+'" src="/media/'+data.data[i].fields.adjunto_archivo+'" height="180px" width="180px" />';
			fotos += '</div>';
			$('#divFotos').append(fotos);
		};
	};
});