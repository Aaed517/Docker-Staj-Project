from django.db import models
from django.utils import timezone
from django.utils.text import slugify


class Libary(models.Model):
    ismi = models.CharField(max_length=100)
    adres = models.CharField(max_length=100)
    telefon = models.IntegerField()
    eklenme_tarihi = models.DateTimeField(editable=False)
    güncellenme_tarihi = models.DateTimeField(editable=False)
    slug = models.SlugField(unique=True, max_length=50, editable=False)
    resim = models.ImageField(upload_to='libary')

    def __str__(self):
        return self.ismi + " " + self.adres

    def get_slug(self):
        slug = slugify(self.ismi.replace("ı", "i"))
        unique = slug
        number = 1
        while Libary.objects.filter(slug=unique).exists():
            unique = '{}-{}.'.format(slug, number)
        return unique

    def save(self, *args, **kwargs):
        if not self.id:
            self.eklenme_tarihi = timezone.now()
        self.güncellenme_tarihi = timezone.now()
        self.slug = self.get_slug()
        return super(Libary, self).save(*args, **kwargs)
