$( document ).ready(function(){
	$('#buscarCasa').on('click',function(){
		var search = $('#search').val();

		$.ajax({
			url:"/guest/searchHouseAjax/ajax",
			type: "POST",
	        data:{
			   	'busqueda':search,
			},
			success: function(data){
				buquedaMostrar(data);
			},
		});
	});

	$("#buscarCasa").on('keypress', function (e) {
       if(e.which === 13){
       		var search = $('#search').val();

			$.ajax({
				url:"/guest/searchHouseAjax/ajax",
				type: "POST",
		        data:{
				   	'busqueda':search,
				},
				success: function(data){
					buquedaMostrar(data);
				},
			});
       };
    });
    
	function buquedaMostrar(data){
		$('#divBusqueda').empty();
		for(i in data.data){
			busqueda = '';
			busqueda += '<div class="form-group">';
			for(x in data.fotos){
				if(data.data[i].pk == data.fotos[x].fields.id_residencias){
					busqueda += '	<img src="/media/'+data.fotos[x].fields.adjunto_archivo+'" class="img-fluid" alt="Placeholder image">';
				}
			}
			busqueda += '</div>';
			busqueda += '<a style="color: #FFFFFF" href="/guest/house/'+data.data[i].pk+'/">'+data.data[i].fields.residencia_nombre+'</a>';
			$('#divBusqueda').append(busqueda);
		};
	};
});