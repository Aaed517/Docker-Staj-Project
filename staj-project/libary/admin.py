from django.contrib import admin
from libary.models import Libary

@admin.register(Libary)
class LibaryAdmin(admin.ModelAdmin):
    list_display = ['ismi', 'adres', 'telefon', 'eklenme_tarihi']
    list_filter = ['eklenme_tarihi']
    class Meta:
        model = Libary

