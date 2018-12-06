from django.shortcuts import render, redirect,get_object_or_404
from django.db.models import Q
from django.http import HttpResponse
import json
import smtplib, getpass
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
#Importando modelos y forms
from Guestinc_Registros.forms import *
from Guestinc_Registros.models import *
from django.contrib.auth.models import User

# Create your views here.

def loginUser(request):
	form = guest_user_login(request.POST or None)
	context = {
		"form_login": form,
	}
	return render(request,"Guest_formularios/login.html",context)

def createUser(request):
	form_pagos = guest_pagos(request.POST or None)
	context = {
		"form_pagos": form_pagos,
	}
	return render(request,"Guest_formularios/register_users.html",context)

def catalogo(request):
	filtroCasasFotos = Guest_adjunto.objects.filter(archivo_adjunto_portada=True)
	for catalogo in filtroCasasFotos:
		print(catalogo.id_residencias)

	context ={
		'casas':filtroCasasFotos,
	}
	return render(request,"Guest_formularios/catalogo.html",context) 

def ayuda(request):
	return render(request,"Guest_formularios/ayuda.html",{})

def buscar(request):
	return render(request,"Guest_formularios/buscar.html",{}) 

def home(request,pk=None):
	if not request.user.is_authenticated:
		return redirect("/")
	else:
		servicios = ""
		instance = get_object_or_404(Guest_residencias, pk=pk)
		form_residencia = guest_residencias(request.POST or None)

		form_servicios = guest_servicios(request.POST or None)

		filtroServicios = Guest_servicios.objects.filter(id_recidencia=instance)
		for servicios in filtroServicios:
			pass
		filtroFotos = Guest_adjunto.objects.filter(id_residencias=instance)
		filtroResidencias = Guest_residencias.objects.filter(id=instance)
		for recidencia in filtroResidencias:
			pass

		context = {
			'formResidencia':form_residencia,
			'formServicios':form_servicios,
			'servicios': filtroServicios,
			'fotos': filtroFotos,
			'idRecidencia': recidencia,
			'idServicios': servicios,
		}
	return render(request,"Guest_formularios/register_home.html",context)

def editHome(request,pk=None):
	if not request.user.is_authenticated:
		return redirect("/")
	else:
		servicios = ""
		instance = get_object_or_404(Guest_residencias, pk=pk)
		form_residencia = guest_residencias(request.POST or None,instance=instance,
			initial = {'municipio': instance.id_municipio,'tipoResidencia':instance.id_tipo_residencia,
			'estado': instance.id_municipio.id_estado })

		instance_servicios = Guest_servicios.objects.get(id_recidencia=instance)

		form_servicios = guest_servicios(request.POST or None,instance=instance_servicios)

		filtroServicios = Guest_servicios.objects.filter(id_recidencia=instance)
		for servicios in filtroServicios:
			pass
		filtroFotos = Guest_adjunto.objects.filter(id_residencias=instance)
		filtroResidencias = Guest_residencias.objects.filter(id=instance)
		for recidencia in filtroResidencias:
			pass

		context = {
			'formResidencia':form_residencia,
			'formServicios':form_servicios,
			'servicios': filtroServicios,
			'fotos': filtroFotos,
			'idRecidencia': recidencia,
			'idServicios': servicios,
		}
	return render(request,"Guest_formularios/edit_home.html",context)

