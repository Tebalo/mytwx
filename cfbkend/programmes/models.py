import json
from django.db import models

class Programme(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    qualifying_criteria = models.JSONField(default=dict)
    carrying_capacity = models.PositiveIntegerField(default=0)
    number_of_applicants = models.PositiveIntegerField(default=0)
    number_of_admitted = models.PositiveIntegerField(default=0)
    number_of_enrolled = models.PositiveIntegerField(default=0)
    qualifying_points = models.PositiveIntegerField(default=0)

    def get_qualifying_criteria(self):
        return json.loads(self.qualifying_criteria)

    def set_qualifying_criteria(self, qualifying_criteria):
        try:
            self.qualifying_criteria = json.dumps(qualifying_criteria)
        except(TabError, ValueError):
            self.qualifying_criteria = json.dumps({})

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'programmes'
