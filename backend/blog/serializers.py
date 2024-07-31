from rest_framework import serializers
from .models import Category, Post

class PostSerializer(serializers.ModelSerializer):
    def perform_update(self, serializer):
        serializer.save(post=self.get_object())
    class Meta:
        model = Post
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'