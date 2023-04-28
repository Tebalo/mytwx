from django.shortcuts import render

from rest_framework import generics, status
from .models import Programme
from .serializers import ProgrammeSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Programme
from .models import Application
from .serializers import ApplicationSerializer
from .serializers import OfferSerializer
from .models import Offer

@api_view(['GET'])
def my_offers(request, user_id):
    offers = Offer.objects.filter(user=user_id)
    serializer = OfferSerializer(offers, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def offer_list(request):
    if request.method == 'GET':
        offers = Offer.objects.all()
        serializer = OfferSerializer(offers, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = OfferSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
def my_application(request):
    if request.method == 'GET':
        applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
def application_list(request):
    if request.method == 'GET':
        user_id = request.GET.get('user_id', None)
        if user_id:
            applications = Application.objects.filter(user=user_id)
        else:
            applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return Response(serializer.data)
    
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
        data = [{'id':p.id,'name': p.name, 'faculty': p.faculty, 'qualifying_criteria': p.qualifying_criteria, 'qualifying_points':p.qualifying_points, 'carrying_capacity':p.carrying_capacity, "number_of_admitted": p.number_of_admitted} for p in programmes]
        return Response(data)
    elif request.method == 'POST':
        serializer = ProgrammeSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def programme_eligible(request):
    if request.method == 'GET':
        grades = request.GET.getlist('grades')
        # create a dictionary of the qualifying criteria
        points = {'A': 8, 'B': 7, 'C': 6, 'D': 5, 'E': 4, 'F': 3}
        # loop through the best 6 grades and add the points
        # sort the grades in descending order
        grades.sort(reverse=False)
        print(grades)
        total_points = 0
        for qrade in grades[:6]:
            total_points += points[qrade]
        print(total_points)
        programmes = Programme.objects.filter(qualifying_points__lte=total_points)
        data = [{'name': p.name, 'qualifying_criteria': p.qualifying_criteria, 'qualifying_points':p.qualifying_points} for p in programmes]
        return Response(data)
