from django.shortcuts import render
from rest_framework import viewsets

from .models import Document
from .serializers import DocumentSerializer

# Create your views here.

class DocumnentViewset(viewsets.ModelViewSet):
    serializer_class=DocumentSerializer
    queryset= Document.objects.all()
