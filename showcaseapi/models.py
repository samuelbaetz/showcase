from django.db import models

# Create your models here.
class Item(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateField('date published')
    body = models.TextField(max_length=5000)
    image = models.ImageField(upload_to='images')

    def __str__(self):
        return self.title



class Post(models.Model):
    title = models.CharField(max_length=200)
    pub_date = models.DateField('date published')
    body = models.TextField(max_length=5000)

    def __str__(self):
        return self.title