def perfileUser(request,pk=None):
	#Se obtiene en una instancia todo los datos del formulario
	pictureUser = ""
	instance = get_object_or_404(User, pk=pk)
	Guest_residencias.objects.filter(id_usuario_residencia=instance.id,id_estatus__estatus_nombre="Proceso").delete()
	mostrarDatos = User.objects.filter(id=instance.id)
	for usurioDatos in mostrarDatos:
		pass
	filtroReserva = Guest_residencias.objects.filter(Q(id_reserva__id_usuario=usurioDatos.id))
	for reservas in filtroReserva:
		pass
	filtroCasas = Guest_residencias.objects.filter(id_usuario_residencia=usurioDatos.id)
	filtroPagos = Guest_pagos.objects.filter(id_usuario=usurioDatos.id)

	filtroPictureUser = Guest_detalles_usuario.objects.filter(id_usuario=usurioDatos.id)
	for pictureUser in  filtroPictureUser:
		pass
	if pictureUser:
		pictureUserIf = 1
	else:
		pictureUserIf = 0

	context = {
		'datosUsurio': mostrarDatos,
		'reservas': filtroReserva,
		'casas': filtroCasas,
		'tarjetas': filtroPagos,
		'picture': filtroPictureUser,
		'ifPicture': pictureUserIf,
	}
	return render(request,"Guest_formularios/perfile_users.html",context)

def recoveryUser(request):
	return render(request,"Guest_formularios/recovery_password.html",{})

def recoveryUserSendEmail(request):
	return render(request,"Guest_formularios/recovery_password_send.html",{})

def house(request,pk=None):
	instance = get_object_or_404(Guest_residencias, pk=pk)
	i = 0
	filtroCasa = Guest_servicios.objects.filter(id_recidencia=instance)
	filtroFotos = Guest_adjunto.objects.filter(id_residencias=instance)
	for contar in filtroFotos:
		i+=1
	context = {
		'casa': filtroCasa,
		'fotos': filtroFotos,
		'rango': range(i),
	}
	return render(request,"Guest_formularios/house.html",context)

def createCard(request):
	form_pagos = guest_pagos(request.POST or None)
	context = {
		"form_pagos": form_pagos,
	}
	return render(request,"Guest_formularios/create_card.html",context)

#--------------------------------AJAX-----------------------------------------
@csrf_exempt
def createHouseAjax(request):
	if request.method == 'POST' and request.is_ajax():
		idUsuario = request.POST.get('idUsuario')
		filterUser = User.objects.filter(id=int(idUsuario))
		for idUsuario in filterUser:
			pass
		filterEstatus = Guest_estatus.objects.filter(Q(estatus_nombre="Proceso"))
		for idEstatus in filterEstatus:
			pass
		createHouse = Guest_residencias(id_usuario_residencia=idUsuario,residencia_costo_noche=0,
			residencia_num_huepedes=0,id_estatus=idEstatus)
		try:
			response_data = {}
			createHouse.save()
		except Exception as e:
			response_data = {}
			response_data['mensaje'] = str(e)
		else:
			response_data['urlId'] = createHouse.id
			response_data['respuesta'] = 1
	return HttpResponse(json.dumps(response_data, ensure_ascii=False), content_type="application/json")

@csrf_exempt
def pictureHouseAjax(request):
	if request.method == 'POST' and request.is_ajax():
		image = ""
		foto = request.FILES.get('foto')
		idResidencias = request.POST.get('idResidenci')

		filtroResidencias = Guest_residencias.objects.filter(id=idResidencias)
		filtroImage = Guest_adjunto.objects.filter(id_residencias=idResidencias)
		for idResidencias in filtroResidencias:
			pass
		for image in filtroImage:
			pass

		if image:
			addFoto = Guest_adjunto(id_residencias=idResidencias,adjunto_archivo=foto)
			try:
				response_data = {}
				addFoto.save()
			except Exception as e:
				response_data = {}
				response_data['mensaje'] = str(e)
			else:
				response_data['data'] = json.loads(serializers.serialize('json', Guest_adjunto.objects.filter(id_residencias=idResidencias)))
				response_data['respuesta'] = 1
		else:
			addFoto = Guest_adjunto(id_residencias=idResidencias,adjunto_archivo=foto,archivo_adjunto_portada=True)
			try:
				response_data = {}
				addFoto.save()
			except Exception as e:
				response_data = {}
				response_data['mensaje'] = str(e)
			else:
				response_data['data'] = json.loads(serializers.serialize('json', Guest_adjunto.objects.filter(id_residencias=idResidencias)))
				response_data['respuesta'] = 1
	return HttpResponse(json.dumps(response_data, ensure_ascii=False), content_type="application/json")

