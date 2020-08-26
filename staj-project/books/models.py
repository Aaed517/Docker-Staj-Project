from django.db import models

from libary.models import Libary


class Writer(models.Model):
    ismi = models.CharField(max_length=200)

    def __str__(self):
        return self.ismi


class Kind(models.Model):
    tip = models.CharField(max_length=200)

    def __str__(self):
        return self.tip


class Books(models.Model):
    libary = models.ForeignKey(Libary, on_delete=models.CASCADE)
    kitap_ismi = models.CharField(max_length=100)
    aciklama = models.TextField(max_length=400)
    sayfa_sayisi = models.IntegerField()
    ilk_yayınlanma_tarihi = models.DateTimeField()
    yazar = models.ForeignKey(Writer, on_delete=models.CASCADE, related_name='writer')
    tip = models.ForeignKey(Kind, on_delete=models.CASCADE, related_name='Kind')

    def __str__(self):
        return self.libary.ismi + "-/-" + self.libary.adres + "-/-" +self.kitap_ismi

