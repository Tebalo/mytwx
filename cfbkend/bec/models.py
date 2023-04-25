from django.db import models
import json

"""
Simulates Botswana Examinations Council (BEC) database
"""
class Candidate(models.Model):
    name = models.CharField(max_length=255)
    candidate_id = models.CharField(max_length=255)
    center_number = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    status = models.CharField(max_length=255, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    grades = models.JSONField(default=dict)

    def get_grades(self):
        return json.loads(self.subjects)

    def set_grades(self, subjects):
        try:
            self.subjects = json.dumps(subjects)
        except(TabError, ValueError):
            self.subjects = json.dumps({})

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'candidates'
