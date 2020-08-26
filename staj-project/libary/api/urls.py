from django.urls import path, include
from libary.api.views import (LibaryListAPIView,
                              LibaryDetailAPIView,
                              LibaryDeleteAPIView,
                              LibaryUpdateAPIView,
                              LibaryCreateAPIView,
                              )
app_name = 'Libary'
urlpatterns = [
    path('list', LibaryListAPIView.as_view(), name='list'),
    path('detail/<slug>', LibaryDetailAPIView.as_view(), name='detail'),
    path('delete/<slug>', LibaryDeleteAPIView.as_view(), name='delete'),
    path('update/<slug>', LibaryUpdateAPIView.as_view(), name='update'),
    path('create', LibaryCreateAPIView.as_view(), name='create'),
]