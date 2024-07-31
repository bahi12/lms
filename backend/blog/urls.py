from django.urls import path
from .views import (
    PostListView, PostRetrieveView, PostUpdateView, PostDestroyView,
    CategoryListCreateView, CategoryRetrieveView, CategoryUpdateView, CategoryDestroyView,
    PostCreateView, custom_upload_file
)

urlpatterns = [
    ### Post URLs
    path('', PostListView.as_view(), name='post-list'),
    path('post/<int:pk>/', PostRetrieveView.as_view(), name='post-detail'),
    path('post/create/', (PostCreateView.as_view()), name='post-create'),
    path('post/<int:pk>/update/', (PostUpdateView.as_view()), name='post-update'),
    path('post/<int:pk>/delete/', (PostDestroyView.as_view()), name='post-delete'),
    
    ### Category URLs
    path('category/', CategoryListCreateView.as_view(), name='category-list'),
    path('category/<int:pk>/', CategoryRetrieveView.as_view(), name='category-detail'),
    path('category/create/', (CategoryListCreateView.as_view()), name='category-create'),
    path('category/<int:pk>/update/', (CategoryUpdateView.as_view()), name='category-update'),
    path('category/<int:pk>/delete/', (CategoryDestroyView.as_view()), name='category-delete'),
    
    ### File Upload URL
    path('upload/', custom_upload_file, name='custom_upload_file'),


]