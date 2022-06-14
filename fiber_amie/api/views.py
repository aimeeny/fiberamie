from django.shortcuts import render
from app_data.models import AddYarnDetailed, AddHook, AddNeedle, AddProject
from rest_framework import viewsets, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from api.serializers import AddYarnDetailedSerializer, AddHookSerializer, AddNeedleSerializer, UserSerializer, AddProjectSerializer
from django.contrib.auth.models import User

class AddYarnViewSet(viewsets.ModelViewSet):
    def perform_create(self, serializer):
        serializer.save(username=self.request.user)
        return super().perform_create(serializer)
    def get_queryset(self):
        return AddYarnDetailed.objects.all().order_by('-yarn_weight').filter(username = self.request.user)
    queryset = AddYarnDetailed.objects.all().order_by('-yarn_weight')
    serializer_class = AddYarnDetailedSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (SessionAuthentication, BasicAuthentication)

class AddHookViewSet(viewsets.ModelViewSet):
    def perform_create(self, serializer):
        serializer.save(username=self.request.user)
    def get_queryset(self):
        return AddHook.objects.all().order_by('-size').filter(username = self.request.user)
    queryset = AddHook.objects.all().order_by('-size')
    serializer_class = AddHookSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (SessionAuthentication, BasicAuthentication)

class AddNeedleViewSet(viewsets.ModelViewSet):
    def perform_create(self, serializer):
        serializer.save(username=self.request.user)
    def get_queryset(self):
        return AddNeedle.objects.all().order_by('-size').filter(username = self.request.user)
    queryset = AddNeedle.objects.all().order_by('-size')
    serializer_class = AddNeedleSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (SessionAuthentication, BasicAuthentication)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (SessionAuthentication, BasicAuthentication)

class AddProjectViewSet(viewsets.ModelViewSet):
    def perform_create(self, serializer):
        serializer.save(username=self.request.user)
    def get_queryset(self):
        return AddProject.objects.all().filter(username = self.request.user)
    queryset = AddProject.objects.all()
    serializer_class = AddProjectSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (SessionAuthentication, BasicAuthentication)

# class AddCrochetProjectViewSet(viewsets.ModelViewSet):
#     queryset = AddCrochetProject.objects.all()
#     serializer_class = AddCrochetProjectSerializer
#     permission_classes = [permissions.IsAuthenticated]
#     authentication_classes = (SessionAuthentication, BasicAuthentication)

