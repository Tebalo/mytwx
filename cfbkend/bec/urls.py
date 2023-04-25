from django.urls import path
from .views import CandidateList, CandidateDetail, candidate_list

urlpatterns = [
    path('candidates/', CandidateList.as_view()),
    path('candidate-list/', candidate_list, name='candidate-list'),
    path('candidates/<int:pk>/', CandidateDetail.as_view()),
]