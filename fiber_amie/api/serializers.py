from rest_framework import routers, serializers, viewsets
from app_data.models import AddYarnBasic, AddYarnDetailed, AddHook, AddNeedle
from django.contrib.auth.models import User

class AddYarnDetailedSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = AddYarnDetailed
        fields = ['brand', 'name', 'fiber_type', 'colorway', 'yardage', 'weight', 'username']

class AddHookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AddHook
        fields = ['size', 'brand',]

class AddNeedleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AddNeedle
        fields = ['size', 'length', 'brand', 'username']

