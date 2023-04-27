import json
from django.db import models
from users.models import User

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


class Application(models.Model):
    programme = models.ForeignKey(Programme, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    programme_name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.programme_name} - {self.user_name}"

class Offer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    application = models.ForeignKey(Application, on_delete=models.CASCADE)
    status = models.CharField(max_length=255, default='pending')
    university = models.CharField(max_length=255, default='University of Botswana')
    start_date = models.DateField(default='2023-08-01')
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.application.programme.name}"