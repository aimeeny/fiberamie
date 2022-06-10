from rest_framework import routers, serializers, viewsets
from app_data.models import AddYarnBasic, AddYarnDetailed, AddHook, AddNeedle, AddProject
from django.contrib.auth.models import User

class AddYarnDetailedSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(required=False)
    class Meta: 
        model = AddYarnDetailed
        fields = ['id', 'name', 'fiber_type', 'colorway', 'yardage', 'yarn_weight', 'skeins', 'image', 'notes', 'username']

class AddHookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AddHook
        fields = ['id', 'size', 'brand', 'username']

class AddNeedleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AddNeedle
        fields = ['id', 'size', 'length', 'brand', 'username']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password']
        
class AddProjectSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(required=False)
    class Meta:
        model = AddProject
        fields = ['id', 'pattern_name', 'designer', 'needles', 'hook', 'gauge', 'yarn', 'colorway', 'total_yardage', 'notes', 'image', 'username']

# class AddCrochetProjectSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = AddCrochetProject
#         fields = ['id', 'pattern_name', 'designer', 'hook', 'gauge', 'yarn', 'colorway', 'total_yardage', 'notes', 'image', 'username']