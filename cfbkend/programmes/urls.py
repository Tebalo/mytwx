from django.urls import path
from .views import ProgrammeList, ProgrammeDetail, programme_list, programme_eligible, application_list, my_application, my_offers, offer_list


urlpatterns = [
    path('programmes/', ProgrammeList.as_view()),
    path('programme-list/', programme_list, name='programme-list'),
    path('programmes/<int:pk>/', ProgrammeDetail.as_view()),
    path('q-programmes/', programme_eligible, name='q-programmes'),
    path('applications/', application_list, name='application-list'),
    path('my-applications/', my_application, name='my-application'),
    path('offers/', offer_list, name='offer-list'),
    path('my-offers/', my_offers, name='my-offers')
]
