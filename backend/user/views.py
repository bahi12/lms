from django.shortcuts import render
# use django default aujthentication views
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth.models import User
import rest_framework
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, LoginSerializer
class Login(LoginView):
    permission_class = (AllowAny,)
    serialize_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer..validated_data
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access' : str(refresh.access_token,)
        })

class Logout(LogoutView):
    template_name = 'logout.html'

class Register(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_class = (AllowAny,)
    serializer_class = UserSerializer



