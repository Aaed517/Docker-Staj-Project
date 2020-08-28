from rest_framework.pagination import PageNumberPagination

class LibaryPagination(PageNumberPagination):
    page_size = 100
