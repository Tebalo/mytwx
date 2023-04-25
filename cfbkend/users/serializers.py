from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name', 'center_number', 'candidate_number', 'national_id', 'birth_date', 'status', 'highest_qualification', 'highest_qualification_year', 'course_preferences', 'languages', 'other_qualifications']
        read_only_fields = ['id']

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            center_number=validated_data['center_number'],
            candidate_number=validated_data['candidate_number'],
            national_id=validated_data['national_id'],
            birth_date=validated_data['birth_date'],
            #status=validated_data['status'],
            highest_qualification=validated_data['highest_qualification'],
            highest_qualification_year=validated_data['highest_qualification_year'],
            course_preferences=validated_data['course_preferences'],
            languages=validated_data['languages'],
            other_qualifications=validated_data['other_qualifications'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
