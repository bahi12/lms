from django.shortcuts import render
from rest_framework import generics
from .models import Post, Category
from .serializers import PostSerializer, CategorySerializer

# Create your views here.
class PostListView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostCreateView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostRetrieveView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostUpdateView(generics.UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDestroyView(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryUpdateView(generics.UpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDestroyView(generics.DestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# views.py
from django.http import JsonResponse

def custom_upload_file(request):
    # Your file upload logic here
    return JsonResponse({'message': 'File uploaded successfully'})