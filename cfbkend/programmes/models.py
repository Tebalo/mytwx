import json
from django.db import models

class Programme(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    qualifying_criteria = models.TextField(default='[]')

    def get_qualifying_criteria(self):
        return json.loads(self.qualifying_criteria)

    def set_qualifying_criteria(self, qualifying_criteria):
        self.qualifying_criteria = json.dumps(qualifying_criteria)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'programmes'
