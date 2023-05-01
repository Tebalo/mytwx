from rest_framework import serializers
from .models import Programme
from .models import Application
from .models import Offer

class OfferSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    programme_name = serializers.ReadOnlyField(source='application.programme.name')

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"
    class Meta:
        model = Offer
        fields = ['id', 'user', 'application', 'status', 'university', 'start_date', 'date_created', 'username', 'programme_name']

class ProgrammeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programme
        fields = ('id', 'name', 'description', 'faculty', 'qualifying_criteria', 'carrying_capacity', 'number_of_applicants', 'qualifying_points','number_of_enrolled')


class ApplicationSerializer(serializers.ModelSerializer):
    program_name = serializers.ReadOnlyField(source='programme.name')
    user_name = serializers.SerializerMethodField()

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"

    class Meta:
        model = Application
        fields = ['id', 'programme', 'program_name', 'user', 'user_name']

