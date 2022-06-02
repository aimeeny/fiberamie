from django import forms

from .models import AddYarnDetailed, AddHook, AddNeedle

class AddYarnForm(forms.ModelForm):
    name = forms.CharField(label='',widget=forms.TextInput(attrs={"placeholder":"Name", "class":"django-form"}))
    notes = forms.CharField(label='',widget=forms.Textarea(attrs={"placeholder":"Notes", "rows": "2", "class":"django-form"}))
    fiber_type = forms.CharField(label='',widget=forms.TextInput(attrs={"placeholder":"Fiber Type", "class":"django-form"}))
    colorway = forms.CharField(label='',widget=forms.TextInput(attrs={"placeholder":"Colorway", "class":"django-form"}))
    yardage = forms.CharField(label='',widget=forms.NumberInput(attrs={"placeholder":"Yardage", "class":"django-form"}))
    yarn_weight = forms.CharField(label='',widget=forms.TextInput(attrs={"placeholder":"Yarn Weight/Category", "class":"django-form"}))
    class Meta: 
        model = AddYarnDetailed
        fields = ('name', 'fiber_type', 'colorway', 'yardage', 'yarn_weight', 'notes')
    def save(self, commit=True):
        add_yarn = super(AddYarnForm, self).save(commit=False)
        if commit:
            add_yarn.save()
        return add_yarn

class AddHookForm(forms.ModelForm):
    class Meta:
        model = AddHook
        fields = ('size', 'brand', 'username')

class AddNeedleForm(forms.ModelForm):
    class Meta:
        model = AddNeedle
        fields = ('size', 'length', 'brand', 'username')