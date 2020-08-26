from rest_framework.throttling import SimpleRateThrottle


class RegisterThrottle(SimpleRateThrottle):
    scope = 'register'

    def get_cache_key(self, request, view):
        if request.user.is_authenticated:
            return None

        return self.cache_format % {
            'scope': self.scope,
            'ident': self.get_ident(request)
        }

