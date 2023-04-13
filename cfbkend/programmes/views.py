from django.shortcuts import render

from rest_framework import generics, status
from .models import Programme
from .serializers import ProgrammeSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Programme


class ProgrammeList(generics.ListCreateAPIView):
    queryset = Programme.objects.all()
    serializer_class = ProgrammeSerializer


class ProgrammeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Programme.objects.all()
    serializer_class = ProgrammeSerializer

@api_view(['GET', 'POST'])
def programme_list(request):
    if request.method == 'GET':
        programmes = Programme.objects.all()
        data = [{'name': p.name, 'qualifying_criteria': p.qualifying_criteria} for p in programmes]
        return Response(data)
    elif request.method == 'POST':
        serializer = ProgrammeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)