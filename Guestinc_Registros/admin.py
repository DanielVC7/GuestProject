from django.contrib import admin
# Se llaman todas las clases en models.py de la aplicacion AQC_RESGISTROS
# Se llaman todas las clases en models.py de la aplicacion AQC_RESGISTROS
from .models import *
# Se llaman todas las clases en forms.py de la aplicacion AQC_RESGISTROS
from .forms import *

# Register your models here.

class AdminPicture(admin.ModelAdmin):
	admin.site.register(Guest_detalles_usuario)

class AdminGuestEstatus(admin.ModelAdmin):
	#formulario
	form = guest_estatus
	#campos para las vistas en el admin
	list_display = ["id","estatus_nombre"]
	search_fields = ["id"]
admin.site.register(Guest_estatus,AdminGuestEstatus)

class AdminGuestResidencias(admin.ModelAdmin):
	#formulario
	form = guest_residencias
	#campos para las vistas en el admin
	list_display = ["id","residencia_fecha_registro"]
	search_fields = ["id"]
admin.site.register(Guest_residencias,AdminGuestResidencias)

class AdminGuestReserva(admin.ModelAdmin):
	#formulario
	form = guest_reserva
	#campos para las vistas en el admin
	list_display = ["id","reserva_fecha_inicio","reserva_fecha_final"]
	search_fields = ["id"]
admin.site.register(Guest_reserva,AdminGuestReserva)

class AdminGuestPagos(admin.ModelAdmin):
	#formulario
	form = guest_pagos
	#campos para las vistas en el admin
	list_display = ["id","pagos_nombre_propietario"]
	search_fields = ["id"]
admin.site.register(Guest_pagos,AdminGuestPagos)

class AdminGuestServicios(admin.ModelAdmin):
	#formulario
	form = guest_servicios
	#campos para las vistas en el admin
	list_display = ["id","id_recidencia"]
	search_fields = ["id"]
admin.site.register(Guest_servicios,AdminGuestServicios)

class AdminGuestTipoResidencia(admin.ModelAdmin):
	#formulario
	form = guest_tipo_residencia
	#campos para las vistas en el admin
	list_display = ["id","tipo_recidencia_nombre"]
	search_fields = ["id"]
admin.site.register(Guest_tipo_residencia,AdminGuestTipoResidencia)

class AdminGuestEstado(admin.ModelAdmin):
	#formulario
	form = guest_estado
	#campos para las vistas en el admin
	list_display = ["id","estado_nombre","estado_nombre_abreviatura"]
	search_fields = ["id"]
admin.site.register(Guest_estado,AdminGuestEstado)

class AdminGuestMunicipio(admin.ModelAdmin):
	#formulario
	form = guest_municipio
	#campos para las vistas en el admin
	list_display = ["id","municipio_nombre"]
	search_fields = ["id"]
admin.site.register(Guest_municipio,AdminGuestMunicipio)

class AdminGuestTipoTelefono(admin.ModelAdmin):
	#formulario
	form = guest_tipo_telefono
	#campos para las vistas en el admin
	list_display = ["id","tipo_telefono_nombre"]
	search_fields = ["id"]
admin.site.register(Guest_tipo_telefono,AdminGuestTipoTelefono)

class AdminGuestTelefono(admin.ModelAdmin):
	#formulario
	form = guest_telefono
	#campos para las vistas en el admin
	list_display = ["id","telefono_numero"]
	search_fields = ["id"]
admin.site.register(Guest_telefono,AdminGuestTelefono)

class AdminGuestValoracion(admin.ModelAdmin):
	#formulario
	form = guest_valoracion
	#campos para las vistas en el admin
	list_display = ["id","valoracion_numero"]
	search_fields = ["id"]
admin.site.register(Guest_valoracion,AdminGuestValoracion)

class AdminGuestDescuento(admin.ModelAdmin):
	#formulario
	form = guest_descuento
	#campos para las vistas en el admin
	list_display = ["id","descuento_nombre","descuento_dias"]
	search_fields = ["id"]
admin.site.register(Guest_descuento,AdminGuestDescuento)

class AdminGuestAdjunto(admin.ModelAdmin):
	#formulario
	form = guest_adjunto
	#campos para las vistas en el admin
	list_display = ["id","adjunto_archivo"]
	search_fields = ["id"]
admin.site.register(Guest_adjunto,AdminGuestAdjunto)