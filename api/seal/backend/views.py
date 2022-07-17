from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Document
from .serializers import DocumentSerializer

# Create your views here.

class DocumnentViewset(viewsets.ModelViewSet):
    serializer_class=DocumentSerializer
    queryset= Document.objects.all()

    @action(detail=False,methods=["POST","GET"])
    def upload(self,request,*args,**kwargs):
        data = {
            'file' :request.data["file"]
        }
        serializer = DocumentSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
