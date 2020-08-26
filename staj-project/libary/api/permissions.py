from rest_framework.permissions import BasePermission


class IsSuperUser(BasePermission):
    message = "Permission Denied"
    def has_permission(self, request, view):
        return bool(request.user.is_superuser)
