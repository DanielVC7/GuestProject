from django.urls import path
from .views import *

app_name = 'Guestinc_Registros'

urlpatterns = [
	path('login/',loginUser, name="login"),
	path('user/<int:pk>/',perfileUser, name="user"),
	path('createUser/',createUser, name="createUser"),
	path('catalogo/',catalogo, name="catalogo"),
	path('recidencia/<int:pk>/',home, name="recidencia"),
	path('recidencia/edit/<int:pk>/',editHome),
	path('ayuda/',ayuda, name="ayuda"),
	path('buscar/',buscar, name="buscar"),
	path('recoveryUser/',recoveryUser,name="recoveryPassword"),
	path('recoveryUser/send',recoveryUserSendEmail),
	path('house/<int:pk>/',house),
	path('cardUser/create',createCard),
	path('reserva/<int:pk>/',reserva),

	#AJAX
	path('username/ajax',usernameAjax),
	path('login/ajax',loginUserAjax),
	path('logout/ajax',logoutUserAjax),
	path('createUser/ajax',createUserAjax),
	path('recoveryUser/ajax',recoveryUserAjax),
	path('perfileUser/ajax',perfileUserAjax),
	path('eliminarCasa/ajax',eliminarCasaAjax),
	path('createHouse/ajax',createHouseAjax),
	path('editHouse/ajax',editHouseAjax),
	path('pictureHouseAjax/ajax',pictureHouseAjax),
	path('searchHouseAjax/ajax',searchHouseAjax),
	path('reservaHouseAjax/ajax',reservaCasaAjax),
	path('pagoAjax/ajax',pagoAjax),
	path('cancelarPagoAjax/ajax',cancelarPagoAjax),
]