from django.db import models
#Modelo del usuario
from django.contrib.auth.models import User

# Create your models here.
class passwordRecovery(models.Model):
	username = models.OneToOneField(User, on_delete=models.CASCADE)
	passwordRecoveryUser = models.CharField(max_length=255)

	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

class Guest_estatus(models.Model):
	#Variables
	estatus_nombre = models.CharField(max_length=15)

	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

class Guest_residencias(models.Model):
	#Llaves Foraneas
	id_estatus = models.ForeignKey('Guest_estatus',on_delete=models.SET_NULL, null=True)
	id_municipio = models.ForeignKey('Guest_municipio',on_delete=models.SET_NULL, null=True)
	id_usuario_residencia = models.ForeignKey(User,on_delete=models.CASCADE)
	id_tipo_residencia = models.ForeignKey('Guest_tipo_residencia',on_delete=models.SET_NULL, null=True)
	id_reserva = models.OneToOneField('Guest_reserva',on_delete=models.SET_NULL, null=True)
	id_descuento = models.ForeignKey('Guest_descuento',on_delete=models.SET_NULL, null=True,blank=True)
	#Variables
	residencia_nombre = models.CharField(max_length=200)	
	residencia_calle = models.CharField(max_length=150)
	residencia_numero_exterior = models.CharField(max_length=15)
	residencia_numero_interior = models.CharField(max_length=15,null=True,blank=True)
	residencia_codigo_postal = models.CharField(max_length=5)
	residencia_colonia = models.CharField(max_length=150)
	residencia_costo_noche = models.IntegerField()
	residencia_num_huepedes = models.IntegerField()
	residencia_entre_calle = models.CharField(max_length=150,null=True,blank=True)
	residencia_fecha_registro =  models.DateTimeField(auto_now_add=False,auto_now=True)
	residencia_descripcion = models.CharField(max_length=4000,null=True,blank=True)

	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

class Guest_reserva(models.Model):
	#Llave Foranea
	id_usuario = models.ForeignKey(User,on_delete=models.CASCADE)
	#Variables
	reserva_fecha_inicio = models.DateField(auto_now_add=False,auto_now=False)
	reserva_fecha_final = models.DateField(auto_now_add=False,auto_now=False)
	reserva_dias = models.IntegerField()
	reserva_num_huespedes = models.IntegerField()
	reserva_total_dias = models.IntegerField()
	reserva_total_pago = models.IntegerField()
	reserva_dias = models.IntegerField()
	reserva_telefono = models.CharField(max_length=12,null=True)
	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

class Guest_pagos(models.Model):
	#Llave Foranea
	id_usuario = models.ForeignKey(User,on_delete=models.CASCADE)
	#Variables
	pagos_num_tarjeta = models.CharField(max_length=16)
	pagos_nombre_propietario = models.CharField(max_length=300)
	pagos_fecha_vencimiento = models.CharField(max_length=5)
	pagos_codigo_seguridad = models.CharField(max_length=3)
	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

class Guest_servicios(models.Model):
	#Llaves Foraneas
	id_recidencia = models.OneToOneField('Guest_residencias',on_delete=models.SET_NULL, null=True)
	#Variables
	servicios_num_cuartos = models.CharField(max_length=2)
	servicios_num_camas = models.CharField(max_length=2)
	servicios_num_banos = models.CharField(max_length=2)
	servicios_tv_cable = models.BooleanField(default=False)
	servicios_alberca = models.BooleanField(default=False)
	servicios_internet = models.BooleanField(default=False)
	servicios_jacuzzi = models.BooleanField(default=False)
	servicios_otros = models.BooleanField(default=False)
	servicios_otros_servicios = models.CharField(max_length=4000,null=True,blank=True)
	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

class Guest_tipo_residencia(models.Model):
	#Variables
	tipo_recidencia_nombre = models.CharField(max_length=30)
	#Metodos
	def __unicode__(self):
		return self.id

	def __str__(self):
		return self.tipo_recidencia_nombre

class Guest_estado(models.Model):
	#variables
	estado_nombre = models.CharField(max_length=50)
	estado_nombre_abreviatura = models.CharField(max_length=10)
	#Metodos
	def __unicode__(self):
		return self.id

	def __str__(self):
		return self.estado_nombre

class Guest_municipio(models.Model):
	#Llave foranea
	id_estado = models.ForeignKey('Guest_estado',on_delete=models.SET_NULL, null=True)
	#Variables
	municipio_nombre = models.CharField(max_length=50)
	#Metodos
	def __unicode__(self):
		return self.id

	def __str__(self):
		return self.municipio_nombre

class Guest_tipo_telefono(models.Model):
	#Varibles
	tipo_telefono_nombre = models.CharField(max_length=25)
	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

class Guest_telefono(models.Model):
	#Llave foranea
	id_tipo_telefono = models.ForeignKey('Guest_tipo_telefono',on_delete=models.SET_NULL, null=True)
	id_recidencia = models.ForeignKey('Guest_residencias',on_delete=models.CASCADE)
	#Variables
	telefono_numero = models.CharField(max_length=13)
	telefono_observaciones = models.CharField(max_length=200)
	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

class Guest_valoracion(models.Model):
	#Llaves Foraneas
	id_residencia = models.ForeignKey('Guest_residencias',on_delete=models.SET_NULL, null=True)
	#Variables
	valoracion_numero = models.IntegerField()
	valoracion_comentario = models.CharField(max_length=4000,null=True,blank=True)
	id_usuario = models.CharField(max_length=5,null=True,blank=True)
	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

	
class Guest_descuento(models.Model):
	#Variables
	descuento_porcentaje = models.DecimalField(max_digits=14,decimal_places=2)
	descuento_nombre = models.CharField(max_length=15)
	descuento_codigo = models.CharField(max_length=15)
	descuento_fecha_inicio = models.DateField(auto_now_add=False,auto_now=False,null=True,blank=True)
	descuento_fecha_final = models.DateField(auto_now_add=False,auto_now=False,null=True,blank=True)
	descuento_dias = models.IntegerField(null=True,blank=True)

	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

def get_upload_to_house(instance, filename):
    return 'id_casas/adjunto/%d/%s' % (instance.id_residencias, filename)

class Guest_adjunto(models.Model):
	#Llaves foraneas
	id_residencias = models.ForeignKey('Guest_residencias',on_delete=models.SET_NULL, null=True)
	#Variables
	adjunto_archivo = models.FileField(upload_to=get_upload_to_house,null=True)
	archivo_adjunto_portada = models.BooleanField(default=False)

	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

def get_upload_to_user(instance, filename):
    return 'adjunto/perfil_fotos/%s/%s' % (instance.id_usuario, filename)

class Guest_detalles_usuario(models.Model):
	#Llaves foraneas
	id_usuario = models.OneToOneField(User,on_delete=models.SET_NULL,null=True)
	#Variables
	detalles_usuario_foto = models.FileField(upload_to=get_upload_to_user,null=True)
	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id

class Guest_valoracion_usuario(models.Model):
	#Llaves foraneas
	id_usuario = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
	#Variables
	valoracion_usuario = models.IntegerField()
	valoracion_usuario_comentarios = models.CharField(max_length=4000)
	#Metodos
	def __unicode__(self):
		return self.id

	def __int__(self):
		return self.id