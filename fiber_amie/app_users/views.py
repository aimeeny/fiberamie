from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm

from .forms import NewUserForm

# USERS ------------------------------- #

def index(request):
    ...
    return render(request, 'app_users/index.html')

def home(request):
    ...
    return render(request, 'app_users/home.html')

def settings(request):
    ...
    return render(request, 'app_users/settings.html')

# sign up 
def sign_up_request(request):
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user) # logs user in automatically if sign up is successful
            messages.success(request, 'You\'ve registered successfully!')
            return redirect('app_users:home') # sends user back to home page
        messages.error(request, 'Oops! Something went wrong.')
    form = NewUserForm()
    return render(request=request, template_name='app_users/signup.html', context={'sign_up_form':form})

# log in 
def login_request(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None: # aka if user is registered
                login(request, user) # log user in
                messages.info(request, f'Welcome, {username}!')
                return redirect('app_users:home')
            else:
                messages.error(request, 'Please double check your username or password.')
        else: 
            messages.error(request, 'Please double check your username or password.')
    form = AuthenticationForm()
    return render(request=request, template_name='app_users/login.html', context={'login_form':form})

# log out 
def logout_request(request):
    logout(request)
    messages.info(request, 'You\'ve been logged out!')
    return redirect('app_users:index')
