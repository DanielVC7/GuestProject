$( document ).ready(function(){
	$('#pictureUser').on('change','#perfileFoto',function(){
		var data = new FormData();
    var perfielFoto = $('#perfileFoto')[0].files[0];
    var id = $(this).attr("name");
    var idUser = $('#idUserId').attr("value");
    data.append('perfileFoto',perfielFoto);
    data.append('idPicture',id);
    data.append('idUser',idUser);

    $.ajax({
        type:"POST",
        url: "/guest/perfileUser/ajax",
        processData : false,
        contentType : false,
        data: data,
        success: function (data) {
          fotoPerfil(data);
        },
    });
	});

  $(document).on('click',".eliminarCasa",function(){
    var idCasa = $(this).attr("name");
    $.ajax({
        type:"POST",
        url: "/guest/eliminarCasa/ajax",
        data: {
          'idCasa': idCasa,
          'idUser': $('#idUserId').attr("value"),
        },
        success: function (data) {
          casasPerfil(data);
        },
    });
  });
  //--------------Funciones---------------------
  function fotoPerfil(data){
    for(i in data.data){
      $('#pictureUser').empty();
      foto = '';
      foto += '<img src="/media/'+data.data[i].fields.detalles_usuario_foto+'" alt=""/>';
      foto += '<div class="file btn btn-lg btn-primary">';
      foto += 'Change Photo';
      foto += '<input type="file" name="'+data.data[i].pk+'" id="perfileFoto"/>';
      foto += '</div>';
      $('#pictureUser').append(foto);
    };
  };

  function casasPerfil(data){
    $('#divCasas').empty();
    for(i in data.data){
      casas = '';
      casas += '<div class="row">';
      casas += '  <div class="col-md-6">';
      casas += '    <label>Casa '+data.data[i].pk+'</label>';
      casas += '  </div>';
      casas += '  <div class="col-md-6">';
      casas += '    <a href="/guest/recidencia/edit/'+data.data[i].pk+'/" style="color: #C43F41">Casa '+ data.data[i].fields.residencia_nombre+'</a>';
      casas += '  </div>';
      casas += '</div>';
      casas += '<div class="row">';
      casas += '  <div class="col-md-6">';
      casas += '    <label></label>';
      casas += '  </div>';
      casas += '<div class="col-md-6" id="divEliminarCasas">';
      casas += '<p><button name="'+data.data[i].pk+'" type="button" class="btn btn-sm eliminarCasa" style="background: #E16668; color: #FFFFFF; width: 135px;">Eliminar</button></p>';
      casas += '</div>';
      casas += '</div>';
      $('#divCasas').append(casas);
    };
  };
});