@csrf_exempt
def editHouseAjax(request):
	if request.method == 'POST' and request.is_ajax():
		#Guest_Servicios
		idRecidencia = request.POST.get('idRecidencia')
		idServicios = request.POST.get('idServicios')
		numDormitorios = request.POST.get('numDormitorios')
		numCamas = request.POST.get('numCamas')
		numBanos = request.POST.get('numBanos')

		tvaCable = request.POST.get('tvaCable')
		alberca = request.POST.get('alberca')
		internet = request.POST.get('internet')
		jacuzzi = request.POST.get('jacuzzi')
		otro = request.POST.get('otro')
		otroDescripcion = request.POST.get('otroDescripcion')
		if str(tvaCable) == "true":
			tvaCable=True
		else:
			tvaCable=False

		if str(alberca) == "true":
			alberca=True
		else:
			alberca=False

		if str(internet) == "true":
			internet=True
		else:
			internet=False

		if str(jacuzzi) == "true":
			jacuzzi=True
		else:
			jacuzzi=False

		if str(otro) == "true":
			otro=True
		else:
			otro=False

		filtroResidencia = Guest_residencias.objects.filter(id=idRecidencia)
		for idRecidencia in filtroResidencia:
			pass
		#Guest_recidencias
		titulo = request.POST.get('titulo')
		descripcion = request.POST.get('descripcion')
		numHuespedes = request.POST.get('numHuespedes')
		tipoResidencia = request.POST.get('tipoResidencia')
		costoNoche = request.POST.get('costoNoche')
		direccion = request.POST.get('direccion')
		numExtCasa = request.POST.get('numExtCasa')
		numIntCasa = request.POST.get('numIntCasa')
		municipio = request.POST.get('municipio')
		colonia = request.POST.get('colonia')
		cp = request.POST.get('CP')
		entreCalles = request.POST.get('entreCalles')
		#filtro Residencia
		filtroTipoResidencia = Guest_tipo_residencia.objects.filter(id=tipoResidencia)
		for tipoResidencia in filtroTipoResidencia:
			pass
		filtroMunicipio = Guest_municipio.objects.filter(id=municipio)
		for municipio in filtroMunicipio:
			pass
		filtroEstatus = Guest_estatus.objects.filter(estatus_nombre="Nuevo")
		for estatus in filtroEstatus:
			pass

		editarResidencia = Guest_residencias(id=idRecidencia,id_estatus=estatus,id_municipio=municipio,
			id_tipo_residencia=tipoResidencia,residencia_nombre=titulo,residencia_calle=direccion,
			residencia_numero_exterior=numExtCasa,residencia_numero_interior=numIntCasa,
			residencia_codigo_postal=cp,residencia_colonia=colonia,residencia_costo_noche=costoNoche,
			residencia_num_huepedes=numHuespedes,residencia_entre_calle=entreCalles,residencia_descripcion=descripcion)
		try:
			response_data = {}
			editarResidencia.save(update_fields=['id_estatus','id_municipio','id_tipo_residencia',
				'residencia_nombre','residencia_calle','residencia_numero_exterior','residencia_numero_interior',
				'residencia_codigo_postal','residencia_colonia','residencia_costo_noche',
				'residencia_num_huepedes','residencia_entre_calle','residencia_descripcion'])

		except Exception as e:
			response_data = {}
			response_data['mensaje'] = str(e)
		else:
			if not idServicios:
				print(tvaCable)
				crearServicio = Guest_servicios(id_recidencia=idRecidencia,servicios_num_cuartos=numDormitorios,servicios_num_camas=numCamas,
					servicios_num_banos=numBanos,servicios_tv_cable=tvaCable,servicios_alberca=alberca,servicios_internet=internet,
					servicios_jacuzzi=jacuzzi,servicios_otros=otro,servicios_otros_servicios=otroDescripcion)
				try:
					response_data = {}
					crearServicio.save()

				except Exception as e:
					response_data = {}
					response_data['mensaje'] = str(e)
				else:
					response_data['respuesta'] = 1
					response_data['mensaje'] = "Se guardo exitosamente."
					response_data['url'] = "/guest/user/"+str(request.user.id)+"/"
			else:
				filtroServicios = Guest_servicios.objects.filter(id=idServicios)
				for idServicios in filtroServicios:
					pass
				editarServicio = Guest_servicios(id=idServicios,id_recidencia=idRecidencia,servicios_num_cuartos=numDormitorios,servicios_num_camas=numCamas,
				servicios_num_banos=numBanos,servicios_tv_cable=tvaCable,servicios_alberca=alberca,servicios_internet=internet,
				servicios_jacuzzi=jacuzzi,servicios_otros=otro,servicios_otros_servicios=otroDescripcion)
				try:
					response_data = {}
					editarServicio.save(update_fields=['servicios_num_cuartos','servicios_num_camas',
						'servicios_num_banos','servicios_tv_cable','servicios_alberca','servicios_internet',
						'servicios_jacuzzi','servicios_otros','servicios_otros_servicios'])

				except Exception as e:
					response_data = {}
					response_data['mensaje'] = str(e)
				else:
					response_data['respuesta'] = 1
					response_data['mensaje'] = "Se guardo exitosamente."
					response_data['url'] = "/guest/user/"+str(request.user.id)+"/"
	return HttpResponse(json.dumps(response_data, ensure_ascii=False), content_type="application/json")

