from rest_framework import serializers
from .models import Candidate

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ('id', 'name', 'candidate_id', 'center_number', 'email', 'phone_number', 'status', 'created_at', 'updated_at', 'grades')