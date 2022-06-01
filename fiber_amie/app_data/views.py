from django.shortcuts import render, redirect
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

from api.serializers import AddYarnDetailedSerializer
from .models import AddYarnDetailed, AddHook, AddNeedle
from .forms import AddYarnForm, AddHookForm, AddNeedleForm

# @csrf_exempt
@ login_required
def add_yarn(request):
    user = request.user
    if request.method == "POST":
        form = AddYarnForm(request.POST)
        if form.is_valid():
            data = form.save(commit=False)
            data.username = user
            data.save()
            messages.success(request, 'Successfully added.')
            return redirect('app_users:stash')
    else:
        form = AddYarnForm()
    return render(request, 'app_data/stash.html', {'add_yarn_form':form})
