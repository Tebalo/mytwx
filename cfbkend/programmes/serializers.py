from rest_framework import serializers
from .models import Programme

class ProgrammeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programme
        fields = ('id', 'name', 'description', 'qualifying_criteria')
