from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Member
from django.http import JsonResponse
from django.core.mail import send_mail
import json

def members(request):
    template = loader.get_template('loginpage.html')
    return HttpResponse(template.render())

def GetMembers(request):
  mymembers = Member.objects.all().values()
  data = list(mymembers)  # Convert QuerySet to list of dictionaries
  return JsonResponse(data, safe=False)

def SendMail(request):
    score = request.GET.get('score', '')
    email = request.GET.get('email', '')

    subject = 'Quiz Result'
    message = f'Hi, you have completed the quiz. Your result is: {score}'
    from_email = 'abinayasivakumar129@gmail.com'
    recipient_list = [email]

    try:
        send_mail(subject, message, from_email, recipient_list)
        return HttpResponse(f'Email sent successfully! {email} {score}')
    except Exception as e:
        return HttpResponse(f'Error sending email: {e}')