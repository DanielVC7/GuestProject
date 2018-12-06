from django.shortcuts import render, redirect,get_object_or_404
from django.db.models import Q
#Importando modelos y forms
from Guestinc_Registros.forms import *
from Guestinc_Registros.models import *

#Create your viewa here.

def inicio(request):
	return render(request, "index.html", {})