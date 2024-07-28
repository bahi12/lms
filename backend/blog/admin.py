from django.contrib import admin
from .models import Post, Category

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    class Meta:
        verbose_name_plural = 'Categories'

admin.site.register(Category, CategoryAdmin)


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'created')
    list_filter = ('category', 'created')
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}
    ordering = ('-created',)
    date_hierarchy = 'created'

admin.site.register(Post, PostAdmin)