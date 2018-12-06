#Fomularios
from django import forms
#Modelos
from .models import *
#Modelo Usuario
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

#Aqui van los formularios

class guest_usuarios(forms.Form):
	class Meta:
		#Llamado del modelo
		model = User
		#Se llama a los campos del Usuario
		fields=["username","password","email"]
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_estatus(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_estatus
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_residencias(forms.ModelForm):
	tipoResidencia = forms.ModelChoiceField(queryset=Guest_tipo_residencia.objects.filter(),empty_label='Selecciona tipo de casa*')
	estado = forms.ModelChoiceField(queryset=Guest_estado.objects.all(),empty_label='Selecciona estado*')
	municipio = forms.ModelChoiceField(queryset=Guest_municipio.objects.filter(),empty_label='Selecciona municipio*')
	class Meta:
		#Llamado del modelo
		model = Guest_residencias
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
			'residencia_nombre': forms.TextInput(attrs={"class":"form-control","name":"title","id":"tituloCasa"}),
			'residencia_descripcion': forms.Textarea(attrs={"row":"5","class":"form-control","name":"description","id":"descripcionCasa"}),
			'residencia_num_huepedes': forms.NumberInput(attrs={"class":"form-control input-sm","placeholder":"Número de huespedes*","id":"numHuespedesCasa"}),
			'residencia_costo_noche': forms.TextInput(attrs={"class":"form-control input-sm","placeholder":"Precio por noche*","id":"costoNoche"}),
			'residencia_calle': forms.TextInput(attrs={"class":"form-control input-sm","placeholder":"Dirección de la casa*","id":"direccionCasa"}),
			'residencia_numero_exterior': forms.TextInput(attrs={"class":"form-control input-sm","placeholder":"Número exterior*","id":"numExteriorCasa"}),
			'residencia_numero_interior': forms.TextInput(attrs={"class":"form-control input-sm","placeholder":"Número interior","id":"numInteriorCasa"}),
			'residencia_colonia': forms.TextInput(attrs={"class":"form-control input-sm","placeholder":"Colonia*","id":"coloniaCasa"}),
			'residencia_codigo_postal': forms.TextInput(attrs={"class":"form-control input-sm","placeholder":"Código Postal*","id":"CPCasa"}),
			'residencia_entre_calle': forms.TextInput(attrs={"class":"form-control input-sm","placeholder":"Entre calles","id":"entreCallesCasa"}),

		}

class guest_reserva(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_reserva
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_pagos(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_pagos
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
			'pagos_num_tarjeta': forms.TextInput(attrs={"class":"form-control","placeholder":"Número de tarjeta","id":"numTarjeta"}),
			'pagos_nombre_propietario': forms.TextInput(attrs={"class":"form-control","placeholder":"Nombre que aparece en la tarjeta","id":"nombrePropetiario"}),
			'pagos_codigo_seguridad': forms.PasswordInput(attrs={"class":"form-control","placeholder":"CVV","id":"cvv"}),
		}

class guest_servicios(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_servicios
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
			'servicios_tv_cable': forms.CheckboxInput(attrs={"name":"Servicios","id":"serviciosTV"}),
			'servicios_alberca': forms.CheckboxInput(attrs={"name":"Servicios","id":"serviciosAlberca"}),
			'servicios_internet': forms.CheckboxInput(attrs={"name":"Servicios","id":"serviciosInternet"}),
			'servicios_jacuzzi': forms.CheckboxInput(attrs={"name":"Servicios","id":"serviciosJacuzzi"}),
			'servicios_otros': forms.CheckboxInput(attrs={"name":"Servicios","id":"serviciosOtros"}),
			'servicios_otros_servicios': forms.Textarea(attrs={"row":"5","class":"form-control","name":"Servicios","id":"serviciosOtrosDescrpcion"}),
			'servicios_num_cuartos': forms.NumberInput(attrs={"class":"form-control input-sm","placeholder":"Número de dormitorios*","id":"serviciosNumCamas"}),
			'servicios_num_cuartos': forms.NumberInput(attrs={"class":"form-control input-sm","placeholder":"Numero de dormitorios*","id":"serviciosNumDormitorios"}),
			'servicios_num_camas': forms.NumberInput(attrs={"class":"form-control input-sm","placeholder":"Número de camas*","id":"serviciosNumCamas"}),
			'servicios_num_banos': forms.NumberInput(attrs={"class":"form-control input-sm","placeholder":"Número de baños*","id":"serviciosNumBanos"}),
		}

class guest_tipo_residencia(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_tipo_residencia
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_estado(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_estado
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_municipio(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_municipio
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_tipo_telefono(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_tipo_telefono
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_telefono(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_telefono
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_valoracion(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_valoracion
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_descuento(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_descuento
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}

class guest_adjunto(forms.ModelForm):
	class Meta:
		#Llamado del modelo
		model = Guest_adjunto
		#Se llaman a los campos de models.py
		fields = '__all__'
		#Añadiendo atributos a los campos del modelo,ademas del tipo de dato que se puede ingresa en el html y el tipo de input.
		widgets = {
		}
		
class guest_user_login(forms.Form):
	username = forms.CharField(widget=forms.TextInput(attrs={"name":"username","id":"username","class":"form-control input-sm","placeholder":"Nombre de usuario"}))
	password = forms.CharField(widget=forms.PasswordInput(attrs={"name":"password","id":"password","class":"form-control input-sm","placeholder":"Contraseña"}))
	
	def clean(self, *args, **keyargs):
		username = self.cleaned_data.get("username")
		password = self.cleaned_data.get("password")

		#Errore al iniaicar sesión
		if username and password:
			user = authenticate(username = username, password = password)
			if not user:
				raise forms.ValidationError("Usuario y/o Contraseña no validos.")
			if not user.check_password(password):
				raise forms.ValidationError("Contraseña erronea")
			if not user.is_active:
				raise forms.ValidationError("Este usuario no esta activado")

		return super(guest_user_login, self).clean(*args, **keyargs)
