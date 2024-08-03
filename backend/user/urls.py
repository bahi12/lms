from django.urls import path
from .views import Register, Login, UserDetail, Logout
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', Register.as_view(), name='register'),
    path('login/', Login.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/', UserDetail.as_view(), name='user'),
    path('logout/', Logout.as_view(), name='logout'),
    ]