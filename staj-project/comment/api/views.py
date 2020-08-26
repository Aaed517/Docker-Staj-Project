from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated

from comment.api.serialezers import CommentCreateSerializer, CommentListSerializer
from comment.models import Comment


class CommentCreateAPIView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CommentListAPIView(ListAPIView):
    serializer_class = CommentListSerializer

    def get_queryset(self):
        queryset = Comment.objects.filter(child=None)
        query = self.request.GET.get("q")
        if query:
            queryset = queryset.filter(book=query)
        return queryset
