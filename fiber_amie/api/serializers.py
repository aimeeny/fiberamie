from rest_framework import routers, serializers, viewsets
from app_data.models import AddYarnBasic, AddYarnDetailed, AddHook, AddNeedle
from django.contrib.auth.models import User

class AddYarnDetailedSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = AddYarnDetailed
        fields = ['id', 'name', 'fiber_type', 'colorway', 'yardage', 'yarn_weight', 'image', 'notes', 'username']

class AddHookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AddHook
        fields = ['size', 'brand', 'username']

class AddNeedleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AddNeedle
        fields = ['size', 'length', 'brand', 'username']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password1', 'password2']
        

