from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, SerializerMethodField

from books.models import Books, Writer, Kind
from libary.models import Libary


class BookCreateSerializer(ModelSerializer):
    class Meta:
        model = Books
        fields = '__all__'


class LibarySerializer(ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='libary:detail',
        lookup_field='slug'
    )
    class Meta:
        model = Libary
        fields = [
            'ismi',
            'adres',
            'telefon',
            'url',
            'resim',
        ]


class LibaryBookListSerializer(ModelSerializer):
    libary = LibarySerializer
    class Meta:
        model = Books
        fields = '__all__'
        depth = 1


class WriterListCreateSerializer(ModelSerializer):
    class Meta:
        model = Writer
        fields = '__all__'


class KindListCreateSerializer(ModelSerializer):
    class Meta:
        model = Kind
        fields = '__all__'