@csrf_exempt
def reservaCasaAjax(request):
	if request.method == 'POST' and request.is_ajax():
		pass
	return HttpResponse('')

@csrf_exempt
def eliminarCasaAjax(request):
	if request.method == 'POST' and request.is_ajax():
		idCasa = request.POST.get('idCasa')
		idUser = request.POST.get('idUser')
		Guest_residencias.objects.filter(id=idCasa).delete()
		response_data = {}
		response_data['data'] = json.loads(serializers.serialize('json', Guest_residencias.objects.filter(id_usuario_residencia=idUser)))

	return HttpResponse(json.dumps(response_data, ensure_ascii=False), content_type="application/json")

@csrf_exempt
def searchHouseAjax(request):
	if request.method == 'POST' and request.is_ajax():
		busqueda = request.POST.get('busqueda')
		if busqueda:
			resultado = Guest_residencias.objects.filter(Q(residencia_colonia__icontains=busqueda)|
				Q(residencia_calle__icontains=busqueda)|Q(id_municipio__municipio_nombre__icontains=busqueda)|
				Q(id_municipio__id_estado__estado_nombre__icontains=busqueda))

			filtroCasasFotos = Guest_adjunto.objects.filter(archivo_adjunto_portada=True)
			response_data = {}
			response_data['data'] = json.loads(serializers.serialize('json', resultado))
			response_data['fotos'] = json.loads(serializers.serialize('json', filtroCasasFotos))
			pass
		else:
			response_data = {}
			response_data['mensaje'] = "Debe introducir un lugar parar buscar"
			pass
	return HttpResponse(json.dumps(response_data, ensure_ascii=False), content_type="application/json")

@csrf_exempt
def usernameAjax(request):
	if request.method == 'POST' and request.is_ajax():
		usernameSystem = ""
		username = request.POST.get('username')
		password = request.POST.get('password')
		filtroUsuario = User.objects.filter(username=username).filter(email=password)
		for usernameSystem in filtroUsuario:
			pass
		if str(username)==str(usernameSystem):
			response_data = {}
			response_data['mensaje'] = "Este usurio ya esta registrado o el correo eléctronico ya esta registrado."
			response_data['respuesta'] = 1
		else:
			response_data = {}
			response_data['respuesta'] = 0
	return HttpResponse(json.dumps(response_data, ensure_ascii=False), content_type="application/json")

