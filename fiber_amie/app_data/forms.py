from django import forms

from .models import AddYarnDetailed, AddHook, AddNeedle

class AddYarnForm(forms.ModelForm):
    class Meta: 
        model = AddYarnDetailed
        fields = ('brand', 'name', 'fiber_type', 'colorway', 'yardage', 'weight', 'username')

class AddHookForm(forms.ModelForm):
    class Meta:
        model = AddHook
        fields = ('size', 'brand', 'username')

class AddNeedleForm(forms.ModelForm):
    class Meta:
        model = AddNeedle
        fields = ('size', 'length', 'brand', 'username')