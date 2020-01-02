from django.contrib import admin
from .models import User, Board
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'name')


class BoardAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'title', 'description', 'date')


admin.site.register(User, UserAdmin)
admin.site.register(Board, BoardAdmin)