@csrf_exempt
def loginUserAjax(request):
	if request.method == 'POST' and request.is_ajax():
		response_data = {}
		username = request.POST.get('username')
		password = request.POST.get("password")
		user = authenticate(username = username, password = password)
		if user is not None:
			login(request, user)
			response_data['respuesta'] = 1
			response_data['mensaje'] = "Al iniciar sesión."
			response_data['url'] = "/"
		else:
			response_data['respuesta'] = 0
			response_data['mensaje'] = "El usurio y/o contraseña son incorrectos."

	return HttpResponse (json.dumps(response_data, ensure_ascii=False), content_type="application/json")

@csrf_exempt
def createUserAjax(request):
	if request.method == 'POST' and request.is_ajax():
		nombre = request.POST.get('nombre')
		print(nombre)
		apellidos = request.POST.get('apellidos')
		print(apellidos)
		username = request.POST.get('username')
		print(username)
		correo = request.POST.get('correo')
		print(correo)
		password = request.POST.get('password')
		print(password)
		password_confirmation = request.POST.get('password_confirmation')
		print(password_confirmation)
		numTarjeta = request.POST.get('numTarjeta')
		month = request.POST.get('month')
		year = request.POST.get('year')
		nombreTarjeta = request.POST.get('nombreTarjeta')
		cvv = request.POST.get('cvv')	

		fechaVencimiento = str(month)+"/"+str(year)
		crearUsuario = User.objects.create_user(username=str(username),password=str(password),first_name=str(nombre),last_name=str(apellidos),email=str(correo))
		try:
			crearUsuario.save()
			nuevoUsuario = authenticate(username=username,password=password)
			if nuevoUsuario is not None:
				login(request,nuevoUsuario)
				response_data = {}
				filtroUsuario = User.objects.filter(id=int(request.user.id))
				for usuario in filtroUsuario:
					pass
				recoveryPassword = passwordRecovery(username=usuario,passwordRecoveryUser=password)
				crearPago = Guest_pagos(id_usuario=usuario,pagos_num_tarjeta=str(numTarjeta),
					pagos_nombre_propietario=str(nombreTarjeta),pagos_fecha_vencimiento=str(fechaVencimiento),pagos_codigo_seguridad=str(cvv))
				try:
					crearPago.save()
					recoveryPassword.save()
				except Exception as e:
					response_data['respuesta'] = 0
					response_data['mensaje'] = str(e)
				else:
					response_data['url'] = "/"	
					response_data['mensaje'] = "Se guardo correctamente sus datos."
					response_data['respuesta'] = 1
		except Exception as e:
			response_data['mensaje'] = str(e)
	return HttpResponse(json.dumps(response_data, ensure_ascii=False), content_type="application/json")

@csrf_exempt
def logoutUserAjax(request):
	if request.method == 'POST' and request.is_ajax():
		logout(request)
	return HttpResponse ('')

@csrf_exempt
def perfileUserAjax(request):
	if request.method == 'POST' and request.is_ajax():
		pictureUser = request.FILES.get('perfileFoto')
		idUser = request.POST.get('idUser')
		idPcture = request.POST.get('idPicture')
		filtroUser = User.objects.filter(id=idUser)
		for idUserPerfile in filtroUser:
			pass
		if idPcture == "":
			uploadPictureUser = Guest_detalles_usuario(id_usuario=idUserPerfile,detalles_usuario_foto=pictureUser)
			try:
				response_data = {}
				uploadPictureUser.save()
			except Exception as e:
				response_data['respuesta'] = 0
				response_data['mensaje'] = str(e)
			else:
				response_data['respuesta'] = 1
				response_data['data'] = json.loads(serializers.serialize('json', Guest_detalles_usuario.objects.filter(id_usuario=idUser)))
		else:
			filtroPicture = Guest_detalles_usuario.objects.filter(id=idPcture)
			for idPcture in filtroPicture:
				pass
			uploadPictureUser = Guest_detalles_usuario(id=idPcture,id_usuario=idUserPerfile,detalles_usuario_foto=pictureUser)
			try:
				response_data = {}
				uploadPictureUser.save()
			except Exception as e:
				response_data['respuesta'] = 0
				response_data['mensaje'] = str(e)
			else:
				response_data['respuesta'] = 1
				response_data['data'] = json.loads(serializers.serialize('json', Guest_detalles_usuario.objects.filter(id_usuario=idUser)))
		return HttpResponse (json.dumps(response_data, ensure_ascii=False), content_type="application/json")

