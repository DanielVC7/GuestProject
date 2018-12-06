$( document ).ready(function() {
	$("#registrarCasaNew").on('click',function(){
		$.ajax({
	    	url:"/guest/createHouse/ajax",
	        type: "POST",
	        data:{
	        	'idUsuario': $(this).attr("name"),
	        },
	        success: function(data) {
	        	if(Number(data.respuesta)==1){
	        		location.href="/guest/recidencia/"+data.urlId+"/";
	        	}else{
	        		alert(data.mensaje);
	        	}
        },
	    });
	});

	$(".btnCerrarSesion").on('click',function(){
    	confirmar=confirm("¿Seguro que quieres salir?");
    	if(confirmar){
		    $.ajax({
		    	url:"/guest/logout/ajax",
		        type: "POST",
		        success: function(data) {
		          location.href="/";
		        },
		        error: function(){
		          alert("Faltan campos por llenar.")
		        }
		    });
		}
    });
});