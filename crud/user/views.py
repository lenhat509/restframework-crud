from django.shortcuts import render, redirect
from . forms import UserRegistrationForm
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request, 'user/home.html')

def register(request):
    if request.user.is_authenticated: 
        return redirect('home')
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Registered successfully!')
            return redirect('login')
    else:
        form = UserRegistrationForm()
    context = {
        'form': form
    }
    return render(request, 'user/register.html', context=context)