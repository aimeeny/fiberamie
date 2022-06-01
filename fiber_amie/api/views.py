from django.shortcuts import render
from app_data.models import AddYarnDetailed, AddHook, AddNeedle
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import AddYarnDetailedSerializer, AddHookSerializer, AddNeedleSerializer

class AddYarnViewSet(viewsets.ModelViewSet):
    queryset = AddYarnDetailed.objects.all().order_by('-fiber_type')
    serializer_class = AddYarnDetailedSerializer
    permission_classes = [permissions.IsAuthenticated]

class AddHookViewSet(viewsets.ModelViewSet):
    queryset = AddHook.objects.all().order_by('-size')
    serializer_class = AddHookSerializer
    permission_classes = [permissions.IsAuthenticated]

class AddNeedleViewSet(viewsets.ModelViewSet):
    queryset = AddNeedle.objects.all().order_by('-size')
    serializer_class = AddNeedleSerializer
    permission_classes = [permissions.IsAuthenticated]

