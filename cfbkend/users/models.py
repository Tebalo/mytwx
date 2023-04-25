from django.contrib.auth.models import AbstractUser
from django.db import models
import json

class User(AbstractUser):
    # additional fields in here
    center_number = models.CharField(max_length=255, blank=True, null=True)
    candidate_number = models.CharField(max_length=255, blank=True, null=True)
    national_id = models.CharField(max_length=255, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    status = models.CharField(max_length=255, default='pending')
    highest_qualification = models.CharField(max_length=255, blank=True, null=True)
    highest_qualification_year = models.CharField(max_length=255, blank=True, null=True)
    course_preferences = models.JSONField(default=dict)
    languages = models.JSONField(default=dict)
    other_qualifications = models.JSONField(default=dict)

    def __str__(self):
        return self.username