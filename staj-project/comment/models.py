from django.contrib.auth.models import User
from django.db import models
from books.models import Books


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Books, on_delete=models.CASCADE, related_name='book',)
    yorum = models.TextField(max_length=500)
    child = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='replies')
    tarih = models.DateTimeField(editable=False, auto_now_add=True, blank=True)

    class Meta:
        ordering = ('tarih', )

    def save(self, *args, **kwargs):
        return super(Comment, self).save(*args, **kwargs)

    def children(self):
        return Comment.objects.filter(child=self)

    @property
    def any_children(self):
        return Comment.objects.filter(child=self).exists()