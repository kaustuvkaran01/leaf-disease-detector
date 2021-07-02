from django.db import models

# Create your models here.

class Crops(models.Model):
    image = models.ImageField(upload_to='images')
    result = models.CharField(max_length=200,blank=True)
    updated = models.DateTimeField(auto_now = True)
    created = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return str(self.id)