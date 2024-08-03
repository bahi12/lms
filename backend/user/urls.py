from django.urls import path, include
from .views import UserDetail


urlpatterns = [

    path('user/', UserDetail.as_view(), name='user'),
    
    # Djoser endpoints
     
    # /users/
    # /users/me/
    # /users/confirm/
    # /users/resend_activation/
    # /users/set_password/
    # /users/reset_password/
    # /users/reset_password_confirm/
    # /users/set_username/
    # /users/reset_username/
    # /users/reset_username_confirm/
    # /token/login/ (Token Based Authentication)
    # /token/logout/ (Token Based Authentication)
    # /jwt/create/ (JSON Web Token Authentication)
    # /jwt/refresh/ (JSON Web Token Authentication)
    # /jwt/verify/ (JSON Web Token Authentication) 

    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.authtoken')),

]