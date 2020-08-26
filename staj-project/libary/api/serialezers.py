from rest_framework import serializers

from libary.models import Libary


class LibarySerializer(serializers.ModelSerializer):
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
