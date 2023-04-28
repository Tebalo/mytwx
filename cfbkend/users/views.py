from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .models import User
from .serializers import UserSerializer

class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)

class CustomTokenRefreshView(TokenRefreshView):
    permission_classes = (AllowAny,)

@api_view(['GET'])
def user(request):
    if request.method == "GET":
        #if 'username' not in request.data:
            #return Response({'error': 'Username not provided'},status=status.HTTP_400_BAD_REQUEST)
        username = request.GET.get('username', None)
        print(username)
        # Retrieve the user object from the database
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({'error': 'User not found'},status=status.HTTP_404_NOT_FOUND)
        
        # Serialize the user object and return as response
        serializer = UserSerializer(user)
        return Response(serializer.data)