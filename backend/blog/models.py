from django.db import models
from django.conf import settings
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field

# Create your models here.
class Category(models.Model):
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
 

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    post = CKEditor5Field('Text', config_name='extends')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=255, unique=True)  # Add this line

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


    def __str__(self):
        return self.title