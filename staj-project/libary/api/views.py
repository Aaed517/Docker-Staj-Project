from rest_framework.filters import SearchFilter
from rest_framework.generics import (ListAPIView,
                                     RetrieveAPIView,
                                     DestroyAPIView,
                                     RetrieveUpdateAPIView,
                                     CreateAPIView,
                                     )

from libary.api.paginations import LibaryPagination
from libary.api.permissions import IsSuperUser
from libary.api.serialezers import LibarySerializer
from libary.models import Libary



class LibaryListAPIView(ListAPIView):
    queryset = Libary.objects.all()
    serializer_class = LibarySerializer
    filter_backends = [SearchFilter]
    search_fields = ['ismi', 'adres']
    pagination_class = LibaryPagination


class LibaryDetailAPIView(RetrieveAPIView):
    queryset = Libary.objects.all()
    serializer_class = LibarySerializer
    lookup_field = 'slug'


class LibaryDeleteAPIView(DestroyAPIView):
    queryset = Libary.objects.all()
    serializer_class = LibarySerializer
    lookup_field = 'slug'

class LibaryUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Libary.objects.all()
    serializer_class = LibarySerializer
    lookup_field = 'slug'


class LibaryCreateAPIView(CreateAPIView):
    queryset = Libary.objects.all()
    serializer_class = LibarySerializer
    #permission_classes = [IsSuperUser]


