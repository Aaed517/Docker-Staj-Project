from django.contrib.auth.models import User
from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from books.models import Books
from comment.models import Comment


class CommentCreateSerializer(ModelSerializer):
    class Meta:
        model = Comment
        exclude = ['user']


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'id', 'email')


class BookSerializer(ModelSerializer):
    class Meta:
        model = Books
        fields = '__all__'


class CommentListSerializer(ModelSerializer):
    replies = SerializerMethodField()
    user = UserSerializer()
    book = BookSerializer()
    info = SerializerMethodField()
    info = book

    class Meta:
        model = Comment
        fields = '__all__'

    def get_replies(self, obj):
        if obj.any_children:
            return CommentListSerializer(obj.children(), many=True).data
