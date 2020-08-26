from rest_framework.generics import (
                                   CreateAPIView,
                                   ListAPIView,
                                   ListCreateAPIView,
                                   DestroyAPIView,
                                   RetrieveUpdateAPIView
                                    )

from books.api.serializers import (
                                   BookCreateSerializer,
                                   LibaryBookListSerializer,
                                   WriterListCreateSerializer,
                                   KindListCreateSerializer
                                   )
from books.models import Books, Writer, Kind


class BookCreateAPIView(CreateAPIView):
    queryset = Books.objects.all()
    serializer_class = BookCreateSerializer


class LibaryBookListView(ListAPIView):
    queryset = Books.objects.all()
    serializer_class = LibaryBookListSerializer


class WriterListCreateView(ListCreateAPIView):
    queryset = Writer.objects.all()
    serializer_class = WriterListCreateSerializer


class WriterUpdateDeleteView(RetrieveUpdateAPIView, DestroyAPIView, ListAPIView):
    queryset = Writer.objects.all()
    serializer_class = WriterListCreateSerializer
    lookup_field = 'pk'


class KindListCreateView(ListCreateAPIView):
    queryset = Kind.objects.all()
    serializer_class = KindListCreateSerializer


class KindUpdateDeleteView(RetrieveUpdateAPIView, DestroyAPIView, ListAPIView):
    queryset = Kind.objects.all()
    serializer_class = KindListCreateSerializer
    lookup_field = 'pk'










