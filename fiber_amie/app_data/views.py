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


@ login_required
def stash(request):
    return render(request, 'app_data/stash.html')

@ login_required
def tools(request):
    return render(request, 'app_data/tools.html')


@csrf_exempt
@ login_required
# def display_stash(request):
#     stash_db = AddYarnDetailed.objects.all()
#     stash = []
#     for stash in stash_db:
#         stash.append({
#             'brand': stash.brand,
#             'name': stash.name,
#             'fiber_type': stash.fiber_type,
#             'colorway': stash.colorway,
#             'yardage': stash.yardage,
#             'weight': stash.weight,
#             'username': stash.username,
#             'image': stash.image,
#         })
#     return JsonResponse(data={'stash':stash})

@csrf_exempt
@ login_required
def add_yarn(request):
    user = request.user
    if request.method == "POST":
        form = AddYarnForm(request.POST)
        if form.is_valid():
            data = form.save(commit=False)
            data.username = user
            data.save()
            # img_obj = data.instance
            messages.success(request, 'Successfully added.')
            return redirect('app_data:stash')
    else:
        form = AddYarnForm()
    return render(request, 'app_data/stash.html', {'add_yarn_form':form})
