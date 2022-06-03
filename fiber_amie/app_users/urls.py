from django.urls import path, include
from django.contrib import admin

from . import views

app_name = 'app_users'
urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('sign_up/', views.sign_up_request, name='sign-up'),
    path('login/', views.login_request, name='log-in'),
    path('logout/', views.logout_request, name='logout'),
    path('settings/', views.settings, name='settings'),
]