@csrf_exempt
def recoveryUserAjax(request):
	if request.method == 'POST' and request.is_ajax():
		userRecovery = ""
		emailUser = request.POST.get('email')
		userFilter = User.objects.filter(email=emailUser)
		for userRecovery in userFilter:
			pass
		if userRecovery:
			passwordFilter = passwordRecovery.objects.filter(username=int(userRecovery.id))
			for userPassword in passwordFilter:
				print(userPassword.passwordRecoveryUser)
				pass
			userRecovery.check_password(userRecovery.password)
			user = "guestincproject@gmail.com"
			password = "Guestinc007"

			remitente = "Equipo de Guest Inc. <guestincproject@gmail.com>"
			destinatario = "Daniel <"+userRecovery.email+">"
			asunto = "Recuperación de contraseña."
			mensaje = """<!DOCTYPE html>
			<html lang="es">
			<head>
				<meta charset="utf-8">
			</head>
			<body style="background-color: black ">

			<!--Copia desde aquí-->
			<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
				<tr>
					<td style="background-color: #ecf0f1; text-align: left; padding: 0">
						<a href="http://danielvc7.pythonanywhere.com/">
							<img width="5%" style="display:block; margin: 1.5% 3%" src="http://danielvc7.pythonanywhere.com/static/images/favicon.png">
						</a>
					</td>
				</tr>			
				<tr>
					<td style="background-color: #ecf0f1">
						<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
							<h2 style="color: #C52AF7; margin: 0 0 7px">Hola querido usuario.</h2>
							<p style="margin: 2px; font-size: 15px">
								Se a recibido la solicitud para recuperar su usuario y contraseña.<br>
								El nombre de usuario es: """+userRecovery.username+"""<br>
								La contraseña es: """+userPassword.passwordRecoveryUser+"""<br>
								Si no a solicitado la recuperación de contraseña, por favor verifique lo siguiente:</p>
							<ul style="font-size: 15px;  margin: 10px 0">
								<li>Cambie su contraseña.</li>
								<li>Cambie su correo eléctronico.</li>
								<li>Si tiene mas problemas con su cuenta contactanos a nuestra sección por medio de la sección ayuda.</li>
							</ul>
							<div style="width: 100%; text-align: center">
								<a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="http://danielvc7.pythonanywhere.com/">Ir a la página</a>	
							</div>
							<p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Guest Inc. el mejor anfitrion, la mejor experiencia.</p>
						</div>
					</td>
				</tr>
			</table>
			<!--hasta aquí-->
			</body>
			</html>"""

			#Host y puerto SMTP de Gmail
			gmail = smtplib.SMTP('smtp.gmail.com', 587)

			#protocolo de cifrado de datos utilizado por gmail
			gmail.starttls()

			#Credenciales
			gmail.login(user, password)

			#muestra la depuración de la operacion de envío 1=true
			gmail.set_debuglevel(1)

			header = MIMEMultipart()
			header['Subject'] = asunto
			header['From'] = remitente
			header['To'] = destinatario

			mensaje = MIMEText(mensaje, 'html') #Content-type:text/html
			header.attach(mensaje)

			#Enviar email
			gmail.sendmail(remitente, destinatario, header.as_string())

			#Cerrar la conexión SMTP
			gmail.quit()
			response_data = {}
			response_data['respuesta'] = 1

		else:
			response_data = {}
			response_data['mensaje'] = "No se encuentra este correo eléctronico."
			response_data['respuesta'] = 0
	return HttpResponse (json.dumps(response_data, ensure_ascii=False), content_type="application/json")