from django.db import models
from pyexpat import model


# Create your models here.
class Document(models.Model):
    file = models.FileField(upload_to="documents/")

    def __str__(self):
        return f"{self.file}"
