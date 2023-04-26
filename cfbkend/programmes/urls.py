from django.urls import path
from .views import ProgrammeList, ProgrammeDetail, programme_list, programme_eligible

urlpatterns = [
    path('programmes/', ProgrammeList.as_view()),
    path('programme-list/', programme_list, name='programme-list'),
    path('programmes/<int:pk>/', ProgrammeDetail.as_view()),
    path('q-programmes/', programme_eligible, name='q-programmes'),
]
