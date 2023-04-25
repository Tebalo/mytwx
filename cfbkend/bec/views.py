from django.shortcuts import render
from rest_framework import generics, status
from .serializers import CandidateSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Candidate

class CandidateList(generics.ListCreateAPIView):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer

class CandidateDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer

@api_view(['GET', 'POST'])
def candidate_list(request):
    if request.method == 'GET':
        candidates = Candidate.objects.all()
        data = [{'name': c.name, 'grades': c.grades} for c in candidates]
        return Response(data)
    elif request.method == 'POST':
        serializer = CandidateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)