from django.urls import path, include
from django.contrib import admin

from . import views

app_name = 'app_data'
urlpatterns = [
    path('stash/', views.add_yarn, name='stash'),
    path('tools/', views.tools, name='tools'),
    path('projects/', views.projects, name='projects'),
    path('counter/', views.counter, name='counter'),
    path('stash/<int:id>/', views.yarn_detail),
]