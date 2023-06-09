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
@api_view(['GET'])
def candidate(request):
    if request.method == "GET":
        candidate_id = request.GET.get('candidate_id', None)
        center_number = request.GET.get('center_number', None)

        # Retrieve the candidate object from the database
        try:
            candidate = Candidate.objects.get(candidate_id=candidate_id, center_number=center_number)
        except Candidate.DoesNotExist:
            return Response({'error': 'Candidate not found'},status=status.HTTP_404_NOT_FOUND)
        
        # Serialize the candidate object and return as response
        serializer = CandidateSerializer(candidate)
        return Response(serializer.data)