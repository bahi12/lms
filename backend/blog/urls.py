from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import PostListCreateView, PostRetrieveView, PostListCreateView, PostUpdateView, PostDestroyView, CategoryListCreateView, CategoryRetrieveView, CategoryUpdateView, CategoryDestroyView

urlpatterns = [
    ### Post URLs
    path('', (PostListCreateView.as_view()), name='post-list'),
    path('post/<int:pk>/', (PostRetrieveView.as_view()), name='post-detail'),
    path('post/create/', login_required(PostListCreateView.as_view()), name='post-create'),
    path('post/<int:pk>/update/', login_required(PostUpdateView.as_view()), name='post-update'),
    path('post/<int:pk>/delete/', login_required(PostDestroyView.as_view()), name='post-delete'),
    ### Category URLs
    path('category/', (CategoryListCreateView.as_view()), name='category-list'),
    path('category/<int:pk>/', (CategoryRetrieveView.as_view()), name='category-detail'),
    path('category/create/', login_required(CategoryListCreateView.as_view()), name='category-create'),
    path('category/<int:pk>/update/', login_required(CategoryUpdateView.as_view()), name='category-update'),
    path('category/<int:pk>/delete/', login_required(CategoryDestroyView.as_view()), name='category-delete'),
    
]