from django.shortcuts import render
# use django default aujthentication views
from django.contrib.auth.views import LoginView, LogoutView
class Login(LoginView):
    template_name = 'login.html'

class Logout(LogoutView):
    template_name = 'logout.html'
