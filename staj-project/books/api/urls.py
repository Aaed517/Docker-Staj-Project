from django.urls import path

from books.api.views import (
                            BookCreateAPIView,
                            LibaryBookListView,
                            WriterListCreateView,
                            WriterUpdateDeleteView,
                            KindListCreateView,
                            KindUpdateDeleteView
)

app_name = 'books'
urlpatterns = [
    path('create', BookCreateAPIView.as_view(), name='create'),
    path('list', LibaryBookListView.as_view(), name='list'),
    path('Writer-Create-List', WriterListCreateView.as_view(), name='Writer-Create-List'),
    path('Writer-Update-Delete/<pk>', WriterUpdateDeleteView.as_view(), name='Writer-Update-Delete'),
    path('Kind-Create-List', KindListCreateView.as_view(), name='Kind-Create-List'),
    path('Kind-Update-Delete/<pk>', KindUpdateDeleteView.as_view(), name='Kind-Update-Delete'),
]