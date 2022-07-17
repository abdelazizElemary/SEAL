from rest_framework import serializers

from .models import Document


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        read_only_fields = ["id"]
        fields = read_only_fields + ["file"]
