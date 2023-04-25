from rest_framework import serializers
from .models import Programme

class ProgrammeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programme
        fields = ('id', 'name', 'description', 'qualifying_criteria', 'carrying_capacity', 'number_of_applicants', 'created_at', 'updated_at')
