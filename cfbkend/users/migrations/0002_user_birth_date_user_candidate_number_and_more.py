# Generated by Django 4.2 on 2023-04-25 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='birth_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='candidate_number',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='center_number',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='course_preferences',
            field=models.JSONField(default=dict),
        ),
        migrations.AddField(
            model_name='user',
            name='highest_qualification',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='highest_qualification_year',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='languages',
            field=models.JSONField(default=dict),
        ),
        migrations.AddField(
            model_name='user',
            name='national_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='other_qualifications',
            field=models.JSONField(default=dict),
        ),
        migrations.AddField(
            model_name='user',
            name='status',
            field=models.CharField(default='pending', max_length=255),
        ),
    ]
