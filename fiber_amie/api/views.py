from django.shortcuts import render
from app_data.models import AddYarnDetailed, AddHook, AddNeedle
from rest_framework import viewsets, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from api.serializers import AddYarnDetailedSerializer, AddHookSerializer, AddNeedleSerializer, UserSerializer
from django.contrib.auth.models import User

class AddYarnViewSet(viewsets.ModelViewSet):
    queryset = AddYarnDetailed.objects.all().order_by('-yarn_weight')
    serializer_class = AddYarnDetailedSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (SessionAuthentication, BasicAuthentication)

class AddHookViewSet(viewsets.ModelViewSet):
    queryset = AddHook.objects.all().order_by('-size')
    serializer_class = AddHookSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (SessionAuthentication, BasicAuthentication)

class AddNeedleViewSet(viewsets.ModelViewSet):
    queryset = AddNeedle.objects.all().order_by('-size')
    serializer_class = AddNeedleSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (SessionAuthentication, BasicAuthentication)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (SessionAuthentication, BasicAuthentication)
