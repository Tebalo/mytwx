from django.urls import path, include
from .views import UserCreateAPIView, CustomTokenObtainPairView, CustomTokenRefreshView
from .views import UserCreateAPIView

urlpatterns = [
    path('register/', UserCreateAPIView.as_view(), name='register'),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